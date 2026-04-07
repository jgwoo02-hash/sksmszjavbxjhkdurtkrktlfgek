# sksmszjavbxjhkdurtkrktlfgek
# 한국사 개념 비교 학습 지원 웹

## 1. 프로젝트 소개
이 프로젝트는 한국사 학습에서 헷갈리기 쉬운 사건, 제도, 인물, 정치 세력 등을  
1:1 비교 형식으로 정리하여 학습할 수 있도록 만든 웹 애플리케이션이다.

단순히 자료를 보여주는 데서 끝나는 것이 아니라,  
사용자가 직접 비교 주제를 검색하고, 상세 내용을 확인하며,  
복습 페이지에서 개념을 입력하고 학습 내용을 정리할 수 있도록 구성하였다.

---

## 2. 개발 목적
한국사 학습에서는 비슷한 개념들을 혼동하는 경우가 많다.  
예를 들어 갑오개혁과 을미개혁, 훈구파와 사림파, 대동법과 균역법처럼  
서로 관련은 있지만 차이점이 중요한 개념들이 자주 등장한다.

이 프로젝트는 이러한 개념들을 비교 중심으로 학습할 수 있도록 지원하고,  
단순 열람형 자료집이 아니라 사용자가 직접 활용할 수 있는 학습형 웹을 구현하는 것을 목표로 한다.

---

## 3. 주요 기능
- 비교 주제 목록 조회
- 비교 주제 검색 기능
- 시대별 필터 기능
- 비교 상세 페이지 조회
- 사용자 입력형 복습 페이지
- localStorage 기반 최근 검색어 저장
- localStorage 기반 학습 템플릿 저장

---

## 4. 기술 스택
### Frontend
- React
- JavaScript
- React Router DOM

### Backend
- Python
- Flask
- Flask-CORS
- PyMySQL

### Database
- MariaDB

### Development Tool
- Visual Studio Code
- Thunder Client
- GitHub

---

## 5. 시스템 구성
- **Frontend**: React 기반 사용자 화면 구현
- **Backend**: Flask 기반 REST API 구현
- **Database**: MariaDB에 비교 주제 및 상세 데이터 저장

프론트엔드는 백엔드 API를 호출하여 데이터를 받아오고,  
백엔드는 MariaDB에 저장된 한국사 비교 데이터를 조회하여 JSON 형식으로 반환한다.

---

## 6. 프로젝트 구조
```text
backend/
  app.py
  db.py
  routes/

frontend/
  public/
  src/

README.md
2021210919_정건우_final_report.md
