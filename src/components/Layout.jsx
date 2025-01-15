import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./SearchHeader";

const Layout = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
        <main
          className={`flex-1 p-4 transition-all duration-300 ${
            isExpanded ? "ml-64" : "ml-20"
          }`}
        >
          <Header toggleSidebar={toggleSidebar} />

          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
