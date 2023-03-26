import React from "react";
import "./Converter.css";

import UnitControl from "./UnitControl";
import CardFooter from "./CardFooter";

const { useState } = React;

const Converter = () => {
  const [inputValue, setInputValue] = useState(0);

  const handleInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div className='container'>
      <div className='card-header'>Network Speed Converter</div>
      <div className='card-body'>
        <UnitControl />
        <div className='converter'>
          <div className='flex-1'>
            <div className='converter-title'>Set</div>
            <input
              type='number'
              className='input-number'
              min='0'
              onInput={handleInput}
              value={inputValue}
            />
          </div>

          <span
            className='angle-icon fa-2x'
            style={{ marginTop: "30px" }}
          >
            <i className='fas fa-angle-right'></i>
          </span>

          <div className='text-right flex-1'>
            <div className='converter-title'>Show</div>
            <input
              type='text'
              className='input-number text-right'
              value={inputValue / 8}
              disabled
            />
          </div>
        </div>
      </div>
      <CardFooter value={inputValue}/>
    </div>
  );
};
export default Converter;

// JSX - 補充

// JSX 最外層只能有一個元素，如果想返回兩個以上可以使用 <React.Fragment></React.Fragment> (需 import React)
const container = () => (
  <React.Fragment>
    <div>這是第一個</div>
    <div>這是第二個</div>
  </React.Fragment>
);
// 也可簡寫為 <></>
const container2 = () => (
  <>
    <div>這是第一個</div>
    <div>這是第二個</div>
  </>
);
