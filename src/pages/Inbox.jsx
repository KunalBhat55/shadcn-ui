import { Outlet, Link } from 'react-router-dom';

function Inbox() {
  return (
    <div>
      <h2>Inbox</h2>
      <nav>
        <ul>
          <li className='hover:underline'><Link to="/inbox/messages">Messages</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Inbox