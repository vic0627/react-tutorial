import { useState } from "react";
import UserContext from "./context";
import Child from "./Child";

const Parent = () => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Child />
    </UserContext.Provider>
  );
};
export default Parent;
