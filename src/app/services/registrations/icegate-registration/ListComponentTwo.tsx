import { FaCheckCircle } from "react-icons/fa";
import React from "react";

const ListComponentTwo = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      IEC Registration & Required Documents
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Key requirements and steps to obtain your Importer Exporter Code (IEC)
    </p>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* Proof of Establishment */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Proof of Establishment/Registration</h3>
        <ul className="space-y-2 text-sm md:text-base text-[#1a1a1a]">
          {[
            "Partnership Deed (for Partnerships)",
            "Incorporation Certificate (for LLPs and Companies)",
            "Society/Trust/HUF Registration Certificate"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Address Proof */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Address Proof</h3>
        <ul className="space-y-2 text-sm md:text-base text-[#1a1a1a]">
          {[
            "Utility bills (electricity, telephone, post-paid mobile)",
            "Rent agreement or sale deed",
            "Lease deed or MoU",
            "Aadhaar card / Passport / Voter ID (for proprietorships)",
            "If address is not in the firm’s name, a NOC from the premises owner"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bank Proof */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Bank Proof</h3>
        <ul className="space-y-2 text-sm md:text-base text-[#1a1a1a]">
          {["Cancelled cheque", "Bank Certificate"].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Aadhaar / DSC */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 col-span-1 md:col-span-2 lg:col-span-3">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Aadhaar / Digital Signature Certificate (DSC)</h3>
        <p className="text-sm md:text-base text-gray-600">
          Used to digitally sign the IEC application and ensure authenticity.
        </p>
      </div>

      {/* How to Apply */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 col-span-1 md:col-span-2 lg:col-span-3">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">How to Apply for IEC</h3>
        <ol className="list-decimal pl-6 space-y-2 text-sm md:text-base text-gray-600">
          {[
            "Visit DGFT Portal: Go to www.dgft.gov.in",
            "Register/Login: Use your credentials or create a new profile with OTP verification",
            "Apply for IEC: Select 'Apply for IEC' under Services > IEC Profile Management",
            "Fill Form ANF 2A: Provide firm details, PAN, bank info, and address",
            "Sign Application: Use Aadhaar e-sign or DSC",
            "Pay Application Fee: Make an online payment",
            "Download IEC Certificate: Once approved, it will be sent via email and available for download"
          ].map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      </div>

      {/* Simplify IEC with Delfyle */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 col-span-1 md:col-span-2 lg:col-span-3">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Simplify IEC Registration with Delfyle</h3>
        <ul className="space-y-2 text-sm md:text-base text-[#1a1a1a]">
          {[
            "Eligibility & Documentation Guidance",
            "Document Preparation & Verification",
            "Application Filing with DGFT",
            "Progress Tracking & Updates",
            "Quick IEC Certificate Delivery",
            "Professional Consulting on Global Trade & Compliance"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm md:text-base text-gray-600">
          With Delfyle handling the complexities, you can focus on growing your import/export business.
        </p>
      </div>

    </div>
  </div>
</section>


  );
};

export default ListComponentTwo;
