// import React from "react";
// import { motion } from "framer-motion";
// import TitleBlend from "../TitleBlend/TitleBlend";
// import Contents from "../Contents/Contents";
// import Background from "../Background/Background";
// import styles from "./hero.module.css";

// const Hero: React.FC = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { 
//       opacity: 0
//     },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut" as const
//       }
//     }
//   };

//   return (
//     <motion.div 
//       className={styles.heroSection}
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <motion.div variants={itemVariants}>
//         <Background />
//       </motion.div>
//       <div className={styles.contentWrapper}>
//         <div className={styles.contentContainer}>
//           <motion.div variants={itemVariants}>
//             <TitleBlend />
//           </motion.div>
//           <motion.div variants={itemVariants}>
//             <Contents />
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Hero;
 

"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import TitleBlend from "../TitleBlend/TitleBlend";
import Contents from "../Contents/Contents";
import Background from "../Background/Background";
import styles from "./hero.module.css";

// Parent container animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

// Child fade-up animation
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ Correctly typed easing
    },
  },
};

const Hero: React.FC = () => {
  return (
    <motion.section
      className={styles.heroSection}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Keep background static to avoid re-animation */}
      <Background />

      <div className={styles.contentWrapper}>
        <div className={styles.contentContainer}>
          <motion.div variants={itemVariants}>
            <TitleBlend />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Contents />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
