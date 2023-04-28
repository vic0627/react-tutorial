import { useEffect, useState } from "react";
import "./Message.css";
const Item = ({ children, style, dur }) => {
  const [messageAni, setMessageAni] = useState("popping");
  const [pop, setPop] = useState(true);
  useEffect(() => {
    (async () => {
      await delayFn(() => setMessageAni("fading"), dur);
      await delayFn(() => {
        setPop(false);
      }, 200);
    })();
    return () => {};
  }, []);
  const delayFn = (fn, time) => {
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        fn();
        resolve(clearTimeout(timer));
      }, time);
    });
  };
  const closeMessage = () => {
    setMessageAni("fading");
    delayFn(() => setPop(false), 200);
  };
  return (
    pop && (
      <div
        id='global-message'
        className={`global-message ${messageAni}`}
        style={{ background: style.transBg, borderColor: style.transColor }}
      >
        {<div className='global-message-icon'></div>}
        <p style={{ color: style.transColor }}>{children}</p>
        {
          <div
            className='global-message-close'
            onClick={closeMessage}
          ></div>
        }
      </div>
    )
  );
};
export default Item;
