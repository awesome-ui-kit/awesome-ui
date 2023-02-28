import React from "react";
import "../../assets/styles/index.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import "./Button.scss";

const Button = ({
  color = "primary",
  size = "normal",
  view = "main",
  shape = "square",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        `aw-ui-btn aw-ui-btn-${size} aw-ui-btn-${view} aw-ui-btn-${shape}`,
        className,
        {
          "aw-ui-btn-full-width": fullWidth,
        }
      )}
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
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
