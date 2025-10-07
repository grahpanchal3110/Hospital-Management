import { useState } from "react";
import Receptiontable1 from "./Receptiontable1.json";
import { TiPencil } from "react-icons/ti";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";

const Reception = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];
  const [fromDate, setFromDate] = useState(today);
  const [toDate, setToDate] = useState(today);

  // --- Pagination States ---
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(50); // default rows per page

  // --- Logic for Pagination ---
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = Receptiontable1.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(Receptiontable1.length / rowsPerPage);

  const handleReceptionMaster = () => {
    navigate("/frontoffice/reception/create");
  };

  return (
    <>
      <div className="w-auto h-auto bg-white border border-gray-100 rounded-md shadow-xl/15 overflow-y-auto flex flex-col">
        <div className="p-4 py-3 font-sans bg-white rounded-lg flex flex-col gap-3">
          <div className="flex flex-row items-end gap-3">
            <p className="p-4 font-semibold text-xl text-[#5d596c]">
              Reception
            </p>

            <div className="flex flex-row items-end gap-2">
              <div className="">
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
              <div className="">
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

              <div className="text-end mr-5">
                <button
                  className="bg-[#7367f0] text-white font-medium p-2 rounded-lg cursor-pointer hover:bg-[#5b4ed3]"
                  onClick={handleReceptionMaster}
                >
                  + Add New
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex items-center justify-between pl-4 pr-5 py-3">
          <div className="flex flex-row gap-3 ml-4">
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
        <div className="h-[30vh] overflow-y-auto">
          <table className="w-full text-start border border-gray-200 mt-3">
            <thead className="bg-[#4B4B4B] text-sm text-white">
              <tr className="border-b border-gray-200">
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  #
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
                  Study
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Total
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
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Action
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
                    {acc.patient}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.Mobile}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.doctor}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.study}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.total}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.paid}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.discount}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.due}
                  </td>{" "}
                  <td className="py-2 px-4 flex justify-center gap-1">
                    <button className="text-white bg-blue-500 hover:bg-blue-600 w-7 h-7 flex items-center justify-center rounded">
                      <TiPencil />
                    </button>
                    <button className="text-white bg-red-500 hover:bg-red-600 w-7 h-7 flex items-center justify-center rounded">
                      <FaTrash />
                    </button>
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
            {Math.min(indexOfLastRow, Receptiontable1.length)} of{" "}
            {Receptiontable1.length} entries
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
        <div className="border-t border-gray-300" />
        <div className="h-[30vh] overflow-y-auto">
          <table className="w-full text-start border border-gray-200 mt-3">
            <thead className="bg-[#4B4B4B] text-sm text-white">
              <tr className="border-b border-gray-200">
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  #
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
                  Study
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Total
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
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Action
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
                    {acc.patient}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.Mobile}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.doctor}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.study}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.total}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.paid}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.discount}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.due}
                  </td>{" "}
                  <td className="py-2 px-4 flex justify-center gap-1">
                    <button className="text-white bg-blue-500 hover:bg-blue-600 w-7 h-7 flex items-center justify-center rounded">
                      <TiPencil />
                    </button>
                    <button className="text-white bg-red-500 hover:bg-red-600 w-7 h-7 flex items-center justify-center rounded">
                      <FaTrash />
                    </button>
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
            {Math.min(indexOfLastRow, Receptiontable1.length)} of{" "}
            {Receptiontable1.length} entries
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

export default Reception;
