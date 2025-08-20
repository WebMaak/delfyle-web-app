import { FaRegHandshake, FaFileAlt, FaClipboardList, FaPaperPlane, FaClock, FaCertificate } from 'react-icons/fa';

const GSTRevocationProcess = () => {
  const steps = [
    { icon: <FaRegHandshake />, title: 'Consultation', description: 'Understand your business needs and eligibility for revocation. Our experts guide you through the process and answer all questions.' },
    { icon: <FaFileAlt />, title: 'Document Collection', description: 'Gather required documents including GST registration certificate, financial records, and other supporting materials.' },
    { icon: <FaClipboardList />, title: 'Application Preparation', description: 'Prepare the GST revocation application ensuring all details are correctly filled to avoid delays or rejection.' },
    { icon: <FaPaperPlane />, title: 'Application Filing', description: 'File the revocation application via the GST portal on your behalf, with all documents attached for smooth submission.' },
    { icon: <FaClock />, title: 'Application Tracking', description: 'Monitor the application status and provide updates on any additional information or actions needed.' },
    { icon: <FaCertificate />, title: 'Revocation Order', description: 'Once processed, receive the revocation order and necessary documents to restore your GST registration.' },
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
          Follow these steps to restore your cancelled GST registration efficiently with expert support.
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
