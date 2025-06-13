import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      image: "/images/eprofiler.png",
      title: "eProfiler – Powermetric Portal",
      description: "A web platform for internal staff and customers to access dashboards, reports, and meter data insights. Key features include user management, custom report groups, and impersonation for support efficiency.",
      features: [
        "Migrated legacy Ember codebase to React",
        "Implemented AWS Cognito & SIMAAS for secure SSO",
        "Aligned with Shell’s BCR compliance",
        "Built ETL with DMS, S3, Step Functions, Athena"
      ]
    },
    {
      image: "/images/mms.jpg",
      title: "MMS – Meter Management System",
      description: "A core operational platform that integrates CRM data, manages invoicing, facilitates B2B communication with market operators, and supports field operations for meter installation and maintenance.",
      features: [
        "Enhanced system logging for better monitoring",
        "Implemented rules engine for validations",
        "Improved CI/CD for faster release cycles"
      ]
    },
    {
      image: "/images/ffa-lite.png",
      title: "FFA-Lite",
      description: "Field operations and scheduling app built on Salesforce, enabling real-time updates for technicians and dispatchers.",
      features: [
        "Integrated Confluent Cloud logs with Datadog",
        "Built automated testing pipelines",
        "Configured sink connectors to Salesforce"
      ]
    },
    {
      image: "/images/clear.jpg",
      title: "CLEAR – Deerwalk",
      description: "Real-time healthcare analytics platform with dashboards, data processing automation, and optimized reporting.",
      features: [
        "Optimized SQL queries for performance",
        "Automated reporting with Python & cron jobs",
        "Built interactive dashboards using FusionCharts"
      ]
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true }}
      className="py-20 px-6" 
      id="portfolio"
    >
      <h2 className="text-4xl font-semibold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="rounded-2xl shadow-lg overflow-hidden bg-white transition-all duration-300" 
            whileHover={{ scale: 1.02 }} 
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img src={project.image} className="w-full h-60 object-cover" alt={project.title} />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{project.description}</p>
              <ul className="list-disc text-sm text-gray-600 ml-5 space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}