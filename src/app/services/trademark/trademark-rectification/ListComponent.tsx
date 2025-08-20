import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ListComponent = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
          Trademark Rectification 
          </h2>
          <p className="text-center text-base md:text-lg mb-10 text-gray-600">
          Trademark Rectification Process | Consequences of Trademark Rectification | Why Choose Delfyle for Trademark Rectification?
          </p>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left - Who Can File ITR-6 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Trademark Rectification Process</h3>
          <p className="text-left text-base md:text-lg mb-10 text-gray-600">
          Trademark Rectification Process Explained by Delfyle Team
          </p>
          <ul className="space-y-4">
            {[
              "Drafting the Application- Delfyle ensures your rectification application is meticulously drafted to reflect accurate legal grounds and prevent rejection.",
              "Filing the Form-The relevant form (TM-16, TM-M, or TM-26) is submitted with required government fees.",
              "Document Submission- Supporting documents (identity proof, corrected trademark details, usage records, etc.) are compiled and submitted.",
              "Verification by Authorities- Authorities examine the application and documents. If discrepancies persist, clarification may be sought.",
              "Hearing (if required)- In case of third-party challenges or aggrieved-party filings, both parties may be summoned to a hearing before the Registrar.",
              "Final Order- Based on the evidence, the Registrar may order correction, addition, removal, or substitution in the register",

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
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Why Choose Delfyle for Trademark Rectification?
          </h3>
          <p className="text-left text-base md:text-lg mb-10 text-gray-600">
          Although the law doesn’t specify a fixed list of grounds, common reasons include:
          </p>          
          <ul className="space-y-4">
            {[
              "Trademark Law Experts: Our team is well-versed in both procedural and strategic aspects of trademark law.",
              "Accurate Application Handling: We minimize errors, increasing the chance of successful rectification.",
              "End-to-End Support: From drafting to filing to hearing representation—we handle it all.",
              "Transparent Communication: Regular updates and complete clarity on process timelines and next steps.",
              "Tailored Service: Whether you're a brand owner, third party, or affected entity, our advice aligns with your unique needs.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                <span className="w-[90%]">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-left text-base md:text-lg mb-10 text-gray-600">
          Take charge of your brand’s legal integrity.
          </p>
        </div>        
        </div>

        {/* Right Block - Schedules */}
        <div className=" mt-10 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02]  hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">Consequences of Trademark Rectification</h3>
            <ul className="space-y-4">
              {[
                "Rectification may strengthen your brand’s legal foundation by ensuring accuracy in the official record.",
                "In case of misuse or prolonged non-use, rectification can result in removal or cancellation of the trademark.",
                "A properly maintained trademark register ensures legitimacy and enforceability of rights.",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm md:text-base text-gray-700"
                >
                  <FaInfoCircle className="text-[#b44593] m-1 text-lg" />
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
