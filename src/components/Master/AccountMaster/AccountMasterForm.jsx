import { useNavigate } from "react-router-dom";

const AccountMasterForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-auto h-auto p-6 min-h-screen bg-white  border border-gray-100 rounded-md shadow-md">
        <h1 className="text-xl font-semibold text-gray-700 mb-4">
          Account Master
        </h1>

        <div className="space-y-4">
          {/* Row 1: Code and Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                id="code"
                type="text"
                placeholder="Enter the code"
                className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="code"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Code
              </label>
            </div>

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
                Name*
              </label>
            </div>
          </div>

          {/* Row 2: Email and Phone */}
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
                id="phone"
                type="tel"
                placeholder="Enter the phone number"
                className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="phone"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Phone
              </label>
            </div>
          </div>

          {/* Row 3: City and Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <select
                id="city"
                className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="">--Select the city--</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="ahmedabad">Ahmedabad</option>
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

            <div className="relative">
              <select
                id="area"
                className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="">--Select the area--</option>
                <option value="north">North</option>
                <option value="south">South</option>
                <option value="east">East</option>
                <option value="west">West</option>
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
          </div>

          {/* Row 4: Address */}
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

          {/* Row 5: Message */}
          <div className="relative">
            <textarea
              id="message"
              placeholder="Enter the message"
              rows="2"
              className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent resize-none"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
            >
              Message
            </label>
          </div>

          {/* Row 6: Remark */}
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
        <div className="border-b border-gray-300 mt-2"></div>

        <h6 className="font-semibold text-gray-700 mt-2">Account Detail</h6>

        <div className="space-y-4 mt-3">
          <div className="relative">
            <select
              id="accountGroup"
              placeholder="Select Account Group"
              className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
            >
              <option value="">--Select Account Group--</option>
            </select>
            <label
              htmlFor="city"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
            >
              Account Group*
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <select
                id="accountType"
                placeholder="Select the account type"
                className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="">--Select the account type--</option>
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
              </select>
              <label
                htmlFor="type"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Type
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
                id="openingBalance"
                type="text"
                placeholder="Enter the opening balance"
                className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="openingBalance"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Opening Balance
              </label>
            </div>{" "}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <select
                id="paymentType"
                placeholder="Select the payment type"
                className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="">--Select the payment type--</option>
              </select>
              <label
                htmlFor="paymentType"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Payment Type
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
                id="paymentTerms"
                placeholder="Select the payment terms"
                className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="">--Select the payment terms--</option>
              </select>
              <label
                htmlFor="paymentTerms"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Payment Terms
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
                id="bankName"
                placeholder="Select the bank name"
                className="w-full px-4 py-1 bg-white border border-gray-300 rounded text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="">--Select the bank name--</option>
                <option value="sbi">SBI</option>
                <option value="kotak">Kotak</option>
              </select>
              <label
                htmlFor="bankName"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Bank Name
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
                id="accountNo"
                type="text"
                placeholder="Enter the account no"
                className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="accountNo"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Account No
              </label>
            </div>{" "}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                id="panNo"
                type="text"
                placeholder="Enter the pan no"
                className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="panNo"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Pan No
              </label>
            </div>
            <div className="relative">
              <input
                id="gstNo"
                type="text"
                placeholder="Enter the gst no"
                className="w-full h-8 px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7367f0] focus:border-transparent peer"
              />
              <label
                htmlFor="gstNo"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Gst No
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

export default AccountMasterForm;
