import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Pastikan path context-nya bener ya, Bre

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // AMBIL FUNGSI LOGIN DARI CONTEXT (JANGAN BIKIN BARU!)
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // Redirect otomatis balik ke halaman asal sebelum di-kick satpam, default ke /admin
  const from = location.state?.from?.pathname || "/admin";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulasi loading tipis-tipis biar estetik pas diklik
    setTimeout(() => {
      const res = login(email, password); // Ini memicu login global
      setIsLoading(false);

      if (res.success) {
        // Ganti halaman dengan replace: true agar user ga bisa pencet tombol 'Back' ke login lagi
        navigate(from, { replace: true });
      } else {
        setError(res.message);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans antialiased text-zinc-800">
      <div className="sm:mx-auto w-full max-w-md">
        {/* Logo / Brand Intro */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-custom-purple bg-custom-purple/10 px-3 py-1 rounded-md inline-block mb-3">
            Internal Backoffice
          </span>
          <h2 className="text-3xl font-black tracking-tight text-zinc-950">
            Marmara Cake
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Silakan masuk untuk mengelola menu, stok, dan cabang.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto w-full max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 border border-zinc-200/80 shadow-sm rounded-2xl sm:px-10">
          {/* Box Error Validation */}
          {error && (
            <div className="mb-5 bg-rose-50 border border-rose-200 text-rose-700 p-3.5 rounded-xl text-xs font-bold flex items-center gap-2 animate-shake">
              <svg
                className="h-4 w-4 text-rose-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>{" "}
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Input Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-1.5"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@marmara.com"
                  className="block w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm placeholder-zinc-400 focus:outline-none focus:border-custom-purple focus:bg-white transition-all duration-200 font-medium"
                />
              </div>
            </div>

            {/* Input Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-black uppercase tracking-wider text-zinc-700 mb-1.5"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm placeholder-zinc-400 focus:outline-none focus:border-custom-purple focus:bg-white transition-all duration-200 font-medium"
                />
              </div>
            </div>

            {/* Tombol Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-custom-purple hover:bg-custom-purple/90 focus:outline-none transition-all duration-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Masuk ke Panel"
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Footer Kecil Keamanan */}
        <p className="mt-6 text-center text-xs text-zinc-400">
          Halaman ini dilindungi enkripsi internal.
          <br />
          Hak akses eksklusif Manajemen Marmara Cake.
        </p>
      </div>
    </div>
  );
}
