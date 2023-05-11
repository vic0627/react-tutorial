import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./context";

const Parent = () => {
  const value = useContext(ThemeContext);
  console.log(value)
  return (
    <ThemeProvider />
  );
};
export default Parent;
