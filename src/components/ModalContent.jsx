/* eslint-disable max-len */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ModalContent({ isOpen, onRequestClose }) {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const prevStep = () => {
    setStep((currentStep) => Math.max(currentStep - 1, 1));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Tutorial Modal"
      className="modal-content"
    >
      <button type="button" onClick={onRequestClose} className="close-button">×</button>
      <div className="modal-body">
        {step === 1 && (
        <div>
          We are gonna explain now whats going on with Services
          {' '}
          <br />
          {' '}
          Which uses the useState hook to create a shadows state variable, this is an object that stores the shadow styles for each service card.
        </div>
        )}
        {step === 2 && <div>handleMouseMove function => event handler thats triggered when the mouse moves over a service card <br /><br /> This function calculates the mouses position relative to the service card and determines whether the mouse is on the left or right, and top or bottom half of the card. <br /><br /> It then updates the shadows state with a new shadow style for the service card that the mouse is over. The shadow style is a string that represents a CSS box-shadow property, with the horizontal and vertical offsets determined by the mouses position.</div>}
        {step === 3 && <div>In the JSX returned by the Services component, each service card has an onMouseMove prop that's set to handleMouseMove(service.id).<br /> <br /> This means that when the mouse moves over a service card, the handleMouseMove function is called with the id of the service as an argument.</div>}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button type="button" onClick={prevStep} style={{ visibility: step > 1 ? 'visible' : 'hidden' }}>Previous</button>
        {step < 3 && <button type="button" onClick={nextStep}>Next</button>}
      </div>
    </Modal>
  );
}

ModalContent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ModalContent;
