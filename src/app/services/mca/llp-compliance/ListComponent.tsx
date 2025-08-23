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
      Key Annual Compliances for LLPs
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Statement of Accounts & Solvency – Form 8 */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Statement of Accounts & Solvency (Form 8)</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          LLPs must file Form 8 each year, which includes a solvency statement and a statement of accounts (income, expenditure, and balance sheet).
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="text-[#b44593] font-bold">Due Date:</span> October 30th (30 days from 6 months after the financial year-end).</li>
          <li><span className="text-[#b44593] font-bold">Signing:</span> Must be digitally signed by two designated partners and a certified professional.</li>
          <li><span className="text-[#b44593] font-bold">Penalty:</span> A fine of ₹100 per day for late filing.</li>
        </ul>
      </div>

      {/* Tax Audit & Income Tax Filing */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Tax Audit & Income Tax Filing</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          LLPs must comply with the Income Tax Act, 1961, for tax audits and returns. A tax audit is mandatory if the turnover exceeds ₹40 lakhs or contributions exceed ₹25 lakhs.
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="text-[#b44593] font-bold">Tax Audit Deadline:</span> September 30th.</li>
          <li><span className="text-[#b44593] font-bold">ITR Filing Deadline:</span> July 31st (without audit) or September 30th (with audit).</li>
          <li><span className="text-[#b44593] font-bold">Form 3CEB:</span> Required for international transactions, due November 30th.</li>
        </ul>
      </div>

      {/* LLP Annual Compliance Calendar */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">LLP Annual Compliance Calendar</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">Key Filings:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="text-[#b44593] font-bold">Form 11:</span> Annual Return Filing - Due **May 30th** to MCA.</li>
              <li><span className="text-[#b44593] font-bold">Form 8:</span> Statement of Accounts & Solvency - Due **October 30th** to MCA.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">Tax Filings:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="text-[#b44593] font-bold">ITR-5:</span> Income Tax Return - Due **July 31st** (without audit) or **September 30th** (with audit) to Income Tax Dept.</li>
              <li><span className="text-[#b44593] font-bold">Tax Audit Report:</span> Due **September 30th** (if applicable) to Income Tax Dept.</li>
              <li><span className="text-[#b44593] font-bold">Form 3CEB:</span> Due **November 30th** (if applicable) to Income Tax Dept.</li>
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
