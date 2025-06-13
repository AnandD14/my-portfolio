import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Christopher Z.",
      role: "Manager/Engineering Lead ",
      quote:
        "Anand is one of the most dependable developers I’ve worked with. He’s not only technically skilled but also incredibly collaborative and thoughtful in every team interaction. His learning mindsert is second to none."
    },
    {
      name: "Arief Y.",
      role: "Senior Software Engineer",
      quote:
        "Whether it's helping troubleshoot a deployment issue or helping other devs, Anand brings patience, clarity, positvity and a calm confidence that uplifts the whole team."
    },
    {
      name: "Betty T.",
      role: "Senior Software Engineer",
      quote:
        "Working with Anand is a joy. He always takes time to understand the user perspective and translates it beautifully into elegant, reliable code."
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="testimonials"
      className="py-20 px-6 bg-white text-center"
    >
      <h2 className="text-4xl font-semibold mb-12">What My Colleagues Say</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-100 p-6 rounded-2xl shadow-md text-left"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
            <div className="text-sm text-gray-600 font-medium">
              — {t.name}, {t.role}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
