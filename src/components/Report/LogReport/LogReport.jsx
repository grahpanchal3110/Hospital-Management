import { useState } from "react";
import ReportCommon from "../../ReuseableComponetns/ReportCommon";
import LogData from "./LogData.json";

const LogReport = () => {
  // --- Pagination States ---
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(50); // default rows per page

  // --- Logic for Pagination ---
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = LogData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(LogData.length / rowsPerPage);
  return (
    <>
      <div className="w-auto h-auto bg-white border border-gray-100 rounded-md shadow-xl/15 overflow-y-auto flex flex-col">
        {" "}
        <p className="p-4 font-semibold text-xl text-[#5d596c] ">Log Report</p>
        <ReportCommon />
        <div className="h-[57vh] overflow-y-auto mt-2">
          <table className="w-full text-start border border-gray-200 mt-3">
            <thead className="bg-[#4B4B4B] text-sm text-white">
              <tr className="border-b border-gray-200">
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  #
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  User ID
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  User Name
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Action
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Record_id
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Description
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Date
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
                    {acc.userID}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.userName}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.action}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.record_id}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.description}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.date}
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
            {Math.min(indexOfLastRow, LogData.length)} of {LogData.length}{" "}
            entries
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

export default LogReport;
