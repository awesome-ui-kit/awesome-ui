import React from "react";
import "../../assets/styles/index.css";
import { TextareaProps } from "./Textarea.props";
import cn from "classnames";
import "./Textarea.scss";

const Textarea = ({
  color = "grey",
  sizing = "normal",
  className,
  children,
  ...props
}: TextareaProps) => {
  const borderColor =
    color === "grey" ? `var(--grey-500)` : `var(--${color}-main)`;

  return (
    <textarea
      className={cn(`aw-ui-textarea aw-ui-textarea-${sizing}`, className)}
      style={
        {
          "--border-color": borderColor,
        } as React.CSSProperties
      }
      {...props}
    />
  );
};
export default Textarea;
