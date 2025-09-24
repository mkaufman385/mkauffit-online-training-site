// src/components/Testimonials.js
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      name: "🩺 Dennis, 34 – Gastroenterologist & Dad",
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
      name: "🩺 Ryan, 44 – Cardiologist & Dad",
      quote:
        "Working with Matt has been a game changer. He tailors my workouts seamlessly to my busy schedule as a cardiologist, combining home sessions, gym workouts, and classes—each supported with easy-to-follow video instruction. Beyond the training, we also dive into nutrition, with a focus on protein intake and balancing strength with endurance to support my road cycling, which is my main sport. After just six weeks, I already feel stronger and more confident on the bike, with real improvements in my foundation. Matt’s thoughtful, personalized approach makes all the difference.",
      images: [],
    },
    {
      name: "🗣️💬 Richard, 74 – Speech Language Pathologist",
      quote:
        "Over the past several years, Matt has been an exceptional trainer who has consistently assisted me in achieving my fitness objectives. His extensive training knowledge and evidence-based workout routines instill confidence in his commitment to my success in my pursuit of optimal health.",
      images: [],
    },
    {
      name: "🩺 Elena, 43 – Hospitalist",
      quote:
        "I’ve had a fantastic experience training with Matt. He is very professional and knowledgeable. I appreciate his encouraging style—motivating me without ever being pushy. Because I have orthopedic injuries, he carefully adjusts exercises so I can train safely while still making progress. I feel supported and confident every session, highly recommended!",
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
      name: "🩺 Melanie, 42 – Case Management Nurse",
      quote:
        "Working with Matthew Kauffman has been such a positive experience. Through his guidance, I saw real progress not just in my strength and overall fitness, but in reaching my weight loss goals. He introduced me to strategies like incline treadmill walking, which became a game-changer for burning calories and accelerating my results. Beyond exercise, Matthew offered practical advice on nutrition and mindset that made sticking to my goals feel achievable and sustainable. His calm, personable approach kept me motivated and focused, and he tracked my progress in a way that made every step forward feel rewarding. I always felt stronger, more confident, and inspired to keep improving.  ",
      images: [],
    },
    {
      name: "🔬 Nadim, 26 – Medical Researcher",
      quote:
        "Working with Matt has made a huge difference in my fitness journey. He helped me improve my form, stay consistent with timing, and strike the right balance between weight lifting and cardio. On top of that, he shared practical tips and life hacks—especially for getting more protein into my routine—which made a big impact. Matt’s approach is motivating, thoughtful, and easy to follow. I’ve definitely seen progress thanks to his guidance.",
      images: [],
    },
    {
      name: "💊 Eileen, 63 – Clinical Pharmacist",
      quote:
        "I retired from my full-time position as a Clinical Pharmacist in 2023 and that’s when I finally committed to improving my fitness. Working with Matthew has been such a positive experience. As an older client, I had concerns about trying new exercises, but Matt’s guidance always made me feel safe and confident. He is incredibly knowledgeable about health and wellness and always takes the time to answer my questions thoroughly. Every plan he provided was well thought out and tailored to my needs. Matt is friendly, patient, and supportive, and anyone at any level of fitness would benefit from his guidance.",
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
    <section id="testimonials" className="py-20 bg-gray-100">
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
