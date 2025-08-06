import { FaCheckCircle } from "react-icons/fa";
import React from "react";

const ListComponent = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
        Who Should File ITR-3?
        </h2>

        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
        ITR-3 is applicable to a specific group of taxpayers whose income sources are more complex or diverse. This includes those running businesses, offering professional services, or having other financial interests that require disclosure under Indian tax law.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Block - Form Structure */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02]  hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">You should file ITR-3 if you meet any of the following:</h3>
            <ul className="space-y-4">
              {[
                "You're a resident or non-resident individual or HUF",
                "You earn income from business or profession (proprietorship)",
                "You are a company director",
                "You have unlisted equity investments",
                "You earn income from",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]"
                >
                  <FaCheckCircle className="text-[#b44593] m-1 text-lg " />
                  <span className="w-[90%]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Block - Schedules */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02]  hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">You earn income from:</h3>
            <ul className="space-y-4">
              {[
                "Salary or pension",
                "One or more house properties",
                "Capital gains (short/long-term)",
                "Lotteries, race betting, or legal gambling",
                "Foreign income or own foreign assets",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm md:text-base text-gray-700"
                >
                  <FaCheckCircle className="text-[#b44593] m-1 text-lg" />
                  <span className="w-[90%]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-7">

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Block - Form Structure */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02]  hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">Who Cannot File ITR-3?</h3>
            <ul className="space-y-4">
              {[
                "Individuals earning income as a partner in a firm (they should file ITR-2)",
                "Individuals eligible for ITR-1 or ITR-2 based on their income sources",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]"
                >
                  <FaCheckCircle className="text-[#b44593] m-1 text-lg" />
                  <span className="w-[90%]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Block - Schedules */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02]  hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">ITR-3 Filing Due Date (FY 2024-25 / AY 2025-26)</h3>
            <ul className="space-y-4">
              {[
                "July 31, 2025 – Non-Audit Cases",
                "October 31, 2025 – Audit Cases",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm md:text-base text-gray-700"
                >
                  <FaCheckCircle className="text-[#b44593] m-1 text-lg" />
                  <span className="w-[90%]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-sm md:text-base text-gray-700 italic">
        (Dates are subject to change by CBDT notifications. File early to avoid last-minute hassles.)
        </p>
      </div>
    </section>
  );
};

export default ListComponent;
