import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";

const ListComponent = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
        Key Elements and How to Draft a Trademark Infringement Notice
        </h2>
        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
        A Trademark Infringement Notice is a formal legal document that outlines the infringement of a registered trademark. It is used to demand the cessation of unauthorized use of the trademark and warn of potential legal consequences.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left - Who Can File ITR-6 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Key Elements of a Trademark Infringement Notice</h3>
          <ul className="space-y-4">
            {[
              "Your details and ownership status.",
              "Details of the infringer.",
              "Trademark name and registration information.",
              "Nature of infringing mark and its similarity.",
              "Description of affected goods/services.",
              "Supporting evidence (optional).",
              "Clear cease and desist demand.",
              "Action required from the infringer.",
              "Deadline for response (15–30 days).",
              "Consequences of non-compliance (e.g., legal action)."              
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
          <h3 className="text-lg font-semibold text-[#1a1a1a]">How to Draft a Trademark Infringement Notice</h3>
          
          <ul className="space-y-4">
            {[
              "Introduction: State the purpose clearly.",
              "Party Identification: Name the owner and the infringer with contact details.",
              "Trademark Details: Include registration and scope.",
              "Infringement Explanation: Show how the trademark is being misused.",
              "Action Demanded: List steps the infringer must take.",
              "Response Deadline: Specify a clear timeline.",
              "Legal Warning: Mention legal steps in case of non-compliance.",
              "Conclusion: Reinforce trademark ownership and commitment to protect rights."
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
        Trademark Protection Services and Why Choose Delfyle
        </h2>
        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
        At Delfyle, we offer expert services to draft and issue trademark infringement notices:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left - Who Can File ITR-6 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Trademark Protection Services by Delfyle</h3>
          <ul className="space-y-4">
            {[
              "Custom Legal Drafting: Tailored notices citing relevant laws and violations.",
              "Strategic Legal Positioning: Clear cease-and-desist language and required actions.",
              "Issue by Legal Experts: Notices are reviewed and dispatched by experienced lawyers.",
              "Delivery Options: Sent via email and registered post for legal traceability."
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
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Why Choose Delfyle?</h3>
          <p className="text-center text-base md:text-lg mb-10 text-gray-600">
          </p>  
          <ul className="space-y-4">
            {[
              "Expertise in IP Law: Skilled legal professionals focused on trademark protection.",
              "Rapid Response: Quick action to limit brand damage.",
              "Complete Support: From consultation to notice dispatch."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                <span className="w-[90%]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>

        <p className="text-center text-base md:text-lg mt-10 text-gray-600 italic">
        <span className="font-bold">Safeguard your trademark with Delfyle! Reach out today for comprehensive legal support and proactive brand protection.
        </span>
        </p>
      </div>
    </section>


  );
};

export default ListComponent;
