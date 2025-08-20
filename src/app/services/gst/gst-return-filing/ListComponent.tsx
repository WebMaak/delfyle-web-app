import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ListComponent = () => {
  return (
<section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      GST Registration & Return Filing in India
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Registration, Return Filing, Compliance, Deadlines & Software
    </p>

    {/* Grid for main blocks */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* Who Should File GST Returns */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Who Should File GST Returns?</h3>
        <p className="text-base text-gray-600 mb-4">
          Any individual, business, or organization registered under GST must file returns, regardless of turnover:
        </p>
        <ul className="space-y-2">
          {[
            "Regular taxpayers",
            "Composition scheme taxpayers",
            "Non-resident taxable persons",
            "Input Service Distributors",
            "E-commerce operators",
            "TDS/TCS deductors"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Note:</strong> Frequency and type of returns depend on turnover, business category, and nature of supplies.
        </p>
      </div>

      {/* Types of GST Returns and Deadlines */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Types of GST Returns & Deadlines</h3>
        <ul className="space-y-2">
          {[
            "GSTR-1: Outward Supplies (Sales) – 11th of next month (monthly) or 13th (quarterly)",
            "GSTR-3B: Summary of Sales & ITC – 20th (monthly), 22nd/24th (QRMP)",
            "GSTR-4: Composition Scheme – 30th April (annually)",
            "GSTR-5: Non-resident Taxpayers – 20th of next month",
            "GSTR-5A: OIDAR Service Providers – 20th of next month",
            "GSTR-6: Input Service Distributors – 13th of next month",
            "GSTR-7: TDS Deductors – 10th of next month",
            "GSTR-8: E-commerce Operators – 10th of next month",
            "GSTR-9: Annual Return – 31st December of following year",
            "CMP-08: Composition Scheme (Quarterly) – 18th after each quarter"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-600 mt-2">
          Additional returns include GSTR-2A/2B, GSTR-9C, and ITC-04 for specialized reporting.
        </p>
      </div>

      {/* Late Filing Penalties & Interest */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Late Filing Penalties & Interest</h3>
        <ul className="space-y-2">
          {[
            "Late Fee: ₹100 per day for CGST and SGST (₹200/day total), capped at ₹5,000",
            "Interest: 18% per annum on outstanding tax from the due date",
            "Annual Return Delay: Fee capped at 0.25% of turnover unless waived or revised"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* How to File GST Returns Online with Delfyle */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">How to File GST Returns Online with Delfyle</h3>
        <ul className="space-y-2">
          {[
            "Dedicated GST Advisor – Personal tax expert for timely filing",
            "Automated GST Software – File returns, reconcile ITC, track invoices in real time",
            "Monthly Compliance Reports – Return status, ITC summary, and next steps",
            "Timely Reminders – Automated alerts and follow-ups",
            "Real-Time Access to Financials – Manage books, receivables/payables, and file GST from anywhere"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>

      </div>

    </div>

    {/* Full Width - Key Features of Delfyle’s GST Software */}
    <div className="mt-10 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold text-[#1a1a1a]">Key Features of Delfyle’s GST Software</h3>
      <ul className="space-y-2">
        {[
          "GST invoicing & billing",
          "Auto-calculation of tax liabilities",
          "Input tax credit reconciliation",
          "GST E-way bill generation",
          "Sales & purchase register management",
          "Customer & supplier tracking",
          "Bank integration",
          "Automatic GSTR-1 and GSTR-3B filing",
          "GST Reconciliation"
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

  </div>
</section>






  );
};

export default ListComponent;
