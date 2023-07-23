import "./tooltip.css";

const tolltipStyle = (x, y) => {
  return {
    position: "absolute",
    pointerEvents: "none",
    left: 0,
    top: 0,
    transform: `translate3d(${x}px, ${y}px, 0)`,
  };
};

const TooltipContainer = ({ children, x, y, contentRef, classList }) => {
  return (
    <div style={tolltipStyle(x, y)}>
      <div ref={contentRef} className={classList}>
        {children}
      </div>
    </div>
  );
};

export default TooltipContainer;
