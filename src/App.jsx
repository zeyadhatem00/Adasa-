import { useState } from "react";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Notfound from "./Pages/Notfound";
import Blogdetails from "./Pages/Blogdetails";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Blog", element: <Blog /> },
        { path: "blog/:slug", element: <Blogdetails /> },
        { path: "*", element: <Notfound /> },
        { path: "Privacy", element: <Privacy /> },
        { path: "Terms", element: <Terms /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
