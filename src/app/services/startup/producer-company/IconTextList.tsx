import {
  FaBriefcase,
  FaChartLine,
  FaHome,
  FaCogs,
  FaPercentage,
  FaTag,
  FaGlobe,
  FaFlask,
  FaFileAlt,
  FaMoneyCheckAlt,
  FaUsers,
  FaBalanceScale,
  FaDatabase,
  FaBuilding,
} from 'react-icons/fa';

const ITR6Schedules = () => {
  const schedules = [
    { icon: <FaHome />, schedule: 'Schedule HP', purpose: 'Income from House Property' },
    { icon: <FaBriefcase />, schedule: 'Schedule BP', purpose: 'Business and Profession Income' },
    { icon: <FaChartLine />, schedule: 'Schedule CG', purpose: 'Capital Gains' },
    { icon: <FaCogs />, schedule: 'Schedule DPM/DOA', purpose: 'Depreciation on Assets' },
    { icon: <FaPercentage />, schedule: 'Schedule MAT', purpose: 'Minimum Alternate Tax (Sec 115JB)' },
    { icon: <FaTag />, schedule: 'Schedule SI', purpose: 'Income taxed at Special Rates' },
    { icon: <FaUsers />, schedule: 'Schedule PTI', purpose: 'Pass-through Income from Business Trusts' },
    { icon: <FaFileAlt />, schedule: 'Schedule EI', purpose: 'Exempt Income' },
    { icon: <FaFlask />, schedule: 'Schedule 80G / 80GGA', purpose: 'Donations & Scientific Research Deductions' },
    { icon: <FaFileAlt />, schedule: 'Schedule VIA', purpose: 'Deductions under Chapter VI-A' },
    { icon: <FaMoneyCheckAlt />, schedule: 'Schedule TDS / TCS', purpose: 'Tax Deducted/Collected at Source' },
    { icon: <FaGlobe />, schedule: 'Schedule FSI / TR / FA', purpose: 'Foreign Assets, Incomes & Tax Relief' },
    { icon: <FaUsers />, schedule: 'Schedule SH1 / SH2', purpose: 'Shareholding details of unlisted/startup companies' },
    { icon: <FaDatabase />, schedule: 'Schedule AL1', purpose: 'Assets & Liabilities Statement' },
    { icon: <FaBalanceScale />, schedule: 'Schedule GST', purpose: 'Turnover reported under GST' },
    { icon: <FaBuilding />, schedule: 'Schedule FD', purpose: 'Foreign Currency Payments/Receipts' },
  ];

  // Split into two equal columns
  const half = Math.ceil(schedules.length / 2);
  const leftColumn = schedules.slice(0, half);
  const rightColumn = schedules.slice(half);

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-semibold mb-12">Key Schedules in ITR-6 Filing</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Here are the major <strong>ITR-6 Schedules</strong> required based on the company’s nature of income:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column - Text Right Aligned with Icon on Right */}
          <div className="flex flex-col gap-8">
            {leftColumn.map((item, index) => (
              <div key={index} className="flex justify-between items-start text-right">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.schedule}</h3>
                  <p className="text-gray-600 mt-1">Purpose: {item.purpose}</p>
                </div>
                <div className="text-[#b40068] ml-4 mt-1 text-2xl">{item.icon}</div>
              </div>
            ))}
          </div>

          {/* Right Column - Default Icon Left, Text Right */}
          <div className="flex flex-col gap-8">
            {rightColumn.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-[#b40068] mt-1 text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{item.schedule}</h3>
                  <p className="text-gray-600 mt-1">Purpose: {item.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITR6Schedules;
