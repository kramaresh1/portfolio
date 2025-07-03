import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xovwbpqz");

  return (
    <section id="contact" className="p-12 bg-gray-100 text-gray-800">
      <h3 className="text-4xl font-bold mb-6 border-b-2 border-yellow-400 inline-block">Contact</h3>

      {state.succeeded ? (
        <p className="text-green-600 text-lg">Thanks! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded"
          />

          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded"
          />

          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-3 border rounded"
          />

          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded font-semibold"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
