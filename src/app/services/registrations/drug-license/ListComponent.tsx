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
      Drug License Details in West Bengal
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Who Needs a Drug License in West Bengal? */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Who Needs a Drug License?</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          The following entities are required to obtain a drug license before commencing operations:
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>Pharmacists with the requisite qualifications and State Pharmacy Council registration.</li>
          <li>Wholesale Distributors selling to retailers or hospitals in bulk.</li>
          <li>Retailers including pharmacy outlets and dispensaries selling to end-users.</li>
          <li>Manufacturers producing pharmaceutical or cosmetic items.</li>
          <li>Drug Dealers and Traders engaged in commercial sale or import.</li>
          <li>Traditional Medicine Providers dealing in Ayurvedic, Siddha, or Unani systems.</li>
        </ul>
      </div>

      {/* Types of Drug Licenses in West Bengal */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Types of Drug Licenses</h3>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><b>Manufacturing License:</b> Required for companies producing pharmaceutical products.</li>
          <li><b>Sale License:</b>
            <ul className="list-circle ml-5">
              <li>Retail Drug License – For direct sale to consumers.</li>
              <li>Wholesale Drug License – For bulk distribution to retailers/hospitals.</li>
            </ul>
          </li>
          <li><b>Loan License:</b> For businesses using a third-party manufacturing facility.</li>
          <li><b>Import License:</b> Required for importing medicines or cosmetics.</li>
          <li><b>Multi-Drug License:</b> For pharmacy chains operating in multiple states or districts.</li>
        </ul>
      </div>

      {/* Eligibility Criteria for Drug License in West Bengal */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Eligibility Criteria for Drug License</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">Personnel:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><b>Retail License:</b> A registered pharmacist with a D.Pharm or B.Pharm degree.</li>
              <li><b>Wholesale License:</b> Either a registered pharmacist or an experienced person (1 year post-graduate or 4 years post-HSC).</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">Premises:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Area of at least 10 sq. meters.</li>
              <li>Commercial location (mandatory for wholesale).</li>
              <li>Infrastructure to maintain drug safety (e.g., refrigeration, storage, etc.).</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">Regulatory Compliance:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Proper documentation</li>
              <li>Ethical sales practices</li>
              <li>No prior convictions for drug law violations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Premises Requirements */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Premises Requirements</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#1a1a1a] border-collapse">
            <thead>
              <tr className="bg-[#b44593]/10">
                <th className="py-2 px-4 border-b border-[#b44593]">Criteria</th>
                <th className="py-2 px-4 border-b border-[#b44593]">Retail License</th>
                <th className="py-2 px-4 border-b border-[#b44593]">Wholesale License</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-[#b44593]/20">Location</td>
                <td className="py-2 px-4 border-b border-[#b44593]/20">Commercial or mixed-use zone</td>
                <td className="py-2 px-4 border-b border-[#b44593]/20">Commercial zone only</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-[#b44593]/20">Minimum Area</td>
                <td className="py-2 px-4 border-b border-[#b44593]/20">10 sq. meters</td>
                <td className="py-2 px-4 border-b border-[#b44593]/20">10 sq. meters</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-[#b44593]/20">Combined Retail + Wholesale</td>
                <td className="py-2 px-4 border-b border-[#b44593]/20">Minimum 15 sq. meters</td>
                <td className="py-2 px-4 border-b border-[#b44593]/20">Minimum 15 sq. meters</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-[#b44593]/20">Equipment</td>
                <td className="py-2 px-4 border-b border-[#b44593]/20">Fridge, computer, printer</td>
                <td className="py-2 px-4 border-b border-[#b44593]/20">Fridge, computer, printer</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Approach Road</td>
                <td className="py-2 px-4">As per local municipal rules</td>
                <td className="py-2 px-4">Minimum 18-meter road width preferred</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Validity & Renewal and Documents Required */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Validity & Renewal of Drug License</h3>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><b>Validity:</b> 5 years (subject to regulatory compliance)</li>
          <li><b>Renewal:</b> Must be initiated before expiry. Lapses can result in suspension or cancellation.</li>
        </ul>
        <h3 className="text-lg font-semibold text-[#1a1a1a] mt-4">Documents Required</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">For Retail Drug License:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Form 19 & Rs. 3000 challan</li>
              <li>Affidavit and educational proof of proprietor</li>
              <li>Pharmacist registration proof and ID</li>
              <li>Premises blueprint</li>
              <li>Lease agreement or ownership proof</li>
              <li>Refrigerator invoice</li>
              <li>Photographs (5 copies each of proprietor and pharmacist)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">For Wholesale Drug License:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Form 19 & Rs. 3000 challan</li>
              <li>Proprietor and competent person affidavits</li>
              <li>Competent person’s experience certificate</li>
              <li>Premises layout</li>
              <li>Lease deed or title deed</li>
              <li>Proof of commercial property usage</li>
              <li>Refrigeration proof</li>
              <li>Photographs</li>
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
