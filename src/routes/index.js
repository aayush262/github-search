import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import RepoDetails from "../pages/RepoDetails";
import Results from "../pages/Results";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/repo/:owner/:name" element={<RepoDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
