import { Link } from "react-router-dom";
import menu from "./menu";

const Sidebar = () => {
    return (
        <aside>
            {menu.map((parent) => {
                const { name, to, children } = parent;

                return (
                    <div key={name}>
                        <Link to={to}>{name}</Link>
                        <ul>
                            {children &&
                                children.map((child) => {
                                    const { name, to } = child;

                                    return (
                                        <li key={name}>
                                            <Link to={to}>{name}</Link>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                );
            })}
        </aside>
    );
};

export default Sidebar;
