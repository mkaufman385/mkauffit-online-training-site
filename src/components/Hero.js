import { motion } from "framer-motion";

function Hero() {
  const steps = [
    "Intention",
    "Behavior",
    "Habit",
    "Practice",
    "Second Nature",
    "Identity",
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center gap-12 bg-gradient-to-r from-orange-100 to-white rounded-xl">
      {/* Left: Text */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 leading-tight"
        >
          <span className="block">Long Shifts Are Inevitable.</span>
          <span className="block text-orange-500 mt-1">
            Feeling Out of Shape Doesn’t Have to Be.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl mb-4 max-w-2xl mx-auto md:mx-0 text-gray-700"
        >
          You care for patients. I’ll help you care for yourself.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-base md:text-lg mb-6 max-w-2xl mx-auto md:mx-0 text-gray-700 leading-relaxed"
        >
          You repeatedly struggle with consistency and fatigue and want to get
          back in shape, shed the post-COVID weight, and feel confident again!
        </motion.p>

        {/* 🔥 Animated Framework Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mb-6 max-w-2xl mx-auto md:mx-0"
        >
          <p className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
            From Intention to Identity
          </p>

          <div className="pl-4 border-l-4 border-orange-500 bg-gradient-to-r from-orange-100/60 to-transparent rounded-r-lg py-2">
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-2">
              {steps.map((step, index) => (
                <motion.span
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  className="text-sm md:text-base text-gray-700 flex items-center"
                >
                  {step}
                  {index < steps.length - 1 && (
                    <span className="mx-2 text-orange-500">➡️</span>
                  )}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.a
          href="https://calendly.com/mkauffit/30min?month=2025-09"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition"
        >
          Book Your Free 20-Min Call
        </motion.a>
      </div>

      {/* Right: Portrait */}
      <div className="flex-1 flex justify-center md:justify-end items-center">
        <motion.img
          src="/images/matthewHeadshot.jpg"
          alt="Matthew Kaufman"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover object-[60%_50%] shadow-lg flex-shrink-0"
        />
      </div>
    </section>
  );
}

export default Hero;
