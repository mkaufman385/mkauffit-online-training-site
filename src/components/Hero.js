// src/components/Hero.js
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Left: Text */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Stop Starting Over Every Monday
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl mb-8 max-w-2xl mx-auto md:mx-0"
        >
          You don’t need another extreme diet or workout plan. You need a
          strategy that fits your life, builds confidence, and actually works.
        </motion.p>

        <motion.a
          href="https://calendly.com/mkauffit/30min"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition"
        >
          Book Your Free 30-Min Call
        </motion.a>
      </div>

      {/* Right: Portrait */}
      <div className="flex-1 flex justify-center md:justify-end">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-200"
        >
          {/* Replace this div with <img src="/path-to-your-photo.jpg" alt="Matthew" className="rounded-full object-cover w-full h-full"/> */}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
