import { useNavigate } from "react-router";

const DoctorMasterForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-auto h-auto p-6 bg-white  border border-gray-100 rounded-md shadow-md">
        <h1 className="text-xl font-semibold text-gray-700 mb-4">
          Directory Master
        </h1>

        <div className="space-y-4">
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
                Name
              </label>
            </div>

            <div className="relative">
              <input
                id="hospitalName"
                type="text"
                placeholder="Enter the hospital name"
                className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="hospitalName"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Hospital Name
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                id="mobile"
                type="text"
                placeholder="Enter the mobile"
                className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="mobile"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Mobile
              </label>
            </div>

            <div className="relative">
              <input
                id="speciality"
                type="text"
                placeholder="Enter the speciality"
                className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="speciality"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Speciality
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div className="relative">
              <select
                id="salaries"
                className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="">--Select any one--</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label
                htmlFor="salaries"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Salaries
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

export default DoctorMasterForm;
