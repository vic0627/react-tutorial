import React, { useEffect, useState, memo } from "react";
import Item from "./Item";
import { $$ } from "../../../../composable";
import { createPortal } from "react-dom";

const Message = memo(({ obj }) => {
  const [list, setList] = useState([]);
  const [count, setcount] = useState(0);

  const tranformType = (type) => {
    let transColor, transBg;
    switch (type) {
      case "success":
        transBg = "#e1f3d8";
        transColor = "#67C23A";
        break;
      case "warning":
        transBg = "#faecd8";
        transColor = "#E6A23C";
        break;
      case "danger":
        transBg = "#fde2e2";
        transColor = "#F56C6C";
        break;
      case "info":
        transBg = "#e9e9eb";
        transColor = "#909399";
        break;
      default:
        transBg = "#d9ecff";
        transColor = "#409EFF";
        break;
    }
    return { transColor, transBg };
  };

  useEffect(() => {
    setcount(count + 1);
    if (obj) setList([...list, obj]);
  }, [obj]);

  return (
    <>
      {createPortal(
        list.map((item, idx) => (
          <Item
            style={tranformType(item.type)}
            key={idx}
            dur={item.dur || 3000}
          >
            {item.title}
          </Item>
        )),
        $$("#global-protal") || document.body
      )}
    </>
  );
});

export default Message;
