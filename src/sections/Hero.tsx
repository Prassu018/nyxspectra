
"use client";
// import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import mobileh from "@/assets/mobileh.png"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip"
      style={{ background: "radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 100%)" }}
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Transforming Healthcare Operations with AI-Powered Automation & Intelligence
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Streamline workflows, enhance decision-making, and empower healthcare providers with a cutting-edge AI-as-a-Service platform.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
            <a href="mailto:info@nyxspectra.com"><button className="btn btn-primary">Contact Us</button></a>

              <button className="btn btn-text flex gap-1">
                {/* <span>Learn more</span> */}
                {/* <ArrowIcon classname="h-2 w-2" /> */}
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1  relative">
            <motion.img
              src={mobileh.src}
              alt="Cog"
              className="md:absolute md:h-[688px] max-md:hidden md:w-auto md:max-w-none sm:left-[-300px] "
              
            />
            <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="Noodle image"
              className="hidden lg:block top-[524px] left-[448px] absolute rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
