import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return systemPrefersDark;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-marmara-deep-teal dark:bg-marmara-teal text-marmara-light-grey shadow-md sticky top-0 z-50 transition-colors duration-300 border-b border-border-site/50 shadow-shadow-primary/30">
      <div className="flex items-center justify-between px-5 md:px-10 lg:px-20 py-4 mx-auto w-full">
        <div className="flex-1 flex justify-start">
          <NavLink className="logo" to="/">
            <img
              src="/img/logoMarmara.png"
              alt="Marmara Logo"
              className="object-contain w-12 md:w-16 lg:w-20"
            />
          </NavLink>
        </div>

        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-marmara-deep-teal dark:bg-marmara-teal z-50 p-10 transition-transform duration-500 ease-in-out shadow-2xl md:w-full ${
            menuOpen
              ? "translate-x-0 md:translate-y-0"
              : "translate-x-full md:translate-x-0 md:-translate-y-full"
          } lg:flex lg:static lg:flex-1 lg:justify-center lg:w-auto lg:h-auto lg:bg-transparent lg:p-0 lg:translate-x-0 lg:shadow-none lg:translate-y-0`}
        >
          <button
            className="lg:hidden text-text-site absolute top-7 right-10 p-2 transition-transform duration-500 hover:rotate-90 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6 text-text-site"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col items-end gap-8 font-medium  whitespace-nowrap mt-15 md:items-center md:gap-12 lg:items-center lg:flex-row lg:mt-0">
            <li>
              <NavLink
                className="hover:text-link-hover transition-colors duration-200"
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-link-hover transition-colors duration-200"
                to="/categoryproduct"
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-link-hover transition-colors duration-200"
                to="/article"
              >
                Article
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-link-hover transition-colors duration-200"
                to="/collaboration"
              >
                Kolaborasi
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex justify-end items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            type="button"
            className="p-2.5 rounded-full bg-card-site/80 border border-border-site/30 text-text-site hover:bg-text-site/10 transition-all duration-300 cursor-pointer shadow-xs group"
            aria-label="Toggle Dark Mode"
          >
            <div className="relative size-5 overflow-hidden">
              {/* Icon Sun */}
              <div
                className={`absolute inset-0 transform transition-transform duration-500 ${isDarkMode ? "translate-y-0 rotate-0" : "-translate-y-8 rotate-45"}`}
              >
                <Sun className="size-5 text-marmara-gold" />
              </div>

              {/* Icon Moon */}
              <div
                className={`absolute inset-0 transform transition-transform duration-500 ${isDarkMode ? "translate-y-8 -rotate-45" : "translate-y-0 rotate-0"}`}
              >
                <Moon className="size-5 text-marmara-teal dark:text-marmara-light-gold" />
              </div>
            </div>
          </button>

          <div
            className={`lg:hidden flex items-center transition-transform duration-300 hover:scale-110 ${menuOpen ? "hidden" : "block"}`}
          >
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-text-site cursor-pointer"
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
