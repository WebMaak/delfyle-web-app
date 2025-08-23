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
      Fire License Requirements & Documents
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Key Fire License Requirements in West Bengal */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Key Fire License Requirements</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          To secure a Fire License, applicants must comply with:
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>Submission of a site and building plan approved by the competent authority.</li>
          <li>Installation of fire safety equipment like extinguishers, alarms, and sprinklers.</li>
          <li>Regular fire drills and safety training for employees.</li>
          <li>Fire safety audits and third-party inspection reports.</li>
          <li>NOC from the Fire Services Department post-physical inspection.</li>
        </ul>
      </div>

      {/* Types of Businesses That Require a Fire License */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Businesses That Require a Fire License</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          The following entities are typically required to obtain a Fire Safety Certificate:
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>Hotels, restaurants, and entertainment centers.</li>
          <li>Hospitals and other healthcare facilities.</li>
          <li>Educational institutions.</li>
          <li>Manufacturing, industrial units, and warehouses.</li>
          <li>Office towers and business parks.</li>
          <li>Public gathering places and stadiums.</li>
          <li>Residential buildings exceeding 15 meters in height.</li>
        </ul>
      </div>

      {/* Documents Required */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Documents Required for Fire License Registration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">General Documents:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Copy of the building plan approved by the municipal/local authority.</li>
              <li>Copy of land ownership or lease/rent agreement.</li>
              <li>Occupancy certificate (if available).</li>
              <li>NOC from the Pollution Control Board (if applicable).</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">Technical Documents:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>List and specifications of installed fire safety systems.</li>
              <li>Existing Fire License (for renewal or modification).</li>
              <li>Structural safety certificate (for multi-storeyed buildings).</li>
              <li>Photographs of fire safety installations.</li>
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
