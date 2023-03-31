import { useEffect, useState } from "react";
import "./Message.css";
const Item = ({ children, color, bg, dur = 3000 }) => {
  let timer;
  const [messageAni, setMessageAni] = useState("popping");
  const [pop, setPop] = useState(true);
  let style = { color, bg };
  useEffect(() => {
    (async () => {
      console.log("mounted");
      await delayFn(dur, () => setMessageAni("fading"));
      await delayFn(1000, () => {
        setPop(false);
        console.log("unmounted");
      });
    })();
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const delayFn = (time, fn) => {
    return new Promise((resolve) => {
      timer = setTimeout(() => {
        fn();
        resolve();
      }, time);
    });
  };
  return (
    pop && (
      <div
        id='global-message'
        className={`global-message ${messageAni}`}
        style={{ background: style.bg }}
      >
        <p style={{ color: style.color }}>{children}</p>
      </div>
    )
  );
};
export default Item;
