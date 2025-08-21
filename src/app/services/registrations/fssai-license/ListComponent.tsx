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
      FSSAI Registration & Licensing
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Ensure Your Food Business is Safe, Compliant, and Trusted
    </p>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* Benefits of Obtaining an FSSAI License */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Benefits of an FSSAI License</h3>
        <ul className="space-y-2">
          {[
            "Legal Compliance: Avoid penalties and remain legally protected.",
            "Food Safety Assurance: Meet national standards for hygiene and quality.",
            "Brand Trust: The FSSAI logo builds consumer confidence.",
            "Market Credibility: Enhance investor interest and business expansion opportunities.",
            "Consumer Awareness: Show commitment to public health and transparency.",
            "Ease of Regulation: Smooth management of storage, distribution, and imports."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Documents Required for FSSAI Registration & License */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Documents Required</h3>
        <ul className="space-y-4">
          <li>
            <p className="font-semibold text-[#1a1a1a]">For Non-Manufacturing Businesses:</p>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-600 pl-4">
              <li>List of business owners with contact details</li>
              <li>Government-issued ID and address proof</li>
              <li>Proof of business premises (e.g., rent agreement)</li>
              <li>Constitution of firm (partnership deed, MoA, etc.)</li>
              <li>Form IX – Nomination of authorized person</li>
            </ul>
          </li>
          <li>
            <p className="font-semibold text-[#1a1a1a]">For Manufacturing Units:</p>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-600 pl-4">
              <li>Layout of processing unit</li>
              <li>Machinery details and installed capacity</li>
              <li>Water testing report (from a certified lab)</li>
              <li>Importer-exporter code (if applicable)</li>
              <li>Product recall plans (for exporters/e-commerce)</li>
              <li>Vehicle details (for transporters)</li>
            </ul>
          </li>
        </ul>
        <p className="text-sm md:text-base text-gray-600 mt-4">
          Delfyle ensures complete assistance in compiling, verifying, and submitting these documents accurately.
        </p>
      </div>

      {/* Other Important Information */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Validity & Penalties</h3>
        <ul className="space-y-4">
          <li>
            <p className="font-semibold text-[#1a1a1a]">Validity & Renewal:</p>
            <p className="text-sm md:text-base text-gray-600">
              FSSAI licenses are valid for 1 to 5 years. Renewal must be initiated at least 30 days before the license expiration to avoid penalties and disruptions.
            </p>
          </li>
          <li>
            <p className="font-semibold text-[#1a1a1a]">Penalties for Non-Compliance:</p>
            <p className="text-sm md:text-base text-gray-600">
              Operating a food business without a valid FSSAI license can lead to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-600 pl-4">
              <li>Imprisonment: Up to 6 months</li>
              <li>Fine: Up to ₹5 lakhs</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Get Your FSSAI License with Delfyle */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Get Your FSSAI License with Delfyle</h3>
        <p className="text-base text-gray-600 mb-4">
          At Delfyle, we make food business compliance stress-free. Our professionals will:
        </p>
        <ul className="space-y-2">
          {[
            "Assess your business and determine the right license type.",
            "Prepare and submit your application accurately.",
            "Handle follow-ups and liaise with the FSSAI authorities.",
            "Ensure you meet ongoing compliance and renewal requirements."
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



  );
};

export default ListComponent;
