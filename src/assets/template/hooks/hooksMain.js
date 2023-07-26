const hooksMain = [
    {
        h3: "Built-in React Hooks",
        p0: "Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.",
    },
    {
        h4: "State Hooks",
        p0: "State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.",
        p1: "To add state to a component, use one of these Hooks:",
        li: [
            "useState declares a state variable that you can update directly.",
            "useReducer declares a state variable with the update logic inside a reducer function.",
        ],
        code: {
            lang: "js",
            sourceCode:
                "function ImageGallery() {\n\tconst [index, setIndex] = useState(0);\n\t// ...",
        },
    },
    {
        h4: "Context Hooks",
        p0: "Context lets a component receive information from distant parents without passing it as props. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.",
        li: ["useContext reads and subscribes to a context."],
        code: {
            lang: "js",
            sourceCode:
                "function Button() {\n\tconst theme = useContext(ThemeContext);\n\t// ...",
        },
    },
    {
        h4: "Ref Hooks",
        p0: "Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.",
        p1: "To add state to a component, use one of these Hooks:",
        li: [
            "useRef declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.",
            "useImperativeHandle lets you customize the ref exposed by your component. This is rarely used.",
        ],
        code: {
            lang: "js",
            sourceCode:
                "function Form() {\n\tconst inputRef = useRef(null);\n\t// ...",
        },
    },
    {
        h4: "Effect Hooks",
        p0: "Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.",
        li: ["useEffect connects a component to an external system."],
        code: {
            lang: "js",
            sourceCode:
                "function ChatRoom({ roomId }) {\n\tuseEffect(() => {\n\t\tconst connection = createConnection(roomId);\n\t\tconnection.connect();\n\t\treturn () => connection.disconnect();\n\t}, [roomId]);\n\t// ...",
        },
        p1: "Effects are an “escape hatch” from the React paradigm. Don’t use Effects to orchestrate the data flow of your application. If you’re not interacting with an external system, you might not need an Effect.",
        p2: "There are two rarely used variations of useEffect with differences in timing:",
        li1: [
            "useLayoutEffect fires before the browser repaints the screen. You can measure layout here.",
            "useInsertionEffect fires before React makes changes to the DOM. Libraries can insert dynamic CSS here.",
        ],
    },
    {
        h4: "Performance Hooks",
        p0: "A common way to optimize re-rendering performance is to skip unnecessary work. For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render.",
        p1: "To skip calculations and unnecessary re-rendering, use one of these Hooks:",
        li: [
            "useMemo lets you cache the result of an expensive calculation.",
            "useCallback lets you cache a function definition before passing it down to an optimized component.",
        ],
        code: {
            lang: "js",
            sourceCode:
                "function TodoList({ todos, tab, theme }) {\n\tconst visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);\n\t// ...\n}",
        },
        p2: "Sometimes, you can’t skip re-rendering because the screen actually needs to update. In that case, you can improve performance by separating blocking updates that must be synchronous (like typing into an input) from non-blocking updates which don’t need to block the user interface (like updating a chart).",
        p3: "To prioritize rendering, use one of these Hooks:",
        li1: [
            "useTransition lets you mark a state transition as non-blocking and allow other updates to interrupt it.",
            "useDeferredValue lets you defer updating a non-critical part of the UI and let other parts update first.",
        ],
    },
    {
        h4: "Other Hooks",
        p0: "These Hooks are mostly useful to library authors and aren’t commonly used in the application code.",
        li: [
            "useDebugValue lets you customize the label React DevTools displays for your custom Hook.",
            "useId lets a component associate a unique ID with itself. Typically used with accessibility APIs.",
            "useSyncExternalStore lets a component subscribe to an external store.",
        ],
    },
    {
        h4: "Your own Hooks",
        p0: "You can also define your own custom Hooks as JavaScript functions.",
    },
];

export default hooksMain;
