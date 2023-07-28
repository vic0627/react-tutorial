import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AbcSharpIcon from "@mui/icons-material/AbcSharp";
import menu, { languageMenu } from "./menu";
import store from "../../store";
import { switchLang } from "../../store/slices/languageSlice";
import VicSelect from "../common/vicSelect/VicSelect";

const Sidebar = () => {
    const lang = useSelector((state) => state.language.current);

    const handleSelectLanguage = (e) => {
        // const { value } = e.target;

        store.dispatch({
            type: switchLang.type,
            payload: e,
        });
    };

    return (
        <aside>
            <AbcSharpIcon />
            {menu(lang).map((parent) => {
                const { name, to, children } = parent;

                return (
                    <div key={name}>
                        <div>
                            <Link to={to}>{name}</Link>
                        </div>
                        {children && (
                            <div>
                                {children.map((child) => {
                                    const { name, to } = child;

                                    return (
                                        <div key={name}>
                                            <Link to={to}>{name}</Link>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
            {/* <div>
                <VicSelect
                    defaultValue={lang}
                    options={languageMenu}
                    inputCallback={handleSelectLanguage}
                />
            </div> */}
        </aside>
    );
};

export default Sidebar;
