import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-marmara-deepTeal shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-5 md:px-10 lg:px-20 py-4 mx-auto w-full">
        {/* Logo Area */}
        <div className="flex-1 flex justify-start">
          <NavLink className="logo" to="/">
            <img
              src="/img/logoMarmara.png"
              alt="Marmara Logo"
              className="object-contain w-12 md:w-16 lg:w-20 "
            />
          </NavLink>
        </div>

        {/* Links Area */}

        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-marmara-teal z-50 p-10 transition-transform duration-500 ease-in-out shadow-2xl md:w-full md:bg-marmara-teal/50 ${menuOpen ? "translate-x-0 md:translate-y-0" : "translate-x-full md:translate-x-0 md:-translate-y-full"} lg:flex lg:static lg:flex-1 lg:justify-center lg:w-auto lg:h-auto lg:bg-transparent lg:p-0 lg:translate-x-0 lg:shadow-none lg:translate-y-0`}
        >
          <button
            className="lg:hidden text-marmara-white absolute top-7 right-10 p-2 transition-transform duration-500 hover:rotate-90"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col items-end gap-8 font-medium text-marmara-white whitespace-nowrap mt-15 md:items-center md:gap-12 lg:items-center lg:flex-row lg:mt-0">
            <li className="lg:hidden">
              <div
                className="flex items-center bg-white rounded-full px-4 py-1 animate-in fade-in slide-in-from-right-3 duration-300 border border-marmara-darkGold"
                onBlur={() => setIsSearchOpen(false)}
              >
                <input
                  type="text"
                  className="bg-transparent outline-none text-sm text-black w-32 px-2"
                  placeholder="Search..."
                  autoFocus
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 text-marmara-teal cursor-pointer hover:scale-110 hover:text-marmara-lightGold transition-transform"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </li>
            <li>
              <NavLink
                className="hover:text-marmara-lightGold transition-colors"
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-marmara-lightGold transition-colors"
                to="/categoryproduct"
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-marmara-lightGold transition-colors"
                to="/article"
              >
                Article
              </NavLink>
            </li>

            <li>
              <NavLink
                className="hover:text-marmara-lightGold transition-colors"
                to="/collaboration"
              >
                Kolaborasi
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Search */}
        <div className="flex-1 flex justify-end items-center">
          <div
            className={`lg:hidden absolute mt-2 transition-transform duration-500 ease-in-out hover:scale-120 ${menuOpen ? "md:hidden" : "md:absolute"}`}
          >
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                className="size-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className="search hidden items-center justify-end flex-none w-40 lg:flex ">
            {!isSearchOpen ? (
              // Belum diklik
              <div
                className="cursor-pointer"
                onClick={() => setIsSearchOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-marmara-white hover:text-marmara-lightGold transition-colors"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              // Setelah Klik
              <div
                className="flex items-center bg-white rounded-full px-4 py-1 animate-in fade-in slide-in-from-right-3 duration-300 border border-marmara-darkGold"
                onBlur={() => setIsSearchOpen(false)}
              >
                <input
                  type="text"
                  className="bg-transparent outline-none text-sm text-black w-32 px-2"
                  placeholder="Search..."
                  autoFocus
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 text-marmara-teal cursor-pointer hover:scale-110 hover:text-marmara-lightGold transition-transform"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
