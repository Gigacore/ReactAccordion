import React, { Component } from "react";

class AccordionItem extends Component {

  _expandAccordion = (e) => {
    const element = e.target;
    const expandedElements = document.querySelector(".expanded");

    element.parentNode.classList.add("expanded");
    expandedElements && expandedElements.classList.remove("expanded");
  }

  render() {
    const { accordionTitle, accordionBody, children } = this.props;

    console.log(children);

    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={(e) => {this._expandAccordion(e)}}>
          <span>{accordionTitle}</span>
        </div>
        <section className="accordion-content">
          {children ? (
            <div className="accordion-content-wrapper">
              {children}
            </div>
          ) : (
            <p>
              {accordionBody}
            </p>
          )}
        </section>
      </div>
    )
  }
}

export default AccordionItem;
