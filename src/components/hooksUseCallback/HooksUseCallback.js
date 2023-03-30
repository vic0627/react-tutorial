import React from "react";

const { useState, useEffect, useCallback } = React;

const HooksUseCallback = () => {
  const [a, setA] = useState("a");
  const [b, setB] = useState("b");
  const [c, setC] = useState("");

  const call = useCallback(
    (arg = "") => {
      console.log("call 被呼叫了");
      setC(a + arg);
    },
    [b]
  );

  useEffect(() => {
    console.log("a 變，我才會出來");
    call(b);
  }, [a]);

  return (
    <>
      <div>
        <h2>a</h2>
        <p>我會一直變，也會呼叫call</p>
        <p>{a}</p>
        <button onClick={() => setA(a + "a")}>btn a</button>
      </div>
      <div>
        <h2>b</h2>
        <p>我會一直變，也會重組call</p>
        <p>{b}</p>
        <button onClick={() => setB(b + "b")}>btn b</button>
      </div>
      <div>
        <h2>c</h2>
        <p>a會呼叫我、b會重組我</p>
        <p>{c}</p>
        <button onClick={() => call("btn")}>btn c</button>
      </div>
    </>
  );
};
export default HooksUseCallback;
