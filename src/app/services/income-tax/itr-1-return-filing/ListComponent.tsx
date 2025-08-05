import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import React from "react";

const ListComponent = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
          Documents Required for ITR-1 Filing
        </h2>

        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
          While no documents are to be attached with the return, keep these handy:
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Block */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02]  hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">Documents Checklist</h3>
            <ul className="space-y-4">
              {[
                "Form 16 from your employer",
                "Form 26AS for TDS verification",
                "Bank Statements and Interest Certificates",
                "Investment Proofs (for 80C/80D/80G deductions)",
                "Aadhaar & PAN Card",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]"
                >
                  <FaCheckCircle className="text-[#b44593] m-1 text-lg" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Block */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02]  hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">
              Penalty for Late ITR-1 Filing
            </h3>
            <ul className="space-y-4">
              {[
                "₹5,000 penalty if income exceeds ₹5 lakhs",
                "₹1,000 penalty if income is below ₹5 lakhs",
                "1% interest/month on outstanding taxes",
                "Up to 200% penalty for misreporting income",
                "Risk of prosecution for consistent non-filing",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm md:text-base text-gray-700"
                >
                  <FaExclamationTriangle className="text-[#b44593] m-1 text-lg" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-sm md:text-base text-gray-700 italic">
          Avoid these risks by filing your ITR-1 before{" "}
          <span className="font-medium text-[#b44593]">July 31st</span>.
        </p>
      </div>
    </section>


  );
};

export default ListComponent;
