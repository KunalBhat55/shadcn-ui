import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Calendar from "../pages/calendar";
import Layout from "../components/Layout";
import Inbox from "../pages/Inbox";
import Messages from "../pages/Messages";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="calendar" element={<Calendar />} />

        <Route path="inbox" element={<Inbox />}>
          <Route index element={<Navigate to="messages" replace />} />
          <Route path="messages" element={<Messages />} />
        </Route>
        
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />

      </Route>

    </Routes>
  );
};

export default AppRoutes;
