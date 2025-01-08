import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCalendar,
  FaInbox,
  FaCog,
  FaChartBar,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: FaHome, text: "Dashboard", path: "/" },
    { icon: FaCalendar, text: "Calendar", path: "/calendar" },
    { icon: FaInbox, text: "Inbox", path: "/inbox" },
    { icon: FaChartBar, text: "Register", path: "/register" },
    { icon: FaCog, text: "Settings", path: "/settings" },
  ];

  return (
    <>
      <button
        className={`fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md lg:hidden ${
          isOpen ? "hidden" : ""
        }`}
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-5 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">MyApp</h2>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-4">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded-md transition-colors duration-200 ${
                      isActive ? "bg-gray-800" : "hover:bg-gray-800"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-3" />
                  <span>{item.text}</span>
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
