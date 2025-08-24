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
      Share Transfer: Required Documents & Step-by-Step Procedure
    </h2>
    <div className="grid gap-6 md:grid-cols-2">

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Documents Required for Share Transfer</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">To ensure a valid and legally enforceable share transfer, the following documents must be submitted:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="font-bold">Form SH-4 (Share Transfer Deed):</span> Duly signed by transferor and transferee.</li>
          <li><span className="font-bold">Original Share Certificate:</span> The certificate of the shares being transferred.</li>
          <li><span className="font-bold">PAN Card Copy:</span> Of the transferee for identity verification.</li>
          <li><span className="font-bold">Board Resolution:</span> Document approving the share transfer.</li>
          <li><span className="font-bold">Indemnity Bond:</span> If applicable, to protect the company from any liabilities.</li>
          <li><span className="font-bold">Stamp Duty Payment:</span> Based on share value and applicable state rules.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Step-by-Step Procedure for Share Transfer</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Step 1: Review the AOA</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">Review the Articles of Association for any restrictions on share transfers.</p>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Step 2: Company Notification</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">The transferor must notify the Board of Directors with details of the proposed transfer.</p>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Step 3: Execute Form SH-4</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">Fill and sign Form SH-4, which should be duly stamped and witnessed.</p>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Step 4: Company Approval</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">The company approves the transfer and issues a new share certificate to the transferee within one month.</p>
          </div>
        </div>
      </div>
      
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Compliance & Penalties for Non-Compliance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Compliance Post Share Transfer:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Register of Members and Share Certificates must be updated.</li>
              <li>Changes in ownership must be reflected in annual filings.</li>
            </ul>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Penalties for Non-Compliance:</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">Failing to follow the correct procedure can lead to penalties of ₹10,000 for initial default and ₹1,000 per day for continuing violations.</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

  );
};

export default ListComponent;
