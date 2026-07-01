import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLink =
    "relative transition-all duration-300 hover:text-orange-500";

  const activeNav = ({ isActive }) =>
    `${navLink} ${
      isActive
        ? "text-orange-500 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-orange-500 after:to-red-500 after:rounded-full"
        : "text-gray-600"
    }`;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 border-b border-gray-200 shadow-sm">

        <Link to="/">
          <h2 className="text-3xl md:text-3xl xl:text-4xl font-extrabold bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 bg-clip-text text-transparent">
            TravelBharat
          </h2>
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-8 text-lg font-semibold">

          <li>
            <NavLink to="/" end className={activeNav}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/destinations" className={activeNav}>
              Destinations
            </NavLink>
          </li>

          <li>
            <NavLink to="/categories" className={activeNav}>
              Categories
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={activeNav}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `px-5 py-2 rounded-xl shadow-md transition ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                    : "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg"
                }`
              }
            >
              Admin
            </NavLink>
          </li>

        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden text-3xl text-gray-700 hover:text-orange-500 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg p-4">

          <ul className="flex flex-col gap-3">

            <NavLink to="/" end onClick={() => setIsOpen(false)}>
              {({ isActive }) => (
                <li
                  className={`border rounded-xl p-4 text-center font-semibold transition ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-50"
                  }`}
                >
                  Home
                </li>
              )}
            </NavLink>

            <NavLink
              to="/destinations"
              onClick={() => setIsOpen(false)}
            >
              {({ isActive }) => (
                <li
                  className={`border rounded-xl p-4 text-center font-semibold transition ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-50"
                  }`}
                >
                  Destinations
                </li>
              )}
            </NavLink>

            <NavLink
              to="/categories"
              onClick={() => setIsOpen(false)}
            >
              {({ isActive }) => (
                <li
                  className={`border rounded-xl p-4 text-center font-semibold transition ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-50"
                  }`}
                >
                  Categories
                </li>
              )}
            </NavLink>

            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              {({ isActive }) => (
                <li
                  className={`border rounded-xl p-4 text-center font-semibold transition ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-50"
                  }`}
                >
                  About
                </li>
              )}
            </NavLink>

            <NavLink to="/admin" onClick={() => setIsOpen(false)}>
              {({ isActive }) => (
                <li
                  className={`rounded-xl p-4 text-center font-semibold transition ${
                    isActive
                      ? "bg-gradient-to-r from-orange-600 to-red-600 text-white"
                      : "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                  }`}
                >
                  Admin Dashboard
                </li>
              )}
            </NavLink>

          </ul>

        </div>
      )}
    </>
  );
}

export default Navbar;