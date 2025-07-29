import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MKaufFit. All rights reserved.
        </p>

        <a
          href="https://www.instagram.com/mkauffit"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:underline"
        >
          <FaInstagram className="w-5 h-5" />
          <span>Follow me on Instagram</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
