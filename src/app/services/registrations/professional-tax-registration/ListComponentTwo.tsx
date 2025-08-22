import { FaCheckCircle } from "react-icons/fa";
import React from "react";

const ListComponentTwo = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      Professional Tax Compliance
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Key responsibilities and exemptions related to Professional Tax
    </p>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">

      {/* Employer Responsibilities */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Employer Responsibilities</h3>
        <p className="text-sm md:text-base text-gray-600">
          Employers are legally obligated to ensure professional tax is handled correctly.
        </p>
        <ul className="space-y-2">
          {[
            "Deduct professional tax from employee salaries.",
            "Submit returns and make payments on time.",
            "Maintain wage and attendance registers.",
            "Ensure payments are accompanied by valid documentation.",
            "File returns as per timelines defined by the state."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Exemptions from Professional Tax */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Exemptions from Professional Tax</h3>
        <p className="text-sm md:text-base text-gray-600">
          Certain individuals are exempt from paying professional tax.
        </p>
        <ul className="space-y-2">
          {[
            "Parents of children with permanent mental/physical disability.",
            "Individuals above 65 years of age.",
            "Members of the armed forces.",
            "Blind or permanently disabled individuals.",
            "Women agents under the Mahila Pradhan Kshetriya Bachat Yojana.",
            "Textile industry Badli workers."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Documents Required for Registration */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4">
        <h3 className="text-lg font-semibold text-[#1a1a1a] text-center">Documents Required for Registration</h3>
        <p className="text-base text-gray-600 text-center">
          A list of documents needed to complete the professional tax registration process.
        </p>
        <ul className="space-y-2">
          {[
            "Certificate of Incorporation / Partnership Deed / LLP Agreement",
            "PAN Card of business and proprietor/partners/directors",
            "MOA & AOA (for companies)",
            "Identity and address proof of owners/directors",
            "NOC from premises owner (if rented)",
            "Passport-size photos",
            "Salary details of employees",
            "Bank account details and cancelled cheque"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Due Dates and Penalties Table */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 overflow-x-auto">
        <h3 className="text-lg font-semibold text-[#1a1a1a] text-center">Due Dates & Penalties for Non-Compliance</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Particulars</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penalty</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Payment (More than 20 employees)</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">By the 15th of the following month</td>
              <td rowSpan={3} className="px-6 py-4 text-sm text-gray-600 align-top">
                <ul className="list-disc list-inside space-y-1">
                  <li>Non-registration: ₹5 per day</li>
                  <li>Late filing of return: ₹1,000</li>
                  <li>Late payment: 1.25% interest/month + 10% penalty</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Payment (Less than 20 employees)</td>
              <td className="px-6 py-4 whitespace-now-wrap text-sm text-gray-600">Quarterly by the 15th of the next month following the quarter</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Return Filing</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">As per state-specific schedule</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>


  );
};

export default ListComponentTwo;
