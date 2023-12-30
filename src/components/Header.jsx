/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {
  Bars3BottomRightIcon, MoonIcon, SunIcon, XMarkIcon,
} from '@heroicons/react/24/solid';
import { Switch, FormControlLabel } from '@mui/material';
import { styled } from '@mui/system';

function Header({ toggleMode, mode }) {
  const Links = [
    { name: 'Home', link: 'home' },
    { name: 'About me', link: 'about' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
  ];
  const [open, setOpen] = useState(false);

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

  return (
    <div className="pl-20 pr-20 w-full max-w-7x1" style={{ backgroundColor: mode === 'light' ? 'rgba(11, 190, 106, 0.662)' : 'inherit' }}>
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span className="text-primary hover:text-white">
            Bruno Delmoro
          </span>
        </div>
        <div onClick={() => setOpen(!open)} className="w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-white absolute">
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 absolute md:static  md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in ${
          open ? 'top-12' : 'top-[-490px]'}`}
        >
          {
            Links.map((link) => (
              <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold">
                <Link
                  to={link.link}
                  activeClass="active"
                  smooth
                  spy
                  className={`transition-all duration-500 hover:text-primary lighting-effect text-glow ${mode === 'light' ? 'text-primary' : 'text-white'}`}
                >
                  {link.name}
                </Link>

              </li>
            ))
          }
        </ul>
        <FormControlLabel
          control={(<MaterialUISwitch checked={mode === 'dark'} onChange={toggleMode} sx={{ m: 1 }} />)}
          label={`${mode.charAt(0).toUpperCase() + mode.slice(1)} Mode`}
        />
      </div>
    </div>
  );
}

export default Header;
