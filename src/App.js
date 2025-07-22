import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
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

      <main className="max-w-5xl mx-auto px-4 py-12">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Online Personal Training & Nutrition Advising
          </h2>
          <p className="text-lg mb-6">
            Helping busy people get fit, strong, and confident — without wasting
            time or energy.
          </p>
          <a
            href="#contact"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800"
          >
            Start Your Journey
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
