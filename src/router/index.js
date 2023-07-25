import { createHashRouter } from "react-router-dom";
import Layout from "../pages/Layout";

const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
  },
]);

export default router;
