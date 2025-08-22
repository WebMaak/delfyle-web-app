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
      FSSAI Registration & Licensing
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Ensure Your Food Business is Safe, Compliant, and Trusted
    </p>

    <div className="grid gap-6 md:grid-cols-2">

      {/* Who Needs FSSAI Registration */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Who Needs FSSAI Registration?</h3>
        <ul className="space-y-2">
          {[
            "Retailers, petty vendors, grocery shops, and bakeries.",
            "Street food vendors and temporary food stalls.",
            "Home-based kitchens and caterers.",
            "Cloud kitchens and online food delivery providers.",
            "Dairy units, milk vendors, and milk chilling centres.",
            "Meat, fish, and poultry processors.",
            "Restaurants, bars, hotels, canteens, and cafeterias.",
            "Importers/exporters of food products and ingredients.",
            "E-commerce platforms selling food items."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Types of FSSAI Registration */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Types of FSSAI Registration</h3>
        <p className="text-base text-gray-600 mb-2">
          Based on business size, turnover, and operational nature, there are three types:
        </p>
        <ul className="space-y-2">
          <li>
            <span className="font-semibold text-[#1a1a1a]">1. Basic FSSAI Registration: </span> For businesses with an annual turnover up to ₹12 lakhs.
          </li>
          <li>
            <span className="font-semibold text-[#1a1a1a]">2. State FSSAI License: </span> For businesses with a turnover between ₹12 lakhs and ₹20 crores.
          </li>
          <li>
            <span className="font-semibold text-[#1a1a1a]">3. Central FSSAI License: </span> For large-scale businesses with turnover exceeding ₹20 crores or multi-state operations.
          </li>
        </ul>
      </div>

      {/* Get Your FSSAI License with Delfyle */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Get Your FSSAI License with Delfyle</h3>
        <p className="text-base text-gray-600 mb-4">
          At Delfyle, we make food business compliance stress-free. Our professionals will:
        </p>
        <ul className="space-y-2">
          {[
            "Assess your business and determine the right license type.",
            "Prepare and submit your application accurately.",
            "Handle follow-ups and liaise with the FSSAI authorities.",
            "Ensure you meet ongoing compliance and renewal requirements."
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
