import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import AboutUs from "./pages/AboutUs";
import CollaborationPage from "./pages/CollaborationPage";
import ArticlePage from "./pages/ArticlePage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/categoryproduct" element={<CategoryPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/collaboration" element={<CollaborationPage />} />
          <Route path="/article" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
