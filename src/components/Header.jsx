import React,{ useState } from 'react';
import { Link } from 'react-scroll';
import {BookOpenIcon, Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid'

const Header = () => {
  let Links = [
    {name: "Home", link:"home"},
    {name: "About me", link:"about"},
    {name: "Projects", link:"projects"},
    {name: "Contact", link:"contact"},
  ]

  const [open, setOpen] = useState(false);

  return (
    <div className='w-full max-w-7x1'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <div className='font-bold text-2x1 cursor-pointer flex items-center gap-1'>
          <span className='text-primary hover:text-white'>
            Bruno Delmoro
          </span>
        </div>
        <div onClick={() => setOpen(!open)} className='w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-white absolute'>
          {open ? <XMarkIcon/> : <Bars3BottomRightIcon/>}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full
        md:w-auto mt-4 md:mt-0 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in gap-2 ${open ? "top-12" : "top-[-490px]"}`}>
          {
            Links.map(link => <li key={link.name} className='md:m1-8 md:my-0 my-7 font-semibold'>
              <Link to={link.link} activateClass='active' smooth={true} spy={true} className='text-white transition-all duration-500 hover:text-primary'>
                {link.name}
              </Link>
            </li>)
          }
        </ul>
      </div>
    </div>
  );
};

export default Header;