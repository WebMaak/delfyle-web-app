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
      Legal Procedure & Documents for Authorized Capital Increase
    </h2>
    <div className="grid gap-6 md:grid-cols-2">

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Legal Procedure to Increase Authorized Capital</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Increasing authorized capital involves amending the Memorandum of Association (MOA) and following specific steps under the Companies Act, 2013:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="font-bold">Step 1: Review AOA -</span> Check if your AOA permits the capital increase. If not, it must be amended first.</li>
          <li><span className="font-bold">Step 2: Board Meeting -</span> Pass a board resolution to propose the amendment and call for an Extraordinary General Meeting (EGM).</li>
          <li><span className="font-bold">Step 3: Send EGM Notice -</span> Notify all stakeholders at least 21 days in advance.</li>
          <li><span className="font-bold">Step 4: Hold EGM -</span> Pass the ordinary resolution to increase the authorized capital and update the MOA.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Required ROC Filings & Documents</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Form SH-7 (Mandatory)</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">File this form with the RoC within 30 days of the resolution to notify them of the capital increase.</p>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Documents Required:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Certified copy of the resolution</li>
              <li>Updated MOA (with revised capital clause)</li>
              <li>Updated AOA (if amended for this purpose)</li>
              <li>EGM notice and explanatory statement</li>
            </ul>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Stamp Duty:</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">Pay the applicable e-Stamp Duty on the increased amount through the MCA portal.</p>
          </div>
        </div>
      </div>
      
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Post-Increase Formalities & Penalties</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">What Happens After Increasing Capital?</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>The MOA and AOA must be updated in all company records.</li>
              <li>The company is now legally permitted to issue additional shares.</li>
            </ul>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Penalties for Non-Compliance:</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">Delayed filing of Form SH-7 or other non-compliance can lead to penalties of ₹10,000, with an additional ₹1,000/day for ongoing violations (up to a limit of ₹25 lakh).</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

  );
};

export default ListComponent;
