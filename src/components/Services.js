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

        {/* Service Cards */}
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

        {/* Detailed Coaching Info */}
        <div className="mt-16 text-left space-y-10">
          {/* Exercise Coaching */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Exercise Coaching
            </h3>
            <p className="text-gray-700 mb-2">
              Build strength, improve endurance, and stay consistent with a
              personalized exercise program. Weekly check-ins and regular
              updates keep your plan aligned with your progress.
            </p>
            <p className="text-gray-700">
              Different support levels are available, from weekly messaging to
              daily accountability and multiple live coaching calls per week.
            </p>
          </motion.div>

          {/* Nutrition Coaching */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Nutrition Coaching
            </h3>
            <p className="text-gray-700 mb-2">
              Learn how to fuel your body for energy, performance, and recovery.
              Personalized calorie and protein targets, stress-eating
              strategies, and meal planning guidance make nutrition simple.
            </p>
            <p className="text-gray-700">
              Support ranges from weekly check-ins to daily accountability,
              video calls, and full meal audits to keep your nutrition on track.
            </p>
          </motion.div>

          {/* Exercise + Nutrition Coaching */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Exercise + Nutrition Coaching
            </h3>
            <p className="text-gray-700 mb-2">
              Combine personalized exercise and nutrition plans for maximum
              results. Weekly check-ins, program adjustments, and fueling
              guidance ensure consistency and progress.
            </p>
            <p className="text-gray-700">
              Levels of support range from foundational weekly messaging to
              premium daily accountability, multiple live calls, and on-demand
              adjustments.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;
