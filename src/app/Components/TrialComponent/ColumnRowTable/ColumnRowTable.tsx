import React from "react";

interface ColumnRowTableProps {
  title?: string;
  description?: string;
  columns?: string[][];
}

const ColumnRowTable: React.FC<ColumnRowTableProps> = ({
  title = "Sample Table Title",
  description = "This table provides structured data with headers and rows. Customize as needed.",
  columns = [
    ["Quarter", "Period", "TDS Return Due Date"],
    ["Q1", "April - June", "31st July"],
    ["Q2", "July - September", "31st October"],
    ["Q3", "October - December", "31st January"],
    ["Q4", "January - March", "31st May"]
  ]
}) => {
  const headers = columns[0];
  const rows = columns.slice(1);
  const columnCount = headers?.length || 0;
  const isCompactTable = columnCount <= 3;

  return (
    <section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2">{title}</h2>
          {description && (
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Table for medium and larger screens */}
        <div className="hidden md:block overflow-x-auto">
          <div className={isCompactTable ? "max-w-3xl mx-auto" : ""}>
            <table className="min-w-full border border-[#b44593]/50 rounded-xl overflow-hidden">
              <thead className="bg-[#b44593]/10">
                <tr>
                  {headers.map((header, idx) => (
                    <th
                      key={idx}
                      className="text-center text-base md:text-lg px-4 py-3 font-semibold text-[#1a1a1a] border-b border-[#b44593]/30"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {rows.map((row, i) => (
                  <tr key={i} className="hover:bg-[#fdf4f9] transition">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="text-center px-4 py-3 text-sm md:text-lg text-gray-700 border-b border-gray-200"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile stacked layout */}
        <div className="block md:hidden space-y-4">
          {rows.map((row, i) => (
            <div
              key={i}
              className="border border-[#b44593]/30 rounded-lg p-4 shadow-sm bg-white"
            >
              {row.map((cell, j) => (
                <div key={j} className="flex justify-between py-1">
                  <span className="font-semibold text-gray-600">{headers[j]}</span>
                  <span className="text-gray-800">{cell}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColumnRowTable;
