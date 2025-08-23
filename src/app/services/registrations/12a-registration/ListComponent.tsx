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
      12A Registration Details
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Required Documents for 12A Registration */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Required Documents for 12A Registration</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          When filing Form 10A for 12A registration, the following documents are needed:
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>Trust deed or registration certificate (self-certified)</li>
          <li>Registration proof with ROC or applicable authority</li>
          <li>PAN card of the entity</li>
          <li>Financial statements of the last 3 years</li>
          <li>Activity report or brief on charitable operations</li>
          <li>Details of key trustees or directors</li>
          <li>Any previous rejection or cancellation orders (if applicable)</li>
        </ul>
      </div>

      {/* 12A Registration Process */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">12A Registration Process</h3>
        <ul className="space-y-4 text-sm md:text-base text-[#1a1a1a]">
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>
              <b>Online Filing:</b> Submit Form 10A through the Income Tax Department's online portal using a digital signature.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>
              <b>Review by Authorities:</b> The Commissioner may request additional documents to verify the organization's authenticity.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>
              <b>Approval:</b> If satisfied, the Commissioner issues a written order granting registration under Section 12A.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>
              <b>Rejection:</b> In case of rejection, the reasons will be communicated, and reapplication is permitted upon rectification.
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>



  );
};

export default ListComponent;
