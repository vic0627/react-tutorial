import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import menu from "./menu";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
    const lang = useSelector((state) => state.language.current);

    const { sidebar } = styles;

    return (
        <aside className={sidebar}>
            {menu(lang).map((parent) => {
                const { name, to, children } = parent;

                return (
                    <div key={name}>
                        <div>
                            <Link to={to}>{name}</Link>
                        </div>
                        {children && (
                            <div>
                                {children.map((child) => {
                                    const { name, to } = child;

                                    return (
                                        <div key={name}>
                                            <Link to={to}>{name}</Link>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </aside>
    );
};

export default Sidebar;
