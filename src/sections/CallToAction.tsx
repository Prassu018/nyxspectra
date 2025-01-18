"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
    id="help"
      ref={sectionRef}
      className="bg-gradient-to-b from-[#F0F4FF] to-[#D2DCFF] py-24 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001E80]">
            Transform Healthcare in Your Institution
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mt-5 max-w-2xl mx-auto">
            Discover how our AI-powered platform can revolutionize your healthcare workflows.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mt-2 max-w-2xl mx-auto">
            Let us help you focus on what truly matters—your patients.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center">
            {/* <button className="btn btn-primary px-8 py-4 text-lg font-semibold">
              Schedule a Demo Today
            </button>
            <button className="btn btn-secondary px-8 py-4 text-lg font-semibold flex items-center gap-2">
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5" />
            </button> */}
          </div>
        </div>

        {/* Floating Images */}
        <motion.img
          src={starImage.src}
          alt="Star decoration"
          className="absolute -left-40 top-0 w-[240px] md:w-[360px]"
          style={{ translateY }}
        />
        <motion.img
          src={springImage.src}
          alt="Spring decoration"
          className="absolute -right-40 top-20 w-[240px] md:w-[360px]"
          style={{ translateY }}
        />
      </div>

      {/* Decorative Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.5), transparent)",
        }}
      ></div>
    </section>
  );
};
