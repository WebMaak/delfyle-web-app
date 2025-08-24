import { FaUser, FaCheckCircle, FaFileAlt, FaMoneyBillWave, FaArrowRight } from 'react-icons/fa';

const FSSAIRegistrationTypes = () => {
  const registrationData = [
    {
      icon: <FaUser />,
      title: 'Expert guidance at every step',
      description: 'Our team of professionals provides personalized assistance, ensuring a smooth and hassle-free reactivation process from start to finish.',
    },
    {
      icon: <FaArrowRight />,
      title: 'Fast turnaround with minimal effort',
      description: 'We streamline the process, handling all the complexities to ensure your DIN is reactivated as quickly as possible with minimal effort on your part.',
    },
    {
      icon: <FaFileAlt />,
      title: 'Error-free document preparation',
      description: 'We meticulously review and prepare all required documents to ensure accuracy and compliance, avoiding common errors that cause delays.',
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Transparent pricing with no hidden fees',
      description: 'You get a clear, upfront quote for our services, so you know exactly what you are paying for without any unexpected costs.',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Continued support for annual filings',
      description: 'After reactivation, we continue to support you with timely reminders and assistance for future annual DIR-3 KYC filings to ensure ongoing compliance.',
    },
  ];

  const half = Math.ceil(registrationData.length / 2);
  const leftColumn = registrationData.slice(0, half);
  const rightColumn = registrationData.slice(half);

  return (
    <section className="py-10 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-semibold mb-6">
          Why Choose Delfyle for DIN Reactivation?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          At Delfyle, we simplify the process of reactivating your DIN, ensuring you regain compliance with the MCA quickly and efficiently.
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
          Let Delfyle be your trusted partner in managing your DIN compliance, allowing you to focus on your directorial duties without interruption.
        </p>
      </div>
    </section>
  );
};

export default FSSAIRegistrationTypes;