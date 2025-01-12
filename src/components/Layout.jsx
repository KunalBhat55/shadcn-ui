import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './SearchHeader';

const Layout = () => {

  const [isExpanded, setIsExpanded] = useState(true);
  console.log(isExpanded);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="">
        <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
        <main className={`flex-1 p-4 transition-all duration-300 ${isExpanded ? 'lg:ml-64' : 'lg:ml-20'}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
