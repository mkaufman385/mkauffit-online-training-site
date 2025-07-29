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
        "After years of struggling post-college, Matthew helped me find structure again and get back into peak shape, all while balancing a full-time job.",
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
    <section
      id="testimonials"
      className="py-16 bg-white border-t border-gray-200"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Client Transformations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
