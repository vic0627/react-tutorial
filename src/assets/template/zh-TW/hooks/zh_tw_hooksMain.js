const en_hooksMain = [
    {
        h2: "內置React Hook",
        p0: "Hook讓你可以在組件中使用不同的React 功能。你可以使用內置的Hook 或者把它們組合起來建立你自己的。本頁列出了React 中所有的內置Hook。",
    },
    {
        h3: "狀態Hook",
        p0: "state讓一個組件“記住”用戶輸入的信息，比如，一個表單組件可以使用state 來存儲輸入值，而一個圖片庫組件可以使用state 來存儲選定的圖片索引。",
        p1: "要給一個組件添加狀態，可以使用下面的Hook：",
        li: [
            "useState聲明了一個你可以直接更新的state 變量。",
            "useReducer聲明了一個帶有更新邏輯的state 變量在一個reducer 函數 中。",
        ],
        code: {
            lang: "js",
            sourceCode:
                "function ImageGallery() {\n\tconst [index, setIndex] = useState(0);\n\t// ...",
        },
    },
    {
        h3: "上下文Hook",
        p0: "context讓一個組件從遠處的父組件接收信息，而不需要將其作為props 傳遞。比如，app 的頂層組件可以將當前的UI 主題傳遞給下面的所有組件，無論它們層級多深。",
        li: ["useContext讀取並訂閱一個context。"],
        code: {
            lang: "js",
            sourceCode:
                "function Button() {\n\tconst theme = useContext(ThemeContext);\n\t// ...",
        },
    },
    {
        h3: "參考Hook",
        p0: "ref讓一個組件持有一些不用於渲染的信息，如DOM 節點或一個timeout ID。與state 不同的是，更新ref 並不會重新渲染你的組件。ref 是React 範式的一個“規避機制”。當你需要與非React 系統一起工作時，它們很有用，比如內置的瀏覽器API。",
        li: [
            "useRef聲明一個ref。你可以在其中保存任何值，但最常見的是它用來保存一個DOM 節點。",
            "useImperativeHandle可以讓你自定義組件所暴露的ref。一般很少使用。",
        ],
        code: {
            lang: "js",
            sourceCode:
                "function Form() {\n\tconst inputRef = useRef(null);\n\t// ...",
        },
    },
    {
        h3: "效果Hook",
        p0: "Effect讓一個組件連接到外部系統並與之同步。這包括處理網絡、瀏覽器、DOM、動畫、使用不同UI 庫編寫的widgets 以及其他非React 代碼。",
        li: ["useEffect將一個組件連接到外部系統。"],
        code: {
            lang: "js",
            sourceCode:
                "function ChatRoom({ roomId }) {\n\tuseEffect(() => {\n\t\tconst connection = createConnection(roomId);\n\t\tconnection.connect();\n\t\treturn () => connection.disconnect();\n\t}, [roomId]);\n\t// ...",
        },
        p1: "Effect 是React 範式的“規避機制”。不要用Effect 來協調你的應用程序的數據流。如果你不與外部系統交互，你可能不需要Effect。",
        p2: "useEffect有兩個很少使用的變換形式，它們在時機上有一些差異：",
        li1: [
            "useLayoutEffect在瀏覽器重新繪製屏幕前執行。在這裡，你可以測量佈局。",
            "useInsertionEffect在React 對DOM 進行更改之前觸發。在這裡，庫可以插入動態的CSS。",
        ],
    },
    {
        h3: "性能Hook",
        p0: "優化重新渲染性能的一個常見方法就是跳過不必要的工作。比如，你可以告訴React 重用一個緩存的計算結果，或者如果數據在上一次渲染後沒有變化，就跳過這次重新渲染。",
        p1: "你可以使用這些Hook 跳過計算和不必要的重新渲染：",
        li: [
            "useMemo讓你緩存一個代價非常高的計算結果。",
            "useCallback讓你在將一個函數定義傳遞給一個優化的組件之前緩存它。",
        ],
        code: {
            lang: "js",
            sourceCode:
                "function TodoList({ todos, tab, theme }) {\n\tconst visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);\n\t// ...\n}",
        },
        p2: "有時，你不能跳過重新渲染，因為屏幕確實需要更新。在這種情況下，你可以通過將必須同步的阻塞更新（比如使用輸入法輸入內容）與不需要阻塞用戶界面的非阻塞更新（比如更新圖表）分開以提高性能。",
        p3: "要確定渲染的優先級，可以使用以下Hook：",
        li1: [
            "useTransition讓你把一個狀態轉換標記為非阻塞，並允許其他更新中斷它。",
            "useDeferredValue讓你推遲更新用戶界面的一個非關鍵部分，讓其他部分更新。",
        ],
    },
    {
        h3: "其他Hook",
        p0: "這些Hook 主要對庫的作者有用，在應用代碼中並不常用。",
        li: [
            "useDebugValue允許你在React 開發者工具中為自定義Hook 添加一個標籤。",
            "useId允許組件綁定一個唯一ID。通常與可訪問性API 一起使用。",
            "useSyncExternalStore允許一個組件訂閱一個外部store。",
        ],
    },
    {
        h3: "自定義Hook",
        p0: "你也可以在JavaScript 函數中定義你自己的Hook。",
    },
];

export default en_hooksMain;
