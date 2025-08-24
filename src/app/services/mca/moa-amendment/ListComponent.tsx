import { FaCheckCircle, FaTimesCircle, FaBan, FaExclamationCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ListComponent = () => {
  return (
<section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      MOA Amendment: Key Types & Required Documents
    </h2>
    <div className="grid gap-6 md:grid-cols-2">

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">When Can You Amend the MOA?</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">MOA can be amended at any point during the company’s lifecycle, subject to approval by shareholders and the Registrar of Companies (RoC). The key clauses that can be amended include:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="font-bold">Name Clause:</span> Change of company name</li>
          <li><span className="font-bold">Situation Clause:</span> Change in the registered office location</li>
          <li><span className="font-bold">Object Clause:</span> Change or expansion of business activities</li>
          <li><span className="font-bold">Liability Clause:</span> Alteration of liability of members</li>
          <li><span className="font-bold">Capital Clause:</span> Modification of authorised capital</li>
        </ul>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold mt-4">Note: The Subscription Clause cannot be amended post-incorporation.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Key Types of MOA Amendments</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Change in Company Name:</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">Requires shareholder approval via a special resolution and, in some cases, Central Government approval.</p>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Change of Registered Office (State to State):</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">Requires a special resolution and approval from the Company Law Board or Regional Director.</p>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Alteration of Object Clause:</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">For companies with public funds, changes must be published in newspapers and on the company website, offering an exit route to dissenting shareholders.</p>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Additional Amendment Types & Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">More Key Types of Amendments:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">Alteration of Liability Clause:</span> Must be filed with the RoC within 30 days.</li>
              <li><span className="font-bold">Alteration of Capital Clause:</span> May include subdivision, consolidation, or cancellation of shares.</li>
              <li><span className="font-bold">Increase in Authorised Capital:</span> Required before issuing more shares than currently permitted.</li>
            </ul>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Documents Required for MOA Amendment:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Draft of revised MOA</li>
              <li>Certified copy of special resolution</li>
              <li>EGM notice and explanatory statement</li>
              <li>Form MGT-14 (for submission to RoC)</li>
              <li>Proof of registered office (if location changes)</li>
              <li>Board resolution approving the amendment</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Important Considerations & Legacy MOA</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Important Considerations:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Capital Clause changes must be permitted by the AOA.</li>
              <li>Liability changes cannot affect members' limited liability.</li>
              <li>Changes to the registered office require specific forms like INC-22.</li>
            </ul>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Adopting a New MOA (For Older Companies):</p>
            <p className="text-sm md:text-base text-[#1a1a1a]">Companies incorporated under older legislation (prior to the Companies Act, 2013) may need to adopt a new MOA format to comply with current standards. Delfyle can assist with this transition seamlessly.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default ListComponent;
