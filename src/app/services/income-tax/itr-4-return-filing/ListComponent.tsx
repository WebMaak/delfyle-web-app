import { FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdWarningAmber } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";

import React from "react";

const ListComponent = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
          Who Should Not File ITR-4?
        </h2>

        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
          ITR-4 is for individuals, HUFs, and firms (other than LLPs) with presumptive income under Sections 44AD, 44ADA, or 44AE. However, not everyone qualifies.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left - Who Cannot File ITR-4 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">You cannot file ITR-4 if:</h3>
            <ul className="space-y-4">
              {[
                "You're a Director in a company",
                "You hold unlisted equity shares",
                "You own foreign assets or have foreign income",
                "You have more than one house property",
                "You have capital gains, lottery income, or racehorse winnings",
                "You have speculative business income or commission/brokerage income",
                "Your agricultural income exceeds ₹5,000",
                "You want to claim brought-forward losses, foreign tax credits, or deductions under Section 90/91",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]"
                >
                  <FaTimesCircle className="text-red-500 m-1 text-lg" />
                  <span className="w-[90%]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Due Date & Penalty */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] flex items-center gap-2">
                <AiOutlineCalendar className="text-[#b44593]" />
                ITR-4 Filing Due Date (AY 2025–26)
              </h3>
              <p className="text-gray-700 mt-2 text-sm md:text-base">
                <strong>Due Date:</strong> 31st July 2025 (Non-audit cases)
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] flex items-center gap-2">
                <MdWarningAmber className="text-[#b44593]" />
                Penalty for Late Filing
              </h3>
              <ul className="space-y-2 mt-2 text-sm md:text-base text-gray-700">
                <li>₹1,000 for income below ₹5 Lakhs</li>
                <li>₹5,000–₹10,000 for income above ₹5 Lakhs</li>
              </ul>
              <p className="mt-2 text-sm text-gray-600 italic">
                Avoid penalties – file early with Delfyle!
              </p>
            </div>
          </div>
        </div>

        {/* Presumptive Taxation Note */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-3 hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a] flex items-center gap-2">
            <HiLightBulb className="text-yellow-500" />
            What is Presumptive Taxation Scheme?
          </h3>
          <p className="text-gray-700 text-sm md:text-base">
            Presumptive taxation is designed to ease compliance for small taxpayers by estimating income at a fixed rate, eliminating the need to maintain books of accounts.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700">
            <li><strong>Section 44AD</strong> – For small businesses with turnover ≤ ₹2 Cr</li>
            <li><strong>Section 44ADA</strong> – For professionals with gross receipts ≤ ₹50 Lakhs</li>
            <li><strong>Section 44AE</strong> – For transport businesses with up to 10 vehicles</li>
          </ul>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Note:</strong> If turnover exceeds ₹2 Cr, you must file ITR-3 instead.
          </p>
        </div>
      </div>
    </section>

  );
};

export default ListComponent;
