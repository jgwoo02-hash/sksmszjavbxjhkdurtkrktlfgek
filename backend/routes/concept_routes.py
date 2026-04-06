from flask import Blueprint, jsonify
from db import get_connection

concept_bp = Blueprint('concept', __name__)

@concept_bp.route('/api/concepts', methods=['GET'])
def get_concepts():
    conn = get_connection()
    cursor = conn.cursor()

    sql = """
    SELECT concept_id, name, type, era, summary
    FROM concept
    ORDER BY concept_id
    """
    cursor.execute(sql)
    results = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(results)

@concept_bp.route('/api/concepts/<int:concept_id>', methods=['GET'])
def get_concept_detail(concept_id):
    conn = get_connection()
    cursor = conn.cursor()

    sql = """
    SELECT concept_id, name, type, era, summary
    FROM concept
    WHERE concept_id = %s
    """
    cursor.execute(sql, (concept_id,))
    result = cursor.fetchone()

    cursor.close()
    conn.close()

    return jsonify(result)