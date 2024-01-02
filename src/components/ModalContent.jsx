/* eslint-disable max-len */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Button } from '@mui/material';

Modal.setAppElement('#root');

function ModalContent({ isOpen, onRequestClose }) {
  const [step, setStep] = useState(1);
  const [shadow, setShadow] = useState('');

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();
    const xPos = clientX - rect.left; // x position within the element
    const yPos = clientY - rect.top; // y position within the element
    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;

    let shadowDirection;
    if (xPos < width / 2 && yPos < height / 2) {
      shadowDirection = 'top left';
    } else if (xPos >= width / 2 && yPos < height / 2) {
      shadowDirection = 'top right';
    } else if (xPos < width / 2 && yPos >= height / 2) {
      shadowDirection = 'bottom left';
    } else {
      shadowDirection = 'bottom right';
    }

    const shadowX = shadowDirection.includes('right') ? 10 : -10;
    const shadowY = shadowDirection.includes('bottom') ? 10 : -10;

    setShadow(`${shadowX}px ${shadowY}px 20px rgba(27, 136, 245, 0.8)`);
  };

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
          <div
            onMouseMove={handleMouseMove}
            style={{
              boxShadow: shadow, display: 'flex', padding: '10px', flexDirection: 'column', alignContent: 'center', alignItems: 'center',
            }}
          >
            <h1 style={{ fontFamily: '-moz-initial', fontSize: '35px', color: 'blue' }}>This is how Services shadow work</h1>
            <div style={{ color: 'blue', fontSize: '2em' }}>↓</div>
            <div className="text-black animated-text">
              We use a useState hook to create a shadows state variable.
            </div>
            <div className="text-black animated-text">
              This is an object that stores the shadow styles for each service card.
            </div>
          </div>
        )}
        {step === 2 && (
        <div
          style={{
            color: 'black', display: 'flex', padding: '10px', flexDirection: 'column', alignContent: 'center', alignItems: 'center',
          }}
          className="animated-text"
        >
          <h1 style={{ fontFamily: '-moz-initial', fontSize: '35px', color: 'blue' }}>handleMouseMove</h1>
          <div style={{ color: 'blue', fontSize: '2em' }}>↓</div>
          Event handler thats triggered when the mouse moves, calculating the mouses position relative to the service card.
          <br />
          Shadow style = string that represents a CSS box-shadow property, with the horizontal and vertical offsets determined by the mouses position.
        </div>
        )}
        {step === 3 && (
        <div
          style={{
            color: 'black', display: 'flex', padding: '10px', flexDirection: 'column', alignContent: 'center', alignItems: 'center',
          }}
          className="animated-text"
        >
          <h1 style={{ fontFamily: '-moz-initial', fontSize: '35px', color: 'blue' }}>onMouseMove</h1>
          <div style={{ color: 'blue', fontSize: '2em' }}>↓</div>
          Each service card has an onMouseMove prop thats set to handleMouseMove(service.id).
          <br />
          {' '}
          <br />
          {' '}
          This means that when the mouse moves over a service card, the handleMouseMove function is called with the id of the service as an argument.
        </div>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button type="button" variant="contained" onClick={prevStep} disabled={step <= 1}>Previous</Button>
        <Button type="button" variant="contained" onClick={nextStep} disabled={step >= 3}>Next</Button>
      </div>
    </Modal>
  );
}

ModalContent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ModalContent;
