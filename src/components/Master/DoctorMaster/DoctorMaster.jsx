import { FaTrash } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import { useState } from "react";
import { useNavigate } from "react-router";

const DoctorMaster = () => {
  const navigate = useNavigate();

  const doctors = [
    {
      code: 1201,
      name: "Aarav Patel",
      address: "Ahmedabad",
      mobile: "9876543210",
      speciality: "MS SUR",
      hospitalName: "Apollo Hospital",
      salaries: "Yes",
    },
    {
      code: 1202,
      name: "Kavya Shah",
      address: "Kalol",
      mobile: "9876501234",
      speciality: "MS",
      hospitalName: "Sterling Hospital",
      salaries: "No",
    },
    {
      code: 1203,
      name: "Ravi Desai",
      address: "Kadi",
      mobile: "9876512345",
      speciality: "DNB",
      hospitalName: "Civil Hospital",
      salaries: "Yes",
    },
    {
      code: 1204,
      name: "Priya Verma",
      address: "Dehgam",
      mobile: "9876523456",
      speciality: "NEURO",
      hospitalName: "Zydus Hospital",
      salaries: "Yes",
    },
    {
      code: 1205,
      name: "Sachin Rathod",
      address: "Ahmedabad",
      mobile: "9876534567",
      speciality: "MD",
      hospitalName: "Shalby Hospital",
      salaries: "No",
    },
    {
      code: 1206,
      name: "Neha Singh",
      address: "Kalol",
      mobile: "9876545678",
      speciality: "DNB NEUROLOGY",
      hospitalName: "Apollo Hospital",
      salaries: "Yes",
    },
    {
      code: 1207,
      name: "Vijay Yadav",
      address: "Kadi",
      mobile: "9876556789",
      speciality: "MS SUR",
      hospitalName: "Civil Hospital",
      salaries: "No",
    },
    {
      code: 1208,
      name: "Meena Solanki",
      address: "Dehgam",
      mobile: "9876567890",
      speciality: "MS",
      hospitalName: "Zydus Hospital",
      salaries: "Yes",
    },
    {
      code: 1209,
      name: "Hardik Joshi",
      address: "Ahmedabad",
      mobile: "9876578901",
      speciality: "DNB",
      hospitalName: "Sterling Hospital",
      salaries: "Yes",
    },
    {
      code: 1210,
      name: "Nisha Chauhan",
      address: "Kalol",
      mobile: "9876589012",
      speciality: "NEURO",
      hospitalName: "Shalby Hospital",
      salaries: "No",
    },
    {
      code: 1211,
      name: "Sanjay Kumar",
      address: "Kadi",
      mobile: "9876590123",
      speciality: "MD",
      hospitalName: "Apollo Hospital",
      salaries: "Yes",
    },
    {
      code: 1212,
      name: "Tanvi Bhatt",
      address: "Dehgam",
      mobile: "9876601234",
      speciality: "DNB NEUROLOGY",
      hospitalName: "Civil Hospital",
      salaries: "Yes",
    },
    {
      code: 1213,
      name: "Rohit Patil",
      address: "Ahmedabad",
      mobile: "9876612345",
      speciality: "MS SUR",
      hospitalName: "Zydus Hospital",
      salaries: "No",
    },
    {
      code: 1214,
      name: "Vipul Kapoor",
      address: "Kalol",
      mobile: "9876623456",
      speciality: "MS",
      hospitalName: "Sterling Hospital",
      salaries: "Yes",
    },
    {
      code: 1215,
      name: "Deepak Nair",
      address: "Kadi",
      mobile: "9876634567",
      speciality: "DNB",
      hospitalName: "Apollo Hospital",
      salaries: "No",
    },
    {
      code: 1216,
      name: "Ankita Gupta",
      address: "Dehgam",
      mobile: "9876645678",
      speciality: "NEURO",
      hospitalName: "Civil Hospital",
      salaries: "Yes",
    },
    {
      code: 1217,
      name: "Mohit Kumar",
      address: "Ahmedabad",
      mobile: "9876656789",
      speciality: "MD",
      hospitalName: "Zydus Hospital",
      salaries: "Yes",
    },
    {
      code: 1218,
      name: "Sonali Jain",
      address: "Kalol",
      mobile: "9876667890",
      speciality: "DNB NEUROLOGY",
      hospitalName: "Shalby Hospital",
      salaries: "No",
    },
    {
      code: 1219,
      name: "Yash Thakur",
      address: "Kadi",
      mobile: "9876678901",
      speciality: "MS SUR",
      hospitalName: "Apollo Hospital",
      salaries: "Yes",
    },
    {
      code: 1220,
      name: "Pooja Sharma",
      address: "Dehgam",
      mobile: "9876689012",
      speciality: "MS",
      hospitalName: "Civil Hospital",
      salaries: "No",
    },
    {
      code: 1221,
      name: "Rajesh Mehta",
      address: "Ahmedabad",
      mobile: "9876690123",
      speciality: "DNB",
      hospitalName: "Sterling Hospital",
      salaries: "Yes",
    },
    {
      code: 1222,
      name: "Kiran Patel",
      address: "Kalol",
      mobile: "9876701234",
      speciality: "NEURO",
      hospitalName: "Apollo Hospital",
      salaries: "Yes",
    },
    {
      code: 1223,
      name: "Harsh Vora",
      address: "Kadi",
      mobile: "9876712345",
      speciality: "MD",
      hospitalName: "Shalby Hospital",
      salaries: "No",
    },
    {
      code: 1224,
      name: "Divya Joshi",
      address: "Dehgam",
      mobile: "9876723456",
      speciality: "DNB NEUROLOGY",
      hospitalName: "Zydus Hospital",
      salaries: "Yes",
    },
    {
      code: 1225,
      name: "Manoj Rathod",
      address: "Ahmedabad",
      mobile: "9876734567",
      speciality: "MS SUR",
      hospitalName: "Civil Hospital",
      salaries: "Yes",
    },
    {
      code: 1226,
      name: "Seema Trivedi",
      address: "Kalol",
      mobile: "9876745678",
      speciality: "MS",
      hospitalName: "Apollo Hospital",
      salaries: "No",
    },
    {
      code: 1227,
      name: "Arjun Rawat",
      address: "Kadi",
      mobile: "9876756789",
      speciality: "DNB",
      hospitalName: "Sterling Hospital",
      salaries: "Yes",
    },
    {
      code: 1228,
      name: "Ritika Shah",
      address: "Dehgam",
      mobile: "9876767890",
      speciality: "NEURO",
      hospitalName: "Shalby Hospital",
      salaries: "Yes",
    },
    {
      code: 1229,
      name: "Gaurav Pandey",
      address: "Ahmedabad",
      mobile: "9876778901",
      speciality: "MD",
      hospitalName: "Civil Hospital",
      salaries: "No",
    },
    {
      code: 1230,
      name: "Shruti Bhatt",
      address: "Kalol",
      mobile: "9876789012",
      speciality: "DNB NEUROLOGY",
      hospitalName: "Zydus Hospital",
      salaries: "Yes",
    },
    {
      code: 1231,
      name: "Jignesh Parmar",
      address: "Kadi",
      mobile: "9876790123",
      speciality: "MS SUR",
      hospitalName: "Apollo Hospital",
      salaries: "Yes",
    },
    {
      code: 1232,
      name: "Ramesh Solanki",
      address: "Dehgam",
      mobile: "9876801234",
      speciality: "MS",
      hospitalName: "Sterling Hospital",
      salaries: "No",
    },
    {
      code: 1233,
      name: "Payal Desai",
      address: "Ahmedabad",
      mobile: "9876812345",
      speciality: "DNB",
      hospitalName: "Civil Hospital",
      salaries: "Yes",
    },
    {
      code: 1234,
      name: "Krunal Thakor",
      address: "Kalol",
      mobile: "9876823456",
      speciality: "NEURO",
      hospitalName: "Zydus Hospital",
      salaries: "Yes",
    },
    {
      code: 1235,
      name: "Mehul Prajapati",
      address: "Kadi",
      mobile: "9876834567",
      speciality: "MD",
      hospitalName: "Apollo Hospital",
      salaries: "No",
    },
    {
      code: 1236,
      name: "Bhavna Raval",
      address: "Dehgam",
      mobile: "9876845678",
      speciality: "DNB NEUROLOGY",
      hospitalName: "Sterling Hospital",
      salaries: "Yes",
    },
    {
      code: 1237,
      name: "Ankit Thakur",
      address: "Ahmedabad",
      mobile: "9876856789",
      speciality: "MS SUR",
      hospitalName: "Shalby Hospital",
      salaries: "Yes",
    },
    {
      code: 1238,
      name: "Komal Vyas",
      address: "Kalol",
      mobile: "9876867890",
      speciality: "MS",
      hospitalName: "Civil Hospital",
      salaries: "No",
    },
    {
      code: 1239,
      name: "Dhruv Shah",
      address: "Kadi",
      mobile: "9876878901",
      speciality: "DNB",
      hospitalName: "Zydus Hospital",
      salaries: "Yes",
    },
    {
      code: 1240,
      name: "Sneha Patel",
      address: "Dehgam",
      mobile: "9876889012",
      speciality: "NEURO",
      hospitalName: "Sterling Hospital",
      salaries: "Yes",
    },
    {
      code: 1241,
      name: "Parth Rana",
      address: "Ahmedabad",
      mobile: "9876890123",
      speciality: "MD",
      hospitalName: "Apollo Hospital",
      salaries: "No",
    },
    {
      code: 1242,
      name: "Nidhi Chauhan",
      address: "Kalol",
      mobile: "9876901234",
      speciality: "DNB NEUROLOGY",
      hospitalName: "Civil Hospital",
      salaries: "Yes",
    },
    {
      code: 1243,
      name: "Aman Kapoor",
      address: "Kadi",
      mobile: "9876912345",
      speciality: "MS SUR",
      hospitalName: "Zydus Hospital",
      salaries: "Yes",
    },
    {
      code: 1244,
      name: "Hina Patel",
      address: "Dehgam",
      mobile: "9876923456",
      speciality: "MS",
      hospitalName: "Shalby Hospital",
      salaries: "No",
    },
    {
      code: 1245,
      name: "Raj Thakkar",
      address: "Ahmedabad",
      mobile: "9876934567",
      speciality: "DNB",
      hospitalName: "Apollo Hospital",
      salaries: "Yes",
    },
    {
      code: 1246,
      name: "Simran Arora",
      address: "Kalol",
      mobile: "9876945678",
      speciality: "NEURO",
      hospitalName: "Sterling Hospital",
      salaries: "Yes",
    },
    {
      code: 1247,
      name: "Ashish Jain",
      address: "Kadi",
      mobile: "9876956789",
      speciality: "MD",
      hospitalName: "Civil Hospital",
      salaries: "No",
    },
    {
      code: 1248,
      name: "Kajal Sharma",
      address: "Dehgam",
      mobile: "9876967890",
      speciality: "DNB NEUROLOGY",
      hospitalName: "Zydus Hospital",
      salaries: "Yes",
    },
    {
      code: 1249,
      name: "Manish Vora",
      address: "Ahmedabad",
      mobile: "9876978901",
      speciality: "MS SUR",
      hospitalName: "Apollo Hospital",
      salaries: "Yes",
    },
    {
      code: 1250,
      name: "Pankaj Patel",
      address: "Kalol",
      mobile: "9876989012",
      speciality: "MS",
      hospitalName: "Sterling Hospital",
      salaries: "No",
    },
    {
      code: 1251,
      name: "Varun Sharma",
      address: "Kadi",
      mobile: "9876990123",
      speciality: "DNB",
      hospitalName: "Civil Hospital",
      salaries: "Yes",
    },
    {
      code: 1252,
      name: "Anjali Desai",
      address: "Dehgam",
      mobile: "9876001234",
      speciality: "NEURO",
      hospitalName: "Zydus Hospital",
      salaries: "Yes",
    },
    {
      code: 1253,
      name: "Kunal Mehta",
      address: "Ahmedabad",
      mobile: "9876012345",
      speciality: "MD",
      hospitalName: "Apollo Hospital",
      salaries: "No",
    },
    {
      code: 1254,
      name: "Rekha Solanki",
      address: "Kalol",
      mobile: "9876023456",
      speciality: "DNB NEUROLOGY",
      hospitalName: "Shalby Hospital",
      salaries: "Yes",
    },
    {
      code: 1255,
      name: "Mitesh Rana",
      address: "Kadi",
      mobile: "9876034567",
      speciality: "MS SUR",
      hospitalName: "Civil Hospital",
      salaries: "Yes",
    },
    {
      code: 1256,
      name: "Alka Joshi",
      address: "Dehgam",
      mobile: "9876045678",
      speciality: "MS",
      hospitalName: "Sterling Hospital",
      salaries: "No",
    },
    {
      code: 1257,
      name: "Chirag Patel",
      address: "Ahmedabad",
      mobile: "9876056789",
      speciality: "DNB",
      hospitalName: "Apollo Hospital",
      salaries: "Yes",
    },
    {
      code: 1258,
      name: "Snehal Shah",
      address: "Kalol",
      mobile: "9876067890",
      speciality: "NEURO",
      hospitalName: "Civil Hospital",
      salaries: "Yes",
    },
    {
      code: 1259,
      name: "Tejas Trivedi",
      address: "Kadi",
      mobile: "9876078901",
      speciality: "MD",
      hospitalName: "Zydus Hospital",
      salaries: "No",
    },
    {
      code: 1260,
      name: "Rupal Thakor",
      address: "Dehgam",
      mobile: "9876089012",
      speciality: "DNB NEUROLOGY",
      hospitalName: "Shalby Hospital",
      salaries: "Yes",
    },
  ];

  // --- Pagination States ---
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(50); // default rows per page

  // --- Logic for Pagination ---
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = doctors.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(doctors.length / rowsPerPage);

  const handleDoctorMasterCreate = () => {
    navigate("/master/doctormaster/create");
  };

  return (
    <>
      <div className="w-auto h-auto bg-white rounded-md shadow-xl overflow-y-auto flex flex-col">
        <p className="p-4 font-semibold text-xl text-[#5d596c] ">
          Directory Master Informations
        </p>
        <div className="text-end mr-5">
          <button
            className="bg-[#7367f0] text-white font-medium p-2 rounded-lg cursor-pointer hover:bg-[#5b4ed3]"
            onClick={handleDoctorMasterCreate}
          >
            + Add New Directory Master
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
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="500">500</option>
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

        <div className="h-[68vh] overflow-y-auto">
          <table className="w-full text-start border border-gray-200 mt-3">
            <thead className="bg-[#4B4B4B] text-sm text-white">
              <tr className="border-b border-gray-200">
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  #
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Name
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Address
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Mobile
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Speciality
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Hospital Name
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Salaries
                </th>
                <th className="py-2 px-4">Actions</th>
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
                    {acc.name}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.address}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.mobile}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.speciality}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.hospitalName}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.salaries}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200 flex justify-center gap-1">
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
            {Math.min(indexOfLastRow, doctors.length)} of {doctors.length}{" "}
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

export default DoctorMaster;
