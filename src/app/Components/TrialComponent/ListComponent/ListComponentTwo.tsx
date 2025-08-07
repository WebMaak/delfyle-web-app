import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ListComponentTwo = ({
  title = "Documents Required for ITR-4 Filing",
  description = "While ITR-4 is an annexure-less form, keep these documents handy:",
  listItems = [
    "PAN & Aadhaar",
    "Form 16/16A",
    "Form 26AS, AIS, TIS",
    "Bank statements",
    "Loan/Investment proofs",
    "Details of business turnover or professional receipts",
    "Vehicle ownership documents (for 44AE filers)",
  ],
}) => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
          {title}
        </h2>

        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
          {description}
        </p>

        <div className="grid gap-6 w-[50%] md:grid-cols-1">
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <ul className="space-y-4">
              {listItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]"
                >
                  <FaCheckCircle className="text-green-500 m-1 text-lg" />
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

export default ListComponentTwo;
