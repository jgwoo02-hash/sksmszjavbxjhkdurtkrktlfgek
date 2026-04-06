from flask import Flask
from flask_cors import CORS
from routes.comparison_routes import comparison_bp
from routes.concept_routes import concept_bp
from routes.admin_routes import admin_bp

app = Flask(__name__)
app.json.ensure_ascii = False
CORS(app)

app.register_blueprint(comparison_bp)
app.register_blueprint(concept_bp)
app.register_blueprint(admin_bp)

@app.route('/')
def home():
    return '한국사 비교 학습 REST API 서버 실행 중'

if __name__ == '__main__':
    app.run(debug=True)