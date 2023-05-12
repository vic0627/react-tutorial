import { useRef, useState } from "react";
let renderCount = 0;
const ReferencingA = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  const handleClick = () => {
    alert(
      `countRef: ${(countRef.current = countRef.current + 1)}\ncount: ${count}`
    );
  };
  
  return (
    <>
      <h3>Render Count: {renderCount += 1}</h3>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleClick}>Show alert</button>
    </>
  );
};
export default ReferencingA;
