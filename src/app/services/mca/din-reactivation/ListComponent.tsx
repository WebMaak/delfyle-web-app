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
      Company Registered Office Change Process
    </h2>
    <div className="grid gap-6 md:grid-cols-2">

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">1. Change Within the Same City, Town, or Village</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Process Overview:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>Board Meeting: Pass a resolution approving the shift within the local limits.</li>
          <li>File Form INC-22 with the ROC within 15 days, attaching:</li>
          <ul className="list-circle ml-5 space-y-1">
            <li>Board Resolution</li>
            <li>Proof of new address (utility bill not older than 2 months)</li>
            <li>Ownership or lease document</li>
          </ul>
          <li>Update Company Records: Revise letterheads, signage, and statutory documents.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">2. Change from One City to Another Within the Same ROC Jurisdiction</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Steps Involved:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>Board Meeting: Approve the change and schedule a General Meeting.</li>
          <li>General Meeting: Pass a Special Resolution for the shift.</li>
          <li>File MGT-14 within 30 days of resolution.</li>
          <li>File INC-22 within 15 days of the meeting, including:</li>
          <ul className="list-circle ml-5 space-y-1">
            <li>Special and Board Resolutions</li>
            <li>Proof of new address</li>
            <li>Lease deed or ownership proof</li>
          </ul>
          <li>Update Records: Reflect the new address in all official documents.</li>
        </ul>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">3. Change Between ROC Jurisdictions Within the Same State</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Compliance Procedure:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Board and Shareholder Approvals via meetings and resolutions.</li>
              <li>File MGT-14 with the ROC.</li>
              <li>Prepare list of creditors and debenture holders.</li>
              <li>Notify the Chief Secretary of the concerned state.</li>
              <li>Apply to Regional Director using Form INC-23.</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>File INC-28 after receiving the RD's approval.</li>
              <li>Submit INC-22 with all supporting documents within 60 days.</li>
              <li>Update Company Records accordingly.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">4. Change from One State to Another</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Detailed Process:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Board and Shareholder Meetings to approve address change and alter MOA.</li>
              <li>List Creditors and Debenture Holders and seek their no-objection.</li>
              <li>Newspaper Advertisements (Form INC-26) in English and vernacular dailies.</li>
              <li>File INC-23 to the Regional Director with required documents.</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>File MGT-14, INC-28, and INC-22 with the ROC within stipulated timeframes.</li>
              <li>Notify Government Bodies and update the new address across all platforms.</li>
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
