import { useSelector } from "react-redux";
import Logo from "../logo/Logo";
import styles from "./navigation.module.scss";
import store from "../../store";
import { switchLang } from "../../store/slices/languageSlice";
import VicSelect from "../common/vicSelect/VicSelect";
import { languageMenu } from "./menu";
import { useEffect, useState } from "react";

const Navigation = () => {
    const lang = useSelector((state) => state.language.current);

    const [theme, setTheme] = useState(false);

    const { navigation, navigation__img } = styles;

    const handleSelectLanguage = (e) => {
        store.dispatch({
            type: switchLang.type,
            payload: e,
        });
    };

    const handleClick = () => {
        setTheme((val) => !val);
    };

    useEffect(() => {
        if (theme) document.body.classList.add("dark");
        else document.body.classList.remove("dark");
    }, [theme]);

    return (
        <header className={navigation}>
            <div className={navigation__img} onClick={handleClick}>
                <Logo />
            </div>
            <div>
                <VicSelect
                    defaultValue={lang}
                    options={languageMenu}
                    inputCallback={handleSelectLanguage}
                />
            </div>
        </header>
    );
};

export default Navigation;
