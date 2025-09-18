// src/components/Footer.js
import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

function Footer() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <footer className="bg-gray-100 mt-20">
      {/* Social Links Container */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center text-gray-700">
        <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
          <a
            href="https://www.instagram.com/mkauffit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent hover:underline transform transition duration-200 hover:scale-105"
          >
            <FaInstagram className="w-5 h-5 text-pink-500" />
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

          <div className="relative flex items-center">
            <a
              href="mailto:mkauffit@gmail.com"
              className="flex items-center space-x-2 text-orange-500 hover:underline transform transition duration-200 hover:scale-105"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <FaEnvelope className="w-5 h-5 text-black" />
              <span>Email Me: mkauffit@gmail.com</span>
            </a>

            {showTooltip && (
              <span className="absolute left-full ml-3 bg-gray-800 text-white text-sm px-2 py-1 rounded-lg whitespace-nowrap">
                mkauffit@gmail.com
              </span>
            )}
          </div>
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
