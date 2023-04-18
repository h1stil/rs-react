/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { MouseEventHandler } from 'react';

import '../styles/_modal.scss';

interface Props {
  open: boolean;
  onClose: MouseEventHandler;
  children: JSX.Element | JSX.Element[];
}

function Modal({ open, children, onClose }: Props) {
  if (!open) return null;
  return (
    <>
      <div className="modal__overlay" onClick={onClose} onKeyDown={() => onClose} />
      <div className="modal">{children}</div>
    </>
  );
}

export default Modal;
