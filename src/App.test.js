import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import App from "./App";

describe("Rebder <App />", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("Should render <App /> snapshot", () => {
    act(() => {
      render(<App />, container);
    });

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
