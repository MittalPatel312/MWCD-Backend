import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchPage from "./pages/SearchPage";
import UploadPage from "./pages/UploadPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import Login from "./pages/Login";
import Audits from "./pages/Audits";
import Consultants from "./pages/Consultants";
import KnowledgeContents from "./pages/KnowledgeContents";
import Workspaces from "./pages/Workspaces";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SearchPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/audits" element={<Audits />} />
        <Route path="/consultants" element={<Consultants />} />
        <Route path="/knowledge_contents" element={<KnowledgeContents />} />
        <Route path="/workspaces" element={<Workspaces />} />
      </Routes>
    </BrowserRouter>
  );
}
