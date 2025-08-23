import { FaArrowRight, FaArrowDown, FaUniversity, FaFileInvoice, FaTasks } from 'react-icons/fa';
import React from "react";

const ListComponentTwo = () => {
  return (
  <section className="w-full py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50 text-gray-800">
  <div className="w-[100%] lg:max-w-[75%] md:max-w-[90%] mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
        Step-by-Step Process to Add a Director
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Adding a new director to your company involves a structured legal process to ensure compliance with the Companies Act, 2013.
      </p>
    </div>

    {/* Vertical Line - Hidden on mobile, visible on medium screens and up */}
    <div className="relative">
      <div className="absolute left-3 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#b44593] opacity-30 hidden md:block"></div>

      {/* Step 1: Review the AOA */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right md: align-self-center ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Review the AOA</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>Check if the Articles of Association (AOA) allow the appointment of additional directors.</li>
                <li>Amend the AOA if needed to align with the proposed change.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          1
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 2: Hold Board & General Meetings */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Hold Board & General Meetings</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>Pass a board resolution to approve the appointment.</li>
                <li>Conduct an Annual General Meeting (AGM) or Extraordinary General Meeting (EGM) to get shareholder approval.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          2
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 3: Apply for DIN and DSC */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Apply for DIN and DSC</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>If the proposed director doesn’t already have a DIN, apply for one.</li>
                <li>A Class 2 DSC is also required for e-filing with the MCA.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          3
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 4: Obtain Director's Consent (Form DIR-2) */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Obtain Director's Consent (Form DIR-2)</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>The individual must provide written consent to act as a director of the company.</li>
                <li>This consent is formalized by signing Form DIR-2.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          4
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 5: Issue Appointment Letter */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">File DIR-12 with ROC</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>Submit Form DIR-12 and all supporting documents with the Registrar of Companies.</li>
                <li>This must be done within 30 days of the director's appointment to avoid penalties.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          5
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 6: File DIR-12 with ROC */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Update Company Registers</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>Make necessary entries in the company’s Register of Directors and Key Managerial Personnel.</li>
                <li>Update your official records with the new director's details.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          6
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 7: Update Company Registers */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Update Tax and Regulatory Records</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>Update the director's details with GST and other statutory authorities as required.</li>
                <li>Ensure all regulatory records reflect the new appointment.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          7
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
