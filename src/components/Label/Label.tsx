import React from 'react';
import '../../assets/styles/index.scss';
import { LabelProps } from './Label.props';
import cn from 'classnames';
import './Label.scss';

const Label = ({
  size = 'normal',
  children,
  className,
  ...props
}: LabelProps) => {
  return (
    <label
      className={cn(`aw-ui-label aw-ui-label-${size}`, className)}
      {...props}
    >
      {children}
    </label>
  );
};
export default Label;
