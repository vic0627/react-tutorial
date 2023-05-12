import { ThemeProvider } from "./context";
import Child from "./Child";
const Parent = () => {
  return (
    <ThemeProvider>
      <Child />
    </ThemeProvider>
  );
};
export default Parent;
