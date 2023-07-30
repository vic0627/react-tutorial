import { useEffect, useState } from "react";
import "./pointer.scss";
import {
    windowMouseMoveHandler,
    windowMouseOutHandler,
    windowMouseDownHandler,
    windowMouseUpHandler,
} from "./handler";

const Pointer = () => {
    const [position, setPosition] = useState({ top: "0px", left: "0px" });

    const [svgClass, setSvgClass] = useState("pointer");

    useEffect(() => {
        window.addEventListener("mousemove", (e) =>
            windowMouseMoveHandler({ e, svgClass, setSvgClass, setPosition })
        );

        window.addEventListener("mouseout", () =>
            windowMouseOutHandler({ setSvgClass })
        );
        window.addEventListener("mousedown", () =>
            windowMouseDownHandler({ setSvgClass })
        );
        window.addEventListener("mouseup", () =>
            windowMouseUpHandler({ setSvgClass })
        );
    }, []);

    return (
        <div className={svgClass} style={position}>
            <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* point */}
                {/* <rect x="21" y="21" width="3" height="3" /> */}
                {/* top line */}
                <line x1="22.5" y1="9" x2="22.5" y2="18" />
                {/* right line */}
                <line x1="27" y1="22.5" x2="36" y2="22.5" />
                {/* bottom line */}
                <line x1="22.5" y1="27" x2="22.5" y2="36" />
                {/* left line */}
                <line y1="22.5" x1="9" y2="22.5" x2="18" />
            </svg>
        </div>
    );
};

export default Pointer;
