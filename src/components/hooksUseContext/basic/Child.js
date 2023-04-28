import { useContext } from "react";
import { MyContext } from "./useContext";

const Child = () => {
  const value = useContext(MyContext);
  const { name, age, isMale } = value;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>isMale: {isMale.toString()}</p>
    </div>
  );
};

export default Child;
