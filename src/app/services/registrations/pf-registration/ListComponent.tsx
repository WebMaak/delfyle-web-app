import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ListComponent = () => {
  return (
   <section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      Why Register for PF? {/* Main heading is now general */}
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Benefits List */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Benefits of PF Registration for Employers</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>
              <b>Legal Compliance</b><br />
              Complies with the EPF Act and helps manage salary deductions, TDS, and employee welfare under a structured regulatory framework.
            </span>
          </li>
          <li className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>
              <b>Improved Employee Retention</b><br />
              Offering EPF benefits increases job satisfaction, leading to better talent retention.
            </span>
          </li>
          <li className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>
              <b>Financial Security for Employees</b><br />
              Supports employees during retirement, emergencies, or other significant life events.
            </span>
          </li>
          <li className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>
              <b>Portability</b><br />
              Employees can carry their PF accounts across jobs, ensuring continuity and simplicity in savings.
            </span>
          </li>
          <li className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>
              <b>Emergency Support</b><br />
              Employees can make partial withdrawals for health issues, home loans, education, or marriage.
            </span>
          </li>
        </ul>
        <div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">Who Is Exempt?</h3>
              <p className="text-base text-gray-600 mb-2">
                Businesses with fewer than 20 employees are exempt from mandatory registration but can voluntarily register to offer added benefits.
              </p>
            </div>
      </div>

          {/* Who Is Exempt & Required Documents */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            
            <div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">Required Documents for PF Registration</h3>
              <ol className="list-decimal ml-5 space-y-2 text-[#1a1a1a] text-sm md:text-base">
                <li>
                  <b>Business Proof</b>
                  <ul className="list-disc ml-5">
                    <li>Certificate of Incorporation / Partnership Deed / Proprietorship Registration</li>
                  </ul>
                </li>
                <li>
                  <b>Identity Proof</b>
                  <ul className="list-disc ml-5">
                    <li>PAN of the business and authorized signatories</li>
                  </ul>
                </li>
                <li>
                  <b>Address Proof</b>
                  <ul className="list-disc ml-5">
                    <li>Utility bill / Rent agreement / Property tax receipt</li>
                  </ul>
                </li>
                <li>
                  <b>Bank Details</b>
                  <ul className="list-disc ml-5">
                    <li>Cancelled cheque & recent bank statement</li>
                  </ul>
                </li>
                <li>Digital Signature Certificate (DSC)</li>
                <li>
                  <b>Business Licenses</b>
                  <ul className="list-disc ml-5">
                    <li>GST certificate or other relevant registrations</li>
                  </ul>
                </li>
                <li>
                  <b>Employee Information</b>
                  <ul className="list-disc ml-5">
                    <li>Aadhaar, PAN, joining dates, salary details</li>
                  </ul>
                </li>
                <li>
                  <b>Company Structure</b>
                  <ul className="list-disc ml-5">
                    <li>MOA, AOA, Form 5A, Specimen Signature, Power of Attorney (if applicable)</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          {/* Key Information & How to Apply */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">Key Information Required for EPF Registration</h3>
              <ul className="list-disc ml-5 text-[#1a1a1a] text-sm md:text-base space-y-1">
                <li>Name, nature, and incorporation date of business</li>
                <li>Address and office location(s)</li>
                <li>Type of activity and business classification</li>
                <li>Names and details of directors/partners</li>
                <li>Number of employees, salary data</li>
                <li>Company bank account information</li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">
                Accuracy in documentation is crucial to avoid delays or rejections.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">How to Apply for PF Registration Online?</h3>
              <p className="text-base text-gray-600">
                PF registration can be completed through the official EPFO portal managed by the Ministry of Labour & Employment. Once verified, your establishment will be issued a PF Establishment Code, enabling you to manage EPF accounts and contributions digitally.
              </p>
            </div>
          </div>

          {/* Delfyle Support & Post-Registration */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">Simplify Your PF Registration with Delfyle</h3>
              <p className="text-base text-gray-600 mb-2">
                Delfyle provides end-to-end support for your PF registration process. From document collection and form submission to obtaining your EPF code, our experts ensure every step is handled with precision and professionalism.
              </p>
              <ul className="list-disc ml-5 text-[#1a1a1a] text-sm md:text-base space-y-1">
                <li>Transparent pricing</li>
                <li>Expert documentation and compliance support</li>
                <li>Dedicated customer service</li>
                <li>On-time registration without penalties</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">Stay Compliant Post-Registration</h3>
              <ul className="list-disc ml-5 text-[#1a1a1a] text-sm md:text-base space-y-1">
                <li>Deduct and deposit PF contributions monthly</li>
                <li>File PF returns regularly</li>
                <li>Maintain proper payroll and compliance records</li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">
                Delfyle can help you manage PF filings and compliance with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>



  );
};

export default ListComponent;
