import React, { useContext } from "react";
import { GlobalContext } from "../global/GlobalPopup";

const { useMemo, useState, useEffect } = React;
const HooksUseMemo = () => {
  const [a, setA] = useState("");
  let fl = ["flight", "fly", "isflslk", "flow", "sixflpq"];
  let cache = "";
  const [b, setB] = useState(["flight", "fly", "isflslk", "flow", "sixflpq"]);
  const [show, setShow] = useState(false);
  const memo = useMemo(() => {
    let t = b;
    console.log("rebuild");
    return t.filter((val) => val.includes(a));
  }, [a, b]);
  const submit = () => {
    fl.push(cache);
    //setB([...b, cache]);
    show ? setShow(false) : setShow(true);
  };
  useEffect(() => {
    console.log(`b => ${b}`);
  });
  const { GlobalPopup } = useContext(GlobalContext);
  return (
    <>
      {memo.map((val) => (
        <div key={val}>{val}</div>
      ))}
      <input type="text" onInput={(e) => setA(e.target.value)}></input>
      <input
        type="text"
        id="addFl"
        onInput={(e) => (cache = e.target.value)}
      ></input>
      <button onClick={submit}>submit</button>
      {show && <GlobalPopup bg={"#faa"}>我是誰</GlobalPopup>}
    </>
  );
};
export default HooksUseMemo;
