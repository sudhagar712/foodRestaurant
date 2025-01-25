import React, { useState } from 'react'
import Chef from './Chef';
import {LINKS} from "../constants"
import { MenuIcon, MoonIcon, SunIcon, X } from 'lucide-react';

const Navbar = ({ onThemeSwitch , theme}) => {

  const [isMobileOpen , setIsMobileOpen] = useState(false)

const toggleMobileMenu = () => {
  setIsMobileOpen(!isMobileOpen);
}



const handleScroll = (event, targetId) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const offsetTop = targetElement.offsetTop - 20; // Adjust as necessary
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
  setIsMobileOpen(false);
};




  return (
    <nav className="flex items-center flex-col justify-center w-screen z-10  fixed mt-2">
      {/* logo */}
      <div
        className="flex w-full md:w-[50%] justify-between items-center overflow-y-hidden p-2 backdrop-blur-md  md:w-[25rem] shadow-md border font-semibold rounded-full
        bg-navBg-light/70 dark:bg-navBg-dark/70 text-primaryText-light dark:text-primaryText-dark  border-navBg-light dark:border-navBg-dark "
      >
        <a href="/">
          <Chef />
        </a>

        {/* Links menubar */}
        <div className="space-x-6 lg:flex font-Geist hidden">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`${link.targetId}`}
              className={`text-sm ${
                index !== 0 ? "border-l-2 border-neutral-300 pl-2" : ""
              } hover:opacity-50`}
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* theme mode  */}
        <div className="flex gap-8 mr-5 ">
          <div>
            <div>
              <button className="flex" onClick={onThemeSwitch}>
                {theme ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
          {/* sm screen  */}
          <div className="lg:hidden">
            <button className="flex" onClick={toggleMobileMenu}>
              {isMobileOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isMobileOpen && (
        <div className="font-Geist w-full backdrop-blur-lg text-primaryText-light dark:text-primaryText-dark  ">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`${link.targetId}`}
              className="flex justify-center p-4 upperCase tracking-tighter "
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar
