const menu = [
    {
        name: "Learn React",
        to: "/home",
    },
    {
        name: "Hooks",
        to: "/hooks/",
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

export default menu;
