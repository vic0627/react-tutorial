import { useRef } from "react";

const DomManipulate = () => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input
        type='text'
        ref={inputRef}
      />
      <button onClick={handleButtonClick}>Focus Input</button>
    </>
  );
};
export default DomManipulate;
