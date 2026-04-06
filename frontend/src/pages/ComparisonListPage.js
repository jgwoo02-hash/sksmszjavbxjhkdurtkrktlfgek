import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ComparisonListPage() {
  const [comparisons, setComparisons] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [selectedEra, setSelectedEra] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAllComparisons = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:5000/api/comparisons");
      const data = await response.json();
      setComparisons(data);
    } catch (error) {
      console.error("비교 목록 불러오기 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!keyword.trim()) {
      fetchAllComparisons();
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `http://127.0.0.1:5000/api/comparisons/search?keyword=${encodeURIComponent(
          keyword
        )}`
      );
      const data = await response.json();
      setComparisons(data);
    } catch (error) {
      console.error("검색 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = async (era) => {
    setSelectedEra(era);

    if (!era) {
      fetchAllComparisons();
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `http://127.0.0.1:5000/api/comparisons/filter?era=${encodeURIComponent(
          era
        )}`
      );
      const data = await response.json();
      setComparisons(data);
    } catch (error) {
      console.error("시대 필터 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllComparisons();
  }, []);

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
    padding: "50px 24px 30px",
  };

  const heroBoxStyle = {
    background: "linear-gradient(135deg, #eef4ff 0%, #f8fafc 100%)",
    borderRadius: "24px",
    padding: "40px 36px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
    border: "1px solid #e5e7eb",
  };

  const titleStyle = {
    fontSize: "38px",
    fontWeight: "800",
    marginBottom: "12px",
    color: "#1e293b",
    lineHeight: "1.3",
  };

  const descStyle = {
    fontSize: "17px",
    color: "#475569",
    lineHeight: "1.8",
    margin: 0,
  };

  const contentSectionStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "10px 24px 60px",
  };

  const filterBoxStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
    marginBottom: "28px",
  };

  const filterRowStyle = {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: "16px",
  };

  const inputStyle = {
    flex: 1,
    minWidth: "240px",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #cbd5e1",
    fontSize: "15px",
    outline: "none",
    backgroundColor: "#fff",
  };

  const buttonStyle = {
    backgroundColor: "#1f3c88",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    padding: "14px 20px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 6px 16px rgba(31, 60, 136, 0.18)",
  };

  const selectStyle = {
    minWidth: "180px",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #cbd5e1",
    fontSize: "15px",
    outline: "none",
    backgroundColor: "#fff",
  };

  const infoTextStyle = {
    fontSize: "15px",
    color: "#64748b",
    margin: 0,
  };

  const listGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "22px",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "230px",
  };

  const badgeRowStyle = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "16px",
  };

  const badgeStyle = {
    display: "inline-block",
    backgroundColor: "#eaf0ff",
    color: "#1f3c88",
    fontSize: "13px",
    fontWeight: "700",
    padding: "6px 10px",
    borderRadius: "999px",
    width: "fit-content",
  };

  const cardTitleStyle = {
    fontSize: "25px",
    fontWeight: "800",
    color: "#1e293b",
    marginBottom: "14px",
    lineHeight: "1.5",
  };

  const cardTextStyle = {
    fontSize: "15px",
    color: "#64748b",
    lineHeight: "1.8",
    marginBottom: "22px",
  };

  const detailButtonStyle = {
    textDecoration: "none",
    backgroundColor: "#1f3c88",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "14px",
    alignSelf: "flex-start",
  };

  const emptyBoxStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    padding: "40px",
    textAlign: "center",
    color: "#64748b",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
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
          <h1 style={titleStyle}>비교 주제 목록</h1>
          <p style={descStyle}>
            헷갈리기 쉬운 한국사 개념을 비교 주제별로 정리해두었습니다. 검색과
            시대 필터를 활용해 원하는 주제를 빠르게 찾아보세요.
          </p>
        </div>
      </section>

      <section style={contentSectionStyle}>
        <div style={filterBoxStyle}>
          <div style={filterRowStyle}>
            <input
              type="text"
              placeholder="비교 주제를 검색해보세요"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              style={inputStyle}
            />

            <button onClick={handleSearch} style={buttonStyle}>
              검색
            </button>

            <select
              value={selectedEra}
              onChange={(e) => handleFilter(e.target.value)}
              style={selectStyle}
            >
              <option value="">전체 시대</option>
              <option value="고조선">고조선</option>
              <option value="삼국">삼국</option>
              <option value="남북국">남북국</option>
              <option value="고려">고려</option>
              <option value="조선 전기">조선 전기</option>
              <option value="조선 후기">조선 후기</option>
              <option value="개항기">개항기</option>
              <option value="일제강점기">일제강점기</option>
              <option value="현대">현대</option>
            </select>
          </div>

          <p style={infoTextStyle}>
            {loading
              ? "불러오는 중입니다..."
              : `현재 ${comparisons.length}개의 비교 주제가 표시되고 있습니다.`}
          </p>
        </div>

        {comparisons.length === 0 && !loading ? (
          <div style={emptyBoxStyle}>
            검색 결과가 없습니다. 다른 검색어를 입력하거나 시대 필터를
            바꿔보세요.
          </div>
        ) : (
          <div style={listGridStyle}>
            {comparisons.map((item) => (
              <div key={item.topic_id} style={cardStyle}>
                <div>
                  <div style={badgeRowStyle}>
                    <span style={badgeStyle}>{item.era || "시대 정보 없음"}</span>
                    <span style={badgeStyle}>
                      {item.category || "분류 정보 없음"}
                    </span>
                  </div>

                  <div style={cardTitleStyle}>{item.title}</div>

                  <div style={cardTextStyle}>
                    한국사 개념 비교 학습을 위한 주제입니다. 상세 페이지에서
                    공통점, 차이점, 시험 포인트를 확인할 수 있습니다.
                  </div>
                </div>

                <Link
                  to={`/comparisons/${item.topic_id}`}
                  style={detailButtonStyle}
                >
                  상세 보기
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default ComparisonListPage;