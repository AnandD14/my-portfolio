import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <motion.img 
        src="/anand_image.jpg" 
        alt="Anand Darshan" 
        className="w-40 h-40 rounded-full mb-4 shadow-lg" 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ delay: 0.5 }}
      />
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Anand Darshan</h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-10">
        Experienced Full Stack Engineer | Full Stack Developer | Backend Engineer | Software Engineer | Software Developer | Data Engineer 
      </p>
      <a href="#portfolio" className="bg-black text-white py-3 px-6 rounded-2xl shadow-lg hover:bg-gray-800 mb-10">
        View My Work
      </a>

      {/* Quote Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-2xl text-gray-700 text-lg md:text-xl italic border-l-4 border-blue-500 pl-6"
      >
        <blockquote>
          “I’m highly flexible with programming languages—syntax may differ, but the core principles remain the same. What truly matters is a solid understanding of software development lifecycle and architecture.”
          <span className="block mt-3 text-right text-gray-600 text-base not-italic">— Anand Darshan</span>
        </blockquote>
      </motion.div>
    </motion.section>
  );
}
