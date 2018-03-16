import React, { Component } from "react";
import AccordionItem from "./AccordionItem";

class Accordion extends Component {

  render() {

    const { data } = this.props;

    return (
      <div className="accordion-wrapper">
        <AccordionItem
          accordionTitle="Accordion with simple text"
          accordionBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <AccordionItem accordionTitle="Accordion that renders children">
          You can render just about anything here. From HTML Markup to other React Components.
          <hr />
          <div>This is a sample div</div>
        </AccordionItem>
        <AccordionItem
          accordionTitle="Accordion Item 3"
          accordionBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
    );
  }
}

export default Accordion;
