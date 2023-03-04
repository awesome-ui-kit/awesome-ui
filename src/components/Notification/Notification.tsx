import React, { useEffect, useRef } from 'react';
import '../../assets/styles/index.scss';
import { NotificationProps } from './Notification.props';
import cn from 'classnames';
import './Notification.scss';
import { closeIcon } from './icons';

const Notification = ({
  color = 'info',
  title,
  onClose,
  style,
  className,
  children,
  ...props
}: NotificationProps) => {
  const notificationlRef = useRef<null | HTMLDivElement>(null);
  const handleOverlayClick = (evt: React.SyntheticEvent<HTMLDivElement>) => {
    if (evt.currentTarget.dataset.name === 'overlay') {
      onClose();
    }
  };

  const handleCloseBtnClick = () => {
    onClose();
  };

  useEffect(() => {
    if (notificationlRef.current !== null) {
      notificationlRef.current?.focus();
    }
  }, [notificationlRef]);

  return (
    <div
      className={cn(
        `aw-ui-notification`,
        `aw-ui-notification-${color}`,
        className,
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
      onClick={handleOverlayClick}
      data-name="overlay"
      {...props}
    >
      <section
        className="aw-ui-notification-section"
        ref={notificationlRef}
        tabIndex={0}
        onClick={(evt) => evt.stopPropagation()}
      >
        <h2 className="aw-ui-notification-title">{title}</h2>
        {children}
        <button
          className="aw-ui-notification-close-btn"
          aria-label="close"
          onClick={handleCloseBtnClick}
        >
          {closeIcon}
        </button>
      </section>
    </div>
  );
};
export default Notification;
