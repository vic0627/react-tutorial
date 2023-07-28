import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Sidebar from "../components/sidebar/Sidebar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Layout = () => {
    const location = useLocation();

    const navigate = useNavigate();

    const lang = useSelector((state) => state.language.current);

    useEffect(() => {
        const { pathname } = location;

        const redirectURI = pathname.split("/");

        redirectURI.splice(1, 1, lang);

        navigate(redirectURI.join("/"));
    }, [lang]);

    return (
        <div>
            <Navigation />
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
