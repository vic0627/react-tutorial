import Btn from "./Btn";
import ClassTutorial from "./ClassTutorial";
import { $$ } from "../composable";


let i = 0;

// props 只能從上而下做資訊傳遞，參數注意型別問題。
// 要改變父層資料，可以將函式做為 props 向下傳遞。
const App = (props) => {
  const changeMessage = () => {
    const c = props.color;
    if (i === c.length - 1) {
      i = 0;
    } else {
      i++;
    }
    $$("#show-message").innerHTML = c[i];
  };
  return (
    <div className="App">
      <h2>{props.name.toString()}</h2>
      <Btn handleClick={changeMessage}>設定文字</Btn> {/* props.children */}
      <ClassTutorial>class</ClassTutorial>
      <p id="show-message">{props.color[0]}</p>
    </div>
  );
};

export default App;
