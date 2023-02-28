import React, { useEffect, useRef } from "react";
import "../../assets/styles/index.css";
import { ModalProps } from "./Modal.props";
import cn from "classnames";
import "./Modal.scss";
import { closeIcon } from "./icons";

const Modal = ({
  color = "primary",
  title,
  onClose,
  className,
  children,
  ...props
}: ModalProps) => {
  const modalRef = useRef<null | HTMLDivElement>(null);
  const handleOverlayClick = (evt: React.SyntheticEvent<HTMLDivElement>) => {
    if (evt.currentTarget.dataset.name === "overlay") {
      onClose();
    }
  };

  const handleCloseBtnClick = () => {
    onClose();
  };

  useEffect(() => {
    if (modalRef.current !== null) {
      modalRef.current?.focus();
    }
  }, [modalRef]);

  return (
    <div
      className={cn(`aw-ui-modal`, `aw-ui-modal-${color}`, className)}
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
      onClick={handleOverlayClick}
      data-name="overlay"
      {...props}
    >
      <section className="aw-ui-modal-section" ref={modalRef} tabIndex={0}>
        <h2 className="aw-ui-modal-title">{title}</h2>
        {children}
        <button
          className="aw-ui-modal-close-btn"
          aria-label="close"
          onClick={handleCloseBtnClick}
        >
          {closeIcon}
        </button>
      </section>
    </div>
  );
};
export default Modal;
