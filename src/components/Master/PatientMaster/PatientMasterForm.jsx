import { useState } from "react";
import { useNavigate } from "react-router";

const PatientMasterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gender: "male",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };
  return (
    <>
      <div className="w-auto h-auto p-4 bg-white  border border-gray-100 rounded-md shadow-md">
        <h2 className="font-semibold text-gray-700 mb-4">Patient Master</h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Row 1: Code and Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  id="caseNo"
                  type="text"
                  placeholder="Enter the case no"
                  disabled
                  className="w-full h-8 px-3 py-3 bg-gray-200 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="caseNo"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Case No
                </label>
              </div>

              <div className="relative">
                <input
                  id="refNo"
                  type="text"
                  placeholder="Enter the ref no"
                  disabled
                  className="w-full h-8 px-3 py-3 bg-gray-200 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="refNo"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Ref No
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative">
                <select
                  id="salutation"
                  className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">--Select the Salutation--</option>
                </select>
                <label
                  htmlFor="salutation"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Salutation*
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
                  id="firstName"
                  type="text"
                  placeholder="Enter the first name"
                  className="w-full h-8 px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="firstName"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  First Name*
                </label>
              </div>
              <div className="relative">
                <input
                  id="middleName"
                  type="text"
                  placeholder="Enter the middle name"
                  className="w-full h-8 px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="middleName"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Middle Name*
                </label>
              </div>
              <div className="relative">
                <input
                  id="surName"
                  type="text"
                  placeholder="Enter the sur name"
                  className="w-full h-8 px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="surName"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Sur Name*
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                id="patientName"
                type="text"
                placeholder="Enter the patient name"
                disabled
                className="w-full h-8 px-3 py-3 bg-gray-200 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="patientName"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Patient Name
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter the email"
                  className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <input
                  id="refNo"
                  type="file"
                  placeholder="Enter the ref no"
                  className="w-full h-8 px-3 py-1 bg-gray-100 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="refNo"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Upload Photo
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  id="telephoneNo"
                  type="text"
                  placeholder="Enter the telephone"
                  className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="telephoneNo"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Telephone No
                </label>
              </div>

              <div className="relative">
                <input
                  id="mobileNo"
                  type="text"
                  placeholder="Enter the mobile no"
                  className="w-full h-8 px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="mobileNo"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Mobile No
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-6">
                <label className="text-sm font-medium text-[#5d596c] cursor-pointer">
                  Gender:
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                      className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-none rounded-full cursor-pointer peer"
                    />
                    <span className="text-sm text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                      className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-none rounded-full cursor-pointer peer"
                    />
                    <span className="text-sm text-gray-700">Female</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      checked={formData.gender === "other"}
                      onChange={handleChange}
                      className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-none rounded-full cursor-pointer peer"
                    />
                    <span className="text-sm text-gray-700">Other</span>
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  id="firstVisitDate"
                  type="date"
                  className="w-full h-8 px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="firstVisitDate"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  First Vist Date
                </label>
              </div>
              <div className="relative">
                <select
                  id="referBy"
                  className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">--Select the Refer By--</option>
                  <option value="abhishekSharma">Abhishek Sharma</option>
                  <option value="rohitThakor">Rohit Thakor</option>
                  <option value="viratKohli">Virat Kohli</option>
                  <option value="anuragSharma">Anurag Sharma</option>
                  <option value="alpeshPatel">Alpesh Patel</option>
                  <option value="dilipPrajapati">Dilip Prajapati</option>
                  <option value="amulModi">Amul Modi</option>
                  <option value="arpitGajjar">Arpit Gajjar</option>
                </select>
                <label
                  htmlFor="referBy"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Refer By
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
                  Age
                </label>
              </div>

              <div className="relative mt-1">
                <input
                  id="trueBirthDate"
                  type="checkbox"
                  className=" bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none  focus:border-transparent peer"
                />
                <label
                  htmlFor="trueBirthDate"
                  className="absolute left-3  bg-white px-1 text-sm text-gray-600"
                >
                  True Birth Date
                </label>
              </div>

              <div className="relative">
                <input
                  id="birthDate"
                  type="text"
                  disabled
                  placeholder="Enter the birth date"
                  className="w-full h-8 px-3 py-3 bg-gray-200 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="birthDate"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Birth Date
                </label>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-300 mt-6"></div>

          <div className="space-y-4 mt-4">
            <h4 className="font-semibold text-[#5d596c] mb-4">
              Address Detail
            </h4>
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
                Address
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <select
                  id="state"
                  className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">--Select the state--</option>
                </select>
                <label
                  htmlFor="state"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  State
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
                <select
                  id="city"
                  className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">--Select the city--</option>
                </select>
                <label
                  htmlFor="city"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  City
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <select
                  id="area"
                  className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">--Select the area--</option>
                </select>
                <label
                  htmlFor="area"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Area
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
                  id="pincode"
                  type="text"
                  placeholder="Enter the pincode"
                  className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="pincode"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Pincode
                </label>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-300 mt-6"></div>

          <div className="space-y-4 mt-4">
            <h4 className="font-semibold text-[#5d596c] mb-4">Common Detail</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <select
                  id="occupation"
                  className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">--Select the occupation--</option>
                </select>
                <label
                  htmlFor="occupation"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Occupation
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
                <select
                  id="language"
                  className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">--Select the language--</option>
                </select>
                <label
                  htmlFor="language"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Language
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <select
                  id="religion"
                  className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">--Select the religion--</option>
                </select>
                <label
                  htmlFor="religion"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Religion
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
                <select
                  id="bloodGroup"
                  className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">--Select the blood group--</option>
                </select>
                <label
                  htmlFor="bloodGroup"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Blood Group
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <select
                  id="patientType"
                  className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">--Select the patient type--</option>
                </select>
                <label
                  htmlFor="patientType"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Patient Type
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
                <select
                  id="mediclaim"
                  className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">--Select the mediclaim--</option>
                </select>
                <label
                  htmlFor="mediclaim"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Mediclaim
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  id="policyNo"
                  type="text"
                  className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="policyNo"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Policy No
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="otherInfo"
                placeholder="Enter the other info"
                rows="2"
                className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent resize-none"
              ></textarea>
              <label
                htmlFor="otherInfo"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Other Info
              </label>
            </div>

            <div className="relative">
              <textarea
                id="remark"
                placeholder="Enter the remark"
                rows="2"
                className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent resize-none"
              ></textarea>
              <label
                htmlFor="remark"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Remark
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-3">
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
        </form>
      </div>
    </>
  );
};

export default PatientMasterForm;
