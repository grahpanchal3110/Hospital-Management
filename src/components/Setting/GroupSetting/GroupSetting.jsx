import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import { useNavigate } from "react-router";

const GroupSetting = () => {
  const navigate = useNavigate();

  const GroupData = [
    {
      name: "Admin",
      description: "1",
    },
    {
      name: "Doctor",
      description: "",
    },
    {
      name: "Receptionist",
      description: "test",
    },
    {
      name: "Superadmin",
      description: "Supe",
    },
  ];
  // --- Pagination States ---
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10); // default rows per page

  // --- Logic for Pagination ---
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = GroupData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(GroupData.length / rowsPerPage);

  const handleGroupSettingCreate = () => {
    navigate("/setting/groupsetting/create");
  };
  return (
    <>
      <div className="w-auto h-auto bg-white border border-gray-100 rounded-md shadow-xl/15 overflow-y-auto flex flex-col">
        <p className="p-4 font-semibold text-xl text-[#5d596c]">
          Group Master Informations
        </p>
        <div className="flex justify-end">
          <div className="text-end mr-5">
            <button
              className="bg-[#7367f0] text-white font-medium p-2 rounded-lg cursor-pointer hover:bg-[#5b4ed3]"
              onClick={handleGroupSettingCreate}
            >
              + Add New Group Master
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
              <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                Name
              </th>
              <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                Description
              </th>
              <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-600">
            {currentRows.map((acc, index) => (
              <tr
                key={index}
                className="border-b border-r border-gray-200 hover:bg-gray-50"
              >
                <td className="py-2 px-4  border-b border-r border-gray-200">
                  {acc.name}
                </td>
                <td className="py-2 px-4  border-b border-r border-gray-200">
                  {acc.description}
                </td>
                <td className="py-2 px-4 flex justify-start gap-1">
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
        {/* Pagination Footer */}
        <div className="flex items-center justify-between p-3">
          <div className="text-gray-400">
            Showing {indexOfFirstRow + 1} to {""}
            {Math.min(indexOfLastRow, GroupData.length)} of {GroupData.length}{" "}
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

export default GroupSetting;
