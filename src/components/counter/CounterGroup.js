import Counter from "./Counter";

// 使用迴圈重複產生多個 counter

// 1. 透過 Array.from 一次產生帶有 n 個元素的陣列。
const counters = Array.from({ length: 10 }, (_, idx) => idx); // [0, 1, 2, ..., 9]

const CounterGroup = () => {
  return (
    <div className='counter-group'>
      {/* 2. 使用 map 來執行迴圈 */}
      {/* map() 會返回一個新的陣列，故用此方式返回一個都是 <Counter /> 的陣列 */}
      {counters.map((item => (
        <Counter key={item} s={item} />
      )))}
    </div>
  );
};
export default CounterGroup;
