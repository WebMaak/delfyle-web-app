"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const companyLogos = [
  "/CompanyLogos/1.png",
  "/CompanyLogos/2.png",
  "/CompanyLogos/3.png",
  "/CompanyLogos/4.png",
  "/CompanyLogos/5.png",
  "/CompanyLogos/6.png",
  "/CompanyLogos/7.png",
  "/CompanyLogos/8.png",
  "/CompanyLogos/9.png",
  "/CompanyLogos/10.png",
  "/CompanyLogos/11.png",
  "/CompanyLogos/12.png",
  "/CompanyLogos/13.png",
  "/CompanyLogos/14.png",
  "/CompanyLogos/15.png",
  "/CompanyLogos/16.png",
  "/CompanyLogos/17.png",
  "/CompanyLogos/18.png",
  "/CompanyLogos/19.png",
  "/CompanyLogos/20.png",
  "/CompanyLogos/21.png",
  "/CompanyLogos/22.png",
  "/CompanyLogos/23.png",
  "/CompanyLogos/24.png",
  "/CompanyLogos/25.png",
  "/CompanyLogos/26.png",
  "/CompanyLogos/27.png",
  "/CompanyLogos/28.png",
  "/CompanyLogos/29.png",
  "/CompanyLogos/30.png",
];

interface LogoCarouselProps {
  batchSize?: number;
  interval?: number;
}

export default function LogoCarousel({
  batchSize = 9,
  interval = 3000,
}: LogoCarouselProps) {
  const [currentBatch, setCurrentBatch] = useState(0);
  const totalBatches = Math.ceil(companyLogos.length / batchSize);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBatch((prev) => (prev + 1) % totalBatches);
    }, interval);

    return () => clearInterval(timer);
  }, [totalBatches, interval]);

  const startIdx = currentBatch * batchSize;
  const batchLogos = companyLogos.slice(startIdx, startIdx + batchSize);

  return (
    <div className="relative w-full overflow-hidden flex justify-center items-center h-32">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentBatch}
          className="py-10 absolute top-0 left-0 w-full flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {batchLogos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="w-32 h-22 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Logo ${i}`}
                width={150}
                height={75}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
