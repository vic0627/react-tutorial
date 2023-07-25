import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
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
