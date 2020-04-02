import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

// import { Barcode } from "../component/barcode";


let container = null;
beforeEach(() => {
  container = document.createElement("div");
  container.setAttribute('id', 'root');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<input/>, container);
  });
  expect(container.textContent).toBe("");
});