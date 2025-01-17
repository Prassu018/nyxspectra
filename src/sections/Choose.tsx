'use client';

import React from 'react';
import { FaIndustry, FaRobot, FaLanguage, FaShieldAlt, FaGlobeAmericas, FaStethoscope } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Importing framer-motion for animations
import { useInView } from 'react-intersection-observer'; // Importing useInView to trigger scroll-based animations

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Built on Lean Manufacturing Principles',
      description: 'Designed to eliminate waste and improve efficiency.',
      icon: <FaIndustry className="text-4xl text-primary" />,
    },
    {
      title: 'AI-Powered Intelligence',
      description: 'Proactive insights, predictive analytics, and clinical decision support.',
      icon: <FaRobot className="text-4xl text-primary" />,
    },
    {
      title: 'Real-Time Multilingual Transcription',
      description: 'Bridging communication gaps across languages.',
      icon: <FaLanguage className="text-4xl text-primary" />,
    },
    {
      title: 'Auto-Scrubbing for Compliance',
      description: 'Ensures clean, accurate data for seamless operations.',
      icon: <FaShieldAlt className="text-4xl text-primary" />,
    },
    {
      title: 'Global Standards',
      description: 'FHIR/HL7-compliant for easy integration with existing systems.',
      icon: <FaGlobeAmericas className="text-4xl text-primary" />,
    },
    {
      title: 'Specialty-Specific Modules',
      description: 'Tailored solutions for various medical fields, from oncology to radiology.',
      icon: <FaStethoscope className="text-4xl text-primary" />,
    },
  ];

  // Scroll-in view trigger
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the section comes into view
    threshold: 0.3, // Trigger when 30% of the section is in view
  });

  return (
    <section id="why-us" className="py-16  bg-gray-50 text-black" ref={ref}>
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us?
        </motion.h2>
        <p className="text-lg mb-12">Our Unique Differentiators</p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-6 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
