import { useRef, useState } from "react";
import Tooltip from "./Tooltip";

const ButtonWithTootip = ({ tooltipContent, ...rest }) => {
  const [targetRect, setTargetRect] = useState(null);

  const buttonRef = useRef(null);

  const handlePointerEnter = () => {
    const rect = buttonRef.current.getBoundingClientRect();

    const { top, right, bottom, left } = rect;

    setTargetRect({ top, right, left, bottom });
  };

  const handlePointerLeave = () => {
    setTargetRect(null);
  };

  return (
    <>
      <button
        {...rest}
        ref={buttonRef}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      />
      {targetRect !== null && (
        <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>
      )}
    </>
  );
};

export default ButtonWithTootip;
