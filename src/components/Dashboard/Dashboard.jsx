import { BiPieChartAlt } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaBan, FaDollarSign, FaRegCheckCircle } from "react-icons/fa";
import { PiLinkSimpleBold, PiPaypalLogo } from "react-icons/pi";
import {
  TbAlertTriangle,
  TbChevronDown,
  TbChevronUp,
  TbClick,
  TbClock,
  TbCreditCard,
  TbExternalLink,
  TbGlobe,
  TbLink,
  TbRosetteDiscount,
  TbShadow,
  TbShoppingCart,
  TbStar,
  TbTicket,
  TbUsers,
} from "react-icons/tb";
import ReactCountryFlag from "react-country-flag";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";

const Dashboard = ({ percentage = 85 }) => {
  const segments = 25;
  const filled = Math.round((40 / 100) * segments);

  const countries = [
    { code: "US", name: "United States", sales: "$8,567k", change: 25.8 },
    { code: "BR", name: "Brazil", sales: "$2,415k", change: -6.2 },
    { code: "IN", name: "India", sales: "$865k", change: 12.4 },
    { code: "AU", name: "Australia", sales: "$745k", change: -11.9 },
    { code: "FR", name: "France", sales: "$45", change: 16.2 },
    { code: "CN", name: "China", sales: "$12k", change: 14.8 },
  ];

  const data = [60, 40, 80, 50, 65, 85, 70, 60, 30];

  const projects = [
    {
      name: "WS Website SEO",
      date: "10 May 2021",
      leader: "Eileen",
      team: [true, true, true],
      progress: 38,
      icon: "WS",
    },
    {
      name: "Social Banners",
      date: "03 Jan 2021",
      leader: "Owen",
      team: [true, true, false],
      progress: 45,
      icon: "🌍",
    },
    {
      name: "Logo Design",
      date: "12 Aug 2021",
      leader: "Keith",
      team: [true, true, true],
      progress: 92,
      icon: "☀️",
    },
    {
      name: "iOS App Design",
      date: "19 Apr 2021",
      leader: "Merline",
      team: [true, true, false],
      progress: 56,
      icon: "🍎",
    },
    {
      name: "Figma Dashboards",
      date: "08 Apr 2021",
      leader: "Harmonia",
      team: [true, false, false],
      progress: 25,
      icon: "📊",
    },
    {
      name: "Crypto Admin",
      date: "29 Sept 2021",
      leader: "Allyson",
      team: [true, true, true],
      progress: 36,
      icon: "HT",
    },
    {
      name: "Create Website",
      date: "20 Mar 2021",
      leader: "Georgie",
      team: [true, true, false],
      progress: 72,
      icon: "📖",
    },
    {
      name: "App Design",
      date: "09 Feb 2021",
      leader: "Fred",
      team: [true, true, true],
      progress: 89,
      icon: "☀️",
    },
    {
      name: "Angular APIs",
      date: "17 June 2021",
      leader: "Richardo",
      team: [true, true, false],
      progress: 77,
      icon: "🍎",
    },
    {
      name: "Admin Template",
      date: "06 Oct 2021",
      leader: "Genevra",
      team: [true, false, false],
      progress: 100,
      icon: "📊",
    },
  ];
  // --- Pagination States ---
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5); // default rows per page

  // --- Logic for Pagination ---
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = projects.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(projects.length / rowsPerPage);
  const TeamIcon = ({ active }) => (
    <div
      className={`w-5 h-5 rounded-full ${
        active ? "bg-green-500" : "bg-gray-300"
      } flex items-center justify-center`}
    >
      <span className="text-white text-xs font-bold">✓</span>
    </div>
  );

  const ProgressBar = ({ percentage }) => (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-purple-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
        <div className="w-[150%] h-auto bg-[#685dd8] rounded-[0.375rem] shadow-[0 0.25rem 1.125rem rgba(75, 70, 92, 0.1)] box-border p-4  flex  flex-col gap-0.5 text-white mr-0 ">
          <span>Website Analytics</span>
          <span>Total 28.5% Conversion Rate</span>
          <div className="mt-2 font-medium">Revenue Sources</div>

          <div className="flex gap-10">
            <div className="text-center text-white mt-2 flex flex-row gap-2">
              <div className="p-1 w-10 h-8 bg-[#5b51cc] rounded-md ">268</div>
              <div className="p-1">Direct</div>
            </div>
            <div className="text-center text-white mt-2 flex flex-row gap-2">
              <div className="p-1 w-10 h-8 bg-[#5b51cc] rounded-md ">890</div>
              <div className="p-1">Organic</div>
            </div>
          </div>
          <div className="flex gap-7">
            <div className="text-center text-white mt-2 flex flex-row gap-2">
              <div className="p-1 w-10 h-8 bg-[#5b51cc] rounded-md ">62</div>
              <div className="p-1">Referral</div>
            </div>
            <div className="text-center text-white mt-2 flex flex-row gap-2">
              <div className="p-1 w-10 h-8 bg-[#5b51cc] rounded-md ">1.2k</div>
              <div className="p-1">Campaign</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 w-[75%] rounded-[0.375rem] shadow-[0 0.25rem 1.125rem rgba(75, 70, 92, 0.1)] box-border text-gray-600 font-medium ml-[52%]">
          <div className="flex flex-row items-start justify-between w-full">
            <p className="text-gray-400 font-normal">Sales Overview</p>
            <span className="font-normal text-green-400">+18.2%</span>
          </div>
          <div className="text-xl font-semibold mt-1">$42.5k</div>
          <div className="flex flex-row justify-between">
            <div>
              <div className="flex flex-row gap-1 mt-4 items-center">
                <span className="w-8 h-8 bg-[#d9f8fc] rounded-lg items-center justify-center flex text-[#00cfe8] ml-[-0.25rem]">
                  <TbShoppingCart />
                </span>
                <p>Order</p>
              </div>
              <p className="text-[#5d596c] font-medium text-lg mt-1">62.2%</p>
              <p className="text-[#a5a3ae]">6,440</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <div className="border border-gray-300 h-7"></div>
              <div className="bg-[#c0c0c7] text-[#a5a3ae] w-8 h-8 rounded-full items-center justify-center flex mt-2 mb-2">
                VS
              </div>
              <div className="border border-gray-300 h-7"></div>
            </div>
            <div>
              <div className="flex flex-row gap-2 mt-4 items-center">
                <p>Visits</p>
                <span className="w-8 h-8 bg-[#eae8fd] rounded-lg items-center justify-center flex text-[#7367f0] ml-[-0.25rem]">
                  <PiLinkSimpleBold />
                </span>
              </div>
              <p className="text-[#5d596c] font-medium text-lg mt-1">25.5%</p>
              <p className="text-[#a5a3ae]">12,749</p>
            </div>
          </div>
          <div className="border border-gray-300 h-4 rounded-2xl mt-2 bg-gradient-to-r from-[#00bfff] via-[#00bfff] to-[#7367f0]"></div>
        </div>

        <div className="bg-white p-4 w-[70%] rounded-[0.375rem] shadow-[0 0.25rem 1.125rem rgba(75, 70, 92, 0.1)] box-border  flex text-gray-600 font-medium ml-[30%]  mr-0 ">
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center justify-center w-8 h-8 bg-green-200 text-green-500 rounded-full mb-2">
              <TbCreditCard />
            </div>
            97.5k <span className="text-[#6F6B7D]">Revenue Generated</span>
            {/* Right chart */}
            <svg
              className="w-full h-full ml-[-1rem] "
              viewBox="0 0 110 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background wavy line (lighter green) */}
              <path
                d="M0 30 Q20 10 40 25 T80 15 T120 25"
                stroke="#10B981"
                strokeWidth="1.5"
                strokeOpacity="0.3"
                fill="none"
              />
              {/* Foreground wavy line (solid green) */}
              <path
                d="M0 30 Q20 10 40 25 T80 15 T120 25"
                stroke="#10B981"
                strokeWidth="0.5"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="box-border mt-4 text-gray-600 w-full">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white p-3 rounded-xl shadow-2xl relative">
            <div className="absolute top-3 right-3 text-gray-400 cursor-pointer">
              ⋮
            </div>

            <p className="text-[#5d596c] font-semibold">Earning Reports</p>
            <p className="text-[#a5a3ae] text-xs">Weekly Earnings Overview</p>

            <div className="flex flex-row items-start">
              <div className="flex flex-col items-start justify-between w-1/2">
                <div className="text-[#5d596c] text-4xl font-semibold mt-8">
                  $468
                </div>
                <div className="text-[15px] font-semibold bg-green-100 rounded-lg w-14 h-6 flex items-center justify-center text-green-700 mt-3">
                  +4.2%
                </div>
                <div className="text-[15px] font-semibold text-[#a5a3ae] mt-3 mb-[-5rem] leading-tight">
                  You informed of this week compared to last week
                </div>
              </div>
              <div className="ml-10 flex-1">
                <svg
                  className="w-full h-40"
                  viewBox="0 0 300 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="20"
                    y="120"
                    width="20"
                    height="80"
                    fill="#e5e7eb"
                    rx="2"
                  />
                  <rect
                    x="60"
                    y="60"
                    width="20"
                    height="140"
                    fill="#e5e7eb"
                    rx="2"
                  />
                  <rect
                    x="100"
                    y="140"
                    width="20"
                    height="60"
                    fill="#e5e7eb"
                    rx="2"
                  />
                  <rect
                    x="140"
                    y="40"
                    width="20"
                    height="160"
                    fill="#a78bfa"
                    rx="2"
                  />
                  <rect
                    x="180"
                    y="150"
                    width="20"
                    height="50"
                    fill="#e5e7eb"
                    rx="2"
                  />
                  <rect
                    x="220"
                    y="100"
                    width="20"
                    height="100"
                    fill="#e5e7eb"
                    rx="2"
                  />
                  <rect
                    x="260"
                    y="90"
                    width="20"
                    height="110"
                    fill="#e5e7eb"
                    rx="2"
                  />

                  {/* Labels */}
                  <text
                    x="30"
                    y="185"
                    textAnchor="middle"
                    fill="#9ca3af"
                    fontSize="10"
                    fontFamily="sans-serif"
                  >
                    Mo
                  </text>
                  <text
                    x="70"
                    y="185"
                    textAnchor="middle"
                    fill="#9ca3af"
                    fontSize="10"
                    fontFamily="sans-serif"
                  >
                    Tu
                  </text>
                  <text
                    x="110"
                    y="185"
                    textAnchor="middle"
                    fill="#9ca3af"
                    fontSize="10"
                    fontFamily="sans-serif"
                  >
                    We
                  </text>
                  <text
                    x="150"
                    y="185"
                    textAnchor="middle"
                    fill="#9ca3af"
                    fontSize="10"
                    fontFamily="sans-serif"
                  >
                    Th
                  </text>
                  <text
                    x="190"
                    y="185"
                    textAnchor="middle"
                    fill="#9ca3af"
                    fontSize="10"
                    fontFamily="sans-serif"
                  >
                    Fr
                  </text>
                  <text
                    x="230"
                    y="185"
                    textAnchor="middle"
                    fill="#9ca3af"
                    fontSize="10"
                    fontFamily="sans-serif"
                  >
                    Sa
                  </text>
                  <text
                    x="270"
                    y="185"
                    textAnchor="middle"
                    fill="#9ca3af"
                    fontSize="10"
                    fontFamily="sans-serif"
                  >
                    Su
                  </text>
                </svg>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl mt-4 p-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-start gap-2 text-[#5d596c] font-semibold">
                  <div className="flex flex-row gap-1 items-center">
                    <span className="w-6 h-6 bg-[#eae8fd] rounded-lg flex items-center justify-center text-[#7367f0]">
                      <BsCurrencyDollar className="w-3 h-3" />
                    </span>
                    Earnings
                  </div>
                  <p className="text-xl">$545.69</p>
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#7367f0] w-1/2 rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 text-[#5d596c] font-semibold">
                  <div className="flex flex-row gap-1 items-center">
                    <span className="w-6 h-6 bg-[#d9f8fc] rounded-lg flex items-center justify-center text-[#00cfe8]">
                      <BiPieChartAlt className="w-3 h-3" />
                    </span>
                    Profit
                  </div>
                  <p className="text-xl">$256.34</p>
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00cfe8] w-1/2 rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 text-[#5d596c] font-semibold">
                  <div className="flex flex-row gap-1 items-center">
                    <span className="w-6 h-6 bg-[#fce5e6] rounded-lg flex items-center justify-center text-[#ea5455]">
                      <PiPaypalLogo className="w-3 h-3" />
                    </span>
                    Expense
                  </div>
                  <p className="text-xl">$74.19</p>
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#ea5455] w-1/2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-2xl relative">
            <div className="flex flex-col items-start">
              <div className="absolute top-3 right-3 text-gray-400 cursor-pointer">
                ⋮
              </div>
              <p className="text-[#5d596c] font-semibold">Support Tracker</p>
              <p className="text-[#a5a3ae]">Last 7 Days</p>
            </div>

            <div className="flex flex-row items-start mt-2 justify-between">
              <div className="flex flex-col">
                <span className="text-3xl font-semibold text-[#5d596c]">
                  164
                </span>
                <span className="text-[#a5a3ae] text-[14px]">
                  Total Tickets
                </span>
                <div className="flex flex-col">
                  <div className="flex flex-row items-center gap-2 mt-4">
                    <span className="w-8 h-8 bg-[#eae8fd] text-[#7367f0] rounded-md items-center flex justify-center">
                      <TbTicket />
                    </span>

                    <div className="flex flex-col">
                      <h6 className="text-[#5D596C] font-[600]">New Tickets</h6>
                      <small className="text-[#A5A3AE]">142</small>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2 mt-4">
                    <span className="w-8 h-8 bg-[#d9f8fc] text-[#00cfe8] rounded-md items-center flex justify-center">
                      <FaRegCheckCircle />
                    </span>

                    <div className="flex flex-col">
                      <h6 className="text-[#5D596C] font-[600]">
                        Open Tickets
                      </h6>
                      <small className="text-[#A5A3AE]">28</small>
                    </div>
                  </div>{" "}
                  <div className="flex flex-row items-center gap-2 mt-4">
                    <span className="w-8 h-8 bg-[#fff1e3] text-[#ff9f43] rounded-md items-center flex justify-center">
                      <TbClock />
                    </span>

                    <div className="flex flex-col">
                      <h6 className="text-[#5D596C] font-[600]">
                        Response Time
                      </h6>
                      <small className="text-[#A5A3AE]">1 Day</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col items-center justify-center w-64 h-64 mr-9">
                {/* Circular Segments */}
                <div className="absolute w-full h-full flex items-center justify-center">
                  {[...Array(segments)].map((_, i) => {
                    const rotate = (i * 180) / segments - 120; // half circle
                    const color =
                      i < filled
                        ? "bg-indigo-200"
                        : "bg-indigo-700 opacity-100";
                    return (
                      <div
                        key={i}
                        className={`absolute w-2 h-6 rounded-full origin-bottom ${color}`}
                        style={{
                          transform: `rotate(${rotate}deg) translateY(-120px)`,
                        }}
                      ></div>
                    );
                  })}
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1">Completed Task</p>
                  <p className="text-4xl font-semibold text-gray-700">
                    {percentage}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-border mt-4 text-gray-600 w-full">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded-xl shadow-2xl relative">
            <div className="absolute top-3 right-3 text-gray-400 cursor-pointer">
              ⋮
            </div>

            <p className="text-[#5d596c] font-semibold">Sales by Countries</p>
            <p className="text-[#a5a3ae] text-xs">Monthly Sales Overview</p>
            <div className="flex flex-col gap-5 mt-6">
              {countries.map((c, index) => (
                <div key={index} className="flex items-center justify-between">
                  {/* Left: Flag and details */}
                  <div className="flex items-center gap-2">
                    <ReactCountryFlag
                      countryCode={c.code}
                      svg
                      className="text-3xl rounded-full overflow-hidden"
                    />
                    <div className="flex flex-col">
                      <span className="text-[#5D596C] font-semibold text-sm">
                        {c.sales}
                      </span>
                      <span className="text-[#A5A3AE] text-xs">{c.name}</span>
                    </div>
                  </div>

                  {/* Right: Percentage */}
                  <div
                    className={`flex items-center gap-1 text-sm font-semibold ${
                      c.change > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {c.change > 0 ? (
                      <TbChevronUp size={16} />
                    ) : (
                      <TbChevronDown size={16} />
                    )}
                    <span>{Math.abs(c.change)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl shadow-2xl relative">
            {/* Dots menu */}
            <div className="absolute top-3 right-3 text-gray-400 cursor-pointer">
              ⋮
            </div>

            {/* Header */}
            <p className="text-[#5d596c] font-semibold text-sm">
              Total Earning
            </p>

            {/* Percentage */}
            <div className="flex items-center gap-2 mt-2">
              <h1 className="text-4xl font-semibold text-[#5d596c]">87%</h1>
              <div className="flex items-center text-green-500 text-sm font-semibold">
                <TbChevronUp size={16} />
                <span>25.8%</span>
              </div>
            </div>

            {/* Bar Graph */}
            <div className="flex justify-between items-end h-28 mt-7">
              {data.map((value, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-2 h-[10vh] rounded-t-lg bg-indigo-600"></div>
                  <div className="w-2 h-10 mt-1 rounded-b-lg bg-green-300"></div>
                </div>
              ))}
            </div>

            {/* Footer section */}
            <div className="flex flex-col gap-6  mt-10">
              {/* Total Sales */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-indigo-100 rounded-md">
                    <FaDollarSign size={18} className="text-indigo-500" />
                  </div>
                  <div>
                    <p className="text-[#5d596c] text-sm font-medium">
                      Total Sales
                    </p>
                    <p className="text-[#a5a3ae] text-xs">Refund</p>
                  </div>
                </div>
                <p className="text-green-500 font-semibold text-sm">+ $98</p>
              </div>

              {/* Total Revenue */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md">
                    <PiPaypalLogo size={18} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[#5d596c] text-sm font-medium">
                      Total Revenue
                    </p>
                    <p className="text-[#a5a3ae] text-xs">Client Payment</p>
                  </div>
                </div>
                <p className="text-green-500 font-semibold text-sm">+ $126</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl shadow-2xl relative">
            <div className="absolute top-3 right-3 text-gray-400 cursor-pointer">
              ⋮
            </div>

            <h5 className="text-[#5d596c] text-[18px] font-semibold">
              Monthly Campaign State
            </h5>
            <small className="text-[#a5a3ae] text-[13px]">
              8.52k Social Visiters
            </small>

            <div className="flex flex-col gap-6  mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#dff7e9] rounded-md">
                    <AiOutlineMail className="text-[#28c76f]" />
                  </div>
                  <div>
                    <p className="text-[#5d596c] text-[15px] font-medium">
                      Emails
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <p className="text-[#5d596c] font-medium text-sm">12,346</p>
                  <p className="text-green-500 font-medium text-sm">0.3%</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#d9f8fc] rounded-md">
                    <TbLink className="text-[#00cfe8]" />
                  </div>
                  <div>
                    <p className="text-[#5d596c] text-[15px] font-medium">
                      Opened
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <p className="text-[#5d596c] font-medium text-sm">8,734</p>
                  <p className="text-green-500 font-medium text-sm">2.1%</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#fff1e3] rounded-md">
                    <TbClick className="text-[#ff9f43]" />
                  </div>
                  <div>
                    <p className="text-[#5d596c] text-[15px] font-medium">
                      Clicked
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <p className="text-[#5d596c] font-medium text-sm">967</p>
                  <p className="text-green-500 font-medium text-sm">1.4%</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#eae8fd] rounded-md">
                    <TbUsers className="text-[#7367f0]" />
                  </div>
                  <div>
                    <p className="text-[#5d596c] text-[15px] font-medium">
                      Subscribe
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <p className="text-[#5d596c] font-medium text-sm">345</p>
                  <p className="text-green-500 font-medium text-sm">8.5k%</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#f2f2f3] rounded-md">
                    <TbAlertTriangle className="text-[#a8aaae]" />
                  </div>
                  <div>
                    <p className="text-[#5d596c] text-[15px] font-medium">
                      Complaints
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <p className="text-[#5d596c] font-medium text-sm">10</p>
                  <p className="text-green-500 font-medium text-sm">1.5%</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#fce5e6] rounded-md">
                    <FaBan className="text-[#ea5455]" />
                  </div>
                  <div>
                    <p className="text-[#5d596c] text-[15px] font-medium">
                      Unsubscribe
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <p className="text-[#5d596c] font-medium text-sm">86</p>
                  <p className="text-green-500 font-medium text-sm">0.8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-border mt-4 text-gray-600 w-full">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded-xl shadow-2xl relative col-span-1">
            <div className="absolute top-3 right-3 text-gray-400 cursor-pointer">
              ⋮
            </div>

            <h5 className="text-[#5d596c] text-[18px] font-semibold">
              Source Visits
            </h5>
            <small className="text-[#a5a3ae] text-[13px]">38.4k Visitors</small>

            <div className="flex flex-col gap-6  mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#f2f2f3] rounded-md">
                    <TbShadow className="text-[#a8aaae]" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <p className="text-[#5d596c] text-[15px] font-medium">
                      Direct Source
                    </p>
                    <small className="text-[#a5a3ae] font-medium">
                      Direct link click
                    </small>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <p className="text-[#5d596c] font-medium text-sm">1.2k</p>
                  <p className="w-14 h-6 flex items-center justify-center text-[#28c76f] bg-[#dff7e9] rounded-md font-medium text-sm">
                    +4.2%
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#f2f2f3] rounded-md">
                    <TbGlobe className="text-[#a8aaae]" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <p className="text-[#5d596c] text-[15px] font-medium">
                      Social Network
                    </p>
                    <small className="text-[#a5a3ae] font-medium">
                      Social Channels
                    </small>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <p className="text-[#5d596c] font-medium text-sm">31.5k</p>
                  <p className="w-14 h-6 flex items-center justify-center text-[#28c76f] bg-[#dff7e9] rounded-md font-medium text-sm">
                    +8.2%
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#f2f2f3] rounded-md">
                    <AiOutlineMail className="text-[#a8aaae]" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <p className="text-[#5d596c] text-[15px] font-medium">
                      Email Newsletter
                    </p>
                    <small className="text-[#a5a3ae] font-medium">
                      Mail Campaigns
                    </small>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <p className="text-[#5d596c] font-medium text-sm">893</p>
                  <p className="w-14 h-6 flex items-center justify-center text-[#28c76f] bg-[#dff7e9] rounded-md font-medium text-sm">
                    +2.4%
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#f2f2f3] rounded-md">
                    <TbExternalLink className="text-[#a8aaae]" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <p className="text-[#5d596c] text-[15px] font-medium">
                      Referrals
                    </p>
                    <small className="text-[#a5a3ae] font-medium">
                      Impact Radius Visits
                    </small>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <p className="text-[#5d596c] font-medium text-sm">342</p>
                  <p className="w-14 h-6 flex items-center justify-center text-[#ea5455] bg-[#fce5e6] rounded-md font-medium text-sm">
                    -0.4%
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#f2f2f3] rounded-md">
                    <TbRosetteDiscount className="text-[#a8aaae]" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <p className="text-[#5d596c] text-[15px] font-medium">
                      ADVT
                    </p>
                    <small className="text-[#a5a3ae] font-medium">
                      Google ADVT
                    </small>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <p className="text-[#5d596c] font-medium text-sm">2.15k</p>
                  <p className="w-14 h-6 flex items-center justify-center text-[#28c76f] bg-[#dff7e9] rounded-md font-medium text-sm">
                    +9.1%
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#f2f2f3] rounded-md">
                    <TbStar className="text-[#a8aaae]" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <p className="text-[#5d596c] text-[15px] font-medium">
                      Other
                    </p>
                    <small className="text-[#a5a3ae] font-medium">
                      Many Sources
                    </small>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <p className="text-[#5d596c] font-medium text-sm">12.5k</p>
                  <p className="w-14 h-6 flex items-center justify-center text-[#28c76f] bg-[#dff7e9] rounded-md font-medium text-sm">
                    +6.2%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-2xl relative col-span-2">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Projects</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search:"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">
                      <div className="flex items-center space-x-2">
                        <span>Name</span>
                        <svg
                          className="w-4 h-4 text-gray-400"
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
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Leader
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Team
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentRows.map((project, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-200  rounded-full flex items-center justify-center text-gray-600 font-bold text-sm">
                            {project.icon}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {project.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {project.date}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {project.leader}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-1">
                          {project.team.map((active, idx) => (
                            <TeamIcon key={idx} active={active} />
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center justify-center space-x-2 w-[100px]">
                          <ProgressBar percentage={project.progress} />
                          <span className="text-sm font-medium">
                            {project.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex items-center">
                        <button className="text-purple-600 hover:text-purple-900">
                          ...
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}

            <div className="flex-1 flex justify-between sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="relative ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
            <div className="flex items-end justify-between p-3">
              <div className="text-gray-400">
                Showing {indexOfFirstRow + 1} to{" "}
                {Math.min(indexOfLastRow, projects.length)} of {projects.length}{" "}
                entries
              </div>

              <div className="flex items-end justify-end gap-1">
                <button
                  className={`px-3 py-1 rounded-md ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === i + 1
                        ? "bg-[#7367f0] text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  className={`px-3 py-1 rounded-md ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
