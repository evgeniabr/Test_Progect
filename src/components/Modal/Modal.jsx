import React from 'react';
import { useEffect } from 'react';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal_container}>{children}</div>
    </div>,
    modalRoot
  );
}
