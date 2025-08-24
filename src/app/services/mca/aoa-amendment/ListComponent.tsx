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
      AOA Amendment: Legal Requirements & Step-by-Step Procedure
    </h2>
    <div className="grid gap-6 md:grid-cols-2">

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Legal Requirements for Amending AOA</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">To ensure the amendment is valid, the company must:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="font-bold">Pass a Special Resolution:</span> Under Section 14 of the Companies Act, 2013.</li>
          <li><span className="font-bold">Compliance:</span> Ensure the amendment complies with both the Memorandum of Association (MOA) and the Act.</li>
          <li><span className="font-bold">Timely Filing:</span> File Form MGT-14 with the Registrar of Companies (RoC) within 30 days of the resolution.</li>
        </ul>
        <p className="text-sm md:text-base text-[#1a1a1a] mt-4">If the amendment involves entrenchment provisions or conversion between company types, additional shareholder approvals may be required.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Step-by-Step Procedure for AOA Amendment</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Step 1: Board Meeting</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Convene a Board of Directors meeting to propose changes.</li>
              <li>Pass a Board Resolution to approve the AOA amendment and call for a General Meeting.</li>
            </ul>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Step 2: General Meeting</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Send a 21-day notice for the General Meeting.</li>
              <li>Pass a Special Resolution to approve the AOA amendment.</li>
            </ul>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Step 3: Filing with RoC</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>File Form MGT-14 within 30 days.</li>
              <li>Attach the Special Resolution, altered AOA, and meeting details.</li>
            </ul>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Step 4: Legal Effect</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>The amended AOA has binding legal effect upon approval.</li>
              <li>All copies of the AOA must be updated.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Key Takeaways for AOA Amendments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Important Considerations:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>All changes must be approved by a Special Resolution.</li>
              <li>Amendments must align with the MOA and the Companies Act.</li>
              <li>Form MGT-14 is the key filing document.</li>
              <li>Stamp duty is only for initial incorporation, not on amendments.</li>
            </ul>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Delfyle’s Role:</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">We simplify this complex process by providing end-to-end support, from drafting resolutions to filing and ensuring all legal requirements are met, saving you time and preventing errors.</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

  );
};

export default ListComponent;
