import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ListComponent = () => {
  return (
<section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      ISO Certification in India
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Achieve Global Quality Standards to Strengthen Your Business
    </p>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {/* Types of ISO Certification */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Types of ISO Certification</h3>
        <ul className="space-y-2 text-sm md:text-base text-gray-600">
          <li><span className="font-semibold">ISO 9001:</span> Quality Management Systems</li>
          <li><span className="font-semibold">ISO 14001:</span> Environmental Management Systems</li>
          <li><span className="font-semibold">ISO 45001:</span> Occupational Health & Safety</li>
          <li><span className="font-semibold">ISO/IEC 27001:</span> Information Security Management</li>
          <li><span className="font-semibold">ISO 22000:</span> Food Safety Management</li>
          <li><span className="font-semibold">ISO 50001:</span> Energy Management</li>
          <li><span className="font-semibold">ISO 26000:</span> Social Responsibility</li>
          <li><span className="font-semibold">ISO 31000:</span> Risk Management</li>
          <li><span className="font-semibold">ISO 37001:</span> Anti-Bribery Management</li>
          <li><span className="font-semibold">ISO 13485:</span> Medical Devices</li>
          <li><span className="font-semibold">ISO/IEC 17025:</span> Testing and Calibration Labs</li>
        </ul>
      </div>

      {/* Requirements for ISO Certification */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Requirements for Certification</h3>
        <ul className="space-y-2 text-sm md:text-base text-gray-600">
          <li><span className="font-semibold">Establish a Management System:</span> Set up a system (e.g., QMS) as per the chosen standard.</li>
          <li><span className="font-semibold">Document Processes:</span> Create manuals, SOPs, and procedures.</li>
          <li><span className="font-semibold">Staff Training:</span> Ensure all employees understand the system.</li>
          <li><span className="font-semibold">Internal Audits:</span> Conduct regular internal reviews and correct non-conformities.</li>
          <li><span className="font-semibold">Maintain Records:</span> Keep a record of all system activities and process controls.</li>
        </ul>
      </div>

      {/* The ISO Certification Process */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">The ISO Certification Process in India</h3>
        <ul className="space-y-2 text-sm md:text-base text-gray-600">
          {[
            "Step 1: Identify the Right ISO Standard for your business.",
            "Step 2: Select an Accredited Certification Body (e.g., NABCB).",
            "Step 3: Document your management system with manuals and SOPs.",
            "Step 4: Implement the standard and ensure it is functioning effectively.",
            "Step 5: Undergo a Stage 1 Audit (documentation review).",
            "Step 6: Undergo a Stage 2 Audit (on-site assessment).",
            "Step 7: Receive your ISO Certificate upon successful completion.",
            "Step 8: Maintain certification through periodic surveillance audits.",
            "Step 9: Plan for re-certification every three years."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Delfyle Assistance */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">How Delfyle Simplifies Your ISO Journey</h3>
        <ul className="space-y-2 text-sm md:text-base text-gray-600">
          {[
            "Expert consultation to choose the perfect standard.",
            "Comprehensive support for documentation and implementation.",
            "Seamless coordination with accredited certification bodies.",
            "Guidance through all stages of the audit process.",
            "Post-certification support to help you maintain compliance."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          Ready to enhance your business credibility? Delfyle is your trusted partner for a smooth and successful ISO certification process.
        </p>
      </div>

    </div>
  </div>
</section>

  );
};

export default ListComponent;
