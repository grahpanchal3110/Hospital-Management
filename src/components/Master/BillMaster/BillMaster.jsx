import { FaEye } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import { useState } from "react";
import { useNavigate } from "react-router";

const BillMaster = () => {
  const navigate = useNavigate();

  const bills = [
    { name: ".", rate: "1000", active: "Yes" },
    { name: ".", rate: "200", active: "Yes" },
    { name: "-", rate: "400", active: "No" },
    { name: "2-D ECHO SC", rate: "500", active: "Yes" },
    { name: "2D ECHO", rate: "1200", active: "No" },
    { name: "3D-4D SCAN / ANOMALY SCAN", rate: "11100", active: "Yes" },
    { name: "3D CT", rate: "1900", active: "No" },
    { name: "ABDOMEN", rate: "1030", active: "No" },
    { name: "ABDOMEN", rate: "2000", active: "Yes" },
    { name: "ABDOMEN + SCROTUM", rate: "1200", active: "Yes" },
    { name: "ABDOMEN PELVIS", rate: "100", active: "Yes" },
    { name: "ABDOMEN PELVIS PLAIN", rate: "100", active: "Yes" },
    { name: "ABDOMEN PELVIS PLAIN + CONTRAST", rate: "100", active: "Yes" },
    { name: "ABDOMEN PELVIS SC", rate: "3100", active: "Yes" },
    { name: "ARTERIAL DOPPLER", rate: "4100", active: "Yes" },
    { name: "BIOPSY", rate: "100", active: "No" },
    { name: "BRAIN PLAIN + CONTRAST", rate: "1300", active: "Yes" },
    { name: "CERVICAL SPINE", rate: "1200", active: "No" },
    { name: "BARIUM SWALLOW", rate: "1100", active: "Yes" },
    { name: "ANTENATAL", rate: "10021", active: "Yes" },
  ];

  // --- Pagination States ---
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10); // default rows per page

  // --- Logic for Pagination ---
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = bills.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(bills.length / rowsPerPage);

  const handleBillMasterCreate = () => {
    console.log("Bill Master Create");
    navigate("/master/billmaster/create");
  };

  const handleGroupBillMasterCreate = () => {
    console.log("Group Bill Master Create");
    navigate("/master/billmastergroup/create");
  };

  return (
    <>
      <div className="w-auto h-auto bg-white rounded-md shadow-xl overflow-y-auto flex flex-col">
        <p className="p-4 font-semibold text-xl text-[#5d596c] ">
          Bill Master Informations
        </p>
        <div className="flex justify-end">
          <div className="text-end mr-5">
            <button
              className="bg-[#7367f0] text-white font-medium p-2 rounded-lg cursor-pointer hover:bg-[#5b4ed3]"
              onClick={handleBillMasterCreate}
            >
              + Add New Bill Master
            </button>
          </div>
          <div className="text-end mr-5">
            <button
              className="bg-[#7367f0] text-white font-medium p-2 rounded-lg cursor-pointer hover:bg-[#5b4ed3]"
              onClick={handleGroupBillMasterCreate}
            >
              + Add New Group
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between p-2 mr-3">
          <div className="flex flex-row gap-3">
            <span className="mt-1">Show</span>
            <select
              name="entry"
              id="entry"
              className="border border-gray-300 focus:outline-0 focus:border-[#7367f0] rounded-md p-1"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
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
        <table className="w-full text-start border border-gray-200 mt-3">
          <thead className="bg-gray-100 text-gray-500">
            <tr className="border-b border-gray-200">
              <th className="py-2 px-4 text-start">Name</th>
              <th className="py-2 px-4 text-start">Code</th>
              <th className="py-2 px-4 text-start">Rate</th>
              <th className="py-2 px-4 text-start">Active</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-600">
            {currentRows.map((acc, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-2 px-4">{acc.name}</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">{acc.rate}</td>
                <td className="py-2 px-4">{acc.active}</td>
                <td className="py-2 px-4 flex justify-center gap-1">
                  <button className="text-white bg-blue-500 hover:bg-blue-600 w-7 h-7 flex items-center justify-center rounded">
                    <TiPencil />
                  </button>
                  <button className="text-white bg-green-500 hover:bg-green-600 w-7 h-7 flex items-center justify-center rounded">
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination Footer */}
        <div className="flex items-center justify-between p-3">
          <div className="text-gray-400">
            Showing {indexOfFirstRow + 1} to
            {Math.min(indexOfLastRow, bills.length)} of {bills.length} entries
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

export default BillMaster;
