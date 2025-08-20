import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ListComponent = () => {
  return (
<section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      GST Registration in India
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Process | Eligibility & Thresholds | Documents | Benefits
    </p>

    {/* Grid for 4 main blocks */}
    <div className="grid gap-6 md:grid-cols-2">
      {/* 1) Who Needs GST Registration */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Who Needs GST Registration?</h3>
        <p className="text-left text-base md:text-lg mb-4 text-gray-600">
          GST registration is mandatory for the following entities and businesses:
        </p>
        <ul className="space-y-3">
          {[
            "Businesses with annual turnover exceeding ₹40 lakhs (₹20 lakhs in special category states).",
            "Service providers with turnover exceeding ₹20 lakhs (₹10 lakhs in special category states).",
            "E-commerce operators and online sellers.",
            "Inter-state suppliers of goods or services.",
            "Casual taxable persons and non-resident taxable persons.",
            "Input service distributors, reverse charge mechanism entities, and agents of suppliers.",
            "Businesses previously registered under VAT, Excise, or Service Tax."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> Entities exclusively dealing in exempt goods or services are not required to register.
        </p>
      </div>

      {/* 2) GST Turnover Thresholds */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">GST Turnover Thresholds</h3>
        <ul className="space-y-3">
          {[
            "Service Providers: GST registration is required if aggregate turnover exceeds ₹20 lakhs (₹10 lakhs for special states).",
            "Goods Suppliers: GST registration is mandatory if turnover exceeds ₹40 lakhs (subject to conditions).",
            "Composition Scheme: Available for businesses with turnover up to ₹1.5 crore, offering simplified tax payment."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-600">
          <strong>Special Category States:</strong> Arunachal Pradesh, Assam, Himachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura, and Uttarakhand.
        </p>

        <h3 className="text-lg font-semibold text-[#1a1a1a]">GSTIN and GST Certificate</h3>
        <p className="text-base text-gray-600">
          Upon successful registration, businesses receive:
        </p>
        <ul className="space-y-3">
          {[
            "GSTIN: A 15-digit unique number used for all GST compliance.",
            "GST Certificate: Confirms registration and is essential for tax collection, ITC claim, loan applications, tenders, and enhancing credibility."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 3) Documents Required */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Documents Required for GST Registration</h3>
        <p className="text-base text-gray-600">For Individuals / Sole Proprietors:</p>
        <ul className="space-y-2">
          {[
            "PAN and Aadhaar card of the owner",
            "Photograph (JPEG, max 100 KB)",
            "Bank account details",
            "Proof of business address"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Benefits of GST Registration</h3>
        <ul className="space-y-3">
          {[
            "Legal recognition for your business",
            "Eligibility for input tax credit",
            "Simplified interstate trade",
            "Avoidance of penalties",
            "Eligibility for e-commerce platforms",
            "Improved creditworthiness",
            "Streamlined return filing",
            "Better market visibility and trust"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span>{item}</span>
            </li>
          ))}
        </ul>        
      </div>

      {/* 4) GSTIN & Certificate */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <p className="text-base text-gray-600">For LLP / Partnership Firms:</p>
        <ul className="space-y-2">
          {[
            "PAN cards of all partners",
            "Partnership deed",
            "Photographs of partners and authorised signatory",
            "Aadhaar of authorised signatory",
            "Proof of address and appointment",
            "Bank details"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base text-gray-600">For Companies:</p>
        <ul className="space-y-2">
          {[
            "PAN and incorporation certificate",
            "MOA & AOA",
            "PAN and Aadhaar of authorised signatory (must be Indian)",
            "Board resolution",
            "Director details and photographs",
            "Bank and business address proof"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Full Width Bottom Container - Benefits */}
    <div className="mt-10 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold text-[#1a1a1a]">Voluntary GST Registration</h3>
      <p className="text-base text-gray-600">
        Even if your business is below the mandatory threshold, registering voluntarily provides benefits like:
      </p>
      <ul className="space-y-2 mb-6">
        {[
          "Availing input tax credit",
          "Nationwide supply capability",
          "Listing on e-commerce platforms",
          "Competitive positioning in the market"
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] m-1 text-lg" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-[#1a1a1a]">Penalties for Non-Registration</h3>
      <ul className="space-y-2">
        {[
          "10% of the tax amount due (minimum ₹10,000) for unintentional default.",
          "100% of the tax due for deliberate tax evasion."
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] m-1 text-lg" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

    </div>
  </div>
</section>





  );
};

export default ListComponent;
