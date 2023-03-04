import React from 'react';
import '../../assets/styles/index.scss';
import { LinkProps } from './Link.props';
import cn from 'classnames';
import './Link.scss';

const Link = ({
  color = 'primary',
  size = 'normal',
  view = 'text',
  disabled = false,
  style,
  className,
  children,
  ...props
}: LinkProps) => {
  return (
    <a
      className={cn(
        `aw-ui-link aw-ui-link-${size} aw-ui-link-${view}`,
        className,
        {
          'aw-ui-link-disabled': disabled,
        },
      )}
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
      {...props}
    >
      {children}
    </a>
  );
};
export default Link;
