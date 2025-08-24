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
      Eligibility & Procedure for Dormant Company Status
    </h2>
    <div className="grid gap-6 md:grid-cols-2">

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Eligibility Requirements for Dormant Status</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">To qualify for dormant status, a company must meet the following criteria under the Companies Act and Rules:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="font-bold">Minimum Number of Directors:</span> Requires 3 for a public company, 2 for a private company, and 1 for a One Person Company.</li>
          <li><span className="font-bold">Special Resolution:</span> A special resolution must be passed, or consent from at least three-fourths of shareholders by value must be obtained.</li>
          <li><span className="font-bold">No Public Deposits:</span> No outstanding public deposits or unpaid debts.</li>
          <li><span className="font-bold">No Investigations:</span> The company must not be under any ongoing investigations or prosecutions.</li>
          <li><span className="font-bold">Statutory Dues Cleared:</span> All statutory dues must be cleared.</li>
          <li><span className="font-bold">Not Listed:</span> The company’s securities should not be listed on any stock exchange.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Procedure for Filing Dormant Status</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">The process to convert to dormant status involves these key steps:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="font-bold">Board Resolution:</span> Pass a board resolution and send an EGM notice to shareholders.</li>
          <li><span className="font-bold">EGM and Resolution:</span> Hold an Extraordinary General Meeting (EGM) to pass a special resolution.</li>
          <li><span className="font-bold">Statement of Affairs:</span> Obtain a certified Statement of Affairs from a Chartered Accountant.</li>
          <li><span className="font-bold">Filing MGT-14:</span> File the special resolution with the Registrar using Form MGT-14.</li>
          <li><span className="font-bold">Submit Form MSC-1:</span> File Form MSC-1 to formally request dormant status.</li>
          <li><span className="font-bold">Certificate Issuance:</span> Receive the dormant status certificate from the Registrar upon approval.</li>
        </ul>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Annual Compliance for Dormant Companies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Key Obligations:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">Financial Statements:</span> Must maintain accounting records and submit financial statements annually.</li>
              <li><span className="font-bold">Statutory Audit:</span> Still requires a statutory audit.</li>
              <li><span className="font-bold">Tax Returns:</span> Required to file income tax returns.</li>
              <li><span className="font-bold">ROC Filings:</span> Must file an annual return using Form MSC-3.</li>
            </ul>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Simplified Filings:</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">Dormant companies benefit from reduced administrative burdens. They have simplified annual returns, are exempt from auditor rotation, and only need to hold one board meeting every six months. This makes maintaining a compliant, yet inactive, company much more manageable.</p>
          </div>
        </div>
      </div>
      
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Simplify Your Dormant Company Status Filing with Delfyle</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Why Choose Delfyle?</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">At Delfyle, we simplify the process of converting your company to dormant status, ensuring a smooth and efficient transition. Our team of experts provides step-by-step guidance, assisting with all necessary paperwork, filings, and compliance requirements.</p>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Continued Support:</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">We also offer comprehensive support for your ongoing annual filings, ensuring that your dormant company remains in good standing with the Registrar of Companies. Focus on your future business goals while we handle the compliance details.</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

  );
};

export default ListComponent;
