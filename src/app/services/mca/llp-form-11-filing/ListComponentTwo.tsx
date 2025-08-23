import { FaArrowRight, FaArrowDown, FaUniversity, FaFileInvoice, FaTasks } from 'react-icons/fa';
import React from "react";

const ListComponentTwo = () => {
  return (
 <section className="w-full py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50 text-gray-800">
  <div className="w-[100%] lg:max-w-[75%] md:max-w-[90%] mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
        How to File Form DPT-3 (Step-by-Step Guide)
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Filing DPT-3 is an online process via the MCA portal. Here’s how Delfyle manages it for you:
      </p>
    </div>

    {/* Vertical Line - Hidden on mobile, visible on medium screens and up */}
    <div className="relative">
  <div className="absolute left-3 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#b44593] opacity-30 hidden md:block"></div>

  {/* Step 1: Visit the MCA Portal & Login (Now on the left side) */}
  <div className="flex items-center w-full my-6 md:my-10">
    <div className="md:w-1/2 ml-14 md:ml-0">
      <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-semibold text-[#1a1a1a]">Step 1: Visit the MCA Portal & Login</h3>
          <ul className="list-disc list-inside">
            <li>Access <span className="font-bold">www.mca.gov.in</span></li>
            <li>Log in or register as a Business User</li>
          </ul>
      </div>
    </div>
    <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
      1
    </div>
    <div className="w-full md:w-1/2 md:block hidden"></div>
  </div>

  {/* Step 2: Access DPT-3 Webform (Switched to right side) */}
  <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
    <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
      <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-semibold text-[#1a1a1a]">Step 2: Access DPT-3 Webform</h3>
          <ul className="list-disc list-inside">
            <li>Navigate to: MCA Services → Deposit Related Filings → <span className="font-bold">Form DPT-3</span></li>
          </ul>
      </div>
    </div>
    <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
      2
    </div>
    <div className="w-full md:w-1/2 md:block hidden"></div>
  </div>

  {/* Step 3: Fill in Details (Switched to left side) */}
  <div className="flex items-center w-full my-6 md:my-10">
    <div className="md:w-1/2 ml-14 md:ml-0">
      <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-semibold text-[#1a1a1a]">Step 3: Fill in Details</h3>
          <span className="font-bold">Information required:</span>
          <ul className="list-disc list-inside">
            <li>Company CIN</li>
            <li>Email address</li>
            <li>Company objectives</li>
            <li>Net worth</li>
            <li>Charge details (if any)</li>
            <li>Total amount outstanding as of March 31</li>
            <li>Credit rating (if applicable)</li>
            <li>Attach relevant documents</li>
          </ul>
      </div>
    </div>
    <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
      3
    </div>
    <div className="w-full md:w-1/2 md:block hidden"></div>
  </div>

  {/* Step 4: Submit & Generate SRN (Switched to right side) */}
  <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
    <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
      <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-semibold text-[#1a1a1a]">Step 4: Submit & Generate SRN</h3>
          <ul className="list-disc list-inside">
            <li>Submit the form to generate a <span className="font-bold">Service Request Number (SRN)</span>.</li>
            <li>Use the SRN to track the status of your filing.</li>
          </ul>
      </div>
    </div>
    <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
      4
    </div>
    <div className="w-full md:w-1/2 md:block hidden"></div>
  </div>

  {/* Step 5: DSC & Fee Payment (Switched to left side) */}
  <div className="flex items-center w-full my-6 md:my-10">
    <div className="md:w-1/2 ml-14 md:ml-0">
      <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-semibold text-[#1a1a1a]">Step 5: DSC & Fee Payment</h3>
          <ul className="list-disc list-inside">
            <li>Affix <span className="font-bold">Digital Signature Certificate (DSC)</span>.</li>
            <li>Pay applicable filing fees online.</li>
          </ul>
      </div>
    </div>
    <div className="absolute left-3 md:static w-6 h-6 rounded-full bg-[#790046] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 md:mx-4">
      5
    </div>
    <div className="w-full md:w-1/2 md:block hidden"></div>
  </div>

  {/* Step 6: Receive Acknowledgement (Switched to right side) */}
  <div className="flex items-center w-full my-6 md:my-10 md:flex-row-reverse">
    <div className="md:w-1/2 md:text-right ml-14 md:ml-0">
      <div className="bg-white rounded-lg p-6 shadow-md border border-[#b44593]/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-semibold text-[#1a1a1a]">Step 6: Receive Acknowledgement</h3>
          <ul className="list-disc list-inside">
            <li>The Ministry of Corporate Affairs (MCA) will send a confirmation email upon successful submission.</li>
          </ul>
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
