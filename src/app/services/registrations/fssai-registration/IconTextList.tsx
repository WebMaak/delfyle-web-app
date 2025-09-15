import { FaHome, FaFileAlt, FaGlobe } from 'react-icons/fa';

const FSSAIRegistrationTypes = () => {
  const registrationData = [
    {
      icon: <FaHome />,
      title: 'FSSAI Basic Registration',
      description: 'Who Needs It: Food Business Operators (FBOs) with an annual turnover of less than ₹12 lakh.',
    },
    {
      icon: <FaFileAlt />,
      title: 'Form Used: Form A',
      description: 'Ideal For: Small-scale businesses such as home-based food vendors, petty retailers, or temporary food stalls.',
    },
    {
      icon: <FaHome />,
      title: 'FSSAI State License',
      description: 'Who Needs It: FBOs with an annual turnover between ₹12 lakh and ₹20 crore.',
    },
    {
      icon: <FaFileAlt />,
      title: 'Form Used: Form B',
      description: 'Ideal For: Mid-sized businesses like small to medium restaurants, manufacturers, storage facilities, or distributors operating within a single state.',
    },
    {
      icon: <FaGlobe />,
      title: 'FSSAI Central License',
      description: 'Who Needs It: FBOs with an annual turnover exceeding ₹20 crore.',
    },
    {
      icon: <FaFileAlt />,
      title: 'Form Used: Form B',
      description: 'Ideal For: Large-scale operators, including importers/exporters, large manufacturers, and food chains operating in multiple states.',
    },
  ];

  const half = Math.ceil(registrationData.length / 2);
  const leftColumn = registrationData.slice(0, half);
  const rightColumn = registrationData.slice(half);

  return (
    <section className="py-10 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
  Don't risk penalties or customer distrust — secure your FSSAI Registration with Delfyle today!
</h2>

<p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
  Types of FSSAI Registration and License
</p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-8">
            {leftColumn.map((item, index) => (
              <div key={index} className="flex justify-between items-start text-right whitespace-pre-line">
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
              <div key={index} className="flex items-start gap-4 whitespace-pre-line">
                <div className="text-[#b40068] mt-1 text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-600 mt-10 max-w-2xl mx-auto">
          Selecting the correct registration or license based on your business size, type, and turnover ensures smooth regulatory compliance with FSSAI norms.
        </p>
      </div>
    </section>
  );
};

export default FSSAIRegistrationTypes;
