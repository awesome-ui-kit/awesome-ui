import React, { useState } from "react";
import "../../assets/styles/index.css";
import { AccordionProps } from "./Accordion.props";
import cn from "classnames";
import "./Accordion.scss";

const Accordion = ({
  title,
  className,
  children,
  ...props
}: AccordionProps) => {
  const [show, setShow] = useState(false);

  const handleBtnClick = () => setShow(!show);

  return (
    <div
      className={cn("aw-ui-accordion", className, {
        "aw-ui-accordion-show": show,
      })}
      {...props}
    >
      <button type="button" onClick={handleBtnClick}>
        {title}
      </button>
      <div>{children}</div>
    </div>
  );
};
export default Accordion;
