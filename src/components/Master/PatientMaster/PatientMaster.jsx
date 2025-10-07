import { FaEye } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import { useState } from "react";
import { useNavigate } from "react-router";

const PatientMaster = () => {
  const navigate = useNavigate();
  const patients = [
    { name: "AAA", mobile: "9876536738" },
    { name: "AADHYA BAROT", mobile: "9876536738" },
    { name: "AADI TADAVI", mobile: "9876536738" },
    { name: "AARATI SHARMA", mobile: "9876536738" },
    { name: "AARAV RAWAT", mobile: "9876536738" },
    { name: "AAROHI THAKOR", mobile: "9876536738" },
    { name: "AAROHI VARMA", mobile: "9876536738" },
    { name: "AATISH MENAMAN", mobile: "9876536738" },
    { name: "AAYUSH RAVAT", mobile: "9876536738" },
    { name: "ABEDABENBEN QURESHI", mobile: "9876536738" },
    { name: "ANJALI PATEL", mobile: "9876536738" },
    { name: "ARJUN MEHTA", mobile: "9876536738" },
    { name: "KAVYA SHAH", mobile: "9876536738" },
    { name: "RAVI DESAI", mobile: "9876536738" },
    { name: "PRIYA VERMA", mobile: "9876536738" },
    { name: "SACHIN RATHOD", mobile: "9876536738" },
    { name: "NEHA SINGH", mobile: "9876536738" },
    { name: "VIJAY YADAV", mobile: "9876536738" },
    { name: "MEENA SOLANKI", mobile: "9876536738" },
    { name: "HARDIK JOSHI", mobile: "9876536738" },
    { name: "NISHA CHAUHAN", mobile: "9876536738" },
    { name: "SANJAY KUMAR", mobile: "9876536738" },
    { name: "TANVI BHATT", mobile: "9876536738" },
    { name: "ROHIT PATIL", mobile: "9876536738" },
    { name: "VIPUL KAPOOR", mobile: "9876536738" },
    { name: "DEEPAK NAIR", mobile: "9876536738" },
    { name: "ANKITA GUPTA", mobile: "9876536738" },
    { name: "MOHIT KUMAR", mobile: "9876536738" },
    { name: "SONALI JAIN", mobile: "9876536738" },
    { name: "YASH THAKUR", mobile: "9876536738" },
  ];

  // --- Pagination States ---
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10); // default rows per page

  // --- Logic for Pagination ---
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = patients.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(patients.length / rowsPerPage);

  const handlePatientMaster = () => {
    navigate("/master/patientmaster/create");
  };

  return (
    <>
      <div className="w-auto h-auto bg-white rounded-md shadow-xl overflow-y-auto flex flex-col">
        <p className="p-4 font-semibold text-xl text-[#5d596c]">
          Patient Master Informations
        </p>
        <div className="text-end mr-5">
          <button
            className="bg-[#7367f0] text-white font-medium p-2 rounded-lg cursor-pointer hover:bg-[#5b4ed3]"
            onClick={handlePatientMaster}
          >
            + Add New Patient Master
          </button>
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
              <th className="py-2 px-4 text-start">Email</th>
              <th className="py-2 px-4 text-start">Contact</th>
              <th className="py-2 px-4 text-start">Area</th>
              <th className="py-2 px-4 text-start">City</th>
              <th className="py-2 px-4 text-start">Mobile</th>
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
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">{acc.mobile}</td>
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
            Showing {indexOfFirstRow + 1} to{" "}
            {Math.min(indexOfLastRow, patients.length)} of {patients.length}{" "}
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

export default PatientMaster;
