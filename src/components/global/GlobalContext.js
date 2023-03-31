// import React from "react";

import Message from "./src/message/Message";

// export const GlobalContext = React.createContext(null);

// GlobalContext.Message = Message;
const style = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  pointerEvents: "none",
  margin: "0",
  padding: "0",
};

const GlobalTest = () => {
  return (
    <div
      className='global-protal'
      id='global-protal'
      style={style}
    ></div>
  );
};

export { GlobalTest, Message };
