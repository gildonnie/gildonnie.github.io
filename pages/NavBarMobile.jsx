import React from 'react';
import { useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import Dlogo from '../public/DLogo.png';
import DlogoDmode from '../public/DLogoDmode.png';

function NavBarMobile() {

  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
        <nav className="py-4 mb-12 flex justify-between items-center">
      <a className="cursor-pointer">
        {!darkMode ? (
          <Image src={Dlogo} alt="nav-logo" width={130} height={130} className="w-20 md:w-30 dark:text-slate-100" />
        ) : (
          <Image src={DlogoDmode} alt="nav-logo" width={130} height={130} className="w-20 md:w-30 dark:text-slate-100" />
        )}
      </a>

      {/* Hamburger menu */}
      <div className="md:hidden">
      {!isMenuOpen ? <GiHamburgerMenu onClick={toggleMenu} className="text-3xl hover:cursor-pointer" /> : <div className="text-2xl border-2 border-slate-500 w-8 text-center bg-slate-600 text-slate-400 hover:cursor-pointer" onClick={toggleMenu}>X</div>}
      </div>

      {/* Navigation links */}
      <div className={`md:flex md:items-center ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <ul className="flex pt-7 font-normal text-slate-700 dark:text-slate-400">
          <li>
            <a className="mr-8" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="mr-8" href="#web">
              Web Developer Projects
            </a>
          </li>
          <li>
            <a className="mr-8" href="#data">
              Data Analyst Projects
            </a>
          </li>
        </ul>

        {/* Dark mode toggle */}
        <div className="flex items-center ml-4 md:ml-8">
          <BsFillMoonStarsFill
            className={`cursor-pointer text-2xl hover:text-slate-800 dark:text-slate-400 ${darkMode ? 'hidden' : 'block'}`}
            onClick={() => setDarkMode(!darkMode)}
          />
          <BsFillSunFill
            className={`cursor-pointer text-2xl dark:text-slate-200 dark:hover:text-slate-300 ${darkMode ? 'block' : 'hidden'}`}
            onClick={() => setDarkMode(!darkMode)}
          />
        </div>

        {/* Resume button */}
        <div className="hidden md:block">
          <a
            className="bg-slate-500 text-slate-300 px-4 py-1 rounded-xl ml-8 hover:bg-slate-300 hover:text-slate-500 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-slate-800"
            href="#"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
    </>
  );
}

export default NavBarMobile;