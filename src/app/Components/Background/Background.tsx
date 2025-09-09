// "use client";
// import React from "react";
// import styles from "./background.module.css";

// const Background = () => {
//   return (
//     <div className={`${styles.canvas} spline-background`}>
//       <video
//         src="/Backgrounds/hero-bg.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//       />
//     </div>
//   );
// };

// export default Background;


"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./background.module.css";

const Background: React.FC = () => {
  return (
    <motion.div
      className={`${styles.canvas} spline-background`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <video
        src="/Backgrounds/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // improves loading
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default Background;
