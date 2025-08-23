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
      Documents Required for Company Name Change
    </h2>
    <div className="grid gap-6 md:grid-cols-2">

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Attachments for Form MGT-14</h3>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>Certified copy of special resolution</li>
          <li>Notice of EGM with explanatory statement</li>
          <li>Altered MOA and AOA</li>
          <li>Attendance sheet of EGM</li>
          <li>Shorter notice consent (if applicable)</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Attachments for Form INC-24</h3>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>Certified special resolution and meeting minutes</li>
          <li>Altered MOA and AOA</li>
          <li>Director's affidavit supporting name change</li>
          <li>Explanatory statement justifying the change</li>
        </ul>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Other Supporting Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Certificate of Incorporation</li>
              <li>Digital Signature Certificate (DSC) of authorized signatory</li>
              <li>Address proof of registered office</li>
              <li>Updated list of directors and shareholders</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Timeline for Company Name Change</h3>
        <p className="text-sm md:text-base text-[#1a1a1a]">
          The name change process typically takes 10–15 working days, depending on the efficiency of documentation and approval timelines with the RoC.
        </p>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Post Name Change Compliance Checklist</h3>
        <p className="text-sm md:text-base text-[#1a1a1a]">
          After receiving the new Certificate of Incorporation, companies must update the new name across all platforms and statutory records:
        </p>
        <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
          <li>MOA & AOA</li>
          <li>PAN and TAN</li>
          <li>GST, EPF, ESI records</li>
          <li>Bank accounts</li>
          <li>Business licenses or permits</li>
          <li>Website, email signatures, and social media</li>
          <li>Business stationery: letterheads, seals, invoices, etc.</li>
          <li>Employment contracts and vendor agreements</li>
          <li>Statutory registers and internal records</li>
        </ul>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Benefits of Changing a Company Name with Delfyle</h3>
        <p className="text-sm md:text-base text-[#1a1a1a]">
          Choosing Delfyle ensures that your name change process is:
        </p>
        <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="text-[#b44593] font-bold">Legally Compliant</span> – We manage all MCA filings and legal formalities.</li>
          <li><span className="text-[#b44593] font-bold">Transparent & Timely</span> – Regular updates and clear communication throughout.</li>
          <li><span className="text-[#b44593] font-bold">Expert-Led</span> – Handled by professionals with in-depth knowledge of company law.</li>
          <li><span className="text-[#b44593] font-bold">Hassle-Free</span> – End-to-end support from consultation to RoC approval.</li>
        </ul>
      </div>
    </div>
  </div>
</section>


  );
};

export default ListComponent;
