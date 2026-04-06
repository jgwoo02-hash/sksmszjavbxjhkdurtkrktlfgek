import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ComparisonDetailPage() {
  const { id } = useParams();
  const [comparison, setComparison] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchComparisonDetail = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://127.0.0.1:5000/api/comparisons/${id}`
      );
      const data = await response.json();
      setComparison(data);
    } catch (error) {
      console.error("비교 상세 불러오기 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComparisonDetail();
  }, [id]);

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

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 24px 70px",
  };

  const topButtonRowStyle = {
    marginBottom: "22px",
  };

  const backButtonStyle = {
    display: "inline-block",
    textDecoration: "none",
    backgroundColor: "#ffffff",
    color: "#1f3c88",
    border: "1px solid #cbd5e1",
    padding: "12px 18px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "15px",
  };

  const heroBoxStyle = {
    background: "linear-gradient(135deg, #eef4ff 0%, #f8fafc 100%)",
    borderRadius: "24px",
    padding: "38px 34px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
    border: "1px solid #e5e7eb",
    marginBottom: "28px",
  };

  const titleStyle = {
    fontSize: "40px",
    fontWeight: "800",
    color: "#1e293b",
    marginBottom: "18px",
    lineHeight: "1.4",
  };

  const badgeRowStyle = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  };

  const badgeStyle = {
    display: "inline-block",
    backgroundColor: "#eaf0ff",
    color: "#1f3c88",
    fontSize: "14px",
    fontWeight: "700",
    padding: "7px 12px",
    borderRadius: "999px",
  };

  const conceptGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginBottom: "28px",
  };

  const conceptCardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
    padding: "26px",
  };

  const conceptLabelStyle = {
    fontSize: "14px",
    fontWeight: "700",
    color: "#1f3c88",
    marginBottom: "12px",
  };

  const conceptNameStyle = {
    fontSize: "28px",
    fontWeight: "800",
    color: "#1e293b",
    lineHeight: "1.5",
  };

  const sectionBoxStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
    padding: "28px",
    marginBottom: "22px",
  };

  const sectionTitleStyle = {
    fontSize: "28px",
    fontWeight: "800",
    color: "#1e293b",
    marginBottom: "16px",
  };

  const sectionTextStyle = {
    fontSize: "17px",
    color: "#475569",
    lineHeight: "1.9",
    whiteSpace: "pre-line",
  };

  const bottomButtonRowStyle = {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginTop: "28px",
  };

  const primaryButtonStyle = {
    textDecoration: "none",
    backgroundColor: "#1f3c88",
    color: "#fff",
    padding: "14px 22px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "15px",
    boxShadow: "0 6px 16px rgba(31, 60, 136, 0.18)",
  };

  const secondaryButtonStyle = {
    textDecoration: "none",
    backgroundColor: "#ffffff",
    color: "#1f3c88",
    padding: "14px 22px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "15px",
    border: "1px solid #cbd5e1",
  };

  const messageBoxStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 24px",
  };

  const messageInnerStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
    padding: "50px",
    textAlign: "center",
    color: "#64748b",
    fontSize: "18px",
  };

  if (loading) {
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

        <div style={messageBoxStyle}>
          <div style={messageInnerStyle}>비교 주제 상세 내용을 불러오는 중입니다...</div>
        </div>
      </div>
    );
  }

  if (!comparison) {
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

        <div style={messageBoxStyle}>
          <div style={messageInnerStyle}>해당 비교 주제를 찾을 수 없습니다.</div>
        </div>
      </div>
    );
  }

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

      <div style={containerStyle}>
        <div style={topButtonRowStyle}>
          <Link to="/comparisons" style={backButtonStyle}>
            ← 목록으로 돌아가기
          </Link>
        </div>

        <div style={heroBoxStyle}>
          <h1 style={titleStyle}>{comparison.title}</h1>

          <div style={badgeRowStyle}>
            <span style={badgeStyle}>{comparison.era || "시대 정보 없음"}</span>
            <span style={badgeStyle}>
              {comparison.category || "분류 정보 없음"}
            </span>
          </div>
        </div>

        <div style={conceptGridStyle}>
          <div style={conceptCardStyle}>
            <div style={conceptLabelStyle}>개념 A</div>
            <div style={conceptNameStyle}>
              {comparison.concept_a_name || "개념 정보 없음"}
            </div>
          </div>

          <div style={conceptCardStyle}>
            <div style={conceptLabelStyle}>개념 B</div>
            <div style={conceptNameStyle}>
              {comparison.concept_b_name || "개념 정보 없음"}
            </div>
          </div>
        </div>

        <div style={sectionBoxStyle}>
          <h2 style={sectionTitleStyle}>공통점</h2>
          <div style={sectionTextStyle}>
            {comparison.common_points || "공통점 정보가 아직 등록되지 않았습니다."}
          </div>
        </div>

        <div style={sectionBoxStyle}>
          <h2 style={sectionTitleStyle}>차이점</h2>
          <div style={sectionTextStyle}>
            {comparison.differences || "차이점 정보가 아직 등록되지 않았습니다."}
          </div>
        </div>

        <div style={sectionBoxStyle}>
          <h2 style={sectionTitleStyle}>시험 포인트</h2>
          <div style={sectionTextStyle}>
            {comparison.exam_points || "시험 포인트 정보가 아직 등록되지 않았습니다."}
          </div>
        </div>

        <div style={bottomButtonRowStyle}>
          <Link to="/comparisons" style={secondaryButtonStyle}>
            목록으로 이동
          </Link>
          <Link to="/review" style={primaryButtonStyle}>
            복습하러 가기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ComparisonDetailPage;