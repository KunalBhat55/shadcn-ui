import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-800 p-4">
      <nav className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/inbox" className="text-white hover:text-gray-400">
              Inbox
            </Link>
          </li>
          <li>
            <Link to="/calendar" className="text-white hover:text-gray-400">
              calendar
            </Link>
          </li>
          <li>
            <Link
              to="/inbox/messages"
              className="text-white hover:text-gray-400"
            >
              messages
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
