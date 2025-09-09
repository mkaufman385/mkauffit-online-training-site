// src/components/Testimonials.js
import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      name: "Dennis, 34 – Doctor & Dad",
      quote:
        "I have worked with Matt for the past three years. Despite my irregular and often unpredictable schedule as a physician, Matt helped me to set goals and to achieve what I needed to improve my physical health, proactively, setting up exercise routines that were perfect to keep me progressing towards my goals. More importantly, Matt was a genuinely warm and caring person whose presence also provided motivation to continue working towards improved physical fitness. His unique blend of humor and encouragement makes him an exceptional coach.",
      images: [],
    },
    {
      name: "Nadim, 26 – Medical Researcher",
      quote:
        "Working with Matt has made a huge difference in my fitness journey. He helped me improve my form, stay consistent with timing, and strike the right balance between weight lifting and cardio. On top of that, he shared practical tips and life hacks—especially for getting more protein into my routine—which made a big impact. Matt’s approach is motivating, thoughtful, and easy to follow. I’ve definitely seen progress thanks to his guidance.",
      images: [],
    },
    {
      name: "Kelly, 51 – Hospital Executive",
      quote:
        "I was intimidated by the idea of starting at my age, but Matthew made everything approachable. I've lost weight, gained strength, and feel 20 years younger.",
      images: [],
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          Client Transformations
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {t.images?.length > 0 && (
                <div className="flex gap-2 justify-center mb-4">
                  {t.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={t.name}
                      className="w-24 h-24 object-cover rounded-lg border"
                    />
                  ))}
                </div>
              )}
              <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
              <p className="font-semibold text-gray-900">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
