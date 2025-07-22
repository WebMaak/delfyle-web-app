"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./contents.module.css";
import HeroImage from "../../../../public/images/hero-image-2.png";
import Button from "../Button/Button";

const Contents = () => {
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <div className={styles.contents}>
      <div className={styles.description}>
        <p className={styles.p}>
        From registration to regulation, Delfyle is your trusted partner for seamless business setup, accounting,  legal compliance, HR, and more.

        </p>
        <div className={styles.buttons} >
          <Button text="Chat with our expert" type="smallWhatWeDoButton" href="https://wa.me/917439587419" ></Button>
        </div>
      </div>
      <motion.div
        animate={floatingAnimation}
        className={styles['hero-image']}
      >
        <Image alt="hero image" src={HeroImage} width={10000} height={5000} />
      </motion.div>
    </div>
  );
};

export default Contents;
