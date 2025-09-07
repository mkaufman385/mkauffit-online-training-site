// import { motion } from "framer-motion";

// function Testimonials() {
//   const testimonials = [
//     {
//       name: "Sarah, 36 – Busy Mom",
//       quote:
//         "Working with Matthew completely changed how I approach fitness. I feel stronger, more confident, and I didn’t have to give up my favorite foods.",
//       images: ["/images/sarah-before.jpg", "/images/sarah-after.jpg"],
//     },
//     {
//       name: "James, 27 – Former College Athlete",
//       quote:
//         "After struggling post-college, Matthew helped me find structure again and get back into peak shape, all while balancing a full-time job.",
//       images: ["/images/james.jpg"],
//     },
//     {
//       name: "Linda, 62 – Retired",
//       quote:
//         "I was intimidated by the idea of starting at my age, but Matthew made everything approachable. I've lost weight, gained strength, and feel 20 years younger.",
//       images: [],
//     },
//   ];

//   return (
//     <section id="testimonials" className="py-16 bg-gray-50">
//       <div className="max-w-5xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold mb-12">Client Transformations</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((t, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.7, delay: index * 0.2 }}
//               whileHover={{ scale: 1.03 }}
//               className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//             >
//               {t.images?.length > 0 && (
//                 <div className="flex gap-2 justify-center mb-4">
//                   {t.images.map((img, i) => (
//                     <img
//                       key={i}
//                       src={img}
//                       alt={t.name}
//                       className="w-24 h-24 object-cover rounded-lg border"
//                     />
//                   ))}
//                 </div>
//               )}
//               <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
//               <p className="font-semibold text-gray-900">{t.name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;

//---------------------------------------------------------------------------

// src/components/Testimonials.js
import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah, 36 – Busy Mom",
      quote:
        "Working with Matthew completely changed how I approach fitness. I feel stronger, more confident, and I didn’t have to give up my favorite foods.",
      images: ["/images/sarah-before.jpg", "/images/sarah-after.jpg"],
    },
    {
      name: "James, 27 – Former College Athlete",
      quote:
        "After struggling post-college, Matthew helped me find structure again and get back into peak shape, all while balancing a full-time job.",
      images: ["/images/james.jpg"],
    },
    {
      name: "Linda, 62 – Retired",
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
