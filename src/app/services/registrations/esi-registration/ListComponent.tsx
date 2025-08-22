import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ListComponent = () => {
  return (
<section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      Key Benefits of ESI Registration
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      By registering under the ESI scheme, employers extend significant social security benefits to their employees.
    </p>

    <div className="grid gap-6 md:grid-cols-2">

      {/* Benefits List */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Benefits for Employees</h3>
        <ul className="space-y-2">
          {[
            "Sickness Benefit: 70% of wages for up to 91 days annually during certified illness.",
            "Extended Sickness Benefit: 80% wage compensation for up to 2 years for specific long-term diseases.",
            "Medical Coverage: Free medical care for employees and dependents in ESIC hospitals.",
            "Maternity Benefit: Full wage for 26 weeks of maternity leave (extendable by one month).",
            "Disability Benefits: Temporary (90% wage during recovery) and Permanent (90% wage paid monthly based on loss of earning capacity).",
            "Dependent Benefits: In case of death due to employment injury, dependents receive 90% wage as monthly compensation.",
            "Funeral Expenses: ₹15,000 payable for funeral rites."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Required Documents */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Documents Required</h3>
        <p className="text-base text-gray-600 mb-2">
          To complete the ESIC registration online, the following documents are typically required:
        </p>
        <ul className="space-y-2">
          {[
            "Business Proof (e.g., Factories/Shops & Establishment License, Certificate of Incorporation or Partnership Deed)",
            "GST Certificate",
            "MoA and AoA (for companies)",
            "Address Proof (e.g., Recent utility bill, rental agreement)",
            "Employee Details (List of employees with PAN and Aadhaar)",
            "Salary Structure for all employees",
            "Bank Details (Cancelled cheque of company account)",
            "Company Info (List of directors/partners, shareholder information)"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Post-Registration Compliance */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Post-Registration Compliance</h3>
        <p className="text-base text-gray-600 mb-4">
          Once registered under the ESI scheme, employers must fulfill several key compliance requirements to avoid penalties. Delfyle offers ongoing compliance support to keep your business on track.
        </p>
        <ul className="space-y-2">
          {[
            "Maintain Attendance and Wage Registers.",
            "Submit Monthly Returns and Challans by the 15th of the following month.",
            "Keep an Inspection Book for ESIC visits.",
            "Maintain an Accident Register to record workplace injuries."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>



  );
};

export default ListComponent;
