import { FaCheckCircle } from "react-icons/fa";
import React from "react";

const ListComponent = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
          ITR-2 Form Structure & Components
        </h2>

        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
          Understand what’s included in the ITR-2 form for a complete and compliant filing experience.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Block - Form Structure */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02]  hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">The ITR-2 Form Includes</h3>
            <ul className="space-y-4">
              {[
                "Part A: General information (PAN, Aadhaar, Address, Contact details)",
                "Part B-TI: Computation of total income",
                "Part B-TTI: Computation of tax liability",
                "Verification section for declaration",
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
            <h3 className="text-lg font-semibold text-[#1a1a1a]">Schedules Cover</h3>
            <ul className="space-y-4">
              {[
                "Salary details",
                "House property income",
                "Capital gains",
                "Foreign assets and foreign income",
                "Deductions under 80C, 80D, 80G, etc.",
                "TDS/TCS, tax payments",
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
          Ensure you fill all relevant sections and schedules in ITR-2 to avoid discrepancies or delays in processing.
        </p>
      </div>
    </section>
  );
};

export default ListComponent;
