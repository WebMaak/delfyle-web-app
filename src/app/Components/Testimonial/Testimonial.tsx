"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import styles from "./Testimonial.module.css";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  image: string;
}

const Testimonial: React.FC = () => {
  const [active, setActive] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: headingProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "center center"],
  });
  const lineWidth = useTransform(headingProgress, [0, 1], ["2%", "30%"]);

  const testimonials: Testimonial[] = [
    // {
    //   name: "Sandipan Guha",
    //   quote:
    //     "If you want fastest processing of your company incorporation and related progressions , look no where Delfyle Solutions does it fastest as I have seen , moreover they provide with proper information and good behavioural communication through out the time period and also post work done.\n\nThanks to all the members of Delfyle for fulfilling the commitment and helping us in our endeavours.",
    //   designation: "Google Review",
    //   image: "/images/testimonial/anupal.png",
    // },
    {
      name: "Angana Roy",
      quote:
        "I had gotten in touch with them through a friend. Adwitiya was extremely helpful and prompt with all of my queries. They provided legal advice in a way which was easy to understand for a layman like me. All love and wishes to them. Would definitely recommend further.",
      designation: "Google Review",
      image: "/images/testimonial/angana-roy.png",
    },
    {
      name: "Shyam Gupta",
      quote:
        "Delfyle Solutions Private limited is one Platform to Company wonderful Work in A to Z Service.",
      designation: "Google Review",
      image: "/images/testimonial/shyam-gupta.png",
    },
    {
      name: "Mechtrobo Private Limited",
      quote:
        "Thank you Team Delfyle for on time delivering you commitment.\nRecommended by one of my friend when I'm struggling with my ITR & license related work, you people's really help us in a great manner.",
      designation: "Google Review",
      image: "/images/testimonial/anupal.png",
    },
    {
      name: "Shantanu Samaddar",
      quote:
        "The team is vey friendly in communication, yet professional in execution. Makes best and correct use of information provided and usually comes up with the best solution possible. There is usually no back and forth with information and documents to reach a conclusion or solution. In short, friendly, quick, confident and fair priced.",
      designation: "Google Review",
      image: "/images/testimonial/shantanu-samaddar.png",
    },
    {
      name: "Shashank Shekhar Singh",
      quote:
        "We've had an outstanding experience working with Delfyle. Their team has been absolutely helpful at every step—whether it was company registration, trademark filings, GST, ITR, tax audits, or accounting and other matters. They were always available, responsive, and proactive in finding the right solutions for our compliance needs.\n\nWhat sets Delfyle apart is their deep understanding of regulatory requirements and their commitment to making the process seamless and stress-free. Their support has been instrumental in helping our organization stay compliant and grow with confidence.",
      designation: "Google Review",
      image: "/images/testimonial/shashank-shekhar.png",
    },
    {
      name: "Trishila Roy",
      quote:
        "I have approached Delfyle for Trademark few months back. Loved their energy towards their work!! The team is highly professional and enthusiastic!\nGot my services delivered on time with minimal fees!\nThank you Team Delfyle! You guys are amazing. Period.",
      designation: "Google Review",
      image: "/images/testimonial/trishila.png",
    },
    {
      name: "Subhanil Basu",
      quote:
        "Great service provided by the team. The professionals are highly talented and does the work seamlessly and efficiently! Highly recommend.",
      designation: "Google Review",
      image: "/images/testimonial/subnail-basu.png",
    },
    {
      name: "Shreyash Subudhi",
      quote:
        "The team has been very helpful in delivering my needful requirements. The team have been able to provide services beyond their area of presence. A professional and humble team at the same time.",
      designation: "Google Review",
      image: "/images/testimonial/shreyash.png",
    },
  ];

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Store random rotations for each testimonial
  const [rotations, setRotations] = useState<number[]>([]);

  useEffect(() => {
    setRotations(testimonials.map(() => Math.floor(Math.random() * 21) - 10));
  }, [testimonials.length]);

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={styles.headerSection} ref={headerRef}>
          <div className={styles.headingWrapper}>
            <h2 className={styles.mainHeading}>What Our Clients Say</h2>
            <motion.div
              className={styles.progressLine}
              style={{ width: lineWidth }}
            />
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.imageSection}>
              <div className={styles.imageContainer}>
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.image}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: rotations[index] || 0,
                      }}
                      animate={{
                        opacity: index === active ? 1 : 0.7,
                        scale: index === active ? 1 : 0.95,
                        z: index === active ? 0 : -100,
                        rotate: index === active ? 0 : (rotations[index] || 0),
                        zIndex:
                          index === active
                            ? 40
                            : testimonials.length + 2 - index,
                        y: index === active ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: rotations[index] || 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className={styles.imageWrapper}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className={styles.testimonialImage}
                        priority
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            <div className={styles.textContent}>
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={styles.testimonialText}
              >
                <h3 className={styles.name}>{testimonials[active].name}</h3>
                <a
                  href="https://www.google.com/search?sca_esv=7f6b8dae05f48483&rlz=1C1ONGR_enIN1015IN1015&biw=1920&bih=945&sxsrf=AE3TifM1JLGoTvJbYKOi5PoMjuPrt10zBg:1750863458854&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_NXEe5Px8sd6iEDyWCfWu8-MKf4mES7-Y1UBYR97LuKNwLF5sYUZlFk86VNoEWFl9TvOQYDQnxBgDiANhyd8ZAw8cEAkqKOmESn7sMUUgpcfczf1FTo4UX5DiB8LZLkltJgRMeB9gJIFCfY-9BNEPs7xRBOp8xVtTdIeBc08sn-xtcXXkwuYWY5XjOGvDwhrgQkw4E%3D&q=Delfyle-+Company+Registration,+Trademark,+GST,+ITR,+ISO,+FSSAI,+Tax+Audit,+Accounting,+Taxation+Reviews&sa=X&ved=2ahUKEwiAqY_U6oyOAxXlSmwGHWAsOU0Q0bkNegQIIxAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <p
                    className={styles.designation}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        color: "#FFD700",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          style={{ marginRight: i !== 4 ? "2px" : 0 }}
                        >
                          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                        </svg>
                      ))}
                    </span>
                    {/* Google icon and designation text */}
                    {testimonials[active].designation === "Google Review" && (
                      <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <Image src="/icon/google-icon.png" alt="Google" width={32} height={32} style={{ marginRight: 4 }} />
                        <span>Google Review</span>
                      </span>
                    )}
                    {testimonials[active].designation !== "Google Review" && (
                      <span>{testimonials[active].designation}</span>
                    )}
                  </p>
                </a>
                <motion.p className={styles.quote}>
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className={styles.word}
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>

              <div className={styles.navigation}>
                <motion.button
                  className={styles.navButton}
                  onClick={handlePrev}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </motion.button>
                <motion.button
                  className={styles.navButton}
                  onClick={handleNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
