// function Contact() {
//   return (
//     <section id="contact" className="py-12">
//       <div className="max-w-xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-4">Contact</h2>
//         <p className="mb-4">
//           Ready to get started? Let’s talk about your goals.
//         </p>
//         <a
//           href="mailto:mkauffit@gmail.com?subject=Training Inquiry&body=Hi Matthew,%0D%0A%0D%0AI’m interested in learning more about your training and nutrition services."
//           className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
//         >
//           Send a Message
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Contact;

//----------------------------------------------------

import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-16 bg-black text-white text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform?</h2>
        <p className="mb-6">
          Book a 1-on-1 call and let's create your personalized plan.
        </p>
        <motion.a
          href="https://calendly.com/mkauffit/30min"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Schedule Your Call
        </motion.a>

        <p className="text-sm text-gray-300 mt-3">
          No obligation — just a conversation to see if we’re the right fit.
        </p>
      </div>
    </section>
  );
}

export default Contact;
