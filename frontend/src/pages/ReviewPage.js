import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ReviewPage() {
  const emptyTemplate = {
    era: "",
    person: "",
    background: "",
    process: "",
    result: "",
    similarConcept: "",
  };

  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recentKeywords, setRecentKeywords] = useState([]);
  const [templateData, setTemplateData] = useState(emptyTemplate);

  useEffect(() => {
    const savedKeywords = localStorage.getItem("recentKeywords");
    if (savedKeywords) {
      setRecentKeywords(JSON.parse(savedKeywords));
    }
  }, []);

  const saveRecentKeyword = (newKeyword) => {
    const trimmedKeyword = newKeyword.trim();
    if (!trimmedKeyword) return;

    let updatedKeywords = recentKeywords.filter(
      (item) => item !== trimmedKeyword
    );
    updatedKeywords.unshift(trimmedKeyword);
    updatedKeywords = updatedKeywords.slice(0, 5);

    setRecentKeywords(updatedKeywords);
    localStorage.setItem("recentKeywords", JSON.stringify(updatedKeywords));
  };

  const loadTemplateData = (searchKeyword) => {
    const trimmedKeyword = searchKeyword.trim();
    if (!trimmedKeyword) {
      setTemplateData(emptyTemplate);
      return;
    }

    const savedTemplates = localStorage.getItem("reviewTemplateNotes");
    const parsedTemplates = savedTemplates ? JSON.parse(savedTemplates) : {};
    const savedTemplate = parsedTemplates[trimmedKeyword];

    if (savedTemplate) {
      setTemplateData(savedTemplate);
    } else {
      setTemplateData(emptyTemplate);
    }
  };

  const saveTemplateData = (searchKeyword, newTemplateData) => {
    const trimmedKeyword = searchKeyword.trim();
    if (!trimmedKeyword) return;

    const savedTemplates = localStorage.getItem("reviewTemplateNotes");
    const parsedTemplates = savedTemplates ? JSON.parse(savedTemplates) : {};

    parsedTemplates[trimmedKeyword] = newTemplateData;

    localStorage.setItem(
      "reviewTemplateNotes",
      JSON.stringify(parsedTemplates)
    );
  };

  const handleSearch = async (searchWord = keyword) => {
    const trimmedKeyword = searchWord.trim();

    if (!trimmedKeyword) {
      alert("개념이나 용어를 입력해주세요.");
      return;
    }

    try {
      setLoading(true);
      setSearched(true);

      const response = await fetch(
        `http://127.0.0.1:5000/api/comparisons/search?keyword=${encodeURIComponent(
          trimmedKeyword
        )}`
      );
      const data = await response.json();

      setResults(data);
      saveRecentKeyword(trimmedKeyword);
      setKeyword(trimmedKeyword);

      if (data.length === 0) {
        loadTemplateData(trimmedKeyword);
      } else {
        setTemplateData(emptyTemplate);
      }
    } catch (error) {
      console.error("리뷰 페이지 검색 실패:", error);
      setResults([]);
      setTemplateData(emptyTemplate);
    } finally {
      setLoading(false);
    }
  };

  const handleRecentKeywordClick = (item) => {
    handleSearch(item);
  };

  const handleTemplateChange = (e) => {
    const { name, value } = e.target;

    const updatedTemplateData = {
      ...templateData,
      [name]: value,
    };

    setTemplateData(updatedTemplateData);
    saveTemplateData(keyword, updatedTemplateData);
  };

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
    padding: "42px 36px",
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

  const searchBoxStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
    marginBottom: "28px",
  };

  const searchRowStyle = {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: "18px",
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

  const sectionTitleStyle = {
    fontSize: "24px",
    fontWeight: "800",
    color: "#1e293b",
    marginBottom: "14px",
  };

  const recentWrapStyle = {
    marginTop: "10px",
  };

  const recentListStyle = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  };

  const recentButtonStyle = {
    backgroundColor: "#eef4ff",
    color: "#1f3c88",
    border: "none",
    borderRadius: "999px",
    padding: "9px 14px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
  };

  const infoTextStyle = {
    fontSize: "15px",
    color: "#64748b",
    margin: "10px 0 0",
    lineHeight: "1.7",
  };

  const resultGridStyle = {
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
    fontSize: "24px",
    fontWeight: "800",
    color: "#1e293b",
    marginBottom: "14px",
    lineHeight: "1.5",
  };

  const cardTextStyle = {
    fontSize: "15px",
    color: "#64748b",
    lineHeight: "1.8",
    marginBottom: "20px",
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

  const templateBoxStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
    padding: "30px",
    marginTop: "10px",
  };

  const templateTitleStyle = {
    fontSize: "28px",
    fontWeight: "800",
    color: "#1e293b",
    marginBottom: "14px",
  };

  const templateDescStyle = {
    fontSize: "16px",
    color: "#475569",
    lineHeight: "1.8",
    marginBottom: "20px",
  };

  const templateFieldWrapStyle = {
    marginBottom: "18px",
  };

  const templateLabelStyle = {
    display: "block",
    fontSize: "16px",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "8px",
  };

  const templateInputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #cbd5e1",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "'Noto Sans KR', sans-serif",
  };

  const templateTextareaStyle = {
    width: "100%",
    minHeight: "110px",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #cbd5e1",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
    resize: "vertical",
    fontFamily: "'Noto Sans KR', sans-serif",
    lineHeight: "1.7",
  };

  const templateGuideStyle = {
    fontSize: "14px",
    color: "#64748b",
    marginTop: "6px",
    lineHeight: "1.6",
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
          <h1 style={titleStyle}>헷갈리는 개념 입력 학습</h1>
          <p style={descStyle}>
            모르는 개념이나 헷갈리는 한국사 용어를 직접 입력해보세요. 관련된
            비교 주제가 있으면 추천해주고, 없으면 스스로 정리할 수 있는 학습
            틀을 제공합니다.
          </p>
        </div>
      </section>

      <section style={contentSectionStyle}>
        <div style={searchBoxStyle}>
          <div style={searchRowStyle}>
            <input
              type="text"
              placeholder="예: 갑오개혁, 위정척사, 위화도 회군"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              style={inputStyle}
            />

            <button onClick={() => handleSearch()} style={buttonStyle}>
              검색하기
            </button>
          </div>

          <p style={infoTextStyle}>
            입력한 개념과 관련된 비교 주제를 우선 찾아보고, 결과가 없으면 아래에
            학습 템플릿을 제공합니다.
          </p>

          {recentKeywords.length > 0 && (
            <div style={recentWrapStyle}>
              <h2 style={sectionTitleStyle}>최근 검색어</h2>
              <div style={recentListStyle}>
                {recentKeywords.map((item, index) => (
                  <button
                    key={index}
                    style={recentButtonStyle}
                    onClick={() => handleRecentKeywordClick(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {loading && (
          <div style={emptyBoxStyle}>관련 비교 주제를 불러오는 중입니다...</div>
        )}

        {!loading && searched && results.length > 0 && (
          <>
            <h2 style={sectionTitleStyle}>관련 비교 주제</h2>
            <div style={resultGridStyle}>
              {results.map((item) => (
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
                      입력한 개념과 관련된 비교 주제입니다. 상세 페이지에서
                      공통점, 차이점, 시험 포인트를 확인할 수 있습니다.
                    </div>
                  </div>

                  <Link
                    to={`/comparisons/${item.topic_id}`}
                    style={detailButtonStyle}
                  >
                    상세 비교 보기
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}

        {!loading && searched && results.length === 0 && (
          <div style={templateBoxStyle}>
            <h2 style={templateTitleStyle}>학습 템플릿</h2>
            <p style={templateDescStyle}>
              <strong>{keyword}</strong> 와(과) 관련된 비교 주제를 아직 찾지
              못했습니다. 아래 항목에 직접 입력하면서 개념을 정리해보세요.
            </p>

            <div style={templateFieldWrapStyle}>
              <label style={templateLabelStyle}>시대</label>
              <input
                type="text"
                name="era"
                value={templateData.era}
                onChange={handleTemplateChange}
                placeholder="예: 고려 말, 조선 전기, 개항기"
                style={templateInputStyle}
              />
              <div style={templateGuideStyle}>
                이 개념이 어느 시대와 관련되는지 적어보세요.
              </div>
            </div>

            <div style={templateFieldWrapStyle}>
              <label style={templateLabelStyle}>관련 인물</label>
              <input
                type="text"
                name="person"
                value={templateData.person}
                onChange={handleTemplateChange}
                placeholder="예: 이성계, 흥선대원군, 김옥균"
                style={templateInputStyle}
              />
              <div style={templateGuideStyle}>
                이 개념과 연결되는 대표 인물을 적어보세요.
              </div>
            </div>

            <div style={templateFieldWrapStyle}>
              <label style={templateLabelStyle}>배경</label>
              <textarea
                name="background"
                value={templateData.background}
                onChange={handleTemplateChange}
                placeholder="이 사건이나 개념이 왜 등장했는지 배경을 적어보세요."
                style={templateTextareaStyle}
              />
            </div>

            <div style={templateFieldWrapStyle}>
              <label style={templateLabelStyle}>전개</label>
              <textarea
                name="process"
                value={templateData.process}
                onChange={handleTemplateChange}
                placeholder="어떤 흐름으로 진행되었는지 정리해보세요."
                style={templateTextareaStyle}
              />
            </div>

            <div style={templateFieldWrapStyle}>
              <label style={templateLabelStyle}>결과</label>
              <textarea
                name="result"
                value={templateData.result}
                onChange={handleTemplateChange}
                placeholder="결과적으로 어떤 변화나 영향이 있었는지 적어보세요."
                style={templateTextareaStyle}
              />
            </div>

            <div style={templateFieldWrapStyle}>
              <label style={templateLabelStyle}>헷갈리는 유사 개념</label>
              <input
                type="text"
                name="similarConcept"
                value={templateData.similarConcept}
                onChange={handleTemplateChange}
                placeholder="예: 위화도 회군 ↔ 무인정변"
                style={templateInputStyle}
              />
              <div style={templateGuideStyle}>
                비슷해서 헷갈리는 개념이나 비교해보고 싶은 개념을 적어보세요.
              </div>
            </div>
          </div>
        )}

        {!searched && !loading && (
          <div style={emptyBoxStyle}>
            아직 검색한 개념이 없습니다. 위 입력창에 헷갈리는 개념을 입력하고
            검색해보세요.
          </div>
        )}
      </section>
    </div>
  );
}

export default ReviewPage;