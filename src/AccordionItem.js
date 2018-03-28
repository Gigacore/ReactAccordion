import React, { Component } from "react";
import { expandAccordion } from "./Accordion";

class AccordionItem extends Component {
  render() {
    const { accordionTitle, accordionBody, children } = this.props;

    return (
      <div className={`accordion-item`} >
        <div className="accordion-title" onClick={(e) => {expandAccordion(e)}}>
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
  };
};

export default AccordionItem;
