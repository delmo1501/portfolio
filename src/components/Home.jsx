/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';
import { useTheme } from '@mui/material';
import heroImg from '../../public/assets/Willie.png';
import middleImg from '../../public/assets/icons/MERN.png';

function Home({ mode }) {
  const theme = useTheme();
  return (
    <div className="md:px-10 px-7 mt-14 custom-home" id="home">
      <div className="p-10" style={{ borderRadius: '15px', backgroundColor: mode === 'light' ? 'rgba(243, 249, 247, 0.715)' : theme.palette.grey[900] }}>
        <Fade direction="right">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            {/* image & content */}
            {/* text */}
            <div className="text-white">
              <h6 className="text-3xl mt-12" style={{ color: mode === 'light' ? '#0c2f60' : 'white' }}>Hello, I'm</h6>
              <h1 className="font-semibold md:text-5xl my-4 text-3xl" style={{ color: mode === 'light' ? '#0c2f60' : 'white' }}>Bruno Delmoro</h1>
              <p className="md:w-96" style={{ color: mode === 'light' ? '#0c2f60' : 'white' }}>Fullstack self-taught developer. I create seamless web experiences for end-users, group worker, sport and music lover.</p>
              <div className="mt-5">
                <Link
                  to="about"
                  smooth
                  className="btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary hover:border-black hover:border-2"
                >
                  About me
                </Link>
                <Link
                  to="projects"
                  smooth
                  className="btn outline py-1.5 px-6 rounded border-none ml-5"
                  style={{ color: mode === 'light' ? '#0c2f60' : 'white' }}
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
    </div>
  );
}

export default Home;
