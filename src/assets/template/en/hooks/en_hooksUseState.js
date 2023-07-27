const en_hooksUseState = [
    {
        h2: "useState",
        p: "useState is a React Hook that lets you add a state variable to your component.",
        code: {
            lang: "js",
            sourceCode: "const [state, setState] = useState(initialState);",
        },
    },
    {
        h3: "Reference",
        h4: "useState(initialState) ",
        p0: "Call useState at the top level of your component to declare a state variable.",
        code: {
            lang: "js",
            sourceCode:
                "import { useState } from 'react';\n\nfunction MyComponent() {\n\tconst [age, setAge] = useState(28);\n\tconst [name, setName] = useState('Taylor');\n\tconst [todos, setTodos] = useState(() => createTodos());\n\t// ...",
        },
        p1: "The convention is to name state variables like [something, setSomething] using array destructuring.",
        h5: "Parameters",
        li: [
            "initialState: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render.",
        ],
        p2: "If you pass a function as initialState, it will be treated as an initializer function. It should be pure, should take no arguments, and should return a value of any type. React will call your initializer function when initializing the component, and store its return value as the initial state. See an example below.",
        h5_: "Returns",
        p3: "useState returns an array with exactly two values:",
        li_: [
            "The current state. During the first render, it will match the initialState you have passed.",
            "The set function that lets you update the state to a different value and trigger a re-render.",
        ],
    },
];

export default en_hooksUseState;
