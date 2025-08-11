import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";

const ListComponent = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
          Common Reasons for Opposition 
          </h2>
          <p className="text-center text-base md:text-lg mb-10 text-gray-600">
          Trademark opposition can arise for various reasons, including:
          </p>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left - Who Can File ITR-6 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Who Can Oppose a Trademark?</h3>
          <p className="text-left text-base md:text-lg mb-10 text-gray-600">
          According to Section 21 of the Trademark Act, any individual, business, or entity may oppose a trademark—regardless of direct commercial interest. This includes:
          </p>
          <ul className="space-y-4">
            {[
              "Competitors",
              "Existing trademark owners",
              "Consumers",
              "General public",

            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                <span className="w-[90%]">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-left text-base md:text-lg mb-10 text-gray-600">
          Typically, those who believe the mark may cause confusion or infringe upon their rights are most likely to initiate opposition.
          </p>
        </div>


        {/* Right - Who Cannot File ITR-6 & Due Dates */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Grounds for Trademark Opposition</h3>
          <p className="text-left text-base md:text-lg mb-10 text-gray-600">
          Although the law doesn’t specify a fixed list of grounds, common reasons include:
          </p>          
          <ul className="space-y-4">
            {[
              "Similarity or identity to an existing registered trademark",
              "Lack of distinctiveness",
              "Descriptive nature",
              "Filed in bad faith",
              "Common usage in trade",
              "Potential to mislead or confuse consumers",
              "Legal prohibitions or religious sensitivity",
              "Violation of the Emblems and Names Act, 1950",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                <span className="w-[90%]">{item}</span>
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
