import { createHashRouter, redirect } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/home/Home";
import Hooks from "../pages/hooks/Hooks";
import HooksUseState from "../components/hooksUseState/HooksUseState";
import HooksUseReducer from "../components/hooksUseReducer/HooksUseReducer";
import HooksUseContext from "../components/hooksUseContext/HooksUseContext";
import HooksUseRef from "../components/hooksUseRef/HooksUseRef";
// import HooksUseEffect from "../components/hooksUseEffect/HooksUseEffect";
import HooksUseLayoutEffect from "../components/hooksUseLayoutEffect/HooksUseLayoutEffect";
import HooksUseMemo from "../components/hooksUseMemo/HooksUseMemo";
import HooksUseCallback from "../components/hooksUseCallback/HooksUseCallback";
import HooksUseTransition from "../components/hooksUseTransition/HooksUseTransition";
import HooksUseId from "../components/hooksUseId/HooksUseId";

const routes = [
    {
        path: "/",
        element: <Layout />,
        loader: async ({ request, params }) => {
            const { url } = request;

            if (!url.endsWith("home")) return redirect("home");

            return null;
        },
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "hooks",
                element: <Hooks />,
                children: [
                    {
                        path: "usestate",
                        element: <HooksUseState />,
                    },
                    {
                        path: "usereducer",
                        element: <HooksUseReducer />,
                    },
                    {
                        path: "usecontext",
                        element: <HooksUseContext />,
                    },
                    {
                        path: "useref",
                        element: <HooksUseRef />,
                    },
                    {
                        path: "uselayouteffect",
                        element: <HooksUseLayoutEffect />,
                    },
                    {
                        path: "usememo",
                        element: <HooksUseMemo />,
                    },
                    {
                        path: "usecallback",
                        element: <HooksUseCallback />,
                    },
                    {
                        path: "usetransition",
                        element: <HooksUseTransition />,
                    },
                    {
                        path: "useid",
                        element: <HooksUseId />,
                    },
                ],
            },
        ],
    },
];

const router = createHashRouter(routes);

export default router;
