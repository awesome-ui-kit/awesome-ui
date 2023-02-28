import React from "react";
import "../../assets/styles/index.css";
import { NotificationProps } from "./Alert.props";
import cn from "classnames";
import "./Alert.scss";

const Alert = ({
  text,
  color = "info",
  size = "normal",
  className,
  children,
  ...props
}: NotificationProps) => {
  return (
    <p
      className={cn(`aw-ui-alert aw-ui-alert-${size}`, className)}
      {...props}
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
      {text}
    </p>
  );
};
export default Alert;
