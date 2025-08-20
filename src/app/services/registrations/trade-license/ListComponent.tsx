import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ListComponent = () => {
  return (
    <>
    <section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
          Trade License Registration in India
        </h2>
        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
          Ensure Legal Compliance and Business Credibility with a Trade License
        </p>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Types of Trade Licenses */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">Types of Trade Licenses Issued</h3>
            <ul className="space-y-2">
              {[
                "Type A: Required for all food service establishments.",
                "Type B: Issued to manufacturing and processing units using machinery and electricity.",
                "Type C: For high-risk activities such as producing fireworks or wood and timber structures.",
                "Gumasta License: Trade license in Maharashtra; called differently in other states."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
                  <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility Criteria */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">Eligibility to Apply for Trade License</h3>
            <ul className="space-y-2">
              {[
                "Applicants must be over 18 years old.",
                "Applicants should not have criminal records.",
                "Proposed business must comply with all legal requirements and regulations."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
                  <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents Required */}
          <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">Documents Required for Trade License</h3>
            <ul className="space-y-2">
              {[
                "Completed Form-353: Municipal application form.",
                "Letter of Approval from proprietor or neighboring commercial property owner.",
                "City Census Map indicating the location of your business property.",
                "Tax Statements related to the property or business.",
                "Building Plan, if applicable (required for explosives or hazardous materials).",
                "Additional documentation requested by the Municipal Ward Officer during registration."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
                  <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>

    <section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
          Penalties for Non-Compliance
        </h2>
        <p className="text-center text-base md:text-lg mb-10 text-gray-600 max-w-3xl mx-auto">
          Operating a business without a valid trade license or not adhering to the conditions of the license can lead to fines, penalties, and even business closure.
        </p>

        {/* Why Trade License is Important */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 mb-8 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Why an Online Trade License is Crucial</h3>
          <p className="text-gray-600 text-base md:text-base">
            An online trading license is crucial for operating a business legally and smoothly in India. It ensures compliance with local laws and builds trust among customers and other stakeholders.
          </p>
        </div>

        {/* Delfyle Assistance */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Obtain Your Trade License Easily with Delfyle</h3>
          <p className="text-gray-600 text-base md:text-base">
            Delfyle offers comprehensive assistance in obtaining a trading license in India, simplifying the complex process for businesses. Our team of experts guides clients through every step, from application submission to obtaining the license. With extensive knowledge of the regulatory requirements and procedures, we ensure that all necessary documents are accurately prepared and filed with the relevant authorities.
          </p>
        </div>
      </div>
    </section>


    </>



  );
};

export default ListComponent;
