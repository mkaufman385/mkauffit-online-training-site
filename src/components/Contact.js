// import { motion } from "framer-motion";

// function Contact() {
//   return (
//     <section id="contact" className="py-16 bg-black text-white text-center">
//       <div className="max-w-xl mx-auto">
//         <h2 className="text-3xl font-bold mb-4">Ready to Transform?</h2>
//         <p className="mb-6">
//           Book a 1-on-1 call and let's create your personalized plan.
//         </p>
//         <motion.a
//           href="https://calendly.com/mkauffit/30min"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
//         >
//           Schedule Your Call
//         </motion.a>

//         <p className="text-sm text-gray-300 mt-3">
//           No obligation — just a conversation to see if we’re the right fit.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Contact;

//-------------------------------------------------------------------

// src/components/Contact.js
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-6 text-gray-900"
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-700 mb-8"
        >
          Book a free 30-minute call and start your transformation today.
        </motion.p>
        <motion.a
          href="https://calendly.com/mkauffit/30min"
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
