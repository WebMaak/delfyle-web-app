import { FaCheckCircle, FaLaptop, FaFileDownload, FaDownload, FaArrowRight, FaArrowDown } from 'react-icons/fa';
import React from "react";

const ListComponentTwo = () => {
  return (
    <section className="w-full py-12 md:px-[0] px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50 text-gray-800">
  <div className="w-[100%] lg:max-w-[75%] md:max-w-[90%] mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
        The Drug License Application Journey
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        A simple, step-by-step process for getting your drug license in West Bengal.
      </p>
    </div>

    {/* Application Timeline */}
    <div className="relative">
      {/* Vertical Line - Hidden on mobile, visible on medium screens and up */}
      <div className="absolute left-3 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#b44593] opacity-30 hidden md:block"></div>

      {/* Step 1: Document Preparation (Left on Desktop, Top on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right md: align-self-center ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Document Preparation</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Gather all documents, including personal and premises information, and ensure they are formatted for online submission.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          1
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 2: Online Registration (Right on Desktop, Bottom on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2  ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Online Registration</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Register on the West Bengal Drugs Control Directorate portal to receive your unique login credentials.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          2
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 3: Application Submission (Left on Desktop, Top on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Application Submission</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Fill out and upload all forms and supporting documents through the online portal.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          3
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 4: Premises Inspection (Right on Desktop, Bottom on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Premises Inspection</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              A Drug Inspector will conduct a physical inspection of your location to verify compliance.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          4
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>
      
      {/* Step 5: Scrutiny and Clarification (Left on Desktop, Top on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Scrutiny and Clarification</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Respond to any official queries or objections in a timely manner.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          5
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 6: Issuance of License (Right on Desktop, Bottom on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Issuance of License</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Once approved, your Drug License will be issued and available for download.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          6
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>
    </div>
    
    {/* Download Section */}
    <div className="mt-12 text-center bg-white rounded-lg p-8 md:p-8 shadow-md border border-[#b44593]/50">
      <h3 className="text-2xl font-bold text-[#1a1a1a]">How to Download Your Drug License</h3>
      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#790046]/10 text-[#790046] mb-3">
            <FaLaptop className="text-2xl" />
          </div>
          <p className="text-sm text-center">Login to the Portal</p>
        </div>
        <FaArrowRight className="hidden md:block text-gray-400" />
        <FaArrowDown className="md:hidden text-gray-400" />
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#790046]/10 text-[#790046] mb-3">
            <FaFileDownload className="text-2xl" />
          </div>
          <p className="text-sm text-center">Navigate to the License Section</p>
        </div>
        <FaArrowRight className="hidden md:block text-gray-400" />
        <FaArrowDown className="md:hidden text-gray-400" />
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#790046]/10 text-[#790046] mb-3">
            <FaDownload className="text-2xl" />
          </div>
          <p className="text-sm text-center">Download Your Certificate</p>
        </div>
      </div>
    </div>

  </div>
</section>
  );
};

export default ListComponentTwo;
