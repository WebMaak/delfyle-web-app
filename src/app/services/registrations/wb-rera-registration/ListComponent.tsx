import { FaCheckCircle, FaTimesCircle, FaBan, FaExclamationCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ListComponent = () => {
  return (
<section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      RERA Registration Details
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Validity & Renewal */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Validity & Renewal</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>
              <b>Certificate Validity</b><br />
              The RERA registration certificate is valid for 5 years unless revoked earlier.
            </span>
          </li>
          <li className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>
              <b>Renewal Process</b><br />
              Agents are required to maintain proper accounting and operational records, and renewal can be done by submitting a fresh application before the certificate expires.
            </span>
          </li>
        </ul>
      </div>

      {/* Required Documents */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <div>
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Documents Required for RERA Registration</h3>
          <ol className="list-decimal ml-5 space-y-2 text-[#1a1a1a] text-sm md:text-base">
            <li>
              <b>For Promoters</b>
              <ul className="list-disc ml-5">
                <li>Identity and address proof, PAN, photographs</li>
                <li>Commencement certificate and sanctioned plan</li>
                <li>Project layout, land ownership documents, and past project details</li>
                <li>For companies: Certificate of Incorporation, CIN, TAN, MOA, AOA, and audited financials</li>
              </ul>
            </li>
            <li>
              <b>For Real Estate Agents</b>
              <ul className="list-disc ml-5">
                <li>Identity and address proof, photographs</li>
                <li>Business details (firm name, address, company type)</li>
                <li>MOA and AOA, if applicable</li>
              </ul>
            </li>
          </ol>
          <p className="text-xs text-gray-500 mt-2">
            Note: State-specific authorities may ask for additional documentation.
          </p>
        </div>
      </div>

      {/* RERA Registration Process with Delfyle */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">RERA Registration Process with Delfyle</h3>
        <ul className="list-decimal ml-5 space-y-2 text-[#1a1a1a] text-sm md:text-base">
          <li>
            <b>Application Form Submission</b><br />
            We handle the completion and submission of the prescribed application to the state’s RERA authority.
          </li>
          <li>
            <b>Document Compilation</b><br />
            We assist in compiling and attaching all required documents, ensuring everything is in order for submission.
          </li>
          <li>
            <b>Verification & Follow-up</b><br />
            Our team tracks the application through the verification process and handles any correspondence with the authority.
          </li>
          <li>
            <b>Issuance of Certificate</b><br />
            Once approved, the registration certificate is issued to the agent or promoter, completing the process.
          </li>
        </ul>
      </div>

      {/* Penalties & Exemptions */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Penalties & Exemptions</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaBan className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>
              <b>Penalties Under RERA</b><br />
              Failure to register can result in a fine of ₹10,000 per day, up to 5% of the property's cost. Unfair practices may lead to imprisonment of up to 1 year.
            </span>
          </li>
          <li className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaExclamationCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>
              <b>Exemptions</b><br />
              Projects may be exempt if the development area is under 500 sq. meters, has fewer than 8 units, or is strictly for renovation without new sales.
            </span>
          </li>
        </ul>
      </div>

      {/* Delfyle Support */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Simplify Your RERA Registration with Delfyle</h3>
        <p className="text-base text-gray-600 mb-2">
          Delfyle offers expert guidance to real estate agents and promoters throughout the RERA registration process. Our services ensure:
        </p>
        <ul className="list-disc ml-5 text-[#1a1a1a] text-sm md:text-base space-y-1">
          <li>Accurate and timely application submission</li>
          <li>Preparation and verification of all documents</li>
          <li>Handling of correspondence with the state’s RERA authority</li>
          <li>Complete compliance with regulatory requirements</li>
        </ul>
      </div>
    </div>
  </div>
</section>



  );
};

export default ListComponent;
