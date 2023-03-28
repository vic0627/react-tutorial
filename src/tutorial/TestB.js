import React from "react";
const { useEffect, useState } = React;
const TestB = ({ display }) => {
  const [second, setSecond] = useState(0);
  const [ms, setMs] = useState(0);
  useEffect(() => {
    console.log(`child setup called`);
    let cacheMs = 0,
      cacheS = 0;
    const timer = setInterval(() => {
      if (cacheMs < 100) {
        cacheMs++;
        setMs(cacheMs);
      } else {
        cacheS++;
        cacheMs = 0;
        setSecond(cacheS);
      }
    }, 10);
    return () => {
      console.log("child cleanup called");
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div
        style={{ fontSize: "50px", color: "#fa0", display }}
        id='dad'
      >
        {second} : {ms}
      </div>
      {Unit(second)}
      <Unit2 s={second} />
    </>
  );
};
const Unit = (s) => {
  if (s > 3) return <div style={{ color: "#f00", fontSize: "60px" }}>HI</div>;
};
const Unit2 = ({ s }) => {
  if (s > 3) return <div style={{ color: "#f00", fontSize: "60px" }}>HI</div>;
};
export default TestB;
