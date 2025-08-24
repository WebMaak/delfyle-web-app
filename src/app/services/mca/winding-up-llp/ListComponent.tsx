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
      Voluntary Liquidation & Winding Up under IBC
    </h2>
    <div className="grid gap-6 md:grid-cols-2">

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Voluntary Liquidation Process under IBC, 2016</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Pre-requisites:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>LLP must be solvent.</li>
          <li>Majority of designated partners must declare that the LLP can pay its debts in full.</li>
          <li>The liquidation must not be conducted with the intent to defraud.</li>
        </ul>
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Step-by-Step Procedure:</h3>
        <ul className="list-decimal ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="font-bold">Declaration of Solvency (DOS):</span> By most designated partners, backed by audited financial statements and asset valuation.</li>
          <li><span className="font-bold">Partner Resolution:</span> Resolution for voluntary liquidation and appointment of a Liquidator.</li>
          <li><span className="font-bold">Creditors' Approval:</span> If the LLP has debts, two-thirds (in value) of creditors must approve.</li>
          <li><span className="font-bold">Intimation:</span> Notify the Registrar and Insolvency and Bankruptcy Board of India (IBBI).</li>
          <li><span className="font-bold">Public Announcement:</span> Within 5 days of Liquidator's appointment, inviting claims.</li>
          <li><span className="font-bold">Verification of Claims:</span> Within 30 days of the last date to receive claims.</li>
          <li><span className="font-bold">Realisation of Assets:</span> Sale of assets, recovery of dues, and collection of unpaid capital.</li>
          <li><span className="font-bold">Deposit & Distribution:</span> Funds are deposited in a designated bank account and distributed within 6 months.</li>
          <li><span className="font-bold">Final Report & Dissolution:</span> Submit a final report to the Tribunal and Registrar for LLP dissolution.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Tribunal-Initiated Winding Up of LLP</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Procedure:</p>
        <div className="space-y-4">
          <ul className="list-decimal ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
            <li><span className="font-bold">Filing of Petition:</span> By the LLP, creditors, partners, or Registrar.</li>
            <li><span className="font-bold">Tribunal’s Evaluation:</span> Review of grounds and passing of a winding-up order.</li>
            <li><span className="font-bold">Appointment of Liquidator:</span> Appointed by the Tribunal.</li>
            <li><span className="font-bold">Public Notice:</span> Issued by the Liquidator to inform stakeholders and invite claims.</li>
            <li><span className="font-bold">Claim Settlement:</span> Verification and payment to creditors in accordance with law.</li>
            <li><span className="font-bold">Asset Liquidation:</span> Sale of LLP’s assets to repay liabilities.</li>
            <li><span className="font-bold">Distribution of Surplus:</span> Among partners as per LLP agreement.</li>
            <li><span className="font-bold">Dissolution Order:</span> Passed by the Tribunal.</li>
            <li><span className="font-bold">Filing with Registrar:</span> Final step to legally dissolve the LLP.</li>
          </ul>
        </div>

        <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Why Choose Delfyle for LLP Winding Up?</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">Delfyle provides reliable, end-to-end support for LLP winding-up procedures. Our expert team ensures:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Preparation and submission of all legal documents</li>
              <li>Declaration of solvency and resolution drafting</li>
              <li>Appointment and coordination with insolvency professionals</li>
              <li>Liaison with regulatory authorities and the Tribunal</li>
              <li>Smooth execution of liquidation and dissolution</li>
            </ul>
            <p className="text-sm md:text-base text-[#1a1a1a]">We handle the complexities so you can focus on your next business move.</p>
          </div>
      </div>
      
     <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
  <h3 className="text-lg font-semibold text-[#1a1a1a]">Winding Up Under Insolvency & Bankruptcy Code (IBC), 2016</h3>
  <div className="grid grid-cols-1 gap-4">
    <div>
      <p className="text-sm md:text-base text-[#1a1a1a]">LLPs unable to repay their debts may undergo insolvency proceedings under IBC:</p>
      <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
        <li><span className="font-bold">Initiation:</span> By LLP, creditor, or partner.</li>
        <li><span className="font-bold">Moratorium:</span> Suspension of legal proceedings during insolvency resolution.</li>
        <li><span className="font-bold">Appointment of Insolvency Resolution Professional (IRP):</span> Manages affairs and drafts a resolution plan.</li>
        <li><span className="font-bold">Committee of Creditors (CoC):</span> Reviews and approves the resolution plan.</li>
        <li><span className="font-bold">Resolution or Liquidation:</span> Based on CoC's decision and Tribunal’s approval.</li>
        <li><span className="font-bold">Final Dissolution:</span> Upon asset liquidation and distribution of proceeds.</li>
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
