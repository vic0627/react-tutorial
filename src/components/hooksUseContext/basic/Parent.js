import { MyContext } from "./useContext";
import Child from "./Child";

const Parent = () => {
  const profile = {
    name: "Vic",
    age: 10,
    isMale: true,
  };
  return (
    <div>
      <MyContext.Provider value={profile}>
        <Child />
      </MyContext.Provider>
    </div>
  );
};
export default Parent;
