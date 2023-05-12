import { useContext } from "react";
import { ThemeContext } from "./context";

const Child = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <p>{theme}</p>
      <button onClick={toggleTheme}>toggle</button>
    </>
  );
};
export default Child;
