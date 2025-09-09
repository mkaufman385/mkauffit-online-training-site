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
          <p className="text-gray-700 mb-4">
            I hold a Bachelor’s degree in Exercise Science with a minor in
            Psychology from Old Dominion University. I provide guidance on both
            fitness and nutrition, helping clients build strength, energy, and
            confidence while creating sustainable habits.
          </p>
          <p className="text-gray-700 mb-4">
            Outside of coaching, I love to snowboard, surf, exercise, and spend
            quality time with family and friends. These passions keep me
            energized and inspired to help others achieve their best selves.
          </p>
          <p className="text-gray-700">
            My approach is realistic, balanced, and designed for healthcare
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
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/MatthewSurfHeadshot.jpg"
              alt="Matthew Kaufman Surfing"
              className="w-full h-full object-cover object-[60%_40%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
