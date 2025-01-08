import { Outlet, Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div>
        <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
