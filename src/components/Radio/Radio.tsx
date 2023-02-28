import React from "react";
import "../../assets/styles/index.css";
import { RadioProps } from "./Radio.props";
import cn from "classnames";
import "./Radio.scss";

const Radio = ({
  fieldId,
  label,
  color = "primary",
  className,
  children,
  ...props
}: RadioProps) => {
  return (
    <div
      className="aw-ui-radio-input-wrapper"
      style={
        {
          "--main": `var(--${color}-main)`,
          "--background": `var(--${color}-background)`,
          "--border": `var(--${color}-border)`,
          "--hover": `var(--${color}-hover)`,
          "--pressed": `var(--${color}-pressed)`,
          "--focused": `var(--${color}-focused)`,
        } as React.CSSProperties
      }
    >
      <input
        id={fieldId}
        className={cn("aw-ui-radio-input visually-hidden", className)}
        type="radio"
        {...props}
      />
      <label className="aw-ui-radio-label" htmlFor={fieldId}>
        {label}
      </label>
    </div>
  );
};
export default Radio;
