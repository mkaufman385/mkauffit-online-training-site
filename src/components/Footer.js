// src/components/Footer.js
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

function Footer() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <footer className="bg-gray-100 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-gray-700 space-y-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Matthew Kaufman. All rights
          reserved.
        </p>

        <a
          href="https://www.instagram.com/mkauffit"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-orange-500 hover:underline transform transition duration-200 hover:scale-105"
        >
          <FaInstagram className="w-5 h-5" />
          <span>Follow on Instagram</span>
        </a>

        <div className="relative flex items-center">
          <a
            href="mailto:mkauffit@gmail.com"
            className="flex items-center space-x-2 text-orange-500 hover:underline transform transition duration-200 hover:scale-105"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <FaEnvelope className="w-5 h-5" />
            <span>Email Me: mkauffit@gmail.com</span>
          </a>

          {/* Tooltip to the right */}
          {showTooltip && (
            <span className="absolute left-full ml-3 bg-gray-800 text-white text-sm px-2 py-1 rounded-lg whitespace-nowrap">
              mkauffit@gmail.com
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
