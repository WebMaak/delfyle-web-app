import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";

const ListComponent = () => {
  return (
   <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      Understanding Income Tax Notices
    </h2>

    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Income Tax Notices may be issued even if you have filed your ITR. Delfyle helps you understand, respond, and remain compliant.
    </p>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Left Column - Section 133(6) */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">IT Notice Under Section 133(6)</h3>
        <p>As per the E-Verification Scheme 2021, the Income Tax Department can issue a notice under Section 133(6) if there are mismatches between the details declared in your ITR and the information captured in your Annual Information Statement (AIS).</p>

        <h4 className="text-md font-semibold text-[#1a1a1a] mt-4">Common Reasons:</h4>
        <ul className="space-y-3">
          {[
            "ITR not filed despite income exceeding the basic exemption limit, as per AIS data.",
            "Income such as salary, capital gains, or interest reflected in AIS but not reported accurately in the ITR.",
            "High-value expenses (e.g., property purchase, foreign travel, mutual fund/stocks) not in line with declared income."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>

        <h4 className="text-md font-semibold text-[#1a1a1a] mt-4">Steps to Respond to Notice u/s 133(6):</h4>
        <ul className="space-y-3">
          {[
            "Review Carefully: Compare your ITR with AIS data to identify discrepancies.",
            "Login to IT Portal: Navigate to Login > Pending Actions > Compliance Portal > E-Verification.",
            "Submit Response: Fill the questionnaire and upload supporting documents as required."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column - Section 142(1) */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">If the Mistake is on Your Part:</h3>
        <ul className="space-y-3">
          {[
            "File an Updated Return under Section 139(8A).",
            "Pay any additional tax/penalty due.",
            "Submit supporting documents with your response.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaTimesCircle  className="text-red-500 m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold text-[#1a1a1a]">If the Error is on ITD’s Side:</h3>
        <ul className="space-y-3">
          {[
            "Provide a clear written explanation via the portal.",
            "Attach relevant evidence to prove correctness.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaTimesCircle  className="text-red-500 m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
        
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Notice Under Section 142(1) of the Income Tax Act</h3>
        <p>A notice under Section 142(1) is issued by the Assessing Officer (AO) in two key situations:</p>
        <ul className="space-y-3">
          {[
            "When ITR is filed: The AO may request additional documents, explanations, or clarifications to verify the correctness of the return and complete the assessment.",
            "When ITR is not filed: The AO may direct the taxpayer to file their return within the specified time limit.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
        <p>The purpose of this notice is to collect all necessary information for a fair and transparent assessment of your income.</p>
      </div>
    </div>

    {/* Full-width Bottom Container - Critical / Unique items */}
    <div className="mt-12 bg-gray-50 p-6 rounded-xl shadow-inner border border-gray-200">
      <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">Consequences of Not Responding to a Notice under Section 142(1):</h3>
      <ul className="space-y-3">
        {[
          "Penalty: A fine of ₹10,000 for each instance of non-compliance.",
          "Prosecution: May result in imprisonment of up to 1 year.",
          "Both Penalty & Prosecution: In certain cases, both actions can be taken simultaneously."
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-red-500 m-1 text-lg" />
            <span className="w-[90%]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>


  );
};

export default ListComponent;
