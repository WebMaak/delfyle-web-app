"use client";

import React from "react";
import styles from "../ComponentEleven/ComponentEleven.module.css";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TrademarkRegistrationProps {
  heading?: string;
  subHeading?: string;
  description?: string;
  features: FeatureItem[];
}

const TrademarkRegistration: React.FC<TrademarkRegistrationProps> = ({
  heading = "Types of Trademark Registrations in India",
  subHeading = "Trademark Registration Guide",
  description = "In India, various trademark registrations cater to different needs and purposes, enabling consumers to recognize products and services associated with specific providers.",
  features,
}) => {
  const half = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, half);
  const rightFeatures = features.slice(half);

  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#b40068] font-semibold mb-2">{subHeading}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">{heading}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column (Right-aligned text) */}
          <div className="flex flex-col gap-10">
            {leftFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-end max-w-xl ml-auto bg-white p-6 rounded-xl shadow-lg border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 justify-end mb-2">
                  <h3 className="font-semibold text-lg text-right">{feature.title}</h3>
                  <div className="text-[#B40068] text-2xl">{feature.icon}</div>
                </div>
                <p className="text-gray-600 text-base text-right">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Right Column (Left-aligned text) */}
          <div className="flex flex-col gap-10">
            {rightFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start max-w-xl bg-white p-6 rounded-xl shadow-lg border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-[#B40068] text-2xl">{feature.icon}</div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrademarkRegistration;
