import React from 'react';
import '../../assets/styles/index.scss';
import { NotificationProps } from './Alert.props';
import cn from 'classnames';
import './Alert.scss';

const Alert = ({
  text,
  color = 'primary',
  size = 'normal',
  style,
  className,
  ...props
}: NotificationProps) => {
  return (
    <p
      className={cn(`aw-ui-alert aw-ui-alert-${size}`, className)}
      {...props}
      style={
        {
          '--main': `var(--${color}-main)`,
          '--background': `var(--${color}-background)`,
          '--border': `var(--${color}-border)`,
          '--hover': `var(--${color}-hover)`,
          '--pressed': `var(--${color}-pressed)`,
          '--focused': `var(--${color}-focused)`,
          ...style,
        } as React.CSSProperties
      }
    >
      {text}
    </p>
  );
};
export default Alert;
