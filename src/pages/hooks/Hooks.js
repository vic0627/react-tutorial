import { useParams } from "react-router-dom";
import HooksMain from "./template/HooksMain";
import HooksCommon from "./template/HooksCommon";

const Hooks = () => {
    const { lang, hookName } = useParams();

    return (
        <>
            {hookName ? (
                <HooksCommon hookName={hookName} lang={lang} />
            ) : (
                <HooksMain />
            )}
        </>
    );
};

export default Hooks;
