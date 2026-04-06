from flask import Blueprint, jsonify, request
from db import get_connection

comparison_bp = Blueprint('comparison', __name__)

@comparison_bp.route('/api/comparisons', methods=['GET'])
def get_comparisons():
    conn = get_connection()
    cursor = conn.cursor()

    sql = """
    SELECT topic_id, title, concept_a_id, concept_b_id, era, category
    FROM comparison_topic
    ORDER BY topic_id
    """
    cursor.execute(sql)
    results = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(results)

@comparison_bp.route('/api/comparisons/<int:topic_id>', methods=['GET'])
def get_comparison_detail(topic_id):
    conn = get_connection()
    cursor = conn.cursor()

    sql = """
    SELECT
        ct.topic_id,
        ct.title,
        ct.era,
        ct.category,
        c1.name AS concept_a_name,
        c2.name AS concept_b_name,
        cd.common_points,
        cd.differences,
        cd.exam_points
    FROM comparison_topic ct
    JOIN concept c1 ON ct.concept_a_id = c1.concept_id
    JOIN concept c2 ON ct.concept_b_id = c2.concept_id
    JOIN comparison_detail cd ON ct.topic_id = cd.topic_id
    WHERE ct.topic_id = %s
    """
    cursor.execute(sql, (topic_id,))
    result = cursor.fetchone()

    cursor.close()
    conn.close()

    return jsonify(result)

@comparison_bp.route('/api/comparisons/search', methods=['GET'])
def search_comparisons():
    keyword = request.args.get('keyword', '').strip()

    if not keyword:
        return jsonify([])

    conn = get_connection()
    cursor = conn.cursor()

    sql = """
    SELECT DISTINCT
        ct.topic_id,
        ct.title,
        ct.concept_a_id,
        ct.concept_b_id,
        ct.era,
        ct.category
    FROM comparison_topic ct
    JOIN concept c1 ON ct.concept_a_id = c1.concept_id
    JOIN concept c2 ON ct.concept_b_id = c2.concept_id
    WHERE ct.title LIKE %s
       OR c1.name LIKE %s
       OR c2.name LIKE %s
    ORDER BY ct.topic_id
    """

    search_keyword = '%' + keyword + '%'
    cursor.execute(sql, (search_keyword, search_keyword, search_keyword))
    results = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(results)

@comparison_bp.route('/api/comparisons/filter', methods=['GET'])
def filter_comparisons():
    era = request.args.get('era', '')

    conn = get_connection()
    cursor = conn.cursor()

    sql = """
    SELECT topic_id, title, concept_a_id, concept_b_id, era, category
    FROM comparison_topic
    WHERE era = %s
    ORDER BY topic_id
    """
    cursor.execute(sql, (era,))
    results = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(results)