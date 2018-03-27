import React, { Component } from "react";

class AccordionItem extends Component {

  _expandAccordion = (e) => {

    const { allowMultiple } = this.props;
    const element = e.target;
    const expandedElements = allowMultiple ? element.closest(".accordion-item") : element.closest(".accordion-wrapper").querySelector(".expanded");

    if(allowMultiple) {
      expandedElements.classList.contains("expanded") ? expandedElements.classList.remove("expanded") : expandedElements.classList.add("expanded")
    } else {
      element.closest(".accordion-item").classList.add("expanded");
      expandedElements && expandedElements.classList.remove("expanded");
    }
  };

  render() {
    const { accordionTitle, accordionBody, children, expandAll } = this.props;

    return (
      <div className={`accordion-item ${expandAll ? ' expanded' : ''}`} >
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
  };
};

export default AccordionItem;
