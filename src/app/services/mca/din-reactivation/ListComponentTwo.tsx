import { FaArrowRight, FaArrowDown, FaUniversity, FaFileInvoice, FaTasks } from 'react-icons/fa';
import React from "react";

const ListComponentTwo = () => {
  return (
  <section className="w-full py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50 text-gray-800">
  <div className="w-[100%] lg:max-w-[75%] md:max-w-[90%] mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
        Why Choose Delfyle for DIN Reactivation?
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        At Delfyle, we streamline your DIN compliance process with end-to-end support.
      </p>
    </div>

    {/* Vertical Line - Hidden on mobile, visible on medium screens and up */}
    <div className="relative">
      <div className="absolute left-3 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#b44593] opacity-30 hidden md:block"></div>

      {/* Step 1: Board Meeting & Resolution */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right md: align-self-center ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Expert Guidance at Every Step</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>We provide professional support from initial consultation to final DIN reactivation.</li>
                <li>Our experts guide you on the correct forms and documents needed.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          1
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 2: Name Availability Check */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Fast Turnaround with Minimal Effort</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>We prioritize your filing to ensure your DIN is reactivated as quickly as possible.</li>
                <li>Our streamlined process minimizes your time and effort.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          2
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 3: Passing Special Resolution */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Error-Free Document Preparation</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>We meticulously prepare all necessary documents to avoid rejections by the MCA.</li>
                <li>Our team ensures that your form is filled out correctly before submission.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          3
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 4: Filing Form INC-24 */}
      <div className="flex items-center w-full my-6 md:my-10">
        <div className="md:w-1/2 ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Transparent Pricing with No Hidden Fees</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>We provide a clear breakdown of all costs upfront, including the MCA late fee.</li>
                <li>You can trust us for honest and transparent service.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          4
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>

      {/* Step 5: Issuance of New Certificate of Incorporation */}
      <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
        <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Continued Support for Annual Filings</h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              <ul className="list-disc list-inside">
                <li>After reactivation, we send you timely reminders for future DIR-3 KYC deadlines.</li>
                <li>We help you stay compliant year after year to avoid any future deactivations.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
          5
        </div>
        <div className="w-full md:w-1/2 md:block hidden"></div>
      </div>
    </div>

    <div className="mt-12 text-center">
      <p className="text-lg text-gray-600">
        Don’t let a deactivated DIN halt your directorship. Trust Delfyle to handle your DIN reactivation efficiently and cost-effectively.
      </p>
    </div>
  </div>
</section>

  );
};

export default ListComponentTwo;
