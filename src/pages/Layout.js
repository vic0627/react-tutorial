import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Sidebar from "../components/sidebar/Sidebar";
import Pointer from "../components/pointer/Pointer";
// import Backing from "./backing/Backing";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./layout.module.scss";
import io from "socket.io-client";

const Layout = () => {
    // const socket = io("http://localhost:3001");
    const location = useLocation();

    const navigate = useNavigate();

    const lang = useSelector((state) => state.language.current);

    useEffect(() => {
        // fetch("http://localhost:3001/user/test", {
        //     method: "GET",
        // });
        const { pathname } = location;

        const redirectURI = pathname.split("/");

        redirectURI.splice(1, 1, lang);

        navigate(redirectURI.join("/"));
    }, [lang]);

    return (
        <>
            <Navigation />
            <div className={styles.layout}>
                <Sidebar />
                <main>
                    <Outlet />
                </main>
            </div>
            <Pointer />
        </>
    );
};

export default Layout;
