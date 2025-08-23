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
      Required Details, Documents, and Penalties for ADT-1 Filing
    </h2>
    <div className="grid gap-6 md:grid-cols-2">

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Mandatory Details Required in Form ADT-1</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">While filing Form ADT-1, the following information must be provided:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="font-bold">Category of the auditor:</span> (Individual or Firm)</li>
          <li><span className="font-bold">Auditor’s details:</span> Name, address, email ID, and PAN</li>
          <li><span className="font-bold">Membership number:</span> of the auditor (and previous auditor, if applicable)</li>
          <li><span className="font-bold">Date of appointment:</span> and AGM</li>
          <li><span className="font-bold">Period of appointment:</span></li>
          <li><span className="font-bold">Casual vacancy details:</span> Reason and date, if any</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Documents Required to File Form ADT-1</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">The following documents must be attached when submitting Form ADT-1:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="font-bold">Resolution:</span> Board Resolution or Shareholder Resolution appointing the auditor.</li>
          <li><span className="font-bold">Consent:</span> Written consent from the auditor for appointment.</li>
          <li><span className="font-bold">Auditor’s certificate:</span> of eligibility and non-disqualification under Section 141 of the Companies Act, 2013.</li>
          <li><span className="font-bold">Intimation copy:</span> A copy of the intimation sent to the auditor by the company.</li>
        </ul>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Delay in filing Form ADT-1 attracts additional fees based on the number of days delayed:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4 md:mt-0">Penalties for Late Filing of ADT-1</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">Up to 30 days:</span> 2x standard fees</li>
              <li><span className="font-bold">31 to 60 days:</span> 4x standard fees</li>
              <li><span className="font-bold">61 to 90 days:</span> 6x standard fees</li>
              <li><span className="font-bold">91 to 180 days:</span> 10x standard fees</li>
              <li><span className="font-bold">More than 180 days:</span> 12x standard fees</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4 md:mt-0">Key Points to Remember</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">Filing Responsibility:</span> The company is responsible for filing Form ADT-1, not the auditor.</li>
              <li><span className="font-bold">Mandatory Filing:</span> It is mandatory for all types of companies—private, public, listed, or unlisted.</li>
              <li><span className="font-bold">Compliance Trail:</span> Filing ADT-1 helps maintain a clear compliance trail and protects the company from future legal risks.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default ListComponent;
