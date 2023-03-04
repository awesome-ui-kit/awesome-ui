import React from 'react';
import '../../assets/styles/index.scss';
import { CardProps } from './Card.props';
import cn from 'classnames';
import './Card.scss';

const Card = ({ image, title, children, className, ...props }: CardProps) => {
  return (
    <div className={cn(`aw-ui-card aw-ui-card-row`, className)} {...props}>
      {image && <img src={image} alt="Image" />}
      <div className="aw-ui-card-content">
        {title && <h3>{title}</h3>}
        {children}
      </div>
    </div>
  );
};
export default Card;
