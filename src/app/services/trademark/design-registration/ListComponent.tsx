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
          Essential Requirements for Design Registration
        </h2>
        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
          To proceed with design e-filing in India, your design must meet the following criteria:
        </p>

        {/* Two Column Layout */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">Designs Eligible for Registration</h3>
            <p className="text-base text-gray-600">
              To qualify for registration, your design must fulfill specific originality and application standards.
            </p>
            <ul className="space-y-4">
              {[
                "Novelty & Innovation – The design should be fresh and original, offering a new visual impression. Even a creative combination of existing elements may qualify, provided it results in a distinctive appearance.",
                "Originality & Confidentiality – Your design must not have been previously published, used, or publicly disclosed anywhere in India or abroad.",
                "Applied to an Article – The design must be integrally attached to a tangible product or object. Abstract or standalone designs not applied to a physical article cannot be registered.",
                "Public Order & Security Compliance – Designs must not offend public morality, sentiments, or threaten the security of India. Any design conflicting with national interests will be ineligible for registration.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                  <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                  <span className="w-[90%]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Two Lists with Separate Headings */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-8 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            {/* First Heading + List */}
            <div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">Who Can Apply for Design Registration Online?</h3>
              <ul className="space-y-4 mt-4">
                {[
                  "Individuals (sole applicants or joint applicants)",
                  "Legal Representatives or Assignees",
                  "Firms, Partnerships, and Corporates",
                  "Startups and Small Entities (recognized under Indian startup guidelines)",
                  "Non-Resident Indians (NRIs) via authorized agents",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                    <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                    <span className="w-[90%]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second Heading + List */}
            <div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">Certain Designs are Excluded from Registration under the Designs Act:</h3>
              <ul className="space-y-4 mt-4">
                {[
                  "Artistic or Literary Works (e.g., books, calendars, stamps)",
                  "Architectural Designs (e.g., buildings or structures)",
                  "Maps or Geographic Depictions",
                  "Emblems, National Symbols, or Flags (of any country)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                    <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                    <span className="w-[90%]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Two Column Layout */}
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {/* Left Column */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">Documents Required for Design Registration in India</h3>
            <p className="text-base text-gray-600">
              To register a design online, the following documentation is essential:
            </p>
            <ul className="space-y-4">
              {[
                "Applicant’s name and full address",
                "Proof of legal status (individual, firm, company, etc.)",
                "Startup certificate (if applicable)",
                "Description of the article and its class/category",
                "Minimum of four visual representations (drawings or images) from different angles",
                "Power of Attorney (if applying via an agent)",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]"
                >
                  <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                  <span className="w-[90%]">{item}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* Right Column - Two Lists with Separate Headings */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-8 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            {/* First Heading + List */}
           <div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">
                Key Benefits of Design Registration
              </h3>
              <ul className="space-y-4 mt-4">
                {[
                  "Legal Protection Against Imitation – Prevents unauthorized replication, sale, or distribution of your design.",
                  "10-Year Validity (Renewable for 5 Years) – Registered designs are protected for a decade, extendable for five more years.",
                  "Brand Differentiation – Design registration gives your product a unique identity in a crowded market.",
                  "Proof of Originality – Certified registration confirms your design hasn’t been used or published in India or any WTO member country.",
                  "Enhanced Customer Appeal – Designs are evaluated based on their visual impression—an essential factor in attracting buyers.",
                  "Promotes Innovation – Registration encourages originality and fosters healthy competition among creators.",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]"
                  >
                    <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                    <span className="w-[90%]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <h2 className="text-3xl mt-10 md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
          Protect Your Design with Delfyle
        </h2>
        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
          Delfyle ensures your design registration process is handled with precision, compliance, and care.
          From eligibility assessment to final approval, we guide you through every step, ensuring your intellectual property is secured.
          Start your design protection journey today.
        </p>
      </div>
    </section>

  );
};

export default ListComponent;
