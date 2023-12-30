/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';
import heroImg from '../../public/assets/Willie.png';
import middleImg from '../../public/assets/icons/MERN.png';

function Home({ mode }) {
  return (
    <div className="md:px-10 px-7 my-14 custom-home" id="home">
      <div>
        <Fade direction="right">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            {/* image & content */}
            {/* text */}
            <div className="text-white">
              <h6 className="text-3xl mt-12">Hello, I'm</h6>
              <h1 className="font-semibold md:text-5xl my-4 text-3xl">Bruno Delmoro</h1>
              <p className="md:w-96">Fullstack self-taught developer. I create seamless web experiences for end-users, group worker, sport and music lover.</p>
              <div className="mt-5">
                <Link
                  to="about"
                  smooth
                  className="btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary"
                >
                  About me
                </Link>
                <Link
                  to="projects"
                  smooth
                  className="btn outline py-1.5 px-6 rounded border-none ml-5 text-white"
                >
                  Projects
                </Link>
              </div>
            </div>
            {/* img */}
            <div className="order-first md:order-last relativo">
              <img src={middleImg} alt="" />
            </div>
            <div className="relative">
              <img src={heroImg} alt="" />
            </div>
          </div>
        </Fade>
      </div>
      <br />
      <br />
      <div className="h-24 w-full mx-auto absolute left-0 hidden md:block" style={{ backgroundColor: mode === 'light' ? 'rgba(11, 190, 106, 0.662)' : '#13131c' }} />
    </div>
  );
}

export default Home;
