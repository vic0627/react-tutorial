import React from "react";
import "./GlobalPopup.css";
export const GlobalContext = React.createContext(null);
const { useEffect } = React;
const GlobalPopup = ({ children, bg }) => {
  useEffect(() => {
    document.getElementById("global-popup").classList.add("popping");
  }, []);
  return (
    <div id="global-popup" className="global-popup" style={{ background: bg }}>
      <p>{children}</p>
    </div>
  );
};

GlobalContext.GlobalPopup = GlobalPopup;
