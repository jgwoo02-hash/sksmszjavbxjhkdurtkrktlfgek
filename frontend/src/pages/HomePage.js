import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#f7f5f2",
    fontFamily: "'Noto Sans KR', sans-serif",
    color: "#222",
  };

  const headerStyle = {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 100,
  };

  const headerInnerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "18px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1f3c88",
    textDecoration: "none",
  };

  const navStyle = {
    display: "flex",
    gap: "14px",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: "#333",
    fontSize: "15px",
    fontWeight: "500",
    padding: "8px 14px",
    borderRadius: "10px",
  };

  const heroSectionStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "70px 24px 50px",
  };

  const heroBoxStyle = {
    background: "linear-gradient(135deg, #eef4ff 0%, #f8fafc 100%)",
    borderRadius: "24px",
    padding: "60px 40px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
    border: "1px solid #e5e7eb",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "18px",
    color: "#1e293b",
    lineHeight: "1.3",
  };

  const descStyle = {
    fontSize: "18px",
    color: "#475569",
    lineHeight: "1.8",
    maxWidth: "760px",
    margin: "0 auto 30px",
  };

  const buttonGroupStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
    marginTop: "20px",
  };

  const primaryButtonStyle = {
    textDecoration: "none",
    backgroundColor: "#1f3c88",
    color: "#fff",
    padding: "14px 26px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "16px",
    boxShadow: "0 6px 16px rgba(31, 60, 136, 0.22)",
  };

  const secondaryButtonStyle = {
    textDecoration: "none",
    backgroundColor: "#ffffff",
    color: "#1f3c88",
    padding: "14px 26px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "16px",
    border: "1px solid #cbd5e1",
  };

  const sectionStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px 24px 50px",
  };

  const sectionTitleStyle = {
    fontSize: "30px",
    fontWeight: "800",
    marginBottom: "10px",
    color: "#1e293b",
  };

  const sectionDescStyle = {
    fontSize: "16px",
    color: "#64748b",
    marginBottom: "26px",
  };

  const cardGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  };

  const topicCardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
    border: "1px solid #e5e7eb",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "210px",
  };

  const badgeStyle = {
    display: "inline-block",
    backgroundColor: "#eaf0ff",
    color: "#1f3c88",
    fontSize: "13px",
    fontWeight: "700",
    padding: "6px 10px",
    borderRadius: "999px",
    marginBottom: "14px",
    width: "fit-content",
  };

  const cardTitleStyle = {
    fontSize: "22px",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "12px",
    lineHeight: "1.5",
  };

  const cardTextStyle = {
    fontSize: "15px",
    color: "#64748b",
    lineHeight: "1.7",
    marginBottom: "18px",
  };

  const cardButtonStyle = {
    textDecoration: "none",
    color: "#1f3c88",
    fontWeight: "700",
    fontSize: "15px",
    alignSelf: "flex-start",
  };

  

  const infoBoxStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "10px 24px 70px",
  };

  const infoInnerStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "22px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
    padding: "32px",
  };

  const infoListStyle = {
    margin: "18px 0 0",
    paddingLeft: "20px",
    color: "#475569",
    lineHeight: "2",
    fontSize: "16px",
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <div style={headerInnerStyle}>
          <Link to="/" style={logoStyle}>
            한국사 개념 비교 학습
          </Link>

          <nav style={navStyle}>
            <Link to="/" style={navLinkStyle}>
              홈
            </Link>
            <Link to="/comparisons" style={navLinkStyle}>
              비교 목록
            </Link>
            <Link to="/review" style={navLinkStyle}>
              복습 페이지
            </Link>
          </nav>
        </div>
      </header>

      <section style={heroSectionStyle}>
        <div style={heroBoxStyle}>
          <h1 style={titleStyle}>비교로 헷갈리는 한국사 개념을 정리하자</h1>
          <p style={descStyle}>
            사건, 제도, 단체를 1:1 비교하며 공통점과 차이점을 쉽게 학습할 수
            있는 한국사 비교 학습 웹앱입니다. 개념을 따로 외우는 대신,
            비교하면서 더 오래 기억할 수 있도록 구성했습니다.
          </p>

          <div style={buttonGroupStyle}>
            <Link to="/comparisons" style={primaryButtonStyle}>
              비교 학습 시작하기
            </Link>
            <Link to="/review" style={secondaryButtonStyle}>
              복습하러 가기
            </Link>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>추천 비교 주제</h2>
        <p style={sectionDescStyle}>
          헷갈리기 쉬운 대표 비교 주제를 먼저 살펴보세요.
        </p>

        <div style={cardGridStyle}>
          <div style={topicCardStyle}>
            <div>
              <span style={badgeStyle}>개항기</span>
              <div style={cardTitleStyle}>갑오개혁 vs 을미개혁</div>
              <div style={cardTextStyle}>
                두 개혁의 추진 배경과 개혁 내용, 시험에서 자주 헷갈리는 차이를
                비교합니다.
              </div>
            </div>
            <Link to="/comparisons" style={cardButtonStyle}>
              자세히 보기 →
            </Link>
          </div>

          <div style={topicCardStyle}>
            <div>
              <span style={badgeStyle}>개항기</span>
              <div style={cardTitleStyle}>위정척사 vs 개화파</div>
              <div style={cardTextStyle}>
                개항기 조선의 대외 인식과 대응 방식이 어떻게 달랐는지 비교
                학습합니다.
              </div>
            </div>
            <Link to="/comparisons" style={cardButtonStyle}>
              자세히 보기 →
            </Link>
          </div>

          <div style={topicCardStyle}>
            <div>
              <span style={badgeStyle}>정치 / 개항기</span>
              <div style={cardTitleStyle}>흥선대원군 정책 vs 명성황후 중심 외교</div>
              <div style={cardTextStyle}>
                통치 방향과 대외 정책에서 나타나는 차이를 비교하며 흐름을
                정리합니다.
              </div>
            </div>
            <Link to="/comparisons" style={cardButtonStyle}>
              자세히 보기 →
            </Link>
          </div>
        </div>
      </section>

      

      <section style={infoBoxStyle}>
        <div style={infoInnerStyle}>
          <h2 style={sectionTitleStyle}>이 웹앱에서 할 수 있는 것</h2>
          <p style={sectionDescStyle}>
            단순 자료 열람이 아니라 직접 비교하고 복습하는 흐름으로 학습할 수
            있습니다.
          </p>

          <ul style={infoListStyle}>
            <li>비교 주제 목록 조회</li>
            <li>검색 기능으로 원하는 비교 주제 찾기</li>
            <li>시대별 필터로 범위 좁혀서 보기</li>
            <li>상세 비교 페이지에서 공통점 / 차이점 / 시험 포인트 학습</li>
            <li>복습 페이지를 통한 셀프 테스트형 학습</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HomePage;