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
  const [obj, setObj] = useState();
  return (
    <div className='App'>
      <div style={btnGroup}>
        <button
          onClick={() =>
            setObj({
              title: "Success has been clicked",
              type: "success",
              dur: 1000,
            })
          }
        >
          Success
        </button>
        <button
          onClick={() =>
            setObj({
              title: "Warning has been clicked",
              type: "warning",
              dur: 500,
            })
          }
        >
          Warning
        </button>
        <button
          onClick={() =>
            setObj({
              title: "Danger has been clicked",
              type: "danger",
              dur: 1500,
            })
          }
        >
          Danger
        </button>
        <button
          onClick={() =>
            setObj({ title: "Info has been clicked", type: "info", dur: 800 })
          }
        >
          Info
        </button>
        <button
          onClick={() =>
            setObj({
              title: "Default has been clicked",
              type: "default",
              dur: 200,
            })
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
