// "use client";
// import ArrowIcon from "@/assets/arrow-right.svg";
// import cogImage from "@/assets/cog.png";
// import cylinderImage from "@/assets/cylinder.png";
// import noodleImage from "@/assets/noodle.png";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { useRef } from "react";

// export const Hero = () => {
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   });

//   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

//   return (
//     <section
//       ref={heroRef}
//       className="relative pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden"
//       style={{
//         background: "radial-gradient(ellipse at bottom left,  #183EC2, #EAEEFE 100%)",
//       }}
//     >
//       <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
//         <div className="md:flex items-center justify-between">
//           {/* Left Content */}
//           <div className="md:w-1/2">
//             <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
//               Transforming Healthcare Operations with AI-Powered Automation & Intelligence
//             </h1>
//             <p className="text-lg md:text-xl text-[#010D3E] mt-6">
//               Streamline workflows, enhance decision-making, and empower healthcare providers with a cutting-edge AI-as-a-Service platform.
//             </p>
//             <div className="mt-8 flex gap-4">
//               <button className="btn btn-primary px-6 py-3 text-lg font-semibold">
//                 Schedule a Demo Today!
//               </button>
//               <button className="btn btn-secondary px-6 py-3 text-lg font-semibold flex items-center gap-2">
//                 <span>Learn More</span>
//                 {/* <Image src={ArrowIcon} alt="Arrow Icon" width={16} height={16} /> */}
//               </button>
//             </div>
//           </div>

//           {/* Right Visuals */}
//           <div className="relative mt-16 md:mt-0 md:w-1/2">
//             <motion.img
//               src={cogImage.src}
//               alt="Cog Image"
//               className="absolute md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] -top-20 left-10"
//               animate={{
//                 translateY: [-20, 20],
//               }}
//               transition={{
//                 repeat: Infinity,
//                 repeatType: "mirror",
//                 duration: 4,
//                 ease: "easeInOut",
//               }}
//             />
//             {/* <motion.img
//               src={cylinderImage.src}
//               alt="Cylinder Image"
//               className="absolute hidden md:block md:w-[220px] md:h-[220px] top-40 left-0"
//               style={{ translateY }}
//             />
//             <motion.img
//               src={noodleImage.src}
//               alt="Noodle Image"
//               className="absolute hidden lg:block lg:w-[150px] lg:h-[150px] bottom-10 right-10 rotate-[15deg]"
//               style={{ translateY }}
//             /> */}
//           </div>
//         </div>
//       </div>

//       {/* Decorative Overlay */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background:
//             "radial-gradient(ellipse 120% 80% at bottom right, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0))",
//         }}
//       ></div>
//     {/* </section> */}
//   );
// };
"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
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
              {/* <button className="btn btn-primary"> Schedule a Demo Today!</button> */}
              <button className="btn btn-text flex gap-1">
                {/* <span>Learn more</span> */}
                {/* <ArrowIcon classname="h-2 w-2" /> */}
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
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
