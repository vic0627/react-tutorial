import React from "react";
const { useMemo, useState } = React;
const HooksUseMemo = () => {
  const [a, setA] = useState("");
  let fl = ["flight", "fly", "isflslk", "flow", "sixflpq"]
  const [b, setB] = useState(fl);
  const memo = useMemo(() => {
    b.filter((val) => val.includes(a))
}, [a]);

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
        onChange={(e) => setB(fl.push(e.target.value))}
      ></input>
    </>
  );
};
export default HooksUseMemo;
