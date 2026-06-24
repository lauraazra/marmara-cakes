import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./layouts/CartContext";

// === LAYOUTS ===
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./admin/layouts/AdminLayout";

// === HALAMAN USER / CUSTOMER ===
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryPage from "./pages/CategoryPage";
import AboutUs from "./pages/AboutUs";
import CollaborationPage from "./pages/CollaborationPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import PartnershipPage from "./pages/PartnershipPage";
import CareerPage from "./pages/CareerPage";
import LocationPage from "./pages/LocationPage";
import ScrollToTop from "./components/ScrollToTop";

// === SISTEM PROTEKSI & CONTEXT ===
import { AuthProvider } from "./admin/context/AuthContext";
import ProtectedRoute from "./admin/components/ProtectedRoute";

// === HALAMAN ADMIN PANEL ===
import AdminLogin from "./admin/pages/Login";
import AdminDashboard from "./admin/pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        {" "}
        {/* 🌟 BUNGKUS DI SINI */}
        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            {/* ================= 1. SEMUA HALAMAN UMUM ================= */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="product/:slug" element={<ProductPage />} />
              <Route
                path="productdetail/:slug"
                element={<ProductDetailPage />}
              />
              <Route path="categoryproduct" element={<CategoryPage />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="collaboration" element={<CollaborationPage />} />
              <Route path="article" element={<ArticlePage />} />
              <Route path="articles/:slug" element={<ArticleDetailPage />} />
              <Route path="partnership" element={<PartnershipPage />} />
              <Route path="career" element={<CareerPage />} />
              <Route path="location" element={<LocationPage />} />
            </Route>

            {/* ================= 2. GERBANG LOGIN ADMIN ================= */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* ================= 3. PANEL ADMIN ================= */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>{" "}
    </AuthProvider>
  );
}

export default App;
