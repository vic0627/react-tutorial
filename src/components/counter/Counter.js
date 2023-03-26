import "./Counter.css";
import React from "react";

// React Hooks - useState
// 監聽資料變動，自動更新畫面。
// !!! 重要補充：千萬不能在條件式（conditions）、迴圈（loops）或嵌套函式（nested functions）中呼叫 Hook 方法! !!! //

// 1. 從 React 取出 useState。
const { useState } = React;

const Counter = ({s}) => {
  // 2. const [變數名稱, 修改變數值的方法] = useState(值)
  const [count, setCount] = useState(s);

  // 3. 定義欲綁定事件之函式，邏輯請見下方補充說明。
  const calc = (c) => () => c ? setCount(count + 1) : setCount(count - 1);

  return (
    <div className='counter'>
      <div
        className='calc-btn'
        onClick={calc(false)}
        style={{ visibility: count <= -10 && "hidden" }}
      />
      <div
        className='board'
        id='board'
      >
        {count}
      </div>
      <div
        className='calc-btn'
        onClick={calc(true)} /* 綁定事件 */
        style={{ visibility: count >= 10 && "hidden" }}
      />
    </div>
  );
};
export default Counter;

//----- 隱藏 DOM (類似 Vue 的 v-if) -----//
// {count < 10 && (
//   <div
//     className="chevron chevron-up"
//     onClick={() => {
//       setCount(count + 1);
//     }}
//   />
// )}

//----- 事件的 call back function 帶參數 -----//
// onClick={function(arguments)} 這種方式會直接啟動函式，JS 看到小括號會立即呼叫。

// 解法一: 事件內再用一個匿名箭頭函式返回欲呼叫之函式。
// ex. onClick={() => function(arguments)}

// 解法二: 函式定義時再多包一層函式返回。
// const calc = (c) => () => c ? setCount(count + 1) : setCount(count - 1);
// onClick={calc(true)}

//---------- 補充 - Boolean ----------//

// 以下的值轉布林值時會判斷為 false :
// 1. null
// 2. NaN
// 3. 0
// 4. "" 、 ''
// 5. undefined

//----- 補充 - 邏輯運算子（Expressions - Logical operator） -----//

// JSX 的 {} 只能放入表達式 (expressions)，無法寫入 if...else... 這種陳述式 (statement)，
// 所以在 React 中常使用邏輯運算子來做判斷。

// || (OR) - 前值為 false 會 return 後值。
// const a = 0 || "iPhone"; // a: false || true => 'iPhone'
// const b = 100 || 10; // b: true || true => '100'

// && (AND) - 前值為 true 會 return 後值。
// const c = 0 && "iPhone"; // c: false && true => 0
// const d = 100 && 10; // d: true && true => 10
