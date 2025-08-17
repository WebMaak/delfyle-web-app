import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IconType } from "react-icons";

interface ListBlock {
  items: string[];
  icon?: IconType;
  iconColor?: string;
  title?: string;
}

interface ListComponentReusableProps {
  title?: string;
  description?: string;
  listBlocks?: ListBlock[];
}

const ListComponentReusable: React.FC<ListComponentReusableProps> = ({
  title = "Documents Required for TDS Return Filing",
  description = "No physical documents or annexures are required to be attached while submitting TDS return. However, companies should maintain and reconcile:",
  listBlocks = [
    {
      items: [
        "PAN & Aadhaar",
        "Form 16/16A",
        "Form 26AS, AIS, TIS",
        "Bank statements",
        "Loan/Investment proofs",
        "Details of business turnover or professional receipts",
        "Vehicle ownership documents (for 44AE filers)",
      ],
      icon: FaCheckCircle,
      iconColor: "#22c55e", // Tailwind's green-500
    },
  ],
}) => {
  return (
    <section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
          {title}
        </h2>

        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
          {description}
        </p>

        <div
          className={`grid gap-6 w-full ${
            listBlocks.length === 1
              ? "md:grid-cols-1 max-w-2xl mx-auto"
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {listBlocks.map((block, blockIndex) => {
            const Icon = block.icon || FaCheckCircle;
            const iconColor = block.iconColor || "#22c55e";

            return (
              <div
                key={blockIndex}
                className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              >
                <p className="text-lg font-semibold text-[#1a1a1a]">
                  {block.title}
                </p>
                <ul className="space-y-4">
                  {block.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]"
                    >
                      <Icon className="m-1 text-lg shrink-0" style={{ color: iconColor }} />
                      <span className="w-[90%]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ListComponentReusable;
