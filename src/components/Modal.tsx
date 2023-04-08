import React, { MouseEventHandler } from 'react';

import '../styles/_modal.scss';

interface Props {
  open: boolean;
  onClose: MouseEventHandler;
  children: JSX.Element | JSX.Element[];
}

const Modal = ({ open, children, onClose }: Props) => {
  if (!open) return null;
  return (
    <>
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal">{children}</div>
    </>
  );
};

export default Modal;
