function Header() {
  return (
    <header className="bg-black text-white py-6">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MKaufFit</h1>
        <nav className="space-x-4">
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
