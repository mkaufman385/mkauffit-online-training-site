import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center gap-12 bg-gradient-to-r from-orange-50 to-white rounded-xl">
      {/* Left: Text */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900"
        >
          Stop Starting <span className="text-orange-500">Over</span> Every
          Monday
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl mb-4 max-w-2xl mx-auto md:mx-0 text-gray-700"
        >
          You care for patients. I’ll help you care for yourself.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-base md:text-lg mb-6 max-w-2xl mx-auto md:mx-0 text-gray-700 leading-relaxed"
        >
          Long shifts, high stress, and demanding schedules often push your own
          health to the side. I help healthcare professionals—nurses, doctors,
          support staff, and leaders—build strength, energy, and confidence
          without extreme diets or unrealistic plans.
        </motion.p>

        <motion.a
          href="https://calendly.com/mkauffit/30min"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition"
        >
          Book Your Free 30-Min Call
        </motion.a>
      </div>

      {/* Right: Portrait */}
      <div className="flex-1 flex justify-center md:justify-end">
        <motion.img
          src="/images/matthewHeadshot.jpg"
          alt="Matthew Kaufman"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;

//-------------------------------------------------------------------

// import { motion } from "framer-motion";

// function Hero() {
//   return (
//     <section className="max-w-6xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-12 bg-gradient-to-r from-orange-50 to-white rounded-xl">
//       {/* Left: Text */}
//       <div className="flex-1 text-center md:text-left">
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900"
//         >
//           Stop Starting <span className="text-orange-500">Over</span> Every
//           Monday
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="text-lg md:text-xl mb-6 max-w-2xl mx-auto md:mx-0 text-gray-700"
//         >
//           You care for patients. I’ll help you care for yourself.
//         </motion.p>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7, duration: 1 }}
//           className="text-base md:text-lg mb-8 max-w-2xl mx-auto md:mx-0 text-gray-700 leading-relaxed"
//         >
//           Long shifts, high stress, and demanding schedules often push your own
//           health to the side. I help healthcare professionals—nurses, doctors,
//           support staff, and leaders—build strength, energy, and confidence
//           without extreme diets or unrealistic plans.
//         </motion.p>

//         <motion.a
//           href="https://calendly.com/mkauffit/30min"
//           target="_blank"
//           rel="noopener noreferrer"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition"
//         >
//           Book Your Free 30-Min Call
//         </motion.a>
//       </div>

//       {/* Right: Portrait */}
//       <div className="flex-1 flex justify-center md:justify-end">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.9, duration: 1 }}
//           className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-200 shadow-lg"
//         >
//           {/* Replace with <img src="/path-to-photo.jpg" alt="Matthew Kaufman" className="rounded-full object-cover w-full h-full"/> */}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Hero;
