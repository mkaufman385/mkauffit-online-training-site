function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-4">
          Ready to get started? Let’s talk about your goals.
        </p>
        <a
          href="mailto:mkauffit@gmail.com?subject=Training Inquiry&body=Hi Matthew,%0D%0A%0D%0AI’m interested in learning more about your training and nutrition services."
          className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Send a Message
        </a>
      </div>
    </section>
  );
}

export default Contact;
