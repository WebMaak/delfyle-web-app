import { FaRegHandshake, FaFileAlt, FaClipboardList, FaPaperPlane, FaClock, FaCertificate } from 'react-icons/fa';

const GSTRevocationProcess = () => {
  const steps = [
    { icon: <FaRegHandshake />, title: 'Consultation', description: 'We begin with a consultation to understand your business needs and eligibility for revocation. Our experts will guide you through the process and answer any questions.' },
    { icon: <FaFileAlt />, title: 'Document Collection', description: 'We assist in gathering the required documents, including your GST registration certificate, financial records, and any other supporting materials necessary for the revocation application.' },
    { icon: <FaClipboardList />, title: 'Application Preparation', description: 'Our team will carefully prepare your GST revocation application, ensuring that all necessary details are correctly filled to avoid delays or rejection.' },
    { icon: <FaPaperPlane />, title: 'Application Filing', description: 'We will file the revocation application through the GST portal on your behalf. Our experts ensure that the form is filled correctly and the documents are attached for smooth submission.' },
    { icon: <FaClock />, title: 'Application Tracking', description: 'We monitor the status of your application and keep you updated on any additional information or actions needed. Our team ensures timely follow-up with the tax authorities.' },
    { icon: <FaCertificate />, title: 'Revocation Order', description: 'Once the application is processed, we will provide you with the revocation order and any necessary documents, ensuring you are back in good standing with the GST authorities.' },
  ];

  // Split into two columns
  const half = Math.ceil(steps.length / 2);
  const leftColumn = steps.slice(0, half);
  const rightColumn = steps.slice(half);

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-semibold mb-12">
          GST Revocation Process with Delfyle
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Delfyle offers a streamlined process to help you restore your cancelled GST registration. Here's how we assist you:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
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

          {/* Right Column */}
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

export default GSTRevocationProcess;
