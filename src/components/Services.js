// import { motion } from "framer-motion";

// function Services() {
//   const services = [
//     {
//       title: "1-on-1 Online Coaching",
//       desc: "Custom workouts, progress tracking, and weekly guidance designed to fit your busy life.",
//     },
//     {
//       title: "Nutrition Guidance",
//       desc: "Personalized meal strategies that fuel your body and help you reach your goals without extreme restrictions.",
//     },
//     {
//       title: "Mindset Support",
//       desc: "Practical, science-backed strategies to break through barriers and stay consistent for life-changing results.",
//     },
//   ];

//   return (
//     <section id="services" className="py-16 bg-gray-50">
//       <h2 className="text-3xl font-bold mb-12 text-center">What I Offer</h2>
//       <div className="grid gap-8 md:grid-cols-3">
//         {services.map((s, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7, delay: i * 0.2 }}
//             className="p-8 border rounded-xl shadow hover:shadow-lg transition"
//           >
//             <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
//             <p>{s.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Services;

//---------------------------------------------------------------------------------------

// src/components/Services.js
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Personal Training",
      desc: "Custom workouts that fit your life and goals.",
    },
    {
      title: "Nutrition Coaching",
      desc: "Sustainable plans that fuel your body and lifestyle.",
    },
    {
      title: "Mindset Coaching",
      desc: "Build confidence and consistency that lasts.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="p-8 border border-gray-200 rounded-xl shadow hover:shadow-lg transition bg-white"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {s.title}
              </h3>
              <p className="text-gray-700">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
