import { FaEye, FaTrash } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import { useNavigate } from "react-router";

const AccountGroup = () => {
  const navigate = useNavigate();
  const handleAccountGroupCreate = () => {
    console.log("Account Group Create");
    navigate("/master/accountgroup/create");
  };
  const group = [];
  return (
    <>
      <div className="w-auto h-auto bg-white rounded-md shadow-xl overflow-y-auto flex flex-col">
        <p className="p-4 font-semibold text-xl text-[#5d596c] ">
          Account Group Informations
        </p>
        <div className="text-end mr-5">
          <button
            className="bg-[#7367f0] text-white font-medium p-2 rounded-lg cursor-pointer hover:bg-[#5b4ed3]"
            onClick={handleAccountGroupCreate}
          >
            + Add New Account Group
          </button>
        </div>

        <div className="flex items-center justify-between p-4">
          <div className="flex flex-row gap-3">
            <span className="mt-1">Show</span>
            <select
              name="entry"
              id="entry"
              className="border border-gray-300 focus:outline-0 focus:border-[#7367f0] rounded-md p-1"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
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

        <table className="w-full text-start  border border-gray-200">
          <thead className="bg-gray-100 text-gray-500">
            <tr className="border-b border-gray-200">
              <th className="py-2 px-2 text-start">Group Name</th>
              <th className="py-2 px-2 text-start">Group</th>
              <th className="py-2 px-2 text-start">Sequence</th>
              <th className="py-2 px-2">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-600">
            {group.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-1 text-gray-500">
                  Data not available in table
                </td>
              </tr>
            ) : (
              group.map((acc, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-2 px-4">{acc.name}</td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4 flex justify-center gap-1">
                    <button className="text-white bg-blue-500 hover:bg-blue-600 w-7 h-7 flex items-center justify-center rounded">
                      <TiPencil />
                    </button>
                    <button className="text-white bg-green-500 hover:bg-green-600 w-7 h-7 flex items-center justify-center rounded">
                      <FaEye />
                    </button>
                    <button className="text-white bg-red-500 hover:bg-red-600 w-7 h-7 flex items-center justify-center rounded">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="flex items-center justify-between p-3">
          <div className="text-gray-400">
            <span className="">Showing 1 to 10 of {group.length} entries</span>
          </div>{" "}
          <div className="flex items-center justify-end gap-1 space-x-1">
            <button className="text-gray-400 bg-gray-200 rounded-md p-[4px] cursor-pointer">
              Previous
            </button>
            <button className="bg-[#7367f0] w-8 h-8 text-white p-[4px] rounded-md cursor-pointer hover:bg-[#5b4ed3]">
              1
            </button>
            <button className="text-gray-400 bg-gray-200 rounded-md p-[4px] cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountGroup;
