import { createHashRouter, redirect } from "react-router-dom";
import store from "../store";
import Layout from "../pages/Layout";
import Home from "../pages/home/Home";
import Hooks from "../pages/hooks/Hooks";

const { current } = store.getState().language;

const routes = [
    {
        path: "/",
        element: <Layout />,
        loader: async ({ request, params }) => {
            const { url } = request;

            if (!url.endsWith("home")) return redirect(`${current}/home`);

            return null;
        },
        children: [
            {
                path: ":lang/home",
                element: <Home />,
            },
            {
                path: ":lang/hooks",
                element: <Hooks />,
            },
            {
                path: ":lang/hooks/:hookName",
                element: <Hooks />,
            },
        ],
    },
];

const router = createHashRouter(routes);

export default router;
