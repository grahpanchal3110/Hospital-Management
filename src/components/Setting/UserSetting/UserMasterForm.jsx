import { useNavigate } from "react-router";

const UserMasterForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-auto h-auto p-6 bg-white  border border-gray-100 rounded-md shadow-md">
        <h1 className="text-xl font-semibold text-gray-700 mb-4">
          User Master
        </h1>

        <div className="space-y-6">
          {/* Row 1: Code and Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                id="name"
                type="text"
                placeholder="Enter the name"
                className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="name"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                User Name*
              </label>
            </div>

            <div className="relative">
              <select
                id="userGroup"
                className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="selectanyone">--Select--</option>
                <option value="doctor">Doctor</option>
                <option value="receptionist">Receptionist</option>
              </select>
              <label
                htmlFor="userGroup"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                User Group*
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                id="password"
                type="password"
                placeholder="Enter the password"
                className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="password"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Password*
              </label>
            </div>

            <div className="relative">
              <input
                id="confirmPassword"
                type="password"
                placeholder="Enter the confirm password"
                className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="confirmPassword"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Confirm Password*
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                id="phoneNumber"
                type="text"
                placeholder="Enter the phone number"
                className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="phoneNumber"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Phone number*
              </label>
            </div>

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
                Email*
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <select
                id="collection"
                className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="selectanyone">Select any one</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label
                htmlFor="collection"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Collection*
              </label>
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
      </div>
    </>
  );
};

export default UserMasterForm;
