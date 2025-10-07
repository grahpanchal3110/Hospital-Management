import React from "react";

const OtherMaster = () => {
  return (
    <>
      {" "}
      <div className="w-auto h-[50vh] bg-white rounded-md shadow-lg overflow-y-auto flex flex-col p-3 mt-4">
        <p className="p-2 font-semibold text-xl text-[#5d596c] ">
          Other Master
        </p>
        <div className="border border-gray-300">
          <div className="grid grid-cols-4 divide-x divide-y divide-gray-300 text-center text-gray-600">
            <div className="p-4">Administration</div>
            <div className="p-4">Billing</div>
            <div className="p-4">Complains & Examinations</div>
            <div className="p-4">Death Case</div>

            <div className="p-4">Indoor Module</div>
            <div className="p-4">Investigation</div>
            <div className="p-4">Investment</div>
            <div className="p-4">Medicine</div>

            <div className="p-4">New Patient</div>
            <div className="p-4">OPD Screen</div>
            <div className="p-4">Operation</div>
            <div className="p-4">Other</div>

            <div className="p-4">Reception</div>
            <div className="p-4">Select Patient</div>
            <div className="p-4">Telephone Directory</div>
            <div className="p-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherMaster;
