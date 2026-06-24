import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cek token/status login admin yang tersimpan
    const adminSession = localStorage.getItem("marmara_admin_session");
    if (adminSession === "true") {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Membaca kredensial aman dari file .env Vite
    const envEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const envPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (email === envEmail && password === envPassword) {
      setIsAuthenticated(true);
      localStorage.setItem("marmara_admin_session", "true");
      return { success: true };
    }
    return { success: false, message: "Kredensial Admin Salah!" };
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("marmara_admin_session");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
