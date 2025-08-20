import { FaCheckCircle } from "react-icons/fa";
import React from "react";

const ListComponentTwo = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
          Who can Apply for Trademark Registration Online?
        </h2>

        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
        Trademark registration online in India is open to a wide range of entities and individuals, including:
        </p>

        <div className="grid gap-6 w-full md:w-[50%]">
          {/* List */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <ul className="space-y-4">
              {[
                "Individuals",
                "Joint owners of a company",
                "Proprietorship firms",
                "Partnership firms (max 10 partners)",
                "Limited Liability Partnerships (LLPs)",
                "Indian companies",
                "Foreign companies",
                "Trusts",
                "Societies",
              ].map((item, idx) => (
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
        <p className="text-center text-base md:text-lg mb-10 text-gray-600 mt-10">
        This inclusivity ensures that various businesses and entities can safeguard their brand identities through trademark or brand name registration online.
        </p>

        {/* CTA Button */}
        <a
          href="https://wa.me/917439587419"
          target="_blank"
          rel="noopener noreferrer"
          className=" inline-block bg-[#D2175B] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#D9175B]/90 transition-colors duration-300"
        >
          Contact Us on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ListComponentTwo;
