'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion'; // Correct import
import { useInView } from 'react-intersection-observer';


// Data for the features
const features = [
  {
    title: "AI-Powered Clinical Documentation",
    details: [
      "Automates the creation of SOAP notes and medical reports in real-time.",
      "Uses multilingual transcription for inclusivity across diverse regions.",
      "Seamlessly converts voice to text, minimizing manual input.",
    ],
    image: "/Images/AI-Powered.jpeg", // Replace with actual image paths
  },
  {
    title: "AI-Assisted Diagnostics and Insights",
    details: [
      "Provides diagnostic suggestions (DDx) to support clinical decisions.",
      "Continuously learns from patient data to improve diagnostic accuracy and reduce bias.",
    ],
    image: "/Images/AI-diagnostic.jpeg", // Replace with actual image paths
  },
  {
    title: "Predictive Analytics for Patient Care",
    details: [
      "Leverages real-time data to predict patient risks and recommend treatment plans.",
      "Offers proactive alerts for resource allocation and scheduling.",
    ],
    image: "/Images/predictive-analytics.jpeg", // Replace with actual image paths
  },
  {
    title: "Auto-Scrubbing and Medical Coding",
    details: [
      "Automatically cleans and structures clinical notes for compliance and accuracy.",
      "Generates precise ICD codes, simplifying billing and record-keeping.",
    ],
    image: "/Images/Auto-Scrubbing.webp", // Replace with actual image paths
  },
  {
    title: "Seamless Integration",
    details: [
      "Fully interoperable with existing EHR/HMS systems.",
      "Built on global standards like FHIR and HL7 for easy implementation.",
    ],
    image: "/Images/integration.webp", // Replace with actual image paths
  },
  {
    title: "End-to-End Encryption and Data Protection",
    details: [
      "Ensures all patient data is encrypted during storage and transmission.",
      "Adheres to global data privacy standards, including HIPAA, GDPR, and DPDPA compliance.",
    ],
    image: "/Images/End-to-End.jpg", // Replace with actual image paths
  },
];

const Features = () => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<number | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the section comes into view
    threshold: 0.3, // Trigger when 30% of the section is in view
  });

  return (
    <section  id="features" ref={ref} className="bg-gray-50 py-16 px-8 relative">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
      >
        {/* Feature Selector */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Features That Set Us Apart</h2>
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li
                key={index}
                onClick={() => setSelectedFeatureIndex(index)}
                className={`cursor-pointer p-6 rounded-lg shadow-lg border transition-all ease-in-out duration-300 ${
                  index === selectedFeatureIndex
                    ? "bg-blue-100 border-blue-600"
                    : "bg-white border-gray-300 hover:shadow-2xl hover:border-blue-400"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <h3
                    className={`text-xl font-semibold ${
                      index === selectedFeatureIndex ? "text-blue-600" : "text-gray-700"
                    }`}
                  >
                    {feature.title}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Feature Details */}
        {selectedFeatureIndex !== null && (
          <motion.div
            className="p-6 bg-white rounded-lg shadow-xl border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{features[selectedFeatureIndex].title}</h3>
            <ul className="space-y-4 text-gray-600 text-lg">
              {features[selectedFeatureIndex].details.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="flex items-start"
                >
                  <span className="text-blue-600 mr-2">•</span>
                  {detail}
                </motion.li>
              ))}
            </ul>
            <div className="overflow-hidden rounded-xl">
              <img
                src={features[selectedFeatureIndex].image}
                alt={features[selectedFeatureIndex].title}
                className="w-full h-64 m-4 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Features;
