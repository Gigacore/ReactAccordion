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
];

const variations = () => {
  return [
    <h2>Default</h2>,
    <Accordion />,
    <hr />,
    <h2>Expanded by default</h2>,
    <Accordion expandAll={true} />
  ]
};

ReactDOM.render(
  variations(),
  document.getElementById("root")
);
