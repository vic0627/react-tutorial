import { useCallback, useEffect, useRef, useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import "./vicText.scss";

const PasswordSwitch = ({ inputType, switchInputType }) => {
    return (
        <>
            {inputType === "password" || (
                <RemoveRedEyeOutlinedIcon
                    className='vic_text__icon'
                    onClick={switchInputType}
                />
            )}
            {inputType === "text" || (
                <VisibilityOffOutlinedIcon
                    className='vic_text__icon'
                    onClick={switchInputType}
                />
            )}
        </>
    );
};

const VicText = ({
    type = "text",
    showPassword = false,
    rule,
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

    const [inputClass, setInputClass] = useState("vic_text");

    const [testResult, setTestResult] = useState(true);

    const switchInputType = () => {
        if (!showPassword) return;

        const targetType = inputType === "text" ? "password" : "text";

        setInputType(targetType);
    };

    const handler = useCallback(
        (e, callback) => {
            const { value } = e.target;

            if (rule instanceof RegExp) {
                const tr = rule.test(value);

                setTestResult(tr);
            }

            if (typeof rule === "function") rule(value, setTestResult);

            if (typeof callback === "function") callback(e);
        },
        [rule]
    );

    useEffect(() => {
        const input = inputRef.current;

        const events = {
            input: onInput,
            focus: onFocus,
            blur: onBlur,
        };

        const eventRegister = (action) => {
            Object.entries(events).forEach(([key, callback]) => {
                if (typeof callback !== "function") return;

                if (action === "add")
                    input.addEventListener(key, (e) => handler(e, callback));

                if (action === "remove")
                    input.removeEventListener(key, (e) => handler(e, callback));
            });
        };

        eventRegister("add");

        return () => {
            eventRegister("remove");
        };
    }, [inputRef, onInput, onFocus, onBlur, handler]);

    useEffect(() => {
        testResult
            ? setInputClass("vic_text")
            : setInputClass(inputClass + " test_fail");
    }, [testResult]);

    return (
        <label className={inputClass}>
            <div className='vic_text__label'>{label}</div>
            <input
                ref={inputRef}
                className='vic_text__input'
                type={inputType}
                readOnly={disabled}
                placeholder={placeholder}
                onChange={(e) => handler(e, onChange)}
            />
            {!showPassword || (
                <PasswordSwitch
                    inputType={inputType}
                    switchInputType={switchInputType}
                />
            )}
        </label>
    );
};

export default VicText;
