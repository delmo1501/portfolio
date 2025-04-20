/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function Modal({
  isOpen, onClose, title, content,
}) {
  const modalStyles = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(236, 217, 217, 0.5)',
    zIndex: 1000,
    transition: 'opacity 0.3s ease',
  };
  const modalContentStyles = {
    opacity: isOpen ? 1 : 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1001,
    width: '60%',
    transition: 'opacity 0.3s ease',
  };
  const closeButtonStyles = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  };

  return (
    <div style={modalStyles}>
      <div style={modalContentStyles}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            style={closeButtonStyles}
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Modal;
