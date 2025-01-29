import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import NotPageFound from "./components/NotPageFound";
// import ErrorPage from "./components/ErrorPage";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about", 
        element: <About />,
      },
      {
        path: "contact", 
        element: <Contact />,
      },
      {
        path: "projects", 
        element: <Projects />,
      },
      {
        path: "*",
        element: <NotPageFound />,
      },
    ],
  },
]);

export default router;
