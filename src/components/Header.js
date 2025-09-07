// function Header() {
//   return (
//     <header className="bg-black text-white py-6">
//       <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Matthew Kaufman - Health Coach</h1>
//         <nav className="space-x-4">
//           <a href="#services" className="hover:underline">
//             Services
//           </a>
//           <a href="#about" className="hover:underline">
//             About
//           </a>
//           <a href="#contact" className="hover:underline">
//             Contact
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

// --------------------------------------------------------------------

function Header() {
  return (
    <header className="bg-black text-white py-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Matthew Kaufman - Health Coach</h1>
        <nav className="space-x-4">
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#testimonials" className="hover:underline">
            Transformations
          </a>
          <a href="#contact" className="hover:underline">
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
