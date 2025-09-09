// src/components/About.js
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:flex md:items-center md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:flex-1 mb-8 md:mb-0"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">About Me</h2>
          <p className="text-gray-700 mb-4">
            I’ve spent years coaching healthcare professionals—nurses,
            physicians, support staff, and leaders—helping them finally put
            their own health first.
          </p>
          <p className="text-gray-700">
            My approach is realistic, sustainable, and designed for
            professionals who can’t afford to burn out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:flex-1"
        >
          <div className="w-full h-64 md:h-80 rounded-xl bg-gray-200 shadow-lg">
            {/* Replace with <img src="/path-to-photo.jpg" alt="Matthew" className="w-full h-full object-cover rounded-xl"/> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
