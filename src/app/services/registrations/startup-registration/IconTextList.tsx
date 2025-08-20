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

const StartupIndiaBenefits = () => {
  const benefits = [
    { icon: <FaFlask />, title: 'IP Support (Patents, Trademarks, Designs)', description: 'Startups are entitled to an 80% rebate on patent application fees and access to government-empanelled IP facilitators.' },
    { icon: <FaMoneyCheckAlt />, title: 'Access to Funding', description: 'A ₹10,000 crore Fund of Funds supports startups indirectly via SEBI-registered venture capital firms to improve access to capital.' },
    { icon: <FaBalanceScale />, title: 'Self-Certification Compliance', description: 'Startups can self-certify under certain labour and environmental laws for up to five years, easing regulatory pressure.' },
    { icon: <FaGlobe />, title: 'Environmental Exemptions', description: 'Startups in ‘white category’ industries are exempt from select environmental clearances for the first three years.' },
    { icon: <FaPercentage />, title: 'Income Tax Exemption', description: 'Eligible startups receive a 3-year tax holiday within their first 10 years and exemption from angel tax under Section 56.' },
    { icon: <FaBuilding />, title: 'Easy Winding-Up', description: 'Startups can close their operations within 90 days of application, offering a simple exit route.' },
    { icon: <FaBriefcase />, title: 'Relaxed Government Procurement Norms', description: 'DPIIT-recognized startups can participate in tenders without prior experience or turnover requirements.' },
    { icon: <FaUsers />, title: 'Mentorship & Networking Opportunities', description: 'Startups get access to industry mentors, incubation centers, and networking platforms to accelerate growth.' },
  ];

  const half = Math.ceil(benefits.length / 2);
  const leftColumn = benefits.slice(0, half);
  const rightColumn = benefits.slice(half);

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-semibold mb-12">Key Benefits of Startup India Registration</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore the major benefits available to startups under the Startup India initiative:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-8">
            {leftColumn.map((item, index) => (
              <div key={index} className="flex justify-between items-start text-right">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
                <div className="text-[#b40068] ml-4 mt-1 text-2xl">{item.icon}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {rightColumn.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-[#b40068] mt-1 text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupIndiaBenefits;
