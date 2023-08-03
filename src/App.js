import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Componenets/Header";
import Body from "./Componenets/Body";
import Footer from "./Componenets/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Componenets/About";
import Contact from "./Componenets/Contact";
import Error from "./Componenets/Error";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error/>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
