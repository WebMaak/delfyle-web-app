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
      RCMC Registration
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      The Key to Boosting Your Export Business
    </p>

    <div className="grid gap-6 md:grid-cols-2">

      {/* Eligibility & Requirements */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Eligibility & Requirements</h3>
        <p className="text-base text-gray-600 mb-2">
          To register for RCMC, your business must meet these criteria and provide the following documents:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>A valid **Import Export Code (IEC)** from DGFT.</span>
          </li>
          <li className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>**Main Business Line Declaration** specifying your principal line of business.</span>
          </li>
          <li className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>**PAN Card** of the entity.</span>
          </li>
          <li className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>**Company MOA, Partnership Deed, or Trust Deed**.</span>
          </li>
          <li className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>**GST Registration Certificate**.</span>
          </li>
        </ul>
      </div>

      {/* Registering Authorities & Validity */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Registering Authorities & Validity</h3>
        <p className="text-base text-gray-600 mb-2">
          RCMC is issued by various bodies authorized by the DGFT. These include:
        </p>
        <ul className="space-y-2">
          <li>
            <span className="font-semibold text-[#1a1a1a]">Export Promotion Councils (EPCs):</span> 27 bodies promoting specific sectors like textiles, electronics, and agricultural products.
          </li>
          <li>
            <span className="font-semibold text-[#1a1a1a]">Commodity Boards:</span> 6 boards for products like coffee, tea, and spices.
          </li>
          <li>
            <span className="font-semibold text-[#1a1a1a]">Export Development Authorities:</span> 2 authorities focused on broader development.
          </li>
        </ul>
        <p className="text-base text-gray-600 mb-2 mt-4">
          **Validity:** An RCMC is valid for **five years** and must be renewed to ensure continued compliance.
        </p>
      </div>

      {/* Examples of Authorizing Bodies */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Examples of Authorizing Bodies</h3>
        <ul className="space-y-2">
          {[
            {
              title: "Export Promotion Councils:",
              items: [
                "Agricultural and Processed Food Products Export Development Authority (APEDA)",
                "Apparel Export Promotion Council (AEPC)",
                "Engineering Export Promotion Council (EEPC)"
              ]
            },
            {
              title: "Commodity Boards:",
              items: [
                "Coffee Board",
                "Tea Board",
                "Spices Board"
              ]
            },
            {
              title: "Development Authorities:",
              items: [
                "Electronics Industries Development Council (ELCID)",
                "National Centre for Trade Information (NCTI)"
              ]
            }
          ].map((category, idx) => (
            <li key={idx}>
              <span className="font-semibold text-[#1a1a1a]">{category.title}</span>
              <ul className="list-disc list-inside ml-4 text-sm md:text-base text-[#1a1a1a]">
                {category.items.map((item, subIdx) => (
                  <li key={subIdx}>{item}</li>
                ))}
              </ul>
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
