import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Brand / Title */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 text-left focus:outline-none transition-transform duration-200 hover:scale-105 active:scale-95 hover:text-orange-500"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/mkauffit_website_favicon_tab_icon_rmv_backg.png`}
            alt="MKauffit Logo"
            className="w-8 h-8"
          />
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              Matthew Kaufman – Health Coach for Healthcare Professionals
            </h1>
            <span className="text-gray-600 text-sm md:text-base mt-1">
              Strength • Nutrition • Mindset
            </span>
          </div>
        </button>

        {/* Hamburger button - shows on small screens */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 mb-1 transition-transform ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 mb-1 transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Nav links */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row absolute sm:static top-full left-0 w-full sm:w-auto bg-white sm:bg-transparent shadow sm:shadow-none p-4 sm:p-0`}
        >
          <a
            href="#services"
            className="block sm:inline-block py-2 sm:py-0 sm:mr-6 text-gray-700 hover:text-orange-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="block sm:inline-block py-2 sm:py-0 sm:mr-6 text-gray-700 hover:text-orange-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#testimonials"
            className="block sm:inline-block py-2 sm:py-0 sm:mr-6 text-gray-700 hover:text-orange-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Results
          </a>
          <a
            href="#contact"
            className="block sm:inline-block py-2 sm:py-0 text-gray-700 hover:text-orange-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
