import { useState } from "react";
import { useNavigate } from "react-router";

const ReceptionForm = () => {
  const navigate = useNavigate();

  const [rows, setRows] = useState([
    { id: 1, examination: "", test: "", amount: "" },
  ]);

  const handleAddRow = () => {
    const newId = rows.length + 1;
    setRows([...rows, { id: newId, examination: "", test: "", amount: "" }]);
  };

  const handleChange = (id, field, value) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const handleRemoveRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  // Example options for selects
  const examinationOptions = [
    "--Selected--",
    "CT-Scan",
    "MammoGraphy",
    "X-Ray",
    "MRI",
    "Sonography",
  ];
  const testOptions = [
    "--Select--",
    "BRAIN PLAIN",
    "ABDOMEN",
    "KUB",
    "PELVIS",
    "LOCAL PART",
    "TVS",
    "2D ECHO",
  ];

  const [rows2, setRows2] = useState([
    { id: 1, mode: "", amount: "", date: "2025-10-07", remarks: "" },
  ]);

  const handleAddRow2 = () => {
    const newId = rows2.length + 1;
    setRows2([
      ...rows2,
      { id: newId, mode: "", amount: "", date: "2025-10-07", remarks: "" },
    ]);
  };

  const handleChange2 = (id, field, value) => {
    setRows2(
      rows2.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const handleRemoveRow2 = (id) => {
    setRows2(rows2.filter((row) => row.id !== id));
  };

  const modeOptions = ["--Select--", "Cash", "Card", "Online", "Cheque"];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-auto h-auto p-6 bg-white  border border-gray-100 rounded-md shadow-md">
          <div className="space-y-4">
            {/* Row 1: Code and Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  id="patientName"
                  type="text"
                  placeholder="Enter the patient name"
                  className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="patientName"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Patient Name*
                </label>
              </div>

              <div className="relative">
                <input
                  id="mobileNumber"
                  type="text"
                  placeholder="Enter the phone number"
                  className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="mobileNumber"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Mobile No.*
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="address"
                placeholder="Enter the address"
                rows="2"
                className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent resize-none"
              ></textarea>
              <label
                htmlFor="address"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Address*
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <input
                  id="age"
                  type="text"
                  placeholder="Enter the age"
                  className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="age"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Age*
                </label>
              </div>

              <div className="relative">
                <input
                  id="month"
                  type="text"
                  placeholder="Enter the month"
                  className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="month"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Month
                </label>
              </div>

              <div className="relative">
                <select
                  id="marketingPerson"
                  className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">--Select--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                </select>
                <label
                  htmlFor="marketingPerson"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Sex*
                </label>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-auto h-auto p-6 bg-white  border border-gray-100 rounded-md shadow-md">
          <div className="space-y-4">
            {/* Row 1: Code and Name */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <input
                  id="date"
                  type="date"
                  className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="date"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Date
                </label>
              </div>

              <div className="relative">
                <input
                  id="examinationNo"
                  type="text"
                  placeholder="Enter the examination no"
                  disabled
                  className="w-full h-8 px-3 py-3 bg-gray-200 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="examinationNo"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Examination No
                </label>
              </div>

              <div className="relative">
                <input
                  id="arrivalTime"
                  type="text"
                  disabled
                  className="w-full h-8 px-3 py-3 bg-gray-200 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="arrivalTime"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Arrival Time
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <input
                  id="hospitalName"
                  type="text"
                  placeholder="Enter the hospital name"
                  disabled
                  className="w-full h-8 px-3 py-3 bg-gray-200 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="hospitalName"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Hospital Name
                </label>
              </div>

              <div className="relative">
                <select
                  id="refByDoctor"
                  className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">--Select--</option>
                  <option value="ajay">Ajay</option>
                  <option value="rohit">Rohit</option>
                  <option value="virat">Virat</option>
                  <option value="abhishek">Abhishek</option>
                </select>
                <label
                  htmlFor="refByDoctor"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Ref By Doctor*
                </label>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <input
                  id="mobileNo"
                  type="text"
                  disabled
                  placeholder="Enter the mobile no"
                  className="w-full h-8 px-3 py-3 bg-gray-200 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="mobileNo"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Mobile No.
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <select
                  id="marketingPerson"
                  className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">--Select--</option>
                  <option value="ranjithShah">RANJITH SHAH</option>
                </select>
                <label
                  htmlFor="marketingPerson"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Marketing Person
                </label>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <input
                  id="remarks"
                  type="text"
                  placeholder="Enter the remarks"
                  className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="remarks"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Remarks
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
        <div className="w-auto h-auto p-6 bg-white  border border-gray-100 rounded-md shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Examination
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Test
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rows.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.id}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <select
                        value={row.examination}
                        onChange={(e) =>
                          handleChange(row.id, "examination", e.target.value)
                        }
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7367f0] focus:border-[#7367f0] sm:text-sm bg-white text-gray-900"
                      >
                        {examinationOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">
                      <select
                        value={row.test}
                        onChange={(e) =>
                          handleChange(row.id, "test", e.target.value)
                        }
                        className="block w-full px-1 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7367f0] focus:border-[#7367f0] sm:text-sm bg-white text-gray-900"
                      >
                        {testOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        value={row.amount}
                        onChange={(e) =>
                          handleChange(row.id, "amount", e.target.value)
                        }
                        placeholder="Amount"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7367f0] focus:border-[#7367f0] sm:text-sm bg-white text-gray-900"
                      />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium flex flex-row gap-2">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleRemoveRow(row.id)}
                          className="text-white  bg-[#dd7070] hover:bg-[#f3574c] w-8 h-8 inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md focus:outline-none"
                          disabled={rows.length === 1}
                        >
                          ×
                        </button>
                      </div>
                      <button
                        onClick={handleAddRow}
                        className="w-8 h-8 inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#7367f0] hover:bg-purple-700"
                      >
                        +
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-auto h-auto p-6 bg-white  border border-gray-100 rounded-md shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mode
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Remarks
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rows2.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.id}
                    </td>
                    <td className="py-4 whitespace-nowrap">
                      <select
                        value={row.mode}
                        onChange={(e) =>
                          handleChange2(row.id, "mode", e.target.value)
                        }
                        className="block py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7367f0] focus:border-[#7367f0] sm:text-sm bg-white text-gray-900"
                      >
                        {modeOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        value={row.amount}
                        onChange={(e) =>
                          handleChange2(row.id, "amount", e.target.value)
                        }
                        placeholder="Amount"
                        className="block w-[100%] px-1 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7367f0] focus:border-[#7367f0] sm:text-sm bg-white text-gray-900"
                      />
                    </td>
                    <td className="py-4 whitespace-nowrap">
                      <div className="relative">
                        <input
                          type="date"
                          value={row.date}
                          onChange={(e) =>
                            handleChange2(row.id, "date", e.target.value)
                          }
                          className="block px-1 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7367f0] focus:border-[#7367f0] sm:text-sm bg-white text-gray-900"
                        />
                      </div>
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        value={row.remarks}
                        onChange={(e) =>
                          handleChange2(row.id, "remarks", e.target.value)
                        }
                        placeholder="Remark"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7367f0] focus:border-[#7367f0] sm:text-sm bg-white text-gray-900"
                      />
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap text-sm font-medium flex flex-row gap-2">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleRemoveRow2(row.id)}
                          className="text-white  bg-[#dd7070] hover:bg-[#f3574c] w-8 h-8 inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md focus:outline-none"
                          disabled={rows2.length === 1}
                        >
                          ×
                        </button>
                      </div>
                      <button
                        onClick={handleAddRow2}
                        className="w-8 h-8 inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#7367f0] hover:bg-purple-700 focus:outline-none"
                      >
                        +
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="w-auto h-auto mt-10">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <input
                id="totalAmount"
                type="text"
                disabled
                placeholder="Enter the total amount"
                className="w-full h-8 px-3 py-3 bg-gray-200 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="totalAmount"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Total Amount
              </label>
            </div>

            <div className="relative">
              <input
                id="totalPaid"
                type="text"
                placeholder="Enter the total paid"
                disabled
                className="w-full h-8 px-3 py-3 bg-gray-200 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="totalPaid"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Total Paid
              </label>
            </div>

            <div className="relative">
              <input
                id="totalDue"
                type="text"
                disabled
                className="w-full h-8 px-3 py-3 bg-gray-200 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="totalDue"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Total Due
              </label>
            </div>
            <div className="relative">
              <input
                id="securityCode"
                type="text"
                placeholder="Enter the security code"
                className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="securityCode"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Security Code
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-4">
        <button
          onClick={() => navigate(-1)}
          className="w-14 p-2 bg-[#7367f0] hover:bg-[#5b4ed3] text-white font-medium rounded-lg cursor-pointer"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-[#28c76f] text-[#fff] font-medium w-20 p-2 rounded-lg cursor-pointer hover:bg-[#1a9b56]"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default ReceptionForm;
