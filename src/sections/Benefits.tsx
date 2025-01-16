"use client"
import React, { useState } from 'react';
import { FaRegClock, FaCheckCircle, FaDollarSign, FaChartLine, FaGlobe, FaPlug } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const benefits = [
  {
    title: "Save Time and Effort",
    description:
      "Automate tedious documentation, allowing healthcare providers to focus on patients.",
    icon: <FaRegClock size={32} />,
    gradient: "from-[#00CFCF] via-[#007bff] to-[#000000]",
  },
  {
    title: "Enhance Accuracy",
    description: "Minimize errors with AI-driven insights and data scrubbing.",
    icon: <FaCheckCircle size={32} />,
    gradient: "from-[#00A5A5] via-[#0062CC] to-[#FFFFFF]",
  },
  {
    title: "Reduce Costs",
    description:
      "Optimize resources through lean workflows and automated processes.",
    icon: <FaDollarSign size={32} />,
    gradient: "from-[#00CFCF] via-[#0062CC] to-[#00A5A5]",
  },
  {
    title: "Proactive Decision-Making",
    description:
      "Leverage predictive analytics for better clinical and operational decisions.",
    icon: <FaChartLine size={32} />,
    gradient: "from-[#007bff] via-[#00A5A5] to-[#000000]",
  },
  {
    title: "Inclusive Access",
    description:
      "Multilingual capabilities cater to a broader patient base and ensure better care delivery.",
    icon: <FaGlobe size={32} />,
    gradient: "from-[#00CFCF] via-[#007bff] to-[#0062CC]",
  },
  {
    title: "Scalable and Adaptable",
    description:
      "Modular design ensures it meets the needs of small clinics and large hospital networks alike.",
    icon: <FaPlug size={32} />,
    gradient: "from-[#000000] via-[#0062CC] to-[#FFFFFF]",
  },
];

const Benefits = () => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<number | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="benefits" className="py-16 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto text-center px-8">
        <motion.h2
          className="text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Benefits
        </motion.h2>
        <p className="text-lg text-gray-600 mb-12">
          Experience the power of AI-as-a-Service with benefits that transform
          your healthcare operations.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-lg shadow-md bg-gradient-to-r ${benefit.gradient} transform transition-transform duration-300`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,  // Framer motion hover scale effect
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",  // Add box-shadow on hover
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white p-4 rounded-full">{benefit.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-lg text-gray-100">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
