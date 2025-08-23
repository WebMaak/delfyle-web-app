import { FaArrowRight, FaArrowDown, FaUniversity, FaFileInvoice, FaTasks } from 'react-icons/fa';
import React from "react";

const ListComponentTwo = () => {
  return (
  <section className="w-full py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50 text-gray-800">
  <div className="w-[100%] lg:max-w-[75%] md:max-w-[90%] mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
        Why Choose Delfyle for Company Compliance?
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Delfyle offers a streamlined and reliable approach to compliance management.
      </p>
    </div>

    {/* Vertical Line - Hidden on mobile, visible on medium screens and up */}
    <div className="relative">
      <div className="absolute left-3 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#b44593] opacity-30 hidden md:block"></div>

      {/* Feature 1: LEDGERS Compliance Platform (Left on Desktop, Top on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right md: align-self-center ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Delfyle’s LEDGERS Compliance Platform</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Our intelligent compliance software helps track deadlines, manage statutory filings, and generate automated reports—all from one dashboard.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          1
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Feature 2: Dedicated Compliance Manager (Right on Desktop, Bottom on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Dedicated Compliance Manager</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Every company is assigned a dedicated compliance expert who guides you through regulatory processes and ensures timely filings.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          2
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Feature 3: Accounting Support (Left on Desktop, Top on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Accounting Support</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              We maintain your company’s books of accounts and prepare financial statements in accordance with Indian accounting standards.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          3
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Feature 4: Secretarial Services (Right on Desktop, Bottom on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Secretarial Services</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              From drafting board meeting minutes to preparing Directors’ Reports and AGM documentation, we handle all secretarial compliance needs.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          4
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Feature 5: MCA Annual Return Filing (Left on Desktop, Top on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">MCA Annual Return Filing</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Our team ensures all documents are filed on time, including AOC-4, MGT-7, and ADT-1—keeping your company ROC compliant.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          5
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Feature 6: Income Tax Return Filing (Right on Desktop, Bottom on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Income Tax Return Filing</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              We handle ITR filing for active and dormant companies, ensuring proper documentation and compliance with tax laws.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          6
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>
    </div>

    <div className="mt-12 text-center">
      <p className="text-lg text-gray-600">
        Delfyle is your trusted partner, simplifying complex compliance processes and allowing you to focus on your business growth.
      </p>
    </div>
  </div>
</section>

  );
};

export default ListComponentTwo;
