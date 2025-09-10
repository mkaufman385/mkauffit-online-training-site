function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-50 shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={scrollToTop}
          className="flex flex-col text-left focus:outline-none transition-transform duration-200 hover:scale-105 active:scale-95 hover:text-orange-500"
        >
          {/* First line with icon and main title */}
          <div className="flex items-center gap-3">
            <img
              src={`${process.env.PUBLIC_URL}/images/mkauffit_website_favicon_tab_icon_rmv_backg.png`}
              alt="MKauffit Logo"
              className="w-8 h-8"
            />
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              Matthew Kaufman – Health Coach for Healthcare Professionals
            </h1>
          </div>

          {/* Tagline */}
          <span className="block text-gray-600 text-base md:text-lg mt-1">
            Strength • Nutrition • Mindset
          </span>
        </button>

        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#services" className="hover:text-orange-500 transition">
            Services
          </a>
          <a href="#about" className="hover:text-orange-500 transition">
            About
          </a>
          <a href="#testimonials" className="hover:text-orange-500 transition">
            Results
          </a>
          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
