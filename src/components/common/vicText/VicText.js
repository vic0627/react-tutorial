import { useEffect, useRef, useState } from "react";
import "./vicText.scss";

const VicText = ({
    type = "text",
    showPassword = false,
    rule,
    validation,
    disabled = false,
    label = "",
    placeholder = "",
    onChange,
    onInput,
    onFocus,
    onBlur,
}) => {
    const inputRef = useRef(null);

    const [inputType, setInputType] = useState(type);

    const switchInputType = () => {
        if (!showPassword) return;

        const targetType = inputType === "text" ? "password" : "text";

        setInputType(targetType);
    };

    useEffect(() => {
        const input = inputRef.current;

        const events = {
            change: onChange,
            input: onInput,
            focus: onFocus,
            blur: onBlur,
        };

        const eventRegister = (action) => {
            Object.entries(events).forEach(([key, callback]) => {
                if (typeof callback !== "function") return;

                if (action === "add") input.addEventListener(key, callback);

                if (action === "remove")
                    input.removeEventListener(key, callback);
            });
        };

        eventRegister("add");

        return () => {
            eventRegister("remove");
        };
    }, [inputRef, onChange, onInput, onFocus, onBlur]);

    return (
        <label className="vic_text">
            <div className="vic_text__label">{label}</div>
            <input
                ref={inputRef}
                className="vic_text__input"
                type={inputType}
                readOnly={disabled}
                placeholder={placeholder}
            />
        </label>
    );
};

export default VicText;
