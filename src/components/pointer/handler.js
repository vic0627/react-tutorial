export const windowMouseMoveHandler = ({
    e,
    svgClass,
    setSvgClass,
    setPosition,
}) => {
    if (!svgClass.includes("mounted")) setSvgClass("pointer mounted");

    const { clientX, clientY } = e;

    const top = clientY - 0.5 + "px";

    const left = clientX - 0.5 + "px";

    setPosition({ top, left });
};

export const windowMouseOutHandler = ({ setSvgClass }) => {
    setSvgClass("pointer");
};

export const windowMouseDownHandler = ({ setSvgClass }) => {
    setSvgClass("pointer mounted trigger");
};

export const windowMouseUpHandler = ({ setSvgClass }) => {
    setSvgClass("pointer mounted");
};
