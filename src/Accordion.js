import React, { Component } from "react";

class Accordion extends Component {

  _expandAccordion = (e) => {
    const element = e.target;
    const expandedElements = document.querySelector(".expanded");

    element.parentNode.classList.add("expanded");
    expandedElements && expandedElements.classList.remove("expanded");
  }

  _accordionItem = () => {
    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={(e) => {this._expandAccordion(e)}}>
          What is State?
        </div>
        <section className="accordion-content">
          <p>
            In information technology and computer science,
            a program is described as stateful if it is designed to
            remember preceding events or user interactions; the remembered
            information is called the state of the system.
          </p>
        </section>
      </div>
    )
  }

  render() {

    const { data } = this.props;

    return (
      <div className="accordion-wrapper">
        {this._accordionItem()}
      </div>
    );
  }
}

export default Accordion;
