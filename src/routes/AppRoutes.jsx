import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Calendar from "../pages/calendar";
import Layout from "../components/Layout";
import Inbox from "../pages/Inbox";
import Messages from "../pages/Messages";
import Register from "../pages/Register";
import Information from "@/pages/Information";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calendar" element={<Calendar />} />

        <Route path="inbox" element={<Inbox />} />
        <Route path="inbox/messages" element={<Messages />} />
        <Route path="register" element={<Register />} />
        <Route path="information" element={<Information />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
