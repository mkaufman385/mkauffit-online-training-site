function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 text-center md:text-left">
          <span>
            Matthew Kaufman – Health Coach for Healthcare Professionals
          </span>
          <span className="block text-gray-600 text-base md:text-lg mt-1">
            Strength • Nutrition • Mindset
          </span>
        </h1>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#services" className="hover:text-emerald-600 transition">
            Services
          </a>
          <a href="#about" className="hover:text-emerald-600 transition">
            About
          </a>
          <a href="#testimonials" className="hover:text-emerald-600 transition">
            Results
          </a>
          <a href="#contact" className="hover:text-emerald-600 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
