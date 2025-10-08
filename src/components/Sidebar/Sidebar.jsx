import React, { useState } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { FiHome, FiChevronDown, FiChevronRight } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbBuildingHospital, TbLogout, TbReportMedical } from "react-icons/tb";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState("");
  const [activeSubmenu, setActiveSubmenu] = useState("");
  const MasterSubMenus = ["Dashboard"];
  const LogoutSubMenus = ["Logout"];
  const FrontOfficeSubMenus = ["Reception"];
  const DoctorSubMenus = ["Doctor View"];
  const AccountMasterSubMenus = [
    "Account Master",
    "Account Group",
    "Patient Master",
    "Other Master",
    "Bill Master",
    "SMS Master",
    "Doctor Master",
    "Marketing Master",
  ];
  const ReportSubMenus = [
    "DailyCollectionSummary",
    "DailyCollection",
    "PatientwiseStudy",
    "Payment Report",
    "Log Report",
  ];
  const SettingSubMenus = [
    "User Setting",
    "Group Setting",
    "User Rights Setting",
  ];

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? "" : menu));
    // agar same menu dubara click kare to close ho jaye
  };

  const handleDashboard = () => {
    navigate("/");
  };
  return (
    <>
      <div className="bg-white w-[20%] h-screen border-r border-gray-200 drop-shadow-2xl overflow-y-auto flex flex-col">
        <div className="sticky top-0 bg-white z-10">
          <div className="flex items-center px-4 py-3 border-b border-gray-200">
            <div
              className="bg-violet-400 p-3 rounded-full cursor-pointer"
              onClick={handleDashboard}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0-1.1-.9-2-2-2H6a2 2 0 100 4h4c1.1 0 2-.9 2-2zM18 13h-2a2 2 0 100 4h2a2 2 0 100-4z"
                />
              </svg>
            </div>
            <h2
              className="ml-3 text-2xl font-bold text-violet-400 cursor-pointer"
              onClick={handleDashboard}
            >
              Pramukh
            </h2>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
            <div className="bg-violet-400 text-white font-bold w-12 h-12 flex items-center justify-center rounded-full">
              S
            </div>
            <div className="text-violet-400 font-bold text-xl">
              Sparsh diagnostics
            </div>
          </div>
        </div>
        {/* Dashboard Menu */}
        <div className="px-4 mt-2">
          <button
            onClick={() => toggleMenu("dashboard")}
            className={`flex items-center justify-between text-gray-600 w-full px-3 py-2 rounded-lg cursor-pointer ${
              openMenu === "dashboard" ? "bg-gray-100" : "bg-gray-50"
            }`}
          >
            <span className="flex items-center space-x-2">
              <FiHome className="text-lg" />
              <span className="cursor-pointer">Dashboard</span>
            </span>
            {openMenu === "dashboard" ? (
              <FiChevronDown className="text-gray-500" />
            ) : (
              <FiChevronRight className="text-gray-500" />
            )}
          </button>

          {/* Submenu */}
          {openMenu === "dashboard" && (
            <div className="mt-2 space-y-4 text-gray-600 text-base font-semibold">
              {MasterSubMenus.map((item) => (
                <Link
                  key={item}
                  to="/dashboard"
                  onClick={() => setActiveSubmenu(item)}
                  className={`flex items-center space-x-2 text-sm py-2 w-full rounded-lg ${
                    activeSubmenu === item
                      ? "bg-gray-100 text-gray-600 "
                      : "bg-gray-50 text-gray-600"
                  }`}
                >
                  <span className="w-3 h-3 border-2 border-black-400 rounded-full ml-4" />
                  <span>{item}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* Master Menu */}
        <div className="px-4 mt-2">
          <button
            onClick={() => toggleMenu("master")}
            className={`flex items-center justify-between w-full px-3 py-2 cursor-pointer rounded-lg ${
              openMenu === "master"
                ? "bg-gray-100 text-violet-600"
                : "text-gray-600"
            }`}
          >
            <span className="flex items-center space-x-2">
              <FaRegBuilding className="text-lg" />
              <span>Master</span>
            </span>
            {openMenu === "master" ? (
              <FiChevronDown className="text-violet-600" />
            ) : (
              <FiChevronRight className="text-gray-500" />
            )}
          </button>

          {/* Submenu */}
          {openMenu === "master" && (
            <div className="mt-2 space-y-2 text-gray-600 text-base font-semibold">
              {AccountMasterSubMenus.map((item) => (
                <Link
                  key={item}
                  to={`/master/${item.replace(/\s+/g, "").toLowerCase()}`}
                  className={`flex items-center cursor-pointer space-x-2 text-sm py-2 w-full rounded-lg ${
                    activeSubmenu === item
                      ? "bg-violet-400 text-white"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveSubmenu(item)}
                >
                  <span className="w-3 h-3 border-2 border-black-400 rounded-full ml-4" />
                  <span>{item}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* Front Office */}
        <div className="px-4 mt-2">
          <button
            onClick={() => toggleMenu("frontOffice")}
            className={`flex items-center justify-between text-gray-600 w-full px-3 py-2 rounded-lg cursor-pointer ${
              openMenu === "frontOffice" ? "bg-gray-100" : "bg-gray-50"
            }`}
          >
            <span className="flex items-center space-x-2">
              <FaRegBuilding className="text-lg" />
              <span className="cursor-pointer">Front Office</span>
            </span>
            {openMenu === "frontOffice" ? (
              <FiChevronDown className="text-gray-500" />
            ) : (
              <FiChevronRight className="text-gray-500" />
            )}
          </button>

          {/* Submenu */}
          {openMenu === "frontOffice" && (
            <div className="mt-2 space-y-4 text-gray-600 text-base font-semibold">
              {FrontOfficeSubMenus.map((item) => (
                <Link
                  key={item}
                  to={`/frontOffice/${item.replace(/\s+/g, "").toLowerCase()}`}
                  onClick={() => setActiveSubmenu(item)}
                  className={`flex items-center cursor-pointer space-x-2 text-sm py-2 w-full rounded-lg ${
                    activeSubmenu === item
                      ? "bg-violet-400 text-white"
                      : "text-gray-600"
                  }`}
                >
                  <span className="w-3 h-3 border-2 border-black-400 rounded-full ml-4" />
                  <span>{item}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* Doctor Master*/}{" "}
        <div className="px-4 mt-2">
          <button
            onClick={() => toggleMenu("doctorview")}
            className={`flex items-center justify-between text-gray-600 w-full px-3 py-2 rounded-lg cursor-pointer ${
              openMenu === "doctorview" ? "bg-gray-100" : "bg-gray-50"
            }`}
          >
            <span className="flex items-center space-x-2">
              <TbBuildingHospital className="text-lg" />
              <span className="cursor-pointer">Doctor</span>
            </span>
            {openMenu === "doctorview" ? (
              <FiChevronDown className="text-gray-500" />
            ) : (
              <FiChevronRight className="text-gray-500" />
            )}
          </button>

          {/* Submenu */}
          {openMenu === "doctorview" && (
            <div className="mt-2 space-y-4 text-gray-600 text-base font-semibold">
              {DoctorSubMenus.map((item) => (
                <Link
                  key={item}
                  to={`/doctor/${item.replace(/\s+/g, "").toLowerCase()}`}
                  onClick={() => setActiveSubmenu(item)}
                  className={`flex items-center space-x-2 text-sm py-2 w-full rounded-lg ${
                    activeSubmenu === item
                      ? "bg-gray-100 text-gray-600 "
                      : "bg-gray-50 text-gray-600"
                  }`}
                >
                  <span className="w-3 h-3 border-2 border-black-400 rounded-full ml-4" />
                  <span>{item}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* Report Menu */}
        <div className="px-4 mt-2">
          <button
            onClick={() => toggleMenu("report")}
            className={`flex items-center justify-between w-full px-3 py-2 cursor-pointer rounded-lg ${
              openMenu === "report"
                ? "bg-gray-100 text-violet-600 font-medium"
                : "text-gray-600"
            }`}
          >
            <span className="flex items-center space-x-2">
              <TbReportMedical className="text-lg" />
              <span>Report</span>
            </span>
            {openMenu === "report" ? (
              <FiChevronDown className="text-violet-600" />
            ) : (
              <FiChevronRight className="text-gray-500" />
            )}
          </button>

          {/* Submenu */}
          {openMenu === "report" && (
            <div className="mt-2 space-y-2 text-gray-600 text-base font-semibold">
              {ReportSubMenus.map((item) => (
                <Link
                  key={item}
                  to={`/report/${item.replace(/\s+/g, "").toLowerCase()}`}
                  onClick={() => setActiveSubmenu(item)}
                  className={`flex items-center cursor-pointer space-x-2 text-sm py-2 w-full rounded-lg ${
                    activeSubmenu === item
                      ? "bg-violet-400 text-white"
                      : "text-gray-600"
                  }`}
                >
                  <span className="w-3 h-3 border-2 border-black-400 rounded-full ml-4" />
                  <span>{item}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* Setting Menu */}
        <div className="px-4 mt-2">
          <button
            onClick={() => toggleMenu("setting")}
            className={`flex items-center justify-between text-gray-600 w-full px-3 py-2 rounded-lg cursor-pointer ${
              openMenu === "setting" ? "bg-gray-100" : "bg-gray-50"
            }`}
          >
            <span className="flex items-center space-x-2">
              <IoSettingsOutline className="text-lg" />
              <span className="cursor-pointer">setting</span>
            </span>
            {openMenu === "setting" ? (
              <FiChevronDown className="text-gray-500" />
            ) : (
              <FiChevronRight className="text-gray-500" />
            )}
          </button>

          {/* Submenu */}
          {openMenu === "setting" && (
            <div className="mt-2 space-y-4 text-gray-600 text-base font-semibold">
              {SettingSubMenus.map((item) => (
                <Link
                  key={item}
                  to={`/setting/${item.replace(/\s+/g, "").toLowerCase()}`}
                  onClick={() => setActiveSubmenu(item)}
                  className={`flex items-center space-x-2 text-sm py-2 w-full rounded-lg ${
                    activeSubmenu === item
                      ? "bg-gray-100 text-gray-600 "
                      : "bg-gray-50 text-gray-600"
                  }`}
                >
                  <span className="w-3 h-3 border-2 border-black-400 rounded-full ml-4" />
                  <span>{item}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* Logout  Menu */}
        <div className="px-4 mb-2 mt-2">
          <button
            onClick={() => toggleMenu("logout")}
            className={`flex items-center justify-between text-gray-600 w-full px-3 py-2 rounded-lg cursor-pointer ${
              openMenu === "logout" ? "bg-gray-100" : "bg-gray-50"
            }`}
          >
            <span className="flex items-center space-x-2">
              <TbLogout className="text-lg" />
              <span className="cursor-pointer">Logout</span>
            </span>
            {openMenu === "logout" ? (
              <FiChevronDown className="text-gray-500" />
            ) : (
              <FiChevronRight className="text-gray-500" />
            )}
          </button>

          {/* Submenu */}
          {openMenu === "logout" && (
            <div className="mt-2 space-y-4 text-gray-600 text-base font-semibold">
              {LogoutSubMenus.map((item) => (
                <Link
                  key={item}
                  to={"/"}
                  onClick={() => setActiveSubmenu(item)}
                  className={`flex items-center space-x-2 text-sm py-2 w-full rounded-lg ${
                    activeSubmenu === item
                      ? "bg-gray-100 text-gray-600 "
                      : "bg-gray-50 text-gray-600"
                  }`}
                >
                  <span className="w-3 h-3 border-2 border-black-400 rounded-full ml-4" />
                  <span>{item}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
