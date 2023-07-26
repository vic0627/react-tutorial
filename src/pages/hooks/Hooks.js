import { useParams } from "react-router-dom";
import HooksMain from "./template/HooksMain";

const Hooks = () => {
    const { hookName } = useParams();
    console.log(hookName);

    return (
        <>
            <h2>Hooks</h2>
            {hookName ?? <HooksMain />}
        </>
    );
};

export default Hooks;
