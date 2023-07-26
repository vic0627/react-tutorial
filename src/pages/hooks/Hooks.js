import { Outlet } from "react-router-dom";

const Hooks = () => {
    return (
        <>
            <h2>hooks page</h2>
            <section>
                <Outlet />
            </section>
        </>
    );
};

export default Hooks;
