// function Services() {
//   return (
//     <section id="services" className="py-12">
//       <h2 className="text-3xl font-bold mb-4 text-center">Services</h2>
//       <div className="grid gap-6 md:grid-cols-3">
//         <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold mb-2">1-on-1 Online Coaching</h3>
//           <p>Customized workouts, progress tracking, and weekly check-ins.</p>
//         </div>
//         <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold mb-2">Nutrition Guidance</h3>
//           <p>Personalized plans to fuel your body and reach your goals.</p>
//         </div>
//         <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold mb-2">Mindset Support</h3>
//           <p>Break through barriers with simple, science-backed strategies.</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;

//----------------------------------------------------------------------

import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "1-on-1 Online Coaching",
      desc: "Custom workouts, progress tracking, and weekly guidance designed to fit your busy life.",
    },
    {
      title: "Nutrition Guidance",
      desc: "Personalized meal strategies that fuel your body and help you reach your goals without extreme restrictions.",
    },
    {
      title: "Mindset Support",
      desc: "Practical, science-backed strategies to break through barriers and stay consistent for life-changing results.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-12 text-center">What I Offer</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            className="p-8 border rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
