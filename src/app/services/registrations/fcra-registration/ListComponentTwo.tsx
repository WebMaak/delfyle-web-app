import { FaArrowRight, FaArrowDown, FaUniversity, FaFileInvoice, FaTasks } from 'react-icons/fa';
import React from "react";

const ListComponentTwo = () => {
  return (
   <section className="w-full py-12 md:px-[0] px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50 text-gray-800">
  <div className="w-[100%] lg:max-w-[75%] md:max-w-[90%] mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
        The FCRA Online Registration Journey
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        A simple, step-by-step process to secure your FCRA registration.
      </p>
    </div>

    {/* Application Timeline */}
    <div className="relative">
      {/* Vertical Line - Hidden on mobile, visible on medium screens and up */}
      <div className="absolute left-3 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#b44593] opacity-30 hidden md:block"></div>

      {/* Step 1: Visit FCRA Portal (Left on Desktop, Top on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right md: align-self-center ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Visit FCRA Portal</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Go to the official FCRA online portal to begin the application process.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          1
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 2: Create FCRA Login ID (Right on Desktop, Bottom on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Create FCRA Login ID</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Set up your unique login credentials to access the application forms.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          2
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 3: Select Appropriate Form (Left on Desktop, Top on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Select Appropriate Form</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Choose the correct application form: FC-3A for Normal Registration or FC-3B for Prior Permission.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          3
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 4: Complete the Application (Right on Desktop, Bottom on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Complete the Application</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Fill in all required details, including association and bank information, and upload all documents.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          4
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 5: Submit Application (Left on Desktop, Top on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Submit Application</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Finalize your application details and submit it along with the online payment.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          5
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 6: Track Status (Right on Desktop, Bottom on Mobile) */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Track Status</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Monitor your application's status and any subsequent renewals through the portal.
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          6
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>
    </div>
    
    {/* Key Post-Registration Requirements */}
    <div className="mt-12 text-center bg-white rounded-lg p-8 md:p-8 shadow-md border border-[#b44593]/50">
      <h3 className="text-2xl font-bold text-[#1a1a1a]">Key FCRA Requirements After Registration</h3>
      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#790046]/10 text-[#790046] mb-3">
            <FaUniversity className="text-2xl" />
          </div>
          <p className="text-sm text-center">Open a Dedicated FCRA Bank Account</p>
        </div>
        <FaArrowRight className="hidden md:block text-gray-400" />
        <FaArrowDown className="md:hidden text-gray-400" />
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#790046]/10 text-[#790046] mb-3">
            <FaFileInvoice className="text-2xl" />
          </div>
          <p className="text-sm text-center">File Annual Returns (Form FC-4)</p>
        </div>
        <FaArrowRight className="hidden md:block text-gray-400" />
        <FaArrowDown className="md:hidden text-gray-400" />
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#790046]/10 text-[#790046] mb-3">
            <FaTasks className="text-2xl" />
          </div>
          <p className="text-sm text-center">Ensure Continuous Compliance</p>
        </div>
      </div>
    </div>

  </div>
</section>
  );
};

export default ListComponentTwo;
