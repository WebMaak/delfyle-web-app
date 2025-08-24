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
      Share Dematerialisation: Rules, Benefits & Penalties
    </h2>
    <div className="grid gap-6 md:grid-cols-2">

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Who Must Comply with Share Dematerialisation?</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Mandatory for:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>All Public Companies</li>
          <li>Private Limited Companies, excluding small companies</li>
          <li>Holding and Subsidiary Companies, even if otherwise eligible for exemption</li>
        </ul>
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Exemptions – Small Companies</h3>
        <p className="text-sm md:text-base text-[#1a1a1a]">A private limited company qualifies as a small company if paid-up capital is ≤ ₹4 crore and turnover is ≤ ₹40 crore. However, if it's a holding or subsidiary company, it must still comply.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Benefits of Dematerialisation of Shares</h3>
        <div className="space-y-4">
          <ul className="space-y-2 text-sm md:text-base text-[#1a1a1a]">
            <li className="flex items-start gap-2">
              <span className="text-[#b44593] text-lg font-bold">✓</span>
              <div>
                <span className="font-bold">Enhanced Security:</span> Electronic shares eliminate the risk of theft, loss, or forgery.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#b44593] text-lg font-bold">✓</span>
              <div>
                <span className="font-bold">Simplified Transactions:</span> Shares can be bought, sold, or transferred instantly online.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#b44593] text-lg font-bold">✓</span>
              <div>
                <span className="font-bold">Lower Costs:</span> No need for stamp duty on transfer or costs associated with physical documents.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#b44593] text-lg font-bold">✓</span>
              <div>
                <span className="font-bold">Improved Convenience:</span> Manage your investments from anywhere via online platforms.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#b44593] text-lg font-bold">✓</span>
              <div>
                <span className="font-bold">Real-Time Corporate Actions:</span> Receive dividends, bonuses, and stock split benefits automatically.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#b44593] text-lg font-bold">✓</span>
              <div>
                <span className="font-bold">Loan Collateral:</span> Shares in Demat form can be pledged easily to secure loans.
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">How to Convert Physical Shares to Demat – Step-by-Step</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">Step 1: Open a Demat Account</span> - With any SEBI-registered Depository Participant (bank, broker, etc.).</li>
              <li><span className="font-bold">Step 2: Fill Dematerialisation Request Form (DRF)</span> - Submit the DRF and original share certificates to your DP.</li>
              <li><span className="font-bold">Step 3: Verification and DRN Generation</span> - Receive a Dematerialisation Request Number (DRN) upon approval.</li>
              <li><span className="font-bold">Step 4: Forwarding to RTA</span> - Your DP forwards the documents to the company’s RTA for processing.</li>
              <li><span className="font-bold">Step 5: Approval and Conversion</span> - The physical shares are converted and destroyed.</li>
              <li><span className="font-bold">Step 6: Shares Credited to Demat Account</span> - Your shares are now held electronically.</li>
            </ul>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Penalties for Non-Compliance:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">Issuance Restriction:</span> Inability to issue new shares, bonuses, or buybacks.</li>
              <li><span className="font-bold">Limited Shareholder Rights:</span> Ineligibility to transfer or subscribe to shares.</li>
              <li><span className="font-bold">Monetary Penalties:</span> Up to ₹10,000 for companies and ₹50,000 for defaulting officers.</li>
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
