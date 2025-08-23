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
      NGO Darpan Registration Details
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Why Darpan Registration is Important? */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Why Darpan Registration is Important?</h3>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>Mandatory for Government Grants: Many ministries require NGOs to have a Darpan ID before awarding grants.</li>
          <li>Streamlines Other Registrations: It is a prerequisite for FCRA registration and also supports compliance with Form 10A for 80G and 12A.</li>
          <li>Recognition Across Ministries: Once registered, your NGO is officially recognized by a wide range of government departments.</li>
        </ul>
      </div>

      {/* Documents Required for NGO Darpan Registration */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Documents Required for NGO Darpan Registration</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          Make sure the following documents and information are ready before beginning the application process:
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>Address Proof of the NGO</li>
          <li>PAN Card of the organisation</li>
          <li>Registration Certificate (Trust Deed, Society Registration, or Certificate of Incorporation for Section 8 Companies)</li>
          <li>Member Details (Names, contact information, and identity proofs)</li>
          <li>Details of Grants/Donations received over the past 5 years</li>
          <li>Information on Areas of Operation and activities carried out</li>
        </ul>
      </div>

      {/* Step-by-Step Process of NGO Darpan Registration */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Step-by-Step Process of NGO Darpan Registration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ul className="space-y-2 text-sm md:text-base text-[#1a1a1a]">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>Step 1: Prepare Documents:</b> Gather all required documents and information, including registration details, financial history, and project data.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>Step 2: Create an Account:</b> Visit the NGO Darpan Portal and create a login using your email address. Activate the account via the link sent to your inbox.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>Step 3: Complete the Application:</b> Log in and fill in the registration form. Submit all mandatory documents and input the operational and financial details of your organisation.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>Step 4: Departmental Review:</b> Your application will be reviewed by the concerned authorities. They will verify the legitimacy of your documents and information.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>Step 5: Receive Your Unique Darpan ID:</b> Once approved, your NGO will be assigned a Unique Identification Number (Darpan ID), which will appear under your portal login. Download and store your registration certificate securely.
                </span>
              </li>
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
