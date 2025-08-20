import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ListComponent = () => {
  return (
<section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      Documents Required for Startup India Registration
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      To successfully register under the Startup India initiative, ensure you have the following documents ready:
    </p>

    {/* Grid for documents */}
    <div className="grid gap-6 md:grid-cols-2">

      {[
        "Certificate of Incorporation or Partnership Deed",
        "PAN of the business",
        "Authorization letter from a representative",
        "Proof of concept (pitch deck, demo video, or product website)",
        "Details of intellectual property (patents/trademarks)",
        "Proof of funding (if applicable)",
        "List of any awards or recognitions"
      ].map((item, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 flex items-start gap-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
          <span className="text-sm md:text-base text-[#1a1a1a]">{item}</span>
        </div>
      ))}

    </div>
  </div>
</section>


  );
};

export default ListComponent;
