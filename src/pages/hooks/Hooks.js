import { useState } from "react";
import { useParams } from "react-router-dom";
import HooksMain from "./template/HooksMain";
import HooksCommon from "./template/HooksCommon";

const Hooks = () => {
    const { hookName } = useParams();

    const [lang, setLang] = useState("en");

    return (
        <>
            <div>
                <button onClick={() => setLang("en")}>en</button>
                <button onClick={() => setLang("zh-TW")}>zh-TW</button>
            </div>
            {hookName ? (
                <HooksCommon hookName={hookName} lang={lang} />
            ) : (
                <HooksMain />
            )}
        </>
    );
};

export default Hooks;
