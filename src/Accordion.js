import React, { Component } from "react";
import AccordionItem from "./AccordionItem";

class Accordion extends Component {

  constructor(props) {
    super(props);
  };

  state = {
    controllerText: "expand"
  };

  componentDidMount() {
    const { expandAll } = this.props;
    const accordionItems = this.__accordion.querySelectorAll(".accordion-item");

    expandAll && this._toggleExpandState();
  };

  _visibilityControllers = () => {
    return (
      <div className="visiblity-controller">
        <div className="expand-all" onClick={() => {this._toggleExpandState()}}><span>{this.state.controllerText} All</span></div>
      </div>
    )
  };


  _toggleExpandState = () => {
    const accordionItems = this.__accordion.querySelectorAll(".accordion-item");

    accordionItems.forEach((elm) => {
      elm.classList.toggle("expanded");
    });

    this.setState({
      controllerText: this.state.controllerText === "expand" ? "collapse" : "expand"
    });
  };

  render() {
    const { data, allowMultiple, controllers, controllerPosition } = this.props;

    return (
      <div className={`accordion-wrapper`} ref={(div => { this.__accordion = div; })}>
        {controllers && this._visibilityControllers()}
          <AccordionItem
            accordionTitle="Accordion with simple text"
            accordionBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <AccordionItem
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
            accordionTitle="Accordion Item 3"
            accordionBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        {controllers && this._visibilityControllers()}
      </div>
    );
  }
};

Accordion.defaultProps = {
  'expandAll': false,
  'allowMultiple': false,
  'controllers': false,
  'controllerPosition': 'top'
};

export default Accordion;
