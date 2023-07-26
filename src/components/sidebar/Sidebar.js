import { Link } from "react-router-dom";

const menu = [
    {
        name: "Learn React",
        to: "/home",
    },
    {
        name: "Hooks",
        to: "/hooks",
        children: [
            {
                name: "useState",
                to: "/hooks/usestate",
            },
            {
                name: "useReducer",
                to: "/hooks/usereducer",
            },
            {
                name: "useContext",
                to: "/hooks/usecontext",
            },
            {
                name: "useRef",
                to: "/hooks/useref",
            },
            {
                name: "useEffect",
                to: "/hooks/useeffect",
            },
            {
                name: "useLayoutEffect",
                to: "/hooks/uselayouteffect",
            },
            {
                name: "useMemo",
                to: "/hooks/usememo",
            },
            {
                name: "useCallback",
                to: "/hooks/usecallback",
            },
            {
                name: "useTransition",
                to: "/hooks/usetransition",
            },
            {
                name: "useId",
                to: "/hooks/useid",
            },
        ],
    },
];

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
