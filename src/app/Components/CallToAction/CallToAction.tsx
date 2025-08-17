// components/CallToAction.tsx
import React from "react";
import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

interface Card {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CallToActionProps {
  heading: string;
  highlighted: string;
  subheading: string;
  cards: Card[];
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  heading,
  highlighted,
  subheading,
  cards,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
}) => {
  return (
    <section className="relative bg-gradient-to-br from-pink-100 via-purple-100 to-white py-20 px-6 text-center md:px-20">
      {/* Heading & description */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-[2rem] md:text-[2.5rem] font-bold text-gray-800 leading-tight mb-4 max-w-3xl mx-auto"
      >
        {heading}
        <br />
        <span className="text-[#E50078]">{highlighted}</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl mx-auto text-base md:text-lg text-gray-600 mb-10"
      >
        {subheading}
      </motion.p>

      {/* Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <div className="text-[#E50078] text-xl mb-3">{card.icon}</div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {card.title}
            </h4>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="relative flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <a
          href={primaryBtnLink}
          className="bg-gradient-to-r from-pink-700 to-[#E50078] text-white px-8 py-4 rounded-xl shadow-lg font-medium transition transform hover:-translate-y-1 hover:shadow-xl"
        >
          {primaryBtnText}
        </a>
        <a
          href={secondaryBtnLink}
          className="border border-[#E50078] text-[#E50078] px-8 py-4 rounded-xl bg-white shadow-sm font-medium transition transform hover:-translate-y-1 hover:shadow-md"
        >
          {secondaryBtnText}
        </a>
      </div>

      {/* Fixed Call Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative flex justify-center items-center gap-2 text-gray-700 mt-4"
      >
        <FaPhone className="text-[#E50078] text-lg scale-x-[-1]" />
        <p className="text-md md:text-lg">
          For instant assistance,{" "}
          <a href="tel:+917439587419" className="text-[#E50078] font-semibold">
            Call us at +91 74395 87419
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default CallToAction;
