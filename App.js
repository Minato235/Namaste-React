// const h1=React.createElement("h1",{id:"h1",xyz:"abx"},"Hello From React");
import React from "react";
import ReactDom from "react-dom";
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I'am H1 Tag 1"),React.createElement("h1", {}, "I'am H1 Tag 2")]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
