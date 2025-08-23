import { FaArrowRight, FaArrowDown, FaUniversity, FaFileInvoice, FaTasks } from 'react-icons/fa';
import React from "react";

const ListComponentTwo = () => {
  return (
  <section className="w-full py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50 text-gray-800">
  <div className="w-[100%] lg:max-w-[75%] md:max-w-[90%] mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
        Mandatory Annual Compliance Requirements for OPC
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Here are the key mandatory annual compliance filings for a One Person Company:
      </p>
    </div>

    {/* Vertical Line - Hidden on mobile, visible on medium screens and up */}
    <div className="relative">
      <div className="absolute left-3 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#b44593] opacity-30 hidden md:block"></div>

      {/* Benefit 1: Boosts Credibility (Left on Desktop, Top on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right md: align-self-center ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Conducting Annual General Meeting (AGM)</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Though an OPC is exempt from holding an AGM, certain declarations must still be submitted annually to meet compliance norms.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          1
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Benefit 2: Avoids Penalties (Right on Desktop, Bottom on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Filing Financial Statements – Form AOC-4</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>Must be filed within 180 days from the end of the financial year.</li>
                <li>Includes balance sheet, profit & loss account, and director's report</li>
                <li>Due Date: Typically by 27th September.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          2
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Feature 3: Filing Annual Return – Form MGT-7A (Left on Desktop, Top on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Filing Annual Return – Form MGT-7A</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>Must be filed within 60 days of the end of the financial year.</li>
                <li>Includes information about shareholding and directorship.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          3
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Feature 4: Income Tax Return Filing (Right on Desktop, Bottom on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Income Tax Return Filing</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>OPCs must file their Income Tax Return (ITR) by July 31st (if not subject to audit) or September 30th (if audit applicable).</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          4
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Feature 5: Statutory Audit (Left on Desktop, Top on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Statutory Audit</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>Mandatory regardless of turnover.</li>
                <li>A Chartered Accountant must audit the books and prepare an audit report.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          5
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Feature 6: Director KYC – Form DIR-3 KYC (Right on Desktop, Bottom on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Director KYC – Form DIR-3 KYC</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>Every director holding a DIN as of March 31st must file this by September 30th.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          6
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Feature 7: Disclosure of Director’s Interest – Form MBP-1 (Left on Desktop, Top on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Disclosure of Director’s Interest – Form MBP-1</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>Directors must disclose their interest in other companies/entities in the first board meeting of the financial year.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          7
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Feature 8: Filing of DPT-3 (Right on Desktop, Bottom on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Filing of DPT-3</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>Must be filed annually by June 30th to declare outstanding loans or deposits.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          8
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Feature 9: Maintenance of Statutory Registers (Left on Desktop, Top on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Maintenance of Statutory Registers</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>Maintain updated records of members, directors, and board meetings as per the Companies Act, 2013.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          9
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>
    </div>

    <div className="mt-12 text-center">
      <p className="text-lg text-gray-600">
        Delfyle is your trusted partner for OPC annual compliance, simplifying complex processes so you can focus on growing your business.
      </p>
    </div>
  </div>
</section>

  );
};

export default ListComponentTwo;
