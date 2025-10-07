import { useState } from "react";
import ReportCommon from "../../ReuseableComponetns/ReportCommon";
import PaymentData from "./PaymentData.json";

const PaymentReport = () => {
  // --- Pagination States ---
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(50); // default rows per page

  // --- Logic for Pagination ---
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = PaymentData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(PaymentData.length / rowsPerPage);
  return (
    <>
      <div className="w-auto h-auto bg-white border border-gray-100 rounded-md shadow-xl/15 overflow-y-auto flex flex-col">
        <p className="p-4 font-semibold text-xl text-[#5d596c] ">
          Payment Report
        </p>
        <ReportCommon />

        <div className="h-[57vh] overflow-y-auto">
          <table className="w-full text-start border border-gray-200 mt-3">
            <thead className="bg-[#4B4B4B] text-sm text-white">
              <tr className="border-b border-gray-200">
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  #
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Scan Date
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  LabExamID
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Patient Name
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Type
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-600">
              {currentRows.map((acc, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.code}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.scanDate}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.labExamID}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.patientName}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.type}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination Footer */}
        <div className="flex items-center justify-between p-3">
          <div className="text-gray-400">
            Showing {indexOfFirstRow + 1} to{" "}
            {Math.min(indexOfLastRow, PaymentData.length)} of{" "}
            {PaymentData.length} entries
          </div>

          <div className="flex items-center justify-end gap-1">
            <button
              className={`px-3 py-1 rounded-md ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded-md ${
                  currentPage === i + 1
                    ? "bg-[#7367f0] text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className={`px-3 py-1 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentReport;
