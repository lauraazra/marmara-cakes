import { useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/admin/login", { replace: true });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-zinc-100 flex font-sans antialiased text-zinc-800 relative">
      {/* 1. OVERLAY BACKGROUND */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-zinc-950/40 z-40 lg:hidden transition-opacity duration-300 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* 2. SIDEBAR KIRI */}
      <aside
        className={`
          fixed top-0 bottom-0 left-0 w-64 bg-zinc-900 text-zinc-200 flex flex-col justify-between p-6 shadow-xl z-50
          transition-transform duration-300 ease-in-out
          lg:static lg:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div>
          {/* Brand/Logo Admin & Tombol Close */}
          <div className="mb-8 px-2 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-black tracking-tight text-white">
                Marmara Backoffice
              </h1>
              <p className="text-xs text-zinc-500 mt-0.5">
                v1.0.0 (Internal Only)
              </p>
            </div>

            {/* Tombol X Close */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Navigasi */}
          <nav className="space-y-1">
            <Link
              to="/admin"
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-150 ${
                isActive("/admin")
                  ? "bg-custom-purple text-white shadow-md shadow-custom-purple/20"
                  : "hover:bg-zinc-800 hover:text-white"
              }`}
            >
              <span>📊</span> Dashboard
            </Link>
            <Link
              to="/admin/products"
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-150 ${
                isActive("/admin/products")
                  ? "bg-custom-purple text-white shadow-md shadow-custom-purple/20"
                  : "hover:bg-zinc-800 hover:text-white"
              }`}
            >
              <span>🍰</span> Kelola Produk
            </Link>
            <Link
              to="/admin/stores"
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-150 ${
                isActive("/admin/stores")
                  ? "bg-custom-purple text-white shadow-md shadow-custom-purple/20"
                  : "hover:bg-zinc-800 hover:text-white"
              }`}
            >
              <span>📍</span> Kelola Cabang
            </Link>
          </nav>
        </div>

        {/* Tombol Logout */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-rose-600/10 text-rose-400 border border-rose-500/20 rounded-xl text-sm font-bold hover:bg-rose-600 hover:text-white transition-all duration-150 active:scale-[0.98]"
        >
          <span>🚪</span> Keluar Panel
        </button>
      </aside>

      {/* 3. AREA KONTEN UTAMA */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden w-full">
        {/* Top Header Dinamis & Burger Button */}
        <header className="h-16 bg-white border-b border-zinc-200 px-4 sm:px-8 flex items-center justify-between lg:justify-end shadow-sm shrink-0">
          {/* Burger Button (Hanya tampil di Mobile & Tablet < lg breakpoint) */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 rounded-xl text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 transition-all duration-200 border border-zinc-200"
            aria-label="Open Sidebar"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Status Badge */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-700 bg-zinc-100 px-3 py-1.5 rounded-full">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span>Admin Mode</span>
          </div>
        </header>

        {/* ISI HALAMAN */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
