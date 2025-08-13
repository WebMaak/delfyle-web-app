import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";

const ListComponent = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
        Trademark Validity & Renewal
        </h2>
        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
        A trademark registered through expedited examination holds the same validity as a standard registration—10 years from the date of registration. It can be renewed indefinitely in 10-year increments.
        Delfyle offers proactive renewal reminders and filing assistance to maintain your trademark rights without interruption.

        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left - Who Can File ITR-6 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Benefits of Expedited Trademark Registration</h3>
          <ul className="space-y-4">
            {[
              "Swift Brand Protection – Secure your brand rights quickly to avoid misuse",
              "Business Readiness – Ideal for product launches, funding rounds, or market expansion",
              "Investor Confidence – Strengthens brand credibility for investment purposes",
              "Legal Advantage – Reduces risk of third-party infringement during the waiting period",
              "Support for Start-ups & MSMEs – Enables faster market entry and compliance",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                <span className="w-[90%]">{item}</span>
              </li>
            ))}
          </ul>
        </div>


        {/* Right - Who Cannot File ITR-6 & Due Dates */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">How Delfyle Supports Expedited Trademark Registration?</h3>
          <p className="text-center text-base md:text-lg mb-10 text-gray-600">
          At Delfyle, we streamline your journey to fast-track trademark protection with comprehensive support:
          </p>
          <ul className="space-y-4">
            {[
              "Pre-Filing Analysis: Thorough conflict checks and eligibility confirmation",
              "Legal Drafting: Accurate and complete preparation of forms and documents",
              "Online Submission: Efficient filing through the Trademark Registry’s portal",
              "Real-Time Tracking: Constant monitoring and status updates",
              "Objection Handling: Professional drafting of replies and representation",
              "Hearing Representation: Skilled advocacy before the Registrar, if required",
              "Post-Registration Assistance: Renewal guidance and long-term brand protection",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                <span className="w-[90%]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>
        
        <h2 className="text-3xl mt-10 md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
        Secure Your Brand, faster – Choose Delfyle
        </h2>
        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
        In an age where brand identity defines market success, don’t let delays put your business at risk. Opt for Expedited Trademark Registration with Delfyle and get your trademark secured swiftly and professionally.
        Contact us today for expert assistance and ensure your brand’s future is protected from day one.
        </p>
      </div>
    </section>


  );
};

export default ListComponent;
