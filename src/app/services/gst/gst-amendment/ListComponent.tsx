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
      GST Tax Notice Resolution
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Handle GST Notices with Confidence
    </p>

    {/* Grid for main blocks */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* Valid Modes of Sending GST Notices */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Valid Modes of Sending GST Notices</h3>
        <p className="text-base text-gray-600 mb-4">
          Section 169 of the CGST Act outlines the valid modes for sending GST notices. It’s essential to be aware of these recognized modes of communication:
        </p>
        <ul className="space-y-2">
          {[
            "Hand Delivery: Direct delivery to the taxpayer or their representative.",
            "Registered/Speed Post: Sent to the last known business address with acknowledgment.",
            "Email: Sent to the taxpayer’s registered email address.",
            "GST Portal: Uploaded to the taxpayer’s account on the GST portal.",
            "Newspaper Publication: Published in a widely circulated local newspaper.",
            "Affixing Notice: Affixed to the taxpayer’s last known place of business if other methods are not feasible."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Common Reasons for Receiving GST Notices */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Common Reasons for Receiving GST Notices</h3>
        <ul className="space-y-2">
          {[
            "Discrepancies between GSTR-1 and GSTR-3B.",
            "Variations in Input Tax Credit claims.",
            "Failure to file GSTR-1 or GSTR-3B for over six months.",
            "Incorrect information reported in GSTR-1 or the e-way bill portal.",
            "Non-payment or underpayment of GST.",
            "Incorrect claims for GST refunds.",
            "Operating without GST registration."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Responding to GST Notices */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Responding to GST Notices</h3>
        <p className="text-base text-gray-600 mb-4">
          Prompt and accurate responses are critical to avoid penalties. Here’s a step-by-step guide to handle GST notices:
        </p>
        <ul className="space-y-2">
          {[
            "Review the Notice: Thoroughly read the notice to understand the issue or discrepancy highlighted by the authorities.",
            "Gather Relevant Documentation: Collect all necessary records and evidence to support your case.",
            "Access the GST Portal: Log in to your account to prepare and submit your response.",
            "Use Digital Signature: Authenticate your response with a digital or e-signature.",
            "Clear Dues: If the notice involves tax payments, ensure these are cleared before responding.",
            "Submit Your Response: Upload your reply, including all relevant documentation, on the GST portal.",
            "Maintain Records: Keep a copy of all communications and submissions for future reference."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
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
