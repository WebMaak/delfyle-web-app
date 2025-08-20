import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";

const ListComponent = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
          Deadline to Respond to a Design Objection
        </h2>
        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
          You must file a response within six months from the objection notice date. An additional three-month extension can be requested with the applicable fee before the original deadline expires. Failure to respond in time may lead to abandonment of your application.
        </p>

        {/* Two Column Layout */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">Common Grounds for Design Objections</h3>
            <p className="text-base text-gray-600">
              Examiners may raise objections on several grounds, including:
            </p>
            <ul className="space-y-4 mt-4">
              {[
                "Lack of Novelty: The design appears identical or very similar to existing ones.",
                "Insufficient Documentation: Missing or non-standard supporting documents.",
                "Unclear Representations: Images or drawings do not clearly depict the design.",
                "Missing Authorization: No Power of Attorney submitted by agents representing the applicant."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                  <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                  <span className="w-[90%]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-gray-600 mt-4">
              Each of these can be overcome with the right strategy and supporting evidence.
            </p>
          </div>

          {/* Right Column */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-8 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">How to File a Response</h3>
            <ul className="space-y-4 mt-4">
              {[
                "Read the Objection Notice: Understand the specific points raised by the examiner.",
                "Analyze the Grounds: Identify the objections that require a reply or clarification.",
                "Prepare Supporting Evidence: Include images, documents, or clarifications that support your case.",
                "Draft a Clear Reply: Address each objection logically and concisely.",
                "File with the Design Office: Submit your response before the deadline."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                  <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                  <span className="w-[90%]">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-base text-gray-600 mt-4">
              With Delfyle’s expert support, you can prepare responses that effectively resolve objections and strengthen your design application.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-8 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">What Happens After You File the Response?</h3>
           
            <ul className="space-y-4 mt-4">
              {[
                "Read the Objection Notice: Understand the specific points raised by the examiner.",
                "Analyze the Grounds: Identify the objections that require a reply or clarification.",
                "Prepare Supporting Evidence: Include images, documents, or clarifications that support your case.",
                "Draft a Clear Reply: Address each objection logically and concisely.",
                "File with the Design Office: Submit your response before the deadline.",
                "Re-Examination: The Design Office will re-evaluate your application and the submitted reply.",
                "Acceptance: If all objections are resolved, the design is registered and published in the official journal.",
                "Certificate Issuance: You’ll receive a design registration certificate valid for 10 years, extendable by another 5 years.",
                "Hearing (if needed): If objections remain unresolved, a hearing may be scheduled before a final decision is made.",
                "Public Access: Once published, the design is open to public inspection upon request and fee payment."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                  <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                  <span className="w-[90%]">{item}</span>
                </li>
              ))}
            </ul>
            
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-8 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">

           <h3 className="text-lg font-semibold text-[#1a1a1a]">Term of Design Protection in India</h3>
            <p className="text-base text-gray-600 mt-4">
              Registered designs are protected for an initial term of 10 years. This period can be extended for an additional 5 years through a renewal application.
            </p>
            
            <h3 className="text-lg font-semibold text-[#1a1a1a]">Why Choose Delfyle for Handling Design Objections?</h3>
            <p className="text-base text-gray-600 mt-4">
             Design objections require careful legal and technical handling. Delfyle’s seasoned IP professionals help you:
            </p>
            <ul className="space-y-4 mt-4">
              {[
                  "Analyze and interpret objections",
                  "Draft persuasive replies",
                  "Ensure proper documentation",
                  "Manage deadlines and filings",
                  "Improve your chances of approval"
                ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                  <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                  <span className="w-[90%]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-gray-600 mt-4">
             We simplify the process and keep you informed every step of the way—ensuring your design remains protected and legally enforceable.
            </p>
          </div>
        </div>
      </div>
    </section>


  );
};

export default ListComponent;
