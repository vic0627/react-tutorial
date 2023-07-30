const menu = (lang) => [
    {
        name: "Hooks",
        to: `/${lang}/hooks`,
        children: [
            {
                name: "useState",
                to: `/${lang}/hooks/usestate`,
            },
            {
                name: "useReducer",
                to: `/${lang}/hooks/usereducer`,
            },
            {
                name: "useContext",
                to: `/${lang}/hooks/usecontext`,
            },
            {
                name: "useRef",
                to: `/${lang}/hooks/useref`,
            },
            {
                name: "useEffect",
                to: `/${lang}/hooks/useeffect`,
            },
            {
                name: "useLayoutEffect",
                to: `/${lang}/hooks/uselayouteffect`,
            },
            {
                name: "useMemo",
                to: `/${lang}/hooks/usememo`,
            },
            {
                name: "useCallback",
                to: `/${lang}/hooks/usecallback`,
            },
            {
                name: "useTransition",
                to: `/${lang}/hooks/usetransition`,
            },
            {
                name: "useId",
                to: `/${lang}/hooks/useid`,
            },
        ],
    },
];

export default menu;
