/* eslint-disable linebreak-style */
import React from 'react';
// import facebook from '../../public/assets/socials/facebook.png';
// import instagram from '../../public/assets/socials/instagram.png';
// import dribbble from '../../public/assets/socials/dribbble.png';
// import email from '../../public/assets/socials/sms.png';

function Footer() {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2023 | Bruno Delmoro</p>
        <p className="hidden sm:block color-black">Fullstack Developer</p>
        <p className="hidden sm:block">Scrum Mastering</p>
        <p className="hidden sm:block">User Experience</p>
        <p className="hidden sm:block">Passion About Challenges</p>
      </div>
    </div>
  );
}

export default Footer;
