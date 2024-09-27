import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook  } from "react-icons/fa";

function Contact(){
  return (
      <div className="text-center flex flex-col gap-5 max-[426px]:mt-44 h-auto my-20" id="contact">
        <div className="text-5xl mb-10 max-[500px]:text-3xl max-[500px]:mb-5">Contact Me ☎️</div>
        <p className="text-gray-400 text-base">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </p>
        <a href="mailto:vinaysharma31681@gmail.com" className="text-gray-400 text-2xl hover:text-white">vinaysharma31681@gmail.com</a>
        <div className="flex justify-center gap-5 mt-10">
          <a href="https://github.com/vinay2003" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vinay2003/" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaLinkedin />
          </a>
          <a href="https://stackoverflow.com/users/23691689/talha-shah" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaInstagram />
          </a>
          <a href="https://stackoverflow.com/users/23691689/talha-shah" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaFacebook />
          </a>
        </div>
      </div>
  )
}

export default Contact;