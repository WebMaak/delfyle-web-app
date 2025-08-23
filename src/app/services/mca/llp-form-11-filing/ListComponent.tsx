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
      LLP Form 11 Filing Details & Penalties
    </h2>
    <div className="grid gap-6 md:grid-cols-2">

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Documents & Information Required for Filing LLP Form 11</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">To file the LLP Form 11 Annual Return successfully, the following details and documents are required:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="font-bold">LLP Identification Number (LLPIN)</span></li>
          <li><span className="font-bold">LLP’s name</span> and registered office address</li>
          <li><span className="font-bold">Business classification</span> of the LLP</li>
          <li><span className="font-bold">Partner details</span> and contributions</li>
          <li><span className="font-bold">Summary of designated partners</span> and partners</li>
          <li><span className="font-bold">Principal business activities</span></li>
          <li><span className="font-bold">Information on penalties</span>, if any, imposed on the LLP</li>
          <li><span className="font-bold">Details of any companies or LLPs</span> where partners or designated partners hold positions</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Pre-Filing Requirements for MCA LLP Form 11</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Before starting the filing process, ensure the following:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="font-bold">LLPIN:</span> The LLPIN assigned to your LLP will help pre-fill essential details in the form.</li>
          <li><span className="font-bold">Declaration of Contributions:</span> All partner contributions should be declared, which will be used for pre-filling the form.</li>
          <li><span className="font-bold">eForm 4:</span> Any required eForm 4 submissions must be processed and fees paid.</li>
          <li><span className="font-bold">Digital Signature Certificate (DSC):</span> The DSC of the Designated Partner should be ready.</li>
        </ul>
        <p className="text-sm md:text-base text-[#1a1a1a] mt-2">By fulfilling these requirements, you can streamline the process and ensure accuracy in your filing.</p>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">LLP Form 11 Filing Due Date & Penalties</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Due Date:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">Annual Due Date:</span> May 31st of each year</li>
              <li><span className="font-bold">Reporting Period:</span> Within 60 days from the end of the financial year (March 31st)</li>
            </ul>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Late Filing Penalties:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">Fine:</span> Rs. 100 per day of delay</li>
              <li><span className="font-bold">No Upper Limit:</span> The penalty can accumulate without a maximum cap.</li>
            </ul>
            <p className="text-sm md:text-base text-[#1a1a1a] mt-2">It’s crucial to file on time to avoid accumulating penalties.</p>
          </div>
        </div>
      </div>
      
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] border-b border-gray-300 pb-2">Procedure for Filing LLP eForm 11</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Key Steps:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">Login:</span> The Designated Partner (DP) logs in to the MCA portal and downloads the eForm.</li>
              <li><span className="font-bold">Pre-fill:</span> Enter the LLPIN to auto-populate the form with essential details.</li>
              <li><span className="font-bold">Update Information:</span> Ensure that all business activities, partner details, and contribution information are accurate.</li>
              <li><span className="font-bold">Attach Documents:</span> Attach any required documents and penalties, if applicable.</li>
              <li><span className="font-bold">Certification:</span> If your LLP meets certain thresholds, the form must be certified by a Company Secretary.</li>
            </ul>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Important Note:</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">The information provided must be accurate as once the form is submitted, it cannot be amended. Ensure all figures align with the Form 8 submission. Once completed, the form must be digitally signed by the designated partners and uploaded to the portal.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default ListComponent;
