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
      Key Details, Due Dates, and Penalties for DPT-3 Filing
    </h2>
    <div className="grid gap-6 md:grid-cols-2">

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">When is DPT-3 Filing Mandatory?</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Companies must file Form DPT-3 if they have accepted:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="font-bold">Deposits:</span> from directors or members</li>
          <li><span className="font-bold">Loans:</span> from third parties</li>
          <li><span className="font-bold">Advances:</span> against goods/services (secured or unsecured)</li>
        </ul>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">The form is applicable to:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="font-bold">Secured and Unsecured Loans</span></li>
          <li><span className="font-bold">External and Commercial Borrowings</span></li>
          <li><span className="font-bold">Inter-Company Loans and Advances</span></li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Transactions NOT Treated as Deposits</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Certain receipts are not considered deposits, but still must be disclosed under DPT-3:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="font-bold">Share capital</span> received from shareholders</li>
          <li><span className="font-bold">Debentures</span> issued to investors</li>
          <li><span className="font-bold">Advances</span> for confirmed purchase orders</li>
          <li><span className="font-bold">Government grants</span> or funds from foreign sources</li>
          <li><span className="font-bold">Loans from banks</span> and financial institutions</li>
          <li><span className="font-bold">Inter-corporate borrowings</span></li>
          <li><span className="font-bold">Subscription advances</span> for securities</li>
          <li><span className="font-bold">Employee security deposits</span> (limited to annual salary)</li>
        </ul>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">DPT-3 Filing Due Date & Required Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Due Date:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">Annual Due Date:</span> June 30th of every year</li>
              <li><span className="font-bold">Reporting Period:</span> Financial year ending March 31st</li>
            </ul>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold mt-2">Example:</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">For FY 2023–24 (April 1, 2023 to March 31, 2024), the DPT-3 return must be filed by June 30, 2024.</p>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Required Documents:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">Mandatory:</span> Auditor’s Certificate validating the financial figures</li>
              <li><span className="font-bold">Optional (as applicable):</span> Copy of Trust Deed, Charge Instrument for secured borrowings, Details of Liquid Assets, List of Depositors.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] border-b border-gray-300 pb-2">Fees and Penalties for DPT-3 Filing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Filing Fees:</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">Filing fees are based on the company's authorised share capital and governed by the Companies (Registration Offices and Fees) Rules. Delfyle ensures accurate fee calculations and prompt payment handling.</p>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Penalties for Non-Compliance:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">Fine for the Company:</span> Up to ₹5,000</li>
              <li><span className="font-bold">Fine for Officers:</span> Up to ₹5,000</li>
              <li><span className="font-bold">Daily Fine for Continued Default:</span> ₹500 per day</li>
            </ul>
            <p className="text-sm md:text-base text-[#1a1a1a] mt-2">Timely filing helps maintain your company’s compliance status and avoids legal consequences.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default ListComponent;
