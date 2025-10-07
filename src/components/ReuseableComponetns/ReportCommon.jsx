import React, { useState } from "react";
const ReportCommon = () => {
  const today = new Date().toISOString().split("T")[0];
  const [fromDate, setFromDate] = useState(today);
  const [toDate, setToDate] = useState(today);

  const handleSearch = () => {
    console.log("Searching for range:", fromDate, "to", toDate);
  };

  const handleClear = () => {
    setFromDate("");
    setToDate("");
  };

  const handleExport = () => {
    console.log("Exporting data for range:", fromDate, "to", toDate);
  };
  return (
    <>
      {" "}
      <div className="pl-4 font-semibold text-xl text-[#5d596c]">
        Search Filter
      </div>
      <div className="p-4 py-3 font-sans bg-white rounded-lg flex flex-row items-center justify-start gap-3">
        <div className="flex gap-5 w-[55%]">
          <div className="flex-1">
            <label
              htmlFor="from-date"
              className="block mb-1.5 text-sm font-medium text-gray-700"
            >
              From Date
            </label>
            <div className="relative flex items-center">
              <input
                id="from-date"
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full pr-5 pl-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
          </div>

          <div className="flex-1">
            <label
              htmlFor="to-date"
              className="block mb-1.5 text-sm font-medium text-gray-700"
            >
              To Date
            </label>
            <div className="relative flex items-center">
              <input
                id="to-date"
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full pr-5 pl-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2.5 mt-6 justify-end">
          <button
            className="px-5 py-2.5 bg-green-500 text-white rounded font-medium text-sm hover:bg-green-600 transition-colors"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="px-5 py-2.5 bg-green-500 text-white  rounded font-medium text-sm hover:bg-green-600 transition-colors"
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            className="px-5 py-2.5 bg-green-500 text-white  rounded font-medium text-sm hover:bg-green-600 transition-colors"
            onClick={handleExport}
          >
            Export
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between pl-4 pr-5 py-3">
        <div className="flex flex-row gap-3">
          <span className="mt-1">Show</span>
          <select
            name="entry"
            id="entry"
            className="border border-gray-300 focus:outline-0 focus:border-[#7367f0] rounded-md p-1"
          >
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
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
    </>
  );
};

export default ReportCommon;
