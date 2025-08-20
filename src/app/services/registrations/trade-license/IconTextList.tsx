import { FaBriefcase, FaBalanceScale, FaCertificate, FaHome, FaGlobe, FaFileAlt, FaUsers, FaCogs } from 'react-icons/fa';

const TradeLicenseBenefits = () => {
  const benefits = [
    { icon: <FaBalanceScale />, title: 'Legal Compliance', description: 'Obtaining a trade license certificate ensures that your business operates within the legal framework set by the municipality or local governing body.' },
    { icon: <FaCertificate />, title: 'Public Safety', description: 'Trade licenses require businesses to adhere to safety standards and regulations, contributing to the public’s overall safety.' },
    { icon: <FaUsers />, title: 'Business Credibility', description: 'Having a trade license enhances your business credibility, instilling trust and confidence among customers, suppliers, and partners.' },
    { icon: <FaFileAlt />, title: 'Regulatory Compliance', description: 'Trade licenses help businesses comply with various regulatory requirements, avoiding potential fines, penalties, or legal issues.' },
    { icon: <FaGlobe />, title: 'Access to Government Support', description: 'Some government schemes, incentives, or benefits require a valid trade license to qualify.' },
    { icon: <FaHome />, title: 'Establishing Business Legitimacy', description: 'A trade license serves as proof of your business’s legitimacy, beneficial when dealing with clients, banks, or investors.' },
    { icon: <FaCogs />, title: 'Facilitates Expansion', description: 'A trade license may be necessary when expanding operations or applying for permits for new projects or ventures.' },
    { icon: <FaBriefcase />, title: 'Required for Certain Businesses', description: 'Businesses such as food establishments, manufacturing units, healthcare facilities, entertainment venues, transport services, and liquor shops typically require a trade license.' },
  ];

  const half = Math.ceil(benefits.length / 2);
  const leftColumn = benefits.slice(0, half);
  const rightColumn = benefits.slice(half);

  return (
    <section className="py-10 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-semibold mb-12">Advantages of Trade License</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Discover the key benefits of obtaining a trade license and why it is essential for various businesses:
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

export default TradeLicenseBenefits;
