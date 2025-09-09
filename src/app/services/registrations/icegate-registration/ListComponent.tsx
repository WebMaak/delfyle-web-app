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
      ICEGATE Registration in India
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Streamline Your Import/Export Operations with ICEGATE Registration
    </p>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">

      {/* ICEGATE Registration Types */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">ICEGATE Registration Types</h3>
        <ul className="space-y-2 text-sm md:text-base text-gray-600">
          <li><span className="font-semibold">Partnership Registration:</span> Full access for frequent exporters/importers including document submission, amendment requests, and query responses.</li>
          <li><span className="font-semibold">Simplified Registration:</span> Basic access for small traders to receive information and notifications. Filing Shipping Bills or Bills of Entry not allowed; DSC not required.</li>
        </ul>
      </div>

      {/* Documents Required for ICEGATE Registration */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Documents Required</h3>
        <ul className="space-y-2 text-sm md:text-base text-gray-600">
          <li><span className="font-semibold">CHA (Individual):</span> Address Proof, Valid License</li>
          <li><span className="font-semibold">CHA (Firm):</span> Authorization Letter, Address Proof, License</li>
          <li><span className="font-semibold">CHA (Employee):</span> F-card/G-card, Authorization Letter, ID Proof</li>
          <li><span className="font-semibold">IEC Holder:</span> Address Proof, Valid IEC Certificate</li>
          <li><span className="font-semibold">Authorized Person:</span> Authorization Letter, ID Proof</li>
          <li><span className="font-semibold">Airlines/Shipping Agents:</span> Authorization Letter, License, Address Proof</li>
          <li><span className="font-semibold">Console Agents:</span> Valid License, Address Proof</li>
        </ul>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          Accepted Address Proofs: Aadhaar, Voter ID, Passport, Driving License
        </p>
      </div>

      {/* Supported Transaction Types */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Supported Transaction Types</h3>
        <ul className="space-y-2 text-sm md:text-base text-gray-600">
          {[
            "Export Filing (Shipping Bill)",
            "Import Filing (Bill of Entry)",
            "Import General Manifest (IGM)",
            "Export General Manifest (EGM)",
            "Consol Manifest Filing",
            "Query Responses & Amendments (SB/BE)"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* DGFT Guidelines */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">DGFT Guidelines for ICEGATE</h3>
        <ul className="space-y-2 text-sm md:text-base text-gray-600">
          {[
            "Prompt Registration: IEC holders must register early to avoid trade delays.",
            "Digital Signature Certificate (DSC): Class III DSC required for full registration.",
            "PAN Verification: Auto-validated with IT department records.",
            "Name Match: Registered name must match PAN.",
            "CHA Employee Access: Only G-card holders can file on behalf of CHAs.",
            "User Management: Register one primary user and manage sub-users.",
            "Data Accuracy: All information must be validated during registration.",
            "Access Control: IEC holders can revoke access from former authorized users."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Delfyle Assistance */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Let Delfyle Handle Your ICEGATE Registration</h3>
        <ul className="space-y-2 text-sm md:text-base text-gray-600">
          {[
            "Expert document verification",
            "End-to-end support with DSC creation",
            "Registration submission and follow-up",
            "Post-registration guidance for ICEGATE login and usage"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          Ready to streamline your customs clearance? Delfyle makes ICEGATE registration simple and error-free.
        </p>
      </div>

    </div>
  </div>
</section>


  );
};

export default ListComponent;
