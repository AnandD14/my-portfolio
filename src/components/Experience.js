import React from 'react';
import { motion } from "framer-motion";

export default function Experience() {
   const experience = [
    {
      role: "Software Engineer",
      company: "Shell Energy Australia",
      date: "May 2022 – May 2025",
      description: "Worked on eProfiler, MMS, and FFA-Lite using React, .NET, AWS(Lambda, S3,DynamoDB, SQS, SNS, EC2, ECS, Step Functions, CloudWatch, CloudFormation), Salesforce, Confluent Cloud, and Datadog."
    },
    {
      role: "Associate Software Engineer",
      company: "Deerwalk Services Pvt Ltd",
      date: "April 2016 – June 2017",
      description: "Built dashboards and automation tools using Laravel, FusionCharts, Python, and AWS."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true }}
      className="py-20 px-6 bg-gray-50" 
      id="experience"
    >
      <h2 className="text-4xl font-semibold text-center mb-12">Experience</h2>
      <div className="max-w-4xl mx-auto">
        {experience.map((item, index) => (
          <motion.div 
            key={index} 
            className="mb-10 border-l-4 border-blue-500 pl-6 relative"
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ delay: index * 0.2 }} 
            viewport={{ once: true }}
          >
            <div className="absolute top-1 left-[-10px] w-4 h-4 bg-blue-500 rounded-full"></div>
            <h3 className="text-2xl font-semibold">{item.role} - {item.company}</h3>
            <span className="text-sm text-gray-500">{item.date}</span>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}