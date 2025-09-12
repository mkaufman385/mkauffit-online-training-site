// src/components/Testimonials.js
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      name: "🩺 Dennis, 34 – Doctor & Dad",
      quote:
        "I have worked with Matt for the past three years. Despite my irregular and often unpredictable schedule as a physician, Matt helped me to set goals and to achieve what I needed to improve my physical health, proactively, setting up exercise routines that were perfect to keep me progressing towards my goals. More importantly, Matt was a genuinely warm and caring person whose presence also provided motivation to continue working towards improved physical fitness. His unique blend of humor and encouragement makes him an exceptional coach.",
      images: [],
    },
    {
      name: "🏥 Kelly, 51 – Hospital Executive",
      quote:
        "I was intimidated by the idea of starting at my age, but Matthew made everything approachable and tailored to my needs. With his guidance, I've not only lost weight and gained strength, but I also feel more energetic and confident in my day-to-day life. His programs are realistic for a busy schedule, and his support kept me motivated every step of the way. I truly feel 20 years younger and healthier than I have in decades.",
      images: [],
    },
    {
      name: "🩺 Michael, 43 – Nurse Practitioner & Dad",
      quote:
        "Before working with Matthew, I felt unsure in the gym. He not only taught me proper technique to stay injury-free, but also explained the why behind each exercise so I could see how it connected to my goals in strength, endurance, and muscle growth. His coaching style is approachable yet challenging, which made training fun and motivating. Now I feel confident walking into the gym, knowing I have the foundation to keep progressing — and if I ever need a new challenge, Matthew will be my first call.",
      images: [],
    },
    {
      name: "🏥 Diane, 70 – Hospital Social Worker",
      quote:
        "Matthew helped me get back in the groove with my exercising routine after a health setback. His style and approach was very helpful – he’s both low key but focused and knowledgeable. He really starts with what you can do and builds from there. I always enjoyed my training sessions and looked forward to them. The regular commitment to physical activity helped me manage the stresses of life and of work much better.",
      images: [],
    },
    {
      name: "🔬 Nadim, 26 – Medical Researcher",
      quote:
        "Working with Matt has made a huge difference in my fitness journey. He helped me improve my form, stay consistent with timing, and strike the right balance between weight lifting and cardio. On top of that, he shared practical tips and life hacks—especially for getting more protein into my routine—which made a big impact. Matt’s approach is motivating, thoughtful, and easy to follow. I’ve definitely seen progress thanks to his guidance.",
      images: [],
    },
    {
      name: "❤️🔬 Lovedeep, 29 – Cardiovascular Postdoc Associate",
      quote:
        "I had the best experience training with Matt! He’s super methodical and really helped me learn the right form for every exercise. He pushed me just enough to get stronger without ever feeling unsafe. Plus, he was super flexible with timing and just great fun to be around. I started training to get in shape for my wedding, and I ended up feeling amazing!",
      images: [],
    },
    {
      name: "🔬 Yu, 35 – Postdoc Associate - Medical Researcher & Mom",
      quote:
        "Working with Matt was a really positive experience. He brought the perfect balance of motivation and knowledge to every workout. I appreciated how he took the time to understand my goals and tailor each workout to help me get stronger and more confident. His energy and commitment made a real difference, and I always felt supported. I would definitely recommend Matt to anyone looking for a skilled and approachable coach!",
      images: [],
    },
    {
      name: "👉 Future You – HealthCare Hero",
      quote:
        "Wow… is this really me? I’ve lost weight, gained strength, and actually enjoy working out now! Matthew made it easy, even with my crazy schedule, and guided me on my nutrition too. I feel energized, confident, and ready to crush anything—both at work and in life. This isn’t just a transformation, it’s my new favorite version of myself! And guess what? This is YOU—your next success story!",
      images: [],
    },
  ];

  const [visibleCards, setVisibleCards] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update visibleCards based on window width
  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 2);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - visibleCards : prev - visibleCards
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + visibleCards >= testimonials.length ? 0 : prev + visibleCards
    );
  };

  // Calculate width for flex items
  const cardWidth = 100 / visibleCards;

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          Client Transformations
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: `-${currentIndex * cardWidth}%` }}
            transition={{ type: "tween", duration: 0.5 }}
            className="flex"
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex-none px-2"
                style={{ width: `${cardWidth}%` }}
              >
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition h-full">
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
                  <p className="font-semibold text-gray-900 mb-2">{t.name}</p>
                  <p className="text-gray-700 italic text-sm">“{t.quote}”</p>
                </div>
              </div>
            ))}

            {/* Duplicate first few cards for smooth infinite loop */}
            {testimonials.slice(0, visibleCards).map((t, idx) => (
              <div
                key={`dup-${idx}`}
                className="flex-none px-2"
                style={{ width: `${cardWidth}%` }}
              >
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition h-full">
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
                  <p className="font-semibold text-gray-900 mb-2">{t.name}</p>
                  <p className="text-gray-700 italic text-sm">“{t.quote}”</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full shadow hover:bg-orange-600 transition"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full shadow hover:bg-orange-600 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
