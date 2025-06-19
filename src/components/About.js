import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true }}
      className="py-20 px-6 bg-gray-50 text-center" 
      id="about"
    >
      <h2 className="text-4xl font-semibold mb-6">About Me</h2>

      <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
        <p>
          A dedicated Software Developer/Engineer with a passion for building intuitive, user-focused applications. I emphasize clean architecture, scalable cloud solutions, and continuous improvement in every project. Adaptable, dependable, and collaborative—with strong technical and interpersonal skills. 
        </p>

       <h4 className="text-3xl font-semibold mb-6">My Motivation</h4>
        <p>
          I believe I was created to bring glory to God—not just through what I build with code, but through how I live and love. I strive every day to be the best father I can be to my child, a loving and present husband and son, a friend you can always count on, a brother who stands by you, and a colleague who's always ready to lend a hand.
        </p>

        <p>
          In a world that moves fast and often forgets the heart, I hold close the values of compassion, kindness, understanding, and grace. Because to truly make an impact—at work or in life—it’s not just about what we achieve, but how we care along the way.
        </p>
      </div>

      <a 
        href="/docs/anand_resume.pdf" 
        download 
        className="inline-block mt-8 bg-blue-600 text-white py-2 px-5 rounded-xl shadow hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </motion.section>
  );
}
