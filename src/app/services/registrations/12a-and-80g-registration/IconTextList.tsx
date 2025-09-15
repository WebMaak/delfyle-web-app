import { FaHome, FaFileAlt, FaGlobe } from 'react-icons/fa';

const FSSAIRegistrationTypes = () => {

  const registrationData = [
    {
      icon: <FaHome />,
      title: 'Legal Authorization',
      description: 'RERA registration authorizes agents to legally carry out real estate transactions and represent developers or buyers under RERA-registered projects.',
    },
    {
      icon: <FaFileAlt />,
      title: 'Enhanced Market Credibility',
      description: 'Registered agents gain a reputation for being compliant and professional, earning the trust of both buyers and developers.',
    },
    {
      icon: <FaHome />,
      title: 'Consumer Protection',
      description: 'The registration ensures adherence to fair trade practices and provides a structured grievance redressal system for consumers.',
    },
    {
      icon: <FaFileAlt />,
      title: 'Access to RERA Projects',
      description: 'Only registered agents can work with RERA-compliant properties, expanding their business opportunities.',
    },
    {
      icon: <FaGlobe />,
      title: 'Compliance and Reduced Legal Risks',
      description: 'RERA-certified agents stay up to date with applicable regulations, reducing the risk of penalties or revocation.',
    },
    {
      icon: <FaFileAlt />,
      title: 'Professional Recognition',
      description: 'RERA registration elevates an agent\'s profile, distinguishing them from unregistered and informal competitors.',
    },
  ];

  const half = Math.ceil(registrationData.length / 2);
  const leftColumn = registrationData.slice(0, half);
  const rightColumn = registrationData.slice(half);

  return (
    <section className="py-10 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
       <h2 className="text-center text-3xl md:text-4xl font-semibold mb-6">
  Key Benefits of RERA Registration
</h2>
<p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-base md:text-lg">
  RERA registration offers numerous advantages for real estate agents, enhancing their credibility, legal standing, and business opportunities in the competitive property market.
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
          By obtaining RERA registration, real estate agents not only comply with legal requirements but also position themselves for greater success and trust in the industry.
        </p>
      </div>
    </section>
  );
};

export default FSSAIRegistrationTypes;
