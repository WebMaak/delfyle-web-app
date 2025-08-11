import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";

const ListComponent = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
          Trademark Hearing Process
          </h2>
          <p className="text-center text-base md:text-lg mb-10 text-gray-600">
          What is Trademark Hearing process and how Delfyle supports you to get through it?
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Left - Who Can File ITR-6 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">Trademark Hearing Process</h3>
            {/* <p className="text-left text-base md:text-lg mb-10 text-gray-600">
            </p> */}
            <ul className="space-y-4">
              {[
                "Examination Report: If objections arise during examination, a report is issued.",
                "Reply to Examination: Applicant must respond within 30 days to address objections.",
                "Hearing Notice Issued: If objections persist, a Show Cause Hearing notice is issued.",
                "Scheduling and Filing: Delfyle helps schedule the hearing and file supporting documents.",
                "Hearing Appearance: Our legal experts represent you at the hearing to argue the merits of your case.",
                "Decision: Registrar decides to accept, refuse, or require further clarification based on evidence.",

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
            <h3 className="text-lg font-semibold text-[#1a1a1a]">How Delfyle Supports Your Trademark Hearing?</h3>
            <p className="text-left text-base md:text-lg mb-10 text-gray-600">
            At Delfyle, we ensure end-to-end support throughout the trademark hearing journey:
            </p>          
            <ul className="space-y-4">
              {[
                "Dedicated IP Lawyers: Experienced professionals well-versed in Indian trademark law.",
                "Evidence Collection & Filing: We help gather compelling usage documents and prepare your hearing file.",
                "Professional Representation: Our team appears on your behalf to present a persuasive case.",
                "Clear Communication: We keep you updated throughout the process, ensuring transparency.",
                "Affordable & Justifiable Fees: Our pricing reflects the quality of representation and service provided.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                  <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                  <span className="w-[90%]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
          Facing a trademark hearing? 
          </h2>
          <p className="text-center text-base md:text-lg mb-10 text-gray-600">
          Don't leave your brand's future to chance. Contact Delfyle for expert legal representation and protect what's rightfully yours!
          </p>
        </div>
      </div>
    </section>


  );
};

export default ListComponent;
