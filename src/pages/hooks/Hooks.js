import { Outlet, useParams } from "react-router-dom";

const Hooks = () => {
    const { hookName } = useParams();
    console.log(hookName);
    return (
        <>
            <h2>hooks page</h2>
            <section>{hookName || <h2>nothing</h2>}</section>
        </>
    );
};

export default Hooks;
