// src/components/Services.js
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "1-on-1 Online Coaching",
      desc: "Custom workouts designed to fit unpredictable shifts and busy schedules.",
    },
    {
      title: "Nutrition Guidance",
      desc: "Practical meal strategies for long hours, on-call nights, and hospital cafeterias—without sacrificing results.",
    },
    {
      title: "Mindset & Stress Support",
      desc: "Science-backed methods to manage stress, improve sleep, and build lasting consistency—even in high-pressure environments.",
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
