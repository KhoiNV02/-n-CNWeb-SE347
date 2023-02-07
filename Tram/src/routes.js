import { createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import MainLayout from "./layouts/MainLayout";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";
import { Tours } from "./pages/Tours";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/tours",
        element: <Tours />,
      },
    ],
  },
]);

export default router;
