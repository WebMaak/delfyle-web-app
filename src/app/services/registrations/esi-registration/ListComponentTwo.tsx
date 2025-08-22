import { FaCheckCircle } from "react-icons/fa";
import React from "react";

const ListComponentTwo = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      FSSAI Registration & License Eligibility
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Key criteria to determine the type of FSSAI approval you need
    </p>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* Basic FSSAI Registration */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">FSSAI Basic Registration</h3>
        <p className="text-sm md:text-base text-gray-600">
          For small-scale businesses with an annual turnover of less than ₹12 lakh.
        </p>
        <ul className="space-y-2">
          {[
            "Petty food retailers, home kitchens, and temporary stalls.",
            "Production up to 100 kg/litre per day.",
            "Milk handling up to 500 litres/day.",
            "Slaughtering of 2 large animals, 10 small animals, or 50 poultry birds/day."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* State FSSAI License */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">State FSSAI License</h3>
        <p className="text-sm md:text-base text-gray-600">
          For medium-sized businesses with a turnover from ₹12 lakh to ₹20 crore.
        </p>
        <ul className="space-y-2">
          {[
            "Medium manufacturers, storage units, and transporters.",
            "Milk handling from 501 to 50,000 litres/day.",
            "Slaughtering of 3-50 large animals or 11-150 small animals/day.",
            "Hotels up to 4 stars."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Central FSSAI License */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Central FSSAI License</h3>
        <p className="text-sm md:text-base text-gray-600">
          For large businesses with a turnover over ₹20 crore or multi-state operations.
        </p>
        <ul className="space-y-2">
          {[
            "Importers/exporters and businesses operating in multiple states.",
            "Milk handling over 50,000 litres/day.",
            "Slaughtering over 50 large animals or 150 small animals/day.",
            "5-star hotels and above, as well as e-commerce food platforms."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Differences Table */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 overflow-x-auto">
        <h3 className="text-lg font-semibold text-[#1a1a1a] text-center">Key Differences: FSSAI Registration vs. License</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Particulars</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FSSAI Registration</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FSSAI License</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Turnover Limit</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Up to ₹12 lakh</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Above ₹12 lakh</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Business Size</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Petty food operators</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Medium and large-scale businesses</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Form Used</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Form A</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Form B</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Types</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Basic</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">State and Central Licenses</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Display Requirement</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Display number at business premises</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Display number on premises and packaging</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Validity</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Based on applicability</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">1 to 5 years</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>


  );
};

export default ListComponentTwo;
