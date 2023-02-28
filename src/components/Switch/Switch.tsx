import React, { useState } from "react";
import "../../assets/styles/index.css";
import { SwitchProps } from "./Switch.props";
import cn from "classnames";
import "./Switch.scss";

const Switch = ({
  color = "primary",
  label,
  active,
  className,
  children,
  ...props
}: SwitchProps) => {
  return (
    <div
      className={cn("aw-ui-switch")}
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
      <button
        className={cn("aw-ui-switch-btn", {
          "aw-ui-switch-btn-on": active,
        })}
        type="button"
        data-state={active}
        aria-label={active ? "on" : "off"}
        {...props}
      />
      {label && <span>{label}</span>}
    </div>
  );
};
export default Switch;
