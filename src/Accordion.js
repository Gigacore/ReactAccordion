import React, { Component } from "react";
import AccordionItem from "./AccordionItem";

class Accordion extends Component {

  _visibilityControllers = () => {
    return (
      <div className="visiblity-controller">
        <div className="expand-all"><span>Expand All</span></div>
        <div className="collapse-all"><span>Collapse All</span></div>
      </div>
    )
  }

  render() {

    const { data, expandAll, allowMultiple, controllers, controllerPosition } = this.props;

    const config = {
      expandAll,
      allowMultiple
    }

    return (
      <div className={`accordion-wrapper`}>
        {controllers && this._visibilityControllers()}
        <AccordionItem
          {...config}
          accordionTitle="Accordion with simple text"
          accordionBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <AccordionItem
          {...config}
          accordionTitle="Accordion that renders children"
        >
          You can render just about anything here. From HTML Markup to other React Components.
          <hr />
          <div>This is a sample div</div>
          <AccordionItem
            accordionTitle="Accordion Item 3"
            accordionBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </AccordionItem>
        <AccordionItem
          {...config}
          accordionTitle="Accordion Item 3"
          accordionBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        {controllers && this._visibilityControllers()}
      </div>
    );
  }
}

Accordion.defaultProps = {
  'expandAll': false,
  'allowMultiple': false,
  'controllers': false,
  'controllerPosition': 'top'
}

export default Accordion;
