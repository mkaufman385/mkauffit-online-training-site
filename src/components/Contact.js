// // src/components/Contact.js
// import { motion } from "framer-motion";

// function Contact() {
//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="max-w-4xl mx-auto px-4 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-3xl font-bold mb-6 text-gray-900"
//         >
//           Healthcare thrives when professionals are at their best. Let’s create
//           a plan that strengthens your body, sharpens your mind, and restores
//           your energy.
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, duration: 0.7 }}
//           className="text-gray-700 mb-8"
//         >
//           Book a free 30-minute call and start your transformation today.
//         </motion.p>
//         <motion.a
//           href="https://calendly.com/mkauffit/30min"
//           target="_blank"
//           rel="noopener noreferrer"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition"
//         >
//           Book Your Free Call
//         </motion.a>
//       </div>
//     </section>
//   );
// }

// export default Contact;

//---------------------------------------------------------------

// src/components/Contact.js
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-6 text-gray-900"
        >
          Healthcare thrives when professionals are at their best. Let’s create
          a plan that strengthens your body, sharpens your mind, and restores
          your energy.
        </motion.h2>

        {/* Reduced margin below paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-700 mb-4"
        >
          Book a free 20-minute call and start your transformation today.
        </motion.p>

        <motion.a
          href="https://calendly.com/mkauffit/30min?month=2025-09"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition"
        >
          Book Your Free Call
        </motion.a>
      </div>
    </section>
  );
}

export default Contact;
