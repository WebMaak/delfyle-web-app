import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";

const ListComponent = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
  Trademark Search
</h2>


        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
        
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left - Who Can File ITR-6 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Trademark Search</h3>
          <p className="text-sm md:text-base text-[#1a1a1a]">
          Before registering the trademark, conducting a comprehensive trademark search is of paramount importance. This step is critical to safeguard the integrity and exclusivity of your brand. An online trademark search entails furnishing the brand name and the relevant class for scrutiny. This meticulous search aids in identifying pre-existing trademarks in the market, enabling the assessment of potential conflicts and, ultimately, ensuring the protection of your brand. Delfyle provides online trademark search tools and support to facilitate this pivotal process, assisting you in making informed decisions regarding your trademark or brand name registration.
          </p>
          <p className="text-sm md:text-base text-[#1a1a1a]">
          In addition to these details, you will be required to submit the following documents to complete the trademark registration online, or even logo trademark registration process.
          </p>
        </div>


        {/* Right - Who Cannot File ITR-6 & Due Dates */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Required Documents & Details for Online Trademark Registration</h3>
          <p className="text-sm md:text-base text-[#1a1a1a]">
          To initiate the trademark registration online or brand name registration process in India, you will need to furnish the following initial details:
          </p>
          <ul className="space-y-4">
            {[
              "Applicant's Name: The name of the individual, company, or entity applying for the trademark registration.",
              "Business Type: Specify the type of business entity, such as sole proprietorship, partnership, private limited company, etc.",
              "Business Objectives: Provide a brief description of your business objectives or activities.",
              "Brand/Logo/Slogan Name: Clearly mention the name, logo, or slogan that you intend to trademark.",
              "Registration Address: Furnish the official address of the entity applying for the trademark.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                <FaCheckCircle className="text-[#790046] m-1 w-4 h-4" />
                <span className="w-[90%]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>
        {/* Document Upload Note */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-3 hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a] flex items-center gap-2">
            {/* <HiOutlineDocumentText className="text-blue-500" /> */}
            Note: Let Delfyle help you protect your brand by ensuring seamless and hassle-free trademark registration!
          </h3>
        </div>
      </div>
    </section>


  );
};

export default ListComponent;
