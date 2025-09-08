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
      Halal Certification in India
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Ensure Your Products Comply with Halal Standards and Gain Consumer Trust
    </p>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">

      {/* Benefits of Obtaining Halal Certification */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Benefits of Halal Certification</h3>
        <ul className="space-y-2">
          {[
            "Access to a Global Market: Halal-certified products are in high demand across Muslim-majority countries and regions.",
            "Increased Consumer Trust: Certification signals that your products respect dietary and ethical standards.",
            "Regulatory Compliance: Some states mandate Halal Certification for certain categories.",
            "Enhanced Brand Image: Displaying a Halal logo builds credibility and aligns your brand with quality standards.",
            "Export Opportunities: Opens potential markets in Southeast Asia, Middle East, and Africa.",
            "Competitive Advantage: Gain an edge over competitors not certified for Halal."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Requirements for Halal Certification */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Requirements for Halal Certification</h3>
        <ul className="space-y-2 text-sm md:text-base text-gray-600">
          {[
            "Halal Ingredients: All ingredients must come from Halal sources and avoid prohibited substances.",
            "Halal Manufacturing Process: Equipment and utensils must remain uncontaminated by non-Halal materials.",
            "Halal Packaging: Packaging should not contact non-Halal substances.",
            "Halal Storage & Transport: Products must be stored and transported without cross-contamination.",
            "Certification & Compliance: Obtain certification from a Halal-approved authority and comply with relevant Indian Halal standards."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold text-[#1a1a1a]">Validity of Halal Certification</h3>
        <p className="text-sm md:text-base text-gray-600">
          Halal certificates are generally valid for one year, provided the business maintains compliance with Halal standards. Certificates may be revoked if standards are not upheld.
        </p>
      </div>

      {/* Halal Certification Process */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Halal Certification Process with Delfyle</h3>
        <p className="text-base text-gray-600 mb-4">
          Delfyle guides you through each step for smooth Halal certification:
        </p>
        <ul className="space-y-2 text-sm md:text-base text-gray-600">
          {[
            "Step 1 – Consultation & Application: Experts help prepare and submit your application to an accredited Halal Certification Body.",
            "Step 2 – Audit & Inspection: On-site assessment by Shariah and Technical auditors reviewing documentation, hygiene, sourcing, processing, and facility conditions.",
            "Step 3 – Certification Issuance: Upon successful audit, the Halal certificate is issued specifying scope, product category, and validity period."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Why Choose Delfyle */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Why Choose Delfyle for Halal Certification?</h3>
        <p className="text-base text-gray-600 mb-4">
          Delfyle ensures a seamless Halal certification experience. Our team supports businesses of all sizes with:
        </p>
        <ul className="space-y-2 text-sm md:text-base text-gray-600">
          {[
            "Thorough documentation and guidance",
            "Accurate application filing",
            "Audit readiness and liaison with certifying authorities",
            "End-to-end process transparency",
            "Affordable pricing with expert consultation"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</section>

  );
};

export default ListComponent;
