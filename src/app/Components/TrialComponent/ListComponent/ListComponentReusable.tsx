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
      iconColor: "#22c55e",
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

        <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
          {listBlocks.map((block, blockIndex) => {
            const Icon = block.icon || FaCheckCircle;
            const iconColor = block.iconColor || "#22c55e";
            const half = Math.ceil(block.items.length / 2);
            const leftItems = block.items.slice(0, half);
            const rightItems = block.items.slice(half);

            return (
              <React.Fragment key={blockIndex}>
                {/* Left Column - right aligned */}
                <div className="flex flex-col gap-6 items-end">
                  {leftItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a] justify-end"
                    >
                      <span className="text-right">{item}</span>
                      <Icon
                        className="m-1 text-lg shrink-0"
                        style={{ color: iconColor }}
                      />
                    </div>
                  ))}
                </div>

                {/* Right Column - left aligned */}
                <div className="flex flex-col gap-6 items-start">
                  {rightItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]"
                    >
                      <Icon
                        className="m-1 text-lg shrink-0"
                        style={{ color: iconColor }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ListComponentReusable;
