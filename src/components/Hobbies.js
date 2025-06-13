import { motion } from "framer-motion";

export default function Hobbies() {
  const hobbies = [
    { name: "Hiking", icon: "🥾" },
    { name: "Reading", icon: "📚" },
    { name: "Cooking", icon: "🍳" },
    { name: "Playing Guitar", icon: "🎸" },
    { name: "Watching Meaningful Movies", icon: "🎬" },
    { name: "Spending Time with Friends & Family", icon: "👨‍👩‍👧‍👦" }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 px-6 bg-gray-100"
      id="hobbies"
    >
      <h2 className="text-4xl font-semibold text-center mb-4">Hobbies & Interests</h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12 text-lg">
        Outside the keyboard, here’s what fills my heart and fuels my creativity.
      </p>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            className="p-6 w-full bg-white rounded-2xl shadow-md hover:shadow-xl flex flex-col items-center transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="text-5xl mb-3"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: index * 0.1 }}
            >
              {hobby.icon}
            </motion.span>
            <span className="text-lg font-medium text-gray-700 text-center">{hobby.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
