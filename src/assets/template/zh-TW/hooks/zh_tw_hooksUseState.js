const zh_tw_hooksUseState = [
    {
        h2: "useState",
        p: "useState是一個React Hook，它允許你向組件添加一個狀態變量。",
        code: {
            lang: "js",
            sourceCode: "const [state, setState] = useState(initialState);",
        },
    },
    {
        h3: "參考",
        h4: "useState(initialState) ",
        p0: "在組件的頂層調用 useState 來聲明一個狀態變量。",
        code: {
            lang: "js",
            sourceCode:
                "import { useState } from 'react';\n\nfunction MyComponent() {\n\tconst [age, setAge] = useState(28);\n\tconst [name, setName] = useState('Taylor');\n\tconst [todos, setTodos] = useState(() => createTodos());\n\t// ...",
        },
        p1: "按照慣例使用數組解構 來命名狀態變量，例如[something, setSomething]。",
        h5: "參數",
        li: [
            "initialState：你希望state 初始化的值。它可以是任何類型的值，但對於函數有特殊的行為。在初始渲染後，此參數將被忽略。",
        ],
        p2: "如果傳遞函數作為initialState，則它將被視為初始化函數。它應該是純函數，不應該接受任何參數，並且應該返回一個任何類型的值。當初始化組件時，React 將調用你的初始化函數，並將其返回值存儲為初始狀態。請參見下面的示例。",
        h5_: "返回",
        p3: "useState返回一個由兩個值組成的數組：",
        li_: [
            "當前的state。在首次渲染時，它將與你傳遞的initialState 相匹配。",
            "set函數，它可以讓你將state 更新為不同的值並觸發重新渲染。",
        ],
    },
];

export default zh_tw_hooksUseState;
