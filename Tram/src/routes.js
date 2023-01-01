import { createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <Home />,
  },
]);

export default router;
