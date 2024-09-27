import React, { useState } from "react";
import "../App.css";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar({ sendDataToParent }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (index) => {
    setMenuOpen(false);
    sendDataToParent(false);
  };

  const handleMenu = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    sendDataToParent(newMenuState);
  };

  return (
    <>
      <div className="flex justify-between items-center pt-8 mb-12 max-md:mb-6 max-md:block">
        <div className="title flex justify-between w-full max-[426px]:items-center">
          <a href="/">
            <h1 className="text-3xl max-md:text-xl italic font-bold signature" onClick={() => handleLinkClick(0)}>
              &lt;Vinay Sharma /&gt;
            </h1>
          </a>
          <button className="text-2xl hidden max-md:block" onClick={handleMenu}>
            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>

        <nav className={`flex gap-10 max-md:flex-col max-md:mt-12 ${menuOpen ? "max-md:flex" : "max-md:hidden"}`}>
          <ul className="flex gap-10 max-md:flex-col max-md:w-full">
            <li className="max-md:w-full">
              <a href="#about" className="inline-block w-full text-[#7e9199] hover:text-white hover:border-b pb-1 text-lg" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="inline-block w-full text-[#7e9199] hover:text-white hover:border-b pb-1 text-lg" onClick={handleLinkClick}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="inline-block w-full text-[#7e9199] hover:text-white hover:border-b pb-1 text-lg" onClick={handleLinkClick}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="inline-block w-full text-[#7e9199] hover:text-white hover:border-b pb-1 text-lg" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <ul className="flex gap-6 justify-around items-center mt-8 max-md:mt-4">
            <li>
              <a href="https://github.com/vinay2003" className="text-4xl cursor-pointer" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vinay2003/" className="text-4xl cursor-pointer" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="text-4xl cursor-pointer" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://facebook.com" className="text-4xl cursor-pointer" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
