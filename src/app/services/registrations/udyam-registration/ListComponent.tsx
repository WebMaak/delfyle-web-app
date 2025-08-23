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
      Udyam Registration Details
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Who Can Apply for Udyam Registration? */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Who Can Apply for Udyam Registration?</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          Udyam Registration is open to various types of business entities, including:
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>Proprietorships</li>
          <li>Hindu Undivided Families (HUFs)</li>
          <li>Partnership Firms</li>
          <li>Limited Liability Partnerships (LLPs)</li>
          <li>Private and Public Limited Companies</li>
          <li>One Person Companies (OPCs)</li>
          <li>Co-operative Societies</li>
          <li>Producer Companies</li>
          <li>Trusts and Associations</li>
        </ul>
        <p className="text-sm md:text-base text-[#1a1a1a] mt-4">
          <b>Note:</b> A single enterprise can only register once, but the registration can include multiple activities such as manufacturing, services, or both.
        </p>
      </div>

      {/* Eligibility Criteria for Udyam Registration */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Eligibility Criteria for Udyam Registration</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          To qualify as an MSME, your business must meet the following criteria:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#1a1a1a] border-collapse">
            <thead>
              <tr className="bg-[#b44593]/10">
                <th className="py-2 px-4 border-b border-[#b44593]">Enterprise Type</th>
                <th className="py-2 px-4 border-b border-[#b44593]">Investment (Revised)</th>
                <th className="py-2 px-4 border-b border-[#b44593]">Annual Turnover (Revised)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-[#b44593]/20">Micro</td>
                <td className="py-2 px-4 border-b border-[#b44593]/20">Up to ₹2.5 crore</td>
                <td className="py-2 px-4 border-b border-[#b44593]/20">Up to ₹10 crore</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-[#b44593]/20">Small</td>
                <td className="py-2 px-4 border-b border-[#b44593]/20">Up to ₹25 crore</td>
                <td className="py-2 px-4 border-b border-[#b44593]/20">Up to ₹100 crore</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Medium</td>
                <td className="py-2 px-4">Up to ₹125 crore</td>
                <td className="py-2 px-4">Up to ₹500 crore</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm md:text-base text-[#1a1a1a] mt-4">
          These updated limits, as announced in Union Budget 2025, aim to extend support to a wider base of enterprises and promote scalability and job creation.
        </p>
      </div>

      {/* When Should You Register? and Documents Required */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">When Should You Register?</h3>
        <p className="text-sm md:text-base text-[#1a1a1a]">
          Although Udyam Registration is not mandatory, it is highly recommended for businesses to register early to take full advantage of government incentives. Prompt registration allows access to schemes such as subsidies, financial aid, and simplified compliance.
        </p>
        <h3 className="text-lg font-semibold text-[#1a1a1a] mt-4">Documents Required</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          Udyam Registration is based on self-declaration, which makes it a simplified process with minimal documentation:
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><b>Aadhaar Number:</b>
            <ul>
              <li>Proprietorship: Owner’s Aadhaar</li>
              <li>Partnership: Managing partner’s Aadhaar</li>
              <li>LLP/Company: Authorized signatory’s Aadhaar</li>
            </ul>
          </li>
          <li>PAN Card of the business entity or individual</li>
          <li>Bank Account Details of the business</li>
          <li>GST Number (mandatory for applicable businesses)</li>
        </ul>
      </div>

      {/* Step-by-Step: How to Register on Udyam Portal */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Step-by-Step: How to Register on Udyam Portal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ul className="space-y-2 text-sm md:text-base text-[#1a1a1a]">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>1. Visit the official Udyam Registration portal.</b>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>2. Select “For New Entrepreneurs not registered yet.”</b>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>3. Enter Aadhaar and validate via OTP.</b>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>4. Verify PAN and provide business classification.</b>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>5. Fill the registration form with enterprise details, including:</b>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Name, address, NIC code, and business activity</li>
                    <li>Number of employees, investment, and turnover</li>
                  </ul>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>6. Review & submit the application with final OTP verification.</b>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>7. Receive your Udyam Certificate via email.</b>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Validity of Udyam Certificate */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Validity of Udyam Certificate</h3>
        <p className="text-sm md:text-base text-[#1a1a1a]">
          Once issued, the Udyam Certificate is valid for a lifetime. There is no need for renewal, as long as your enterprise continues to meet MSME classification standards.
        </p>
      </div>
    </div>
  </div>
</section>


  );
};

export default ListComponent;
