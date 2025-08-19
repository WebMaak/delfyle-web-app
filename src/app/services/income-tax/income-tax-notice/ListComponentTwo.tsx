import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdWarningAmber } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import React from "react";

const ListComponent = () => {
  return (
<section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-5xl mx-auto">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      Income Tax Notices & How Delfyle Helps
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Income Tax Notices may be issued even if you have filed your ITR. Delfyle helps you understand, respond, and remain compliant.
    </p>

    {/* Two-column procedural content */}
    <div className="grid gap-6 md:grid-cols-2">
      {/* Left Column: Section 143(2) */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">
          Notice Under Section 143(2) of the Income Tax Act
        </h3>
        <p>
          A notice under Section 143(2) is issued when your return is selected for scrutiny assessment. This means the Assessing Officer (AO) wants to examine your return more closely to ensure:
        </p>
        <ul className="space-y-2">
          {[
            "Income has not been understated",
            "Excessive losses have not been claimed",
            "Tax liability has not been underpaid"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base">
              <FaTimesCircle className="text-[#E50078] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2">
          This notice is usually followed by a questionnaire and request for supporting documents. The AO must issue this notice within 3 months after the end of the relevant assessment year.
        </p>
        <p className="italic text-[#790046] mt-2">
          Example: If Mohan filed his return on 19 June 2024 for AY 2024–25, the last date for issuing notice under Section 143(2) would be 31 August 2025.
        </p>

        
      </div>

      {/* Right Column: Smaller reminders/examples */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h4 className="text-md font-semibold mt-4 text-[#1a1a1a]">How to Respond to Notice u/s 143(2):</h4>
        <ul className="space-y-3">
          {[
            "Review Thoroughly: Go through the notice and annexures to understand the reason for scrutiny.",
            "Prepare Your Response: Draft a clear explanation, addressing each query.",
            "Attach Supporting Documents: Provide all requested records like salary slips, investment proofs, bank statements, etc."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
          {/* Nested list for Submit Online */}
          <li className="flex flex-col gap-2">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%] font-semibold">Submit Online:</span>
            </div>
            <ul className="list-decimal list-inside ml-8 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Log in to the Income Tax e-filing portal</li>
              <li>Navigate to e-Proceedings</li>
              <li>Upload your cover letter and documents</li>
              <li>Submit your response</li>
            </ul>
          </li>
        </ul>

        <h4 className="text-md font-semibold mt-4 text-[#1a1a1a]">How Delfyle Assists You?</h4>
        <ul className="space-y-3">
          {[
            "Quick Notice Verification: Identify whether it is an intimation or scrutiny notice.",
            "Expert Documentation: Draft accurate responses and attach necessary evidence.",
            "Seamless Compliance: Avoid penalties and handle scrutiny with professional support."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[#790046]">
          With Delfyle, you can respond to Income Tax notices confidently and ensure full compliance with the law.
        </p>
      </div>
    </div>

    {/* Full-width container for Section 245 */}
    <div className="mt-12 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold text-[#1a1a1a]">
        Notice Under Section 245 of the Income Tax Act – Meaning, Reasons & Response
      </h3>
      <p>
        A Notice under Section 245 of the Income Tax Act is issued when the Assessing Officer (AO) finds that you have an outstanding tax demand from previous years, and they propose to adjust it against your current year’s refund.
      </p>
      <p>However, such an adjustment can only be made if:</p>
      <ul className="space-y-2 text-sm md:text-base text-[#1a1a1a]">
        {["A proper notice is issued to the taxpayer","The taxpayer is given a fair opportunity to respond"].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <FaTimesCircle className="text-[#E50078] m-1 text-lg" />
            <span className="w-[90%]">{item}</span>
          </li>
        ))}
      </ul>
      <p className="font-semibold text-[#E50078] mt-2">📌 Response Timeline:</p>
      <p className="italic text-[#E50078] mt-1">
        You must reply within 30 days of receiving the notice. If you fail to respond, the Income Tax Department (ITD) may assume that you agree to the adjustment and proceed accordingly.
      </p>
      <p className="italic text-[#E50078] mt-2">
        👉 Pro Tip: Always verify the accuracy of the outstanding demand before allowing your refund to be adjusted.
      </p>
    </div>
  </div>
</section>


  );
};

export default ListComponent;
