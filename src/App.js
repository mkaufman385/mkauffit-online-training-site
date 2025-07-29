import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-20">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Tired of Starting Over Every Monday?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            You don’t need another extreme diet or workout plan. You need
            something that actually fits your life — built for busy people like
            you. That’s where I come in.
          </p>
          <a
            href="https://calendly.com/mkauffit/30min"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800"
          >
            Let’s Build The Healthiest You — Together
          </a>
          <p className="text-sm text-gray-500 mt-3">
            No pressure — just a real conversation to see if we’re a good fit.
          </p>
        </section>

        <Services />
        <About />
        <Testimonials />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
