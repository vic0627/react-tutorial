import React from "react";
import TestB from "./TestB";
const { useState, useEffect } = React;

const Test = () => {
  console.log("--- start rendering ---"); // 開始執行函數組件。

  const [num, setNum] = useState(0);
  const [str, setStr] = useState("a");
  const [show, setShow] = useState("none");

  const handleNum = () => {
    setNum(num + 1);
    console.log(`setNum called`); // 觸發點擊事件。
  };
  const handleStr = () => {
    setStr(str + "a");
    console.log(`setStr called`); // 觸發點擊事件。
  };
  const handleShow = () => {
    show === "none" ? setShow("block") : setShow("none");
    console.log(`setShow called`); // 觸發點擊事件。
  }

  useEffect(() => {
    console.log(`setup called, num: ${num}, str: ${str}`); // setup function 被調用。
    return () => {
      console.log("cleanup called"); // cleanup function 被調用。
    };
  }, [num]);

  return (
    <>
      <p>{num}</p>
      <button onClick={handleNum}>num increase</button>
      <p>{str}</p>
      <button onClick={handleStr}>str increase</button>
      <br/>
      <button onClick={handleShow}>show</button>
      <TestB display={show}/>
      {console.log("--- complete rendering ---")}
      {/* 渲染完成 */}
    </>
  );
};

export default Test;
