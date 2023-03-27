import React from "react";

const { useState } = React;

const Test = () => {
  const [a, setA] = useState({name: "", age: ""});

  const b = (n) => () => {
    setA(n);
    console.log(a);
  };

  return (
    <div
      style={{ width: "50px", height: "50px", background: "#aaa" }}
      onClick={b(123)}
    >
      {a.name}
    </div>
  );
};
export default Test;
