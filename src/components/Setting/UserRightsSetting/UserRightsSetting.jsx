import UserRightsData from "./UserRightsData.json";

const UserRightsSetting = () => {
  return (
    <>
      <div className="w-auto h-auto bg-white border border-gray-100 rounded-md shadow-xl/15 overflow-y-auto flex flex-col">
        <p className="p-4 font-semibold text-xl text-[#5d596c]">User Master</p>
        <div className="flex items-center justify-between p-2 mr-3">
          <div className="flex flex-row gap-3 ml-2 w-[25%]">
            <label
              htmlFor="examination"
              className="w-[60%] mt-2 text-sm font-medium text-gray-700"
            >
              Select User Role
            </label>
            <select
              id="role"
              // value={examination}
              // onChange={(e) => setExamination(e.target.value)}
              className="w-[63%] border border-gray-300 focus:outline-0 focus:border-[#7367f0] rounded-md justify-start p-2"
            >
              <option value="select">--Select--</option>
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
              <option value="Receptionist">Receptionist</option>
              <option value="Superadmin">Superadmin</option>
            </select>
          </div>
          <div className="flex flex-row gap-3">
            <button className="mt-1 bg-green-500 hover:bg-green-600 text-white font-medium p-2 rounded-lg cursor-pointer mr-32">
              Search
            </button>
          </div>
        </div>

        <div className="h-[80vh] overflow-y-auto">
          <table className="w-full text-start border border-gray-200 mt-3">
            <thead className="text-sm text-gray-500 bg-gray-100">
              <tr className="border-b border-gray-200">
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Type
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Menu
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Add
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  View
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Delete
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  Modify
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  DateChange
                </th>
                <th className="py-2 px-4 text-start  border-b border-r border-gray-200">
                  NextDayUpdate
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-600">
              {UserRightsData.map((acc, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.type}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    {acc.menu}
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    <input type="checkbox" defaultChecked />
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    <input type="checkbox" defaultChecked />
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    <input type="checkbox" defaultChecked />
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    <input type="checkbox" defaultChecked />
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    <input type="checkbox" defaultChecked />
                  </td>
                  <td className="py-2 px-4  border-b border-r border-gray-200">
                    <input type="checkbox" defaultChecked />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserRightsSetting;
