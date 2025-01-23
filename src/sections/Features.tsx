'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'; // Import the Image component

// Data for the features
const features = [
  {
    title: "AI-Powered Clinical Documentation",
    details: [
      "Automates the creation of SOAP notes and medical reports in real-time.",
      "Uses multilingual transcription for inclusivity across diverse regions.",
      "Seamlessly converts voice to text, minimizing manual input.",
    ],
    image: "/Images/AI-Powered.jpeg",
  },
  {
    title: "AI-Assisted Diagnostics and Insights",
    details: [
      "Provides diagnostic suggestions (DDx) to support clinical decisions.",
      "Continuously learns from patient data to improve diagnostic accuracy and reduce bias.",
    ],
    image: "/Images/AI-diagnostic.jpeg",
  },
  {
    title: "Predictive Analytics for Patient Care",
    details: [
      "Leverages real-time data to predict patient risks and recommend treatment plans.",
      "Offers proactive alerts for resource allocation and scheduling.",
    ],
    image: "/Images/predictive-analytics.jpeg",
  },
  {
    title: "Auto-Scrubbing and Medical Coding",
    details: [
      "Automatically cleans and structures clinical notes for compliance and accuracy.",
      "Generates precise ICD codes, simplifying billing and record-keeping.",
    ],
    image: "/Images/Auto-Scrubbing.webp",
  },
  {
    title: "Seamless Integration",
    details: [
      "Fully interoperable with existing EHR/HMS systems.",
      "Built on global standards like FHIR and HL7 for easy implementation.",
    ],
    image: "/Images/integration.webp",
  },
  {
    title: "End-to-End Encryption and Data Protection",
    details: [
      "Ensures all patient data is encrypted during storage and transmission.",
      "Adheres to global data privacy standards, including HIPAA, GDPR, and DPDPA compliance.",
    ],
    image: "/Images/End-to-End.jpg",
  },
];

// const Features = () => {
//   const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<number | null>(null);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   return (
//     <motion.section
//       id="features"
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
//       transition={{ duration: 0.8 }}
//       className="bg-gray-50 py-16 px-8 relative"
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Feature Selector */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
//             Features That Set Us Apart
//           </h2>
//           <ul className="space-y-6">
//             {features.map((feature, index) => (
//               <motion.li
//                 key={index}
//                 onClick={() => setSelectedFeatureIndex(index)}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                 className={`cursor-pointer p-6 rounded-lg shadow-lg border transition-all ease-in-out duration-300 ${
//                   index === selectedFeatureIndex
//                     ? "bg-blue-100 border-blue-600"
//                     : "bg-white border-gray-300 hover:shadow-2xl hover:border-blue-400"
//                 }`}
//               >
//                 <div className="flex items-center space-x-4">
//                   <h3
//                     className={`text-xl font-semibold ${
//                       index === selectedFeatureIndex ? "text-blue-600" : "text-gray-700"
//                     }`}
//                   >
//                     {feature.title}
//                   </h3>
//                 </div>
//               </motion.li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* Feature Details or Default Image */}
//         <motion.div
//           className="relative w-full h-full overflow-hidden rounded-xl"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 50 }}
//           transition={{ duration: 0.6 }}
//         >
//           {selectedFeatureIndex === null ? (
//             <Image
//               src="/Images/defaultimg.jpg"
//               alt="Default Feature Illustration"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-xl"
//             />
//           ) : (
//             <>
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">{features[selectedFeatureIndex].title}</h3>
//               <ul className="space-y-4 text-gray-600 text-lg">
//                 {features[selectedFeatureIndex].details.map((detail, index) => (
//                   <motion.li
//                     key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.2, duration: 0.5 }}
//                     className="flex items-start"
//                   >
//                     <span className="text-blue-600 mr-2">•</span>
//                     {detail}
//                   </motion.li>
//                 ))}
//               </ul>
//               <div className="overflow-hidden rounded-xl mt-6">
//                 <Image
//                   src={features[selectedFeatureIndex].image}
//                   alt={features[selectedFeatureIndex].title}
//                   layout="responsive"
//                   width={800}
//                   height={450}
//                   className="rounded-xl"
//                 />
//               </div>
//             </>
//           )}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };
const Features = () => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Ensure default content is consistent for both server and client
  const selectedFeature = selectedFeatureIndex !== null ? features[selectedFeatureIndex] : null;
  return (
    <motion.section
      id="features"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-50 py-16 px-8 relative"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Feature Selector */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Features That Set Us Apart
          </h2>
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                onClick={() => setSelectedFeatureIndex(index)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
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
              </motion.li>
            ))}
          </ul>
        </motion.div>
  
{/* Feature Details or Default Image */}
<motion.div
  className="relative w-full h-full overflow-hidden rounded-xl"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 50 }}
  transition={{ duration: 0.6 }}
>
  {selectedFeature === null ? (
    <Image
      src="/Images/defaultimg.jpg"
      alt="Default Feature Illustration"
      width={800}
      height={450}
      className="rounded-xl"
    />
  ) : (
    <>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        {selectedFeature.title}
      </h3>
      <ul className="space-y-4 text-gray-600 text-lg">
        {selectedFeature.details.map((detail, index) => (
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
      <div className="overflow-hidden rounded-xl mt-6">
        <Image
          src={selectedFeature.image}
          alt={selectedFeature.title}
          width={800}
          height={450}
          className="rounded-xl"
        />
      </div>
    </>
  )}
</motion.div>

      </div>
    </motion.section>
  );
};

export default Features;


// export default Features;
