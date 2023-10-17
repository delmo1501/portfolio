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
        <p className="hidden sm:block">Fullstack Developer</p>
        <p className="hidden sm:block">Scrum Mastering</p>
        <p className="hidden sm:block">User Experience</p>
        <p className="hidden sm:block">Passin About Challenges</p>
      </div>
      {/* social media */}
      {/* <div className="flex mb-5 justify-center md:justify-start ">
        <a
          href="https://www.linkedin.com/in/joshua-harris-321a24190/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="" />
        </a>
        <a
          className="ml-4"
          href="https://github.com/joshua-harris"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="" />
        </a>
        <a
          className="ml-4"
          href="mailto:anpch@example.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={dribbble} alt="" />
        </a>
        <a
          className="ml-4"
          href="mailto:anpch@example.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="" />
        </a>
      </div> */}
    </div>
  );
}

export default Footer;
