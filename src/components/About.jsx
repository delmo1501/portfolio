/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Fade } from 'react-awesome-reveal';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import Services from './Services';
import ImageButton from './ImageButton';
import ModalContent from './ModalContent';

function About({ toggleMode, mode }) {
  const [ref, inView] = useInView();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const tutorialShown = localStorage.getItem('tutorialShown');
    if (inView && !tutorialShown) {
      setModalIsOpen(true);
    }

    const handleBeforeUnload = () => {
      localStorage.removeItem('tutorialShown');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [inView]);

  const closeModal = () => {
    setModalIsOpen(false);
    localStorage.setItem('tutorialShown', 'true');
  };
  return (
    <div className="md:px-10 px-7" id="about">
      <div className="p-10" style={{ marginBottom: mode === 'light' ? '20px' : '0px', borderRadius: '15px', backgroundColor: mode === 'light' ? 'rgba(243, 249, 247, 0.715)' : 'inherit' }}>
        <Fade direction="left">
          <h1 style={{ color: mode === 'light' ? '#0c2f60' : 'white' }} className="font-semibold text-3xl mt-5">About me:</h1>
          <p style={{ color: mode === 'light' ? '#0c2f60' : 'white' }} className="my-3 md:w-2/3 leading-[2]">
            Argentinian fullstack developer living in Germany. Passionate about
            problem solving, mind games, enjoyer of a good environment, social interaction.
            Football lover as with the music and my guitar.
            <br />
            PS: None of the above activities can be performed without my precious mate 🧉🇦🇷
          </p>
          <div className="md:flex my-7 items-center">
            <div className="text-primary text-8xl font-bold">3+</div>
            <p style={{ color: mode === 'light' ? '#0c2f60' : 'white' }} className=" text-2xl md:ml-5">
              Years of experience. Specialised in building apps,
              while providing a good customer
              <br />
              experience, within my team and a good working environment to move the project forward
              {' '}
            </p>
          </div>
        </Fade>
      </div>
      <ImageButton toggleMode={toggleMode} mode={mode} />
      <div ref={ref}>
        <Services mode={mode} />
      </div>
      <ModalContent isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
}

export default About;
