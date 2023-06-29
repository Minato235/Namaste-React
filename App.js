import React from "react";
import ReactDom from "react-dom";

//jsx
const jsxHeading = <h1 className="head">Namaste React using Jsx</h1>;

//React Componenet
//Class based Componenet-Old
//Function Componenet-New(normal js function)


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(jsxHeading);
