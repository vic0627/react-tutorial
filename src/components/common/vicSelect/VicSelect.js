import { useEffect, useState } from "react";
import styles from "./vicSelect.module.css";

const VicSelect = ({
    defaultValue,
    options = [],
    inputCallback = () => {},
}) => {
    const [value, setValue] = useState(defaultValue);

    const [display, setDisplay] = useState();

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const targetDisplay = options.find(
            (option) => option.value === value
        ).innerText;

        setDisplay(targetDisplay);

        inputCallback(value);
    }, [value]);

    const dropdownHandler = (e) => {
        const data = e.target.dataset;

        const switching = data?.toggle;

        if (switching) setToggle((previous) => !previous);

        const chosen = data?.value;

        if (!chosen) return;

        setValue(chosen);

        setToggle(false);
    };

    const {
        vic_select,
        vic_select__display,
        vic_select__dropdown,
        vic_select__options,
    } = styles;

    return (
        <div
            className={vic_select}
            onClick={dropdownHandler}
        >
            <p
                className={vic_select__display}
                data-toggle
            >
                {display}
            </p>
            {toggle && (
                <div className={vic_select__dropdown}>
                    {options.map((option) => {
                        const { value, innerText } = option;

                        return (
                            <p
                                className={vic_select__options}
                                data-value={value}
                                key={value}
                            >
                                {innerText}
                            </p>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default VicSelect;
