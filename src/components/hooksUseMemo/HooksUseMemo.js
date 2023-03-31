import React, { useContext } from "react";
import ReactDOM from "react-dom/client";

import { GlobalContext } from "../global/GlobalContext";
import Message from "../global/src/message/Message";
const { useMemo, useState, useEffect } = React;
const HooksUseMemo = () => {
  const [a, setA] = useState("");
  let fl = ["flight", "fly", "isflslk", "flow", "sixflpq"];
  let cache = "";
  const [b, setB] = useState(["flight", "fly", "isflslk", "flow", "sixflpq"]);
  const [show, setShow] = useState([]);
  const memo = useMemo(() => {
    let t = b;
    //console.log("rebuild");
    return t.filter((val) => val.includes(a));
  }, [a, b]);
  const submit = () => {
    fl.push(cache);
    //setB([...b, cache]);
    setShow([...show, "a"])
  };
  useEffect(() => {
    console.log(`show => ${show}`);
  }, [show]);
  // const { Message } = useContext(GlobalContext);

  return (
    <>
      {memo.map((val) => (
        <div key={val}>{val}</div>
      ))}
      <input
        type='text'
        onInput={(e) => setA(e.target.value)}
      ></input>
      <input
        type='text'
        id='addFl'
        onInput={(e) => (cache = e.target.value)}
      ></input>
      <button onClick={() => Message({show})}>submit</button>
      {/* <Message show={show}/> */}
    </>
  );
};
export default HooksUseMemo;
