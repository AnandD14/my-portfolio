import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [alert, setAlert] = useState({ type: "", message: "" });


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_9hkmkaa',
      'template_ghdrxu8',
      form.current,
      'nUZYoKB36NWL7uC36' // or public key
    ).then(
      () => console.log("Auto-reply sent to user!"),
      (error) => console.error("Failed to send auto-reply:", error)
    );

    e.preventDefault();

  emailjs.sendForm(
    'service_9hkmkaa',
    'template_vogpzbm',
    form.current,
    'nUZYoKB36NWL7uC36'
  ).then(() => {
    setAlert({
      type: "success",
      message: "🎉 Your message has been sent successfully!",
    });
    form.current.reset();
  }).catch((error) => {
    setAlert({
      type: "error",
      message: "❌ Something went wrong. Please try again later.",
    });
    console.error(error.text);
  });

  // Auto-hide after 4 seconds
  setTimeout(() => setAlert({ type: "", message: "" }), 10000);
  };

  return (
 

    <section className="py-20 px-6 text-center bg-white" id="contact">
      <h2 className="text-4xl font-semibold mb-6">Contact Me</h2>
        {alert.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mb-6 p-4 rounded-xl shadow text-center text-sm md:text-base transition-all duration-300
              ${alert.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
            `}
          >
            {alert.message}
          </motion.div>
        )}

      <form ref={form} name="contact_form" onSubmit={sendEmail} className="max-w-xl mx-auto grid gap-4">
        <input name="user_name" type="text" placeholder="Name" className="p-4 border rounded-xl" required />
        <input name="user_email" type="email" placeholder="Email" className="p-4 border rounded-xl" required />
        <textarea name="message" placeholder="Message" className="p-4 border rounded-xl h-40" required></textarea>
        <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-2xl hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}