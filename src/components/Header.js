// // src/components/Header.js
// import { motion } from "framer-motion";

// function Header() {
//   return (
//     <header className="bg-white shadow sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//         <motion.a
//           href="#"
//           className="text-2xl font-bold text-gray-900"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Matthew Kaufman - Health Coach
//         </motion.a>
//         <nav className="space-x-6 text-gray-700 font-medium">
//           <a href="#services" className="hover:text-orange-500 transition">
//             Services
//           </a>
//           <a href="#about" className="hover:text-orange-500 transition">
//             About
//           </a>
//           <a href="#testimonials" className="hover:text-orange-500 transition">
//             Testimonials
//           </a>
//           <a href="#contact" className="hover:text-orange-500 transition">
//             Contact
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

//--------------------------------------------------------------------

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">
          Matthew Kaufman - Health Coach
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
