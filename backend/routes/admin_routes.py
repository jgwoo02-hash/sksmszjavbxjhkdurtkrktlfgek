from flask import Blueprint, jsonify, request
from db import get_connection

admin_bp = Blueprint('admin', __name__)

@admin_bp.route('/api/admins', methods=['POST'])
def create_admin():
    data = request.get_json()

    username = data['username']
    password = data['password']

    conn = get_connection()
    cursor = conn.cursor()

    sql = """
    INSERT INTO admin (username, password)
    VALUES (%s, %s)
    """
    cursor.execute(sql, (username, password))
    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"message": "관리자 등록 완료"})

@admin_bp.route('/api/admins/<int:admin_id>', methods=['PUT'])
def update_admin(admin_id):
    data = request.get_json()

    username = data['username']
    password = data['password']

    conn = get_connection()
    cursor = conn.cursor()

    sql = """
    UPDATE admin
    SET username = %s, password = %s
    WHERE admin_id = %s
    """
    cursor.execute(sql, (username, password, admin_id))
    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"message": "관리자 수정 완료"})

@admin_bp.route('/api/admins/<int:admin_id>', methods=['DELETE'])
def delete_admin(admin_id):
    conn = get_connection()
    cursor = conn.cursor()

    sql = """
    DELETE FROM admin
    WHERE admin_id = %s
    """
    cursor.execute(sql, (admin_id,))
    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"message": "관리자 삭제 완료"})