"use client";

import { motion } from "framer-motion";

export const Intro = () => {
  return (
    <motion.section
      className="bg-gray-50 py-16 px-8"
      initial={{ opacity: 0, y: 100 }} // Larger vertical displacement
      whileInView={{ opacity: 1, y: 0 }} // Slide to original position
      viewport={{ once: true, amount: 0.4 }} // Trigger when 40% is visible
      transition={{ duration: 1, ease: "easeOut" }} // Smoother and longer animation
    >
      <div id="about" className="container mx-auto text-center">
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-[#00CFCF] to-[#007bff] text-transparent bg-clip-text mt-5">
          More About Us
        </h2>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Revolutionizing Healthcare with AI-as-a-Service
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
          Healthcare providers face mounting challenges: overwhelming documentation, inefficient workflows, and the demand for accurate diagnostics—all while focusing on patient care.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our AIaaS platform leverages cutting-edge artificial intelligence, lean manufacturing principles, and multilingual capabilities to automate clinical workflows, enhance decision-making, and ensure that every moment counts toward better patient outcomes.
        </p>
      </div>
    </motion.section>
  );
};
