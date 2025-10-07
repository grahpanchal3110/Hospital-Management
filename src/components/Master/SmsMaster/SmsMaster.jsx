// import React from "react";

// const SmsMaster = () => {
//   return <div>SmsMaster</div>;
// };

// export default SmsMaster;

import { FaEye } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import { useState } from "react";

const SmsMaster = () => {
  const sms = [
    {
      title: "Receiption",
      message:
        "નમસ્કાર,{PatientName} તમારો રિપોર્ટ તૈયાર છે.રિસેપ્શન ડેસ્ક પર દર્દીનું પૂરું નામ અને તપાસ જણાવી તપાસ થયાના 2 દિવસની અંદર રિપોર્ટ કલેક્ટ કરવો.મુલાકાત લેવા માટે આભાર. Hello,{PatientName} Your report is ready.Kindly give full name of patient and scan details at reception and collect report within 2 days from the day of scanning. Thanks for visiting us.*From, Sparsh diagnostics*click on {url}",
    },
    {
      title: "RefDoctor",
      message:
        "*Thanks for Referring us.*{PatientName}**%0A%0A*From, SPARSH DIAGNOSTICS *%0A%0APatient name is {PatientName} %0A%0A Click on {url}",
    },
    {
      title: "Welcome",
      message:
        "🙏 નમસ્કાર *{PatientName}*, તમારું સ્વાગત છે! અમે ખુશ છીએ કે તમે અમારી સેવા પસંદ કરી. આપનું સ્વાસ્થ્ય અને સંતોષ અમારું પ્રાથમિક લક્ષ્ય છે. જો કોઈ પ્રશ્ન હોય કે વધુ માહિતી જોઈએ, તો કૃપા કરીને સંપર્ક કરો: 📞 [તમારો ફોન નંબર] આપનો દિવસ શુભ રહે! * SPARSH DIAGNOSTIC CENTRE *",
    },
  ];

  // --- Pagination States ---
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10); // default rows per page

  // --- Logic for Pagination ---
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sms.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(sms.length / rowsPerPage);

  return (
    <>
      <div className="w-auto h-auto mt-4 bg-white rounded-md shadow-xl overflow-y-auto flex flex-col">
        <p className="p-4 font-semibold text-xl text-[#5d596c] ">
          Bill Master Informations
        </p>

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
              <th className="py-2 px-4 text-start">Title</th>
              <th className="py-2 px-4 text-start">Message</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-600">
            {currentRows.map((acc, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-2 px-4">{acc.title}</td>
                <td className="py-2 px-4">{acc.message}</td>
                <td className="py-2 px-4 flex justify-center gap-1">
                  <button className="text-white bg-blue-500 hover:bg-blue-600 w-7 h-7 flex items-center justify-center rounded">
                    <TiPencil />
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
            {Math.min(indexOfLastRow, sms.length)} of {sms.length} entries
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

export default SmsMaster;
