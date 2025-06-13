import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: '💻',
      columns: [
        ['C#', '.NET', 'TypeScript', 'React', 'Java', 'Python', 'PHP', 'Scala', 'JavaScript', 'jQuery'],
        ['Flutter', 'HTML', 'CSS', 'Bootstrap', 'Laravel', 'Spring', 'Struts', 'Android', 'Django']
      ],
    },
    {
      title: 'Databases & ORM',
      icon: '🗄️',
      items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Hibernate ORM', 'Slick ORM'],
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      items: ['AWS', 'Docker', 'Azure DevOps', 'Confluent Cloud'],
    },
    {
      title: 'Version Control',
      icon: '🔀',
      items: ['GIT', 'GitHub', 'Azure Repos'],
    },
    {
      title: 'Tools & IDEs',
      icon: '🛠️',
      items: ['IntelliJ', 'VS Code', 'Visual Studio', 'PhpStorm'],
    },
    {
      title: 'Soft Skills',
      icon: '🤝',
      items: ['Effective communicator', 'Analytical thinker', 'Team-oriented', 'Self-motivated & adaptable', 'Quality-focused'],
    },
  ];

  const educationList = [
    {
      icon: "🎓",
      title: "Master’s Degree",
      subtitle: "Information Technology & Systems (MITS)",
      details: "University of Tasmania, Graduated 2019"
    },
    {
      icon: "🎓",
      title: "Bachelor’s Degree",
      subtitle: "Information Management (BIM)",
      details: "St. Xavier’s College, Kathmandu – Graduated 2015"
    },
    {
      icon: "📜",
      title: "Certifications",
      subtitle: "AWS Developer – Associate",
      details: "Issued Feb 2024 • Expires Feb 2027"
    },
    {
      icon: "📜",
      title: "Professional Year",
      subtitle: "ACS Program",
      details: "Indus Institute, Hobart – Graduated 2020"
    },
    {
      icon: "🛡️",
      title: "Secure Code Warrior",
      subtitle: "Genin OWASP Top 10",
      details: ""
    },
  ]

  return (
    <>
      <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-gray-50"
    >
      <h2 className="text-4xl font-semibold text-center mb-12">Core Competencies</h2>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl flex flex-col items-center text-center transition-all duration-300"
          >
            <span className="text-4xl mb-4 hover:scale-110 transition-transform duration-300">{cat.icon}</span>
            <h3 className="text-xl font-medium mb-2">{cat.title}</h3>
            {cat.columns ? (
              <div className="grid grid-cols-2 gap-x-6 text-gray-600 text-left mt-2">
                {cat.columns.map((col, colIdx) => (
                  <ul key={colIdx} className="space-y-1">
                    {col.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            ) : (
              <ul className="text-gray-600 text-left space-y-1 mt-2">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>

    <motion.section
      id="education"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-white"
    >
      <h2 className="text-4xl font-semibold text-center mb-12">Education & Certifications</h2>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {educationList.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl text-center"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
            <p className="text-gray-700 italic mb-2">{item.subtitle}</p>
            {item.details && <p className="text-gray-600">{item.details}</p>}
          </motion.div>
        ))}
      </div>
    </motion.section>
    </>
  );
}