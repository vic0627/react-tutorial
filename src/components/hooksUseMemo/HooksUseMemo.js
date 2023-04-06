import React from "react";
const { useMemo, useState } = React;
const HooksUseMemo = () => {
  const [searchValue, setSearchValue] = useState("");
  const arr = ["flight", "fly", "folk", "flow", "frog"];
  const memo = useMemo(
    () => arr.filter((val) => val.includes(searchValue)),
    [searchValue]
  );

  return (
    <>
      {memo.map((val) => (
        <div key={val}>{val}</div>
      ))}
      <input
        type='text'
        onInput={(e) => setSearchValue(e.target.value)}
      ></input>
    </>
  );
};
export default HooksUseMemo;
