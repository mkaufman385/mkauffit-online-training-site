// src/components/Footer.js
import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 mt-20">
      {/* Social Links Container */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center text-gray-700">
        <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
          <a
            href="https://www.instagram.com/mkauffit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-pink-500 hover:underline transform transition duration-200 hover:scale-105"
          >
            <FaInstagram className="w-5 h-5" />
            <span>Follow on Instagram</span>
          </a>

          <a
            href="https://www.linkedin.com/in/mkauffit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#0077B5] hover:underline transform transition duration-200 hover:scale-105"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>Connect on LinkedIn</span>
          </a>

          <a
            href="mailto:mkauffit@gmail.com"
            className="flex items-center space-x-2 hover:underline transform transition duration-200 hover:scale-105"
          >
            <FaEnvelope className="w-5 h-5 text-black" />
            <span className="text-black">Email Me: mkauffit@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Full-width copyright */}
      <div className="bg-gray-200 text-gray-600 py-4 text-center text-sm w-full">
        © 2025 Matthew Kaufman. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
