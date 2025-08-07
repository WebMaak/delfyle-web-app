import {
  FaBriefcase,
  FaChartLine,
  FaHome,
  FaUsers,
  FaFileAlt,
  FaMoneyCheckAlt,
  FaGlobe,
  FaHandshake,
  FaThumbtack,
} from 'react-icons/fa';

const IconTextList = () => {
  const features = [
    {
      title: 'Schedule BP – Business or Profession',
      description: 'Details of income from business or profession carried out by the firm or LLP.',
      icon: <FaBriefcase size={24} color="rgba(180, 0, 104, 1)" />,
    },
    {
      title: 'Schedule CG – Capital Gains',
      description: 'Reports gains or losses from the sale of capital assets during the financial year.',
      icon: <FaChartLine size={24} color="rgba(180, 0, 104, 1)" />,
    },
    {
      title: 'Schedule HP – House Property',
      description: 'Income derived from owning house property, whether rented or self-occupied.',
      icon: <FaHome size={24} color="rgba(180, 0, 104, 1)" />,
    },
    {
      title: 'Schedule IF – Firm/LLP Partners',
      description: 'Information about all partners in the LLP or firm, including their share ratio.',
      icon: <FaUsers size={24} color="rgba(180, 0, 104, 1)" />,
    },
    {
      title: 'Schedule VI-A – Deductions',
      description: 'Claims under sections 80C to 80U for eligible deductions like LIC, PF, etc.',
      icon: <FaFileAlt size={24} color="rgba(180, 0, 104, 1)" />,
    },
    {
      title: 'Schedule TDS & TCS',
      description: 'Details of tax deducted and collected at source as per Form 26AS.',
      icon: <FaMoneyCheckAlt size={24} color="rgba(180, 0, 104, 1)" />,
    },
    {
      title: 'Schedule FSI – Foreign Source Income',
      description: 'Disclosures of income earned from sources outside India.',
      icon: <FaGlobe size={24} color="rgba(180, 0, 104, 1)" />,
    },
    {
      title: 'Schedule TR – Tax Relief under DTAA',
      description: 'Claims of relief for taxes paid outside India under Double Taxation Avoidance Agreements.',
      icon: <FaHandshake size={24} color="rgba(180, 0, 104, 1)" />,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className=" font-semibold text-center mb-12 md:text-[4rem] text-3xl mb-16">Schedules in ITR-5</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1 min-w-[32px]">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600 mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center text-gray-700">
          <div className="flex justify-center items-center gap-2 mb-4">
            <h3 className="md:text-[2rem] text-3xl font-semibold">Recommended Filing Sequence</h3>
          </div>
          <p className="mt-1 text-lg text-gray-500">Part A → Schedules → Part B → Verification</p>
          <p className="mt-1 text-lg text-gray-500">
            This order ensures consistency and error-free filing as advised by the Income Tax Department.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IconTextList;
