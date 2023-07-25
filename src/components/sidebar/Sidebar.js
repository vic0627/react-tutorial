import { Link } from "react-router-dom";

const menu = [
  {
    name: "Hooks",
    to: "/",
    children: [
      {
        name: "useState",
        to: "",
      },
      {
        name: "useReducer",
        to: "",
      },
      {
        name: "useContext",
        to: "",
      },
      {
        name: "useRef",
        to: "",
      },
      {
        name: "useEffect",
        to: "",
      },
      {
        name: "useLayoutEffect",
        to: "",
      },
      {
        name: "useMemo",
        to: "",
      },
      {
        name: "useCallback",
        to: "",
      },
      {
        name: "useTransition",
        to: "",
      },
      {
        name: "useId",
        to: "",
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
