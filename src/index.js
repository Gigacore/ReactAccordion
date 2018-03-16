/* global document */

import React from "react";
import ReactDOM, { render } from "react-dom";

import Accordion from "./Accordion";

const accordionData = [
  {
    "title": "Item 1",
    "content": "Accordion content 1"
  },
  {
    "title": "Item 2",
    "content": "Accordion content 2"
  },
  {
    "title": "Item 3",
    "content": "Accordion content 3"
  }
]

ReactDOM.render(
  <Accordion />,
  document.getElementById("root")
);
