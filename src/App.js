import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Componenets/Header";
import Body from "./Componenets/Body";
import Footer from "./Componenets/Footer";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body></Body>
      <Footer></Footer>
    </>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
