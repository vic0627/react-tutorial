import { useState, useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import TooltipContainer from "./TooltipContainer";

const Tooltip = ({ children, targetRect }) => {
  const ref = useRef(null);

  const [tooltipHeight, setTooltipHeight] = useState(0);

  const [classList, setClassList] = useState("tooltip");

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();

    setTooltipHeight(height);

    setClassList("tooltip mounted");
  }, []);

  let tooltipX = 0;

  let tooltipY = 0;

  if (targetRect !== null) {
    tooltipX = targetRect.left;

    tooltipY = targetRect.top - tooltipHeight;

    if (tooltipY < 0) {
      // It does't fit above, so place below.
      tooltipY = targetRect.bottom;
    }
  }

  return createPortal(
    <TooltipContainer
      x={tooltipX}
      y={tooltipY}
      contentRef={ref}
      classList={classList}
    >
      {children}
    </TooltipContainer>,
    document.body
  );
};

export default Tooltip;
