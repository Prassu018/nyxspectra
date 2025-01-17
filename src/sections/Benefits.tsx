'use client';

import React from 'react';
import { FaRegClock, FaCheckCircle, FaDollarSign, FaChartLine, FaGlobe, FaPlug } from 'react-icons/fa';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: "Integration ecosystem",
    description:
      "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
    icon: <FaRegClock size={64} className="text-blue-500" />, // Icon size increased
  },
  {
    title: "Goal setting and tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    icon: <FaCheckCircle size={64} className="text-blue-500" />, // Icon size increased
  },
  {
    title: "Cost Efficiency",
    description:
      "Optimize resources with lean workflows and automated processes that lower your operational costs.",
    icon: <FaDollarSign size={64} className="text-blue-500" />, // Icon size increased
  },
  {
    title: "Predictive Insights",
    description:
      "Leverage predictive analytics to make data-driven decisions and boost operational performance.",
    icon: <FaChartLine size={64} className="text-blue-500" />, // Icon size increased
  },
  {
    title: "Global Reach",
    description:
      "Ensure accessibility with multilingual capabilities that cater to a broader audience and improve user experience.",
    icon: <FaGlobe size={64} className="text-blue-500" />, // Icon size increased
  },
  {
    title: "Scalable Solutions",
    description:
      "Flexible and modular designs make it adaptable for small businesses and enterprise-level organizations alike.",
    icon: <FaPlug size={64} className="text-blue-500" />, // Icon size increased
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center px-8">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="h-[320px] p-10 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center" // Height increased
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
