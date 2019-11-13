import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./Accordion";

describe("Accordion component", () => {
  const sectionsProp = [];
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode();
  });

  it ('component renders empty li when sections prop is not defined', ()=>{});
  it ('component renders no sections as active by default', ()=>{});
  it ('component opens a clicked section', ()=>{});
  it ('component only opens the last section when multiple sections have been clicked.', ()=>{});
});
