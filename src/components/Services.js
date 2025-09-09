// src/components/Services.js
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // Make sure heroicons is installed

function Services() {
  const [expanded, setExpanded] = useState(null);

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

  const detailedCoaching = [
    {
      title: "Exercise Coaching",
      summary:
        "Build strength, improve endurance, and stay consistent with a personalized exercise program.",
      details: [
        "Weekly check-ins and regular updates keep your plan aligned with your progress.",
        "Support levels range from weekly messaging to daily accountability and multiple live coaching calls per week.",
      ],
    },
    {
      title: "Nutrition Coaching",
      summary:
        "Learn how to fuel your body for energy, performance, and recovery.",
      details: [
        "Personalized calorie and protein targets, stress-eating strategies, and meal planning guidance make nutrition simple.",
        "Support ranges from weekly check-ins to daily accountability, video calls, and full meal audits to keep your nutrition on track.",
      ],
    },
    {
      title: "Exercise + Nutrition Coaching",
      summary:
        "Combine personalized exercise and nutrition plans for maximum results.",
      details: [
        "Weekly check-ins, program adjustments, and fueling guidance ensure consistency and progress.",
        "Support ranges from foundational weekly messaging to premium daily accountability, multiple live calls, and on-demand adjustments.",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Services</h2>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
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
        <div className="space-y-6 text-left">
          {detailedCoaching.map((s, i) => (
            <motion.div
              key={i}
              className="border border-gray-200 rounded-xl shadow bg-white cursor-pointer p-6"
              onClick={() => setExpanded(expanded === i ? null : i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {s.title}
                </h3>
                <motion.div
                  animate={{ rotate: expanded === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-6 w-6 text-gray-600" />
                </motion.div>
              </div>
              <p className="text-gray-700">{s.summary}</p>

              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 space-y-2 text-gray-700"
                  >
                    {s.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
