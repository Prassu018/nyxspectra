"use client"
import React, { useState, useEffect } from 'react';
import { FaRegClock, FaCheckCircle, FaDollarSign, FaChartLine, FaGlobe, FaPlug } from 'react-icons/fa';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
    icon: <FaRegClock className="text-blue-500 w-12 h-12 sm:w-16 sm:h-16" />,
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    icon: <FaCheckCircle className="text-blue-500 w-12 h-12 sm:w-16 sm:h-16" />,
  },
  {
    title: "Cost Efficiency",
    description:
      "Optimize resources with lean workflows and automated processes that lower your operational costs.",
    icon: <FaDollarSign className="text-blue-500 w-12 h-12 sm:w-16 sm:h-16" />,
  },
  {
    title: "Predictive Insights",
    description:
      "Leverage predictive analytics to make data-driven decisions and boost operational performance.",
    icon: <FaChartLine className="text-blue-500 w-12 h-12 sm:w-16 sm:h-16" />,
  },
  {
    title: "Global Reach",
    description:
      "Ensure accessibility with multilingual capabilities that cater to a broader audience and improve user experience.",
    icon: <FaGlobe className="text-blue-500 w-12 h-12 sm:w-16 sm:h-16" />,
  },
  {
    title: "Scalable Solutions",
    description:
      "Flexible and modular designs make it adaptable for small businesses and enterprise-level organizations alike.",
    icon: <FaPlug className="text-blue-500 w-12 h-12 sm:w-16 sm:h-16" />,
  },
];

const Benefits = () => {
  const [hasMounted, setHasMounted] = useState(false);  // State to track if the component has mounted

  useEffect(() => {
    setHasMounted(true);  // Set to true once the component is mounted
  }, []);

  if (!hasMounted) {
    return null;  // Return nothing until the component is mounted to avoid hydration mismatch
  }

  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">Benefits</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-10 sm:mb-12">
          Experience the power of AI-as-a-Service with benefits that transform your healthcare operations.
        </p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 sm:p-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-start sm:justify-center"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex justify-center mb-4 sm:mb-6">{benefit.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
