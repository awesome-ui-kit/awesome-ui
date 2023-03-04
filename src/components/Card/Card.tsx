import React from 'react';
import '../../assets/styles/index.scss';
import { CardProps } from './Card.props';
import cn from 'classnames';
import './Card.scss';

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={cn(`aw-ui-card`, className)} {...props}>
      {children}
    </div>
  );
};
export default Card;
