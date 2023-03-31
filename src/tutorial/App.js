import { Message } from "../components/global/GlobalContext";
import { useState } from "react";
const btnGroup = {
  width: "100px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
};

const App = () => {
  // const [title, setTitle] = useState("");
  // const [type, setType] = useState("");
  const [obj, setObj] = useState();
  return (
    <div className='App'>
      {/* <input
        type='text'
        onInput={(e) => setTitle(e.target.value)}
      ></input> */}
      <div style={btnGroup}>
        <button
          onClick={() =>
            setObj({ title: "Success bas been clicked", type: "success" })
          }
        >
          Success
        </button>
        <button
          onClick={() =>
            setObj({ title: "Warning bas been clicked", type: "warning" })
          }
        >
          Warning
        </button>
        <button
          onClick={() =>
            setObj({ title: "Danger bas been clicked", type: "danger" })
          }
        >
          Danger
        </button>
        <button
          onClick={() =>
            setObj({ title: "Info bas been clicked", type: "info" })
          }
        >
          Info
        </button>
        <button
          onClick={() =>
            setObj({ title: "Default bas been clicked", type: "default" })
          }
        >
          default
        </button>
      </div>
      <Message obj={obj} />
    </div>
  );
};

export default App;
