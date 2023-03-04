import React from 'react';
import '../../assets/styles/index.scss';
import { TagProps } from './Tag.props';
import cn from 'classnames';
import './Tag.scss';

const Tag = ({
  color = 'primary',
  size = 'normal',
  style,
  className,
  children,
  ...props
}: TagProps) => {
  return (
    <p
      className={cn(`aw-ui-tag aw-ui-tag-${size}`, className)}
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
    </p>
  );
};
export default Tag;
