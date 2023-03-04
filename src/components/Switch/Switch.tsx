import React, { useEffect } from 'react';
import '../../assets/styles/index.scss';
import { SwitchProps } from './Switch.props';
import cn from 'classnames';
import './Switch.scss';

const Switch = ({
  color = 'primary',
  label,
  size = 'normal',
  active,
  style,
  className,
  ...props
}: SwitchProps) => {
  return (
    <div
      className={cn(`aw-ui-switch aw-ui-switch-${size}`, className)}
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
      <button
        className={cn('aw-ui-switch-btn', {
          'aw-ui-switch-btn-on': active,
        })}
        type="button"
        data-value={active ? 'on' : 'off'}
        aria-label={active ? 'on' : 'off'}
        {...props}
      />
      {label && <span>{label}</span>}
    </div>
  );
};
export default Switch;
