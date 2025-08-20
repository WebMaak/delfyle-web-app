import { FaFileAlt, FaCogs, FaCheckCircle, FaRegEnvelope, FaClock } from 'react-icons/fa';

const GSTAmendmentProcedure = () => {
  const steps = [
    { icon: <FaRegEnvelope />, title: 'Login to GST Portal', description: 'Select "Amendment of Registration" to start your application.' },
    { icon: <FaCogs />, title: 'Choose Amendment Type', description: 'Core Amendments: business name, address, stakeholders. Non-Core: contact information, business details.' },
    { icon: <FaFileAlt />, title: 'Enter Details & Upload Docs', description: 'Fill required fields and upload supporting documents for the amendment.' },
    { icon: <FaCheckCircle />, title: 'Verify Application', description: 'Use your Digital Signature Certificate (DSC) or E-signature for verification.' },
    { icon: <FaClock />, title: 'Submit & Get ARN', description: 'Submit the application and receive an Application Reference Number (ARN) along with acknowledgment.' },
    { icon: <FaCogs />, title: 'Approval Process', description: 'Core Amendments: reviewed by GST officer within 15 working days. Non-Core Amendments: processed automatically from submission date.' },
    { icon: <FaFileAlt />, title: 'Respond to Rejections', description: 'If rejected or additional info is needed, respond within seven days with requested details.' },
  ];

  // Split into two columns
  const half = Math.ceil(steps.length / 2);
  const leftColumn = steps.slice(0, half);
  const rightColumn = steps.slice(half);

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-semibold mb-12">Procedure for GST Registration Amendment</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Follow these steps to successfully amend your GST registration via the GST Common Portal:
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

export default GSTAmendmentProcedure;
