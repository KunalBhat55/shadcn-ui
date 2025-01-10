import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCalendar,
  FaInbox,
  FaChartBar,
  FaInfoCircle,
  FaBars,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Button } from "./ui/button";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const menuItems = [
    { icon: FaHome, text: "Dashboard", path: "/" },
    { icon: FaCalendar, text: "Calendar", path: "/calendar" },
    { icon: FaInbox, text: "Inbox", path: "/inbox" },
    { icon: FaChartBar, text: "Register", path: "/register" },
    { icon: FaInfoCircle, text: "Information", path: "/information" },
  ];

  return (
    <>
     {/*  */}
      <Button
        className={`fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md lg:hidden ${
          isExpanded ? "hidden" : ""
        }`}
        onClick={toggleSidebar}
      >
        {isExpanded ? <FaTimes /> : <FaBars />}
      </Button>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ease-in-out ${
          isExpanded ? "w-64" : "w-20"
        } lg:translate-x-0`}
      >
        <div className={`flex items-center justify-between p-4 ${isExpanded ? "mb-6" : "mb-2"}`}>
          {isExpanded && <h2 className="text-2xl font-bold">MyApp</h2>}
          <Button 
            className=" rounded-full hover:bg-gray-800 transition-colors duration-200"
            onClick={toggleSidebar}
          >
            {isExpanded ? <FaChevronLeft /> : <FaBars />}
          </Button>
        </div>
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className={`mb-4 ${isExpanded ? "px-4" : ""}`}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex ${isExpanded ? "items-center" : "flex-col items-center"} p-2 rounded-md transition-colors duration-200 ${
                      isActive ? "bg-gray-800" : "hover:bg-gray-800"
                    }`
                  }
                  onClick={() => !isExpanded && setIsExpanded(true)}
                >
                  <item.icon className={`${isExpanded ? "mr-3" : "mb-1"} ${isExpanded ? "text-base" : "text-2xl"}`} />
                  <span className={`${isExpanded ? "text-base" : "text-xs"} ${isExpanded ? "" : "w-full text-center"}`}>
                    {isExpanded ? item.text : item.text.split(" ")[0]}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

