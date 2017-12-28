import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import StyledBlocks from "./Blocks.js";

var welcomeMessage = <h4> Memory Game..! </h4>;

var element = React.createElement("div", {}, [
  welcomeMessage,
  <StyledBlocks number="3" />
]);

ReactDOM.render(element, document.getElementById("root"));
