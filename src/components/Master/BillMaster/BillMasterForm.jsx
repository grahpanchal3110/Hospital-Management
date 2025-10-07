import { useNavigate } from "react-router";

const BillMasterForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-auto h-auto p-6 bg-white  border border-gray-100 rounded-md shadow-md">
        <h1 className="text-xl font-semibold text-gray-700 mb-4">
          Add Bill Master
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
                id="billCode"
                type="text"
                placeholder="Enter the code"
                className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="billCode"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Bill Code*
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  id="rate"
                  type="text"
                  placeholder="Enter the rate"
                  className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="rate"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Rate
                </label>
              </div>

              <div className="relative">
                <input
                  id="rate2"
                  type="text"
                  placeholder="Enter the rate2"
                  className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="rate2"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Rate2
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  id="rate3"
                  type="text"
                  placeholder="Enter the rate3"
                  className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="rate3"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Rate3
                </label>
              </div>

              <div className="relative">
                <input
                  id="unit"
                  type="text"
                  placeholder="Enter the unit"
                  className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
                />
                <label
                  htmlFor="unit"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
                >
                  Unit
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <select
                id="gstTaxType"
                className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="notApplicable">Not Applicable</option>
                <option value="exemted">Exemted</option>
                <option value="nilRated">NilRated</option>
                <option value="taxable">Taxable</option>
                <option value="nonGst">Non-GST</option>
              </select>
              <label
                htmlFor="gstTaxType"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                GST Tax Type
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
                id="gst"
                type="text"
                placeholder="Enter the gst"
                className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="gst"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                GST
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <select
                id="billingGroup"
                placeholder="Enter the billing group"
                className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="notApplicable">Select For Billing Group</option>
                <option value="exemted">CT Scan</option>
                <option value="nilRated">MammoGraphy</option>
                <option value="taxable">MRI</option>
                <option value="nonGst">SonoGraphy</option>
                <option value="nonGst">X-Ray</option>
              </select>
              <label
                htmlFor="billingGroup"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Billing Group
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

            <div className="relative flex items-center  gap-2">
              <label
                htmlFor="gst"
                className="bg-white px-1 text-sm text-gray-600"
              >
                Status
              </label>
              <input
                id="gst"
                type="checkbox"
                className="rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:border-transparent peer"
              />
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

export default BillMasterForm;
