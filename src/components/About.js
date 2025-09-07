// function About() {
//   return (
//     <section id="about" className="py-16">
//       <div className="max-w-4xl mx-auto text-center px-4">
//         <h2 className="text-3xl font-bold mb-6">
//           I'm Matthew — Your Guide to a Stronger, Healthier You
//         </h2>
//         <p className="text-lg mb-4">
//           I’m a certified personal trainer and nutrition advisor with over 13
//           years of experience helping people of all ages gain confidence,
//           strength, and clarity in their health journey.
//         </p>
//         <p className="text-lg mb-4">
//           I’ll meet you where you are — whether you’re starting fresh or have
//           tried everything before — and create a plan that fits your life, not
//           the other way around.
//         </p>
//         <p className="text-base text-gray-600 italic">
//           Together, we’ll build habits that last, so you can feel confident in
//           your body and your decisions.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default About;

//------------------------------------------------------------------------------

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
            I help people achieve their dream physique, improve their nutrition,
            and build a healthy mindset—all without extreme diets or burnout.
          </p>
          <p className="text-gray-700">
            My approach is practical, personalized, and sustainable so you can
            actually maintain results long-term.
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
