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
      Key Requirements and Procedures for Director Removal
    </h2>
    <div className="grid gap-6 md:grid-cols-2">

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Key Requirements for Director Removal</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">To legally remove a director, the following steps must be followed:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="font-bold">Special Notice:</span> A special notice under Section 115 must be given by shareholders to initiate the removal.</li>
          <li><span className="font-bold">Notice to the Director:</span> The notice must be sent at least 14 days before the resolution is discussed.</li>
          <li><span className="font-bold">Right to Respond:</span> The director has a right to present a written representation or be heard at the meeting.</li>
          <li><span className="font-bold">Restriction on Reappointment:</span> Once removed, the director cannot be reappointed immediately.</li>
          <li><span className="font-bold">Filing of Form DIR-12:</span> The removal must be reported to the Registrar of Companies (ROC).</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Procedure for Voluntary Director Resignation</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Steps to follow for a director's voluntary resignation:</p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="font-bold">1. Submit Resignation:</span> The director must submit a written resignation.</li>
          <li><span className="font-bold">2. Board Meeting:</span> A meeting is held to formally acknowledge the resignation.</li>
          <li><span className="font-bold">3. Filing with ROC:</span> Form DIR-12 is filed within 30 days by the company; the resigning director may file DIR-11.</li>
          <li><span className="font-bold">4. Update Registers:</span> The company updates the Register of Directors accordingly.</li>
          <li><span className="font-bold">5. Stock Exchange Notification:</span> Listed companies must notify the stock exchange under SEBI regulations.</li>
        </ul>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Procedure for Director Removal Due to Inactivity</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">As per Section 167 of the Companies Act, a director who does not attend any Board meetings for 12 months (without seeking leave) is considered to have vacated the office. The company must:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">1. Acknowledge Vacancy:</span> Record the director's absence in official minutes.</li>
              <li><span className="font-bold">2. File DIR-12:</span> Notify the ROC about the vacancy.</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">3. Update MCA Database:</span> The Ministry of Corporate Affairs (MCA) records are updated.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Shareholder-Initiated Removal Procedure</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] font-bold">To remove a director through a shareholder vote:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">1. Board Meeting:</span> Convene a meeting and approve the proposal to hold an EGM.</li>
              <li><span className="font-bold">2. Issue EGM Notice:</span> Send 21-day prior notice to all shareholders.</li>
              <li><span className="font-bold">3. Conduct EGM:</span> Present and pass the resolution through a majority vote.</li>
              <li><span className="font-bold">4. Director’s Right to Speak:</span> Allow the director to present their case before the vote.</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">5. Filing with ROC:</span> Submit DIR-12 (company) and DIR-11 (director, if applicable).</li>
              <li><span className="font-bold">6. Update MCA Records:</span> Director’s details are removed from official records.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Penalties & Consequences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Penalties for Delayed DIR-12 Filing:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">31–60 days:</span> 2x standard fees</li>
              <li><span className="font-bold">61–90 days:</span> 4x standard fees</li>
              <li><span className="font-bold">91–180 days:</span> 10x standard fees</li>
              <li><span className="font-bold">Beyond 180 days:</span> 12x standard fees and possible legal action</li>
            </ul>
          </div>
          <div>
            <p className="text-sm md:text-base text-[#1a1a1a] font-bold">Consequences of Director Removal:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="font-bold">Loss of Authority:</span> The director ceases to represent or act on behalf of the company.</li>
              <li><span className="font-bold">Legal Risk:</span> Non-compliance can lead to litigation or financial penalties.</li>
              <li><span className="font-bold">Reputational Impact:</span> Mishandled removals can affect stakeholder trust.</li>
              <li><span className="font-bold">Regulatory Updates:</span> Company must update records under GST, EPF, ESI, and other relevant laws.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default ListComponent;
