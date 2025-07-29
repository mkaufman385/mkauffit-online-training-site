function Services() {
  return (
    <section id="services" className="py-12">
      <h2 className="text-3xl font-bold mb-4 text-center">Services</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">1-on-1 Online Coaching</h3>
          <p>Customized workouts, progress tracking, and weekly check-ins.</p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Nutrition Guidance</h3>
          <p>Personalized plans to fuel your body and reach your goals.</p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Mindset Support</h3>
          <p>Break through barriers with simple, science-backed strategies.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
