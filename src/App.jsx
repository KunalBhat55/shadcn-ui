import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

export default function Layout({ children }) {
  return (
    <>
      <AppRoutes />
    </>
  );
}
