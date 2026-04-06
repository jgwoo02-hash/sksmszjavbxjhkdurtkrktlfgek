import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ComparisonListPage from "./pages/ComparisonListPage";
import ComparisonDetailPage from "./pages/ComparisonDetailPage";
import ReviewPage from "./pages/ReviewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comparisons" element={<ComparisonListPage />} />
        <Route path="/comparisons/:id" element={<ComparisonDetailPage />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;