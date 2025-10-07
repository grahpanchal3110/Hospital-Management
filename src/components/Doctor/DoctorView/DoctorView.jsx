import React, { useState } from "react";
import DoctorData from "./DoctorData.json";

const DoctorView = () => {
  const today = new Date().toISOString().split("T")[0];
  const [examination, setExamination] = useState("all");
  const [status, setStatus] = useState("all");
  const [fromDate, setFromDate] = useState(today);
  const [toDate, setToDate] = useState(today);

  const handleSearch = () => {
    console.log("Searching for:", { examination, status, fromDate, toDate });
  };

  const handleClear = () => {
    setExamination("all");
    setStatus("all");
    setFromDate(today);
    setToDate(today);
  };

  const handleExport = () => {
    console.log("Exporting data for:", {
      examination,
      status,
      fromDate,
      toDate,
    });
  };
  // --- Pagination States ---
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(50); // default rows per page

  // --- Logic for Pagination ---
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = DoctorData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(DoctorData.length / rowsPerPage);
  return (
    <>
      <div className="w-auto h-auto bg-white border border-gray-100 rounded-md shadow-xl/15 overflow-y-auto flex flex-col">
        <p className="p-4 font-semibold text-xl text-[#5d596c]">Doctor View</p>

        <div className="pl-4 font-semibold text-xl text-[#5d596c]">
          Search Filter
        </div>
        <div className="p-4 py-3 font-sans bg-white rounded-lg flex flex-col gap-3">
          <div className="flex flex-row items-end gap-3">
            <div className="flex-1">
              <label
                htmlFor="examination"
                className="block mb-1.5 text-sm font-medium text-gray-700"
              >
                Examination
              </label>
              <select
                id="examination"
                value={examination}
                onChange={(e) => setExamination(e.target.value)}
                className="w-full border border-gray-300 focus:outline-0 focus:border-[#7367f0] rounded-md p-2"
              >
                <option value="all">All</option>
                <option value="ctscan">CT Scan</option>
                <option value="MammoGraphy">MammoGraphy</option>
                <option value="MRI">MRI</option>
                <option value="SonoGraphy">SonoGraphy</option>
                <option value="X-Ray">X-Ray</option>
              </select>
            </div>
            <div className="flex-1">
              <label
                htmlFor="status"
                className="block mb-1.5 text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border border-gray-300 focus:outline-0 focus:border-[#7367f0] rounded-md p-2"
              >
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="flex-1">
              <label
                htmlFor="from-date"
                className="block mb-1.5 text-sm font-medium text-gray-700"
              >
                From Date
              </label>
              <div className="relative flex items-center">
                <input
                  id="from-date"
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="w-full pr-5 pl-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
            </div>
            <div className="flex-1">
              <label
                htmlFor="to-date"
                className="block mb-1.5 text-sm font-medium text-gray-700"
              >
                To Date
              </label>
              <div className="relative flex items-center">
                <input
                  id="to-date"
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="w-full pr-5 pl-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2.5">
              <button
                className="px-5 py-2.5 bg-green-500 text-white rounded font-medium text-sm hover:bg-green-600 transition-colors"
                onClick={handleSearch}
              >
                Search
              </button>
              <button
                className="px-5 py-2.5 bg-green-500 text-white rounded font-medium text-sm hover:bg-green-600 transition-colors"
                onClick={handleClear}
              >
                Clear
              </button>
              <button
                className="px-5 py-2.5 bg-green-500 text-white rounded font-medium text-sm hover:bg-green-600 transition-colors"
                onClick={handleExport}
              >
                Export
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pl-4 pr-5 py-3">
          <div className="flex flex-row gap-3">
            <span className="mt-1">Show</span>
            <select
              name="entry"
              id="entry"
              className="border border-gray-300 focus:outline-0 focus:border-[#7367f0] rounded-md p-1"
            >
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
            </select>
            <span className="mt-1">Entries</span>
          </div>
          <div className="flex flex-row gap-3">
            <span className="mt-1">Search:</span>
            <input
              type="text"
              className="border border-gray-300 focus:outline-0 focus:border-[#7367f0] rounded-md p-1"
            />
          </div>
        </div>

        <div className="h-[57vh] overflow-y-auto">
          <table className="w-full text-start border border-gray-200 mt-3">
            <thead className="bg-[#4B4B4B] text-sm text-white">
              <tr className="border-b border-gray-200">
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  #
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Receipt
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Time
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Patient
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Mobile
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Doctor
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Study Name
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Emergency
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Report
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Amount
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Paid
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Discount
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Due
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
                    {acc.receipt}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.time}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.patient}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.mobile}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    <p className="w-[5rem]"> {acc.doctor} </p>
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.studyName}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.emergency}
                  </td>
                  <td className="px-2 border-b border-r border-gray-200">
                    <button
                      type="button"
                      className="bg-[#e2e2e2] w-20 h-8 text-[#4B4B4B] px-2 py-1 rounded cursor-pointer hover:bg-[#bdb9b9] transition-colors"
                    >
                      Generate
                    </button>
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.amount}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.paid}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.discount}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.due}
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
            {Math.min(indexOfLastRow, DoctorData.length)} of {DoctorData.length}{" "}
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

export default DoctorView;
