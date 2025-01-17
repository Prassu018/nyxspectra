'use client';

import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Intro = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        {/* Intro Section */}
        <motion.div
          className="text-center px-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-[#00CFCF] to-[#007bff] text-transparent bg-clip-text mt-5">
            More About Us
          </h2>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Revolutionizing Healthcare with AI-as-a-Service
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Healthcare providers face mounting challenges: overwhelming
            documentation, inefficient workflows, and the demand for accurate
            diagnostics—all while focusing on patient care.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our AIaaS platform leverages cutting-edge artificial intelligence,
            lean manufacturing principles, and multilingual capabilities to
            automate clinical workflows, enhance decision-making, and ensure
            that every moment counts toward better patient outcomes.
          </p>
        </motion.div>

        {/* Product Showcase Section */}
        <div className="relative mt-16">
          <video
            src="/videos/nyx.mp4"
            className="mt-10 w-full max-w-[600px] mx-auto rounded-lg shadow-lg"
            loop
            controls
          />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
