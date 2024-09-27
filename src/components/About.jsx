import React from "react";
import coding_gif from "../assets/images/coding.gif";

function About() {
  return (
    <div className="mx-auto h-auto my-36 max-xl:my-20" id="about">
      <div className="flex gap-6 justify-between items-center max-md:flex-wrap max-xl:justify-center">
        <div className="w-1/2 max-xl:w-full text-left max-md:text-center">
          <h1 className="text-5xl max-md:text-4xl mb-5">
            Hi, I'm Vinay Kumar Sharma 👋
          </h1>
          <p className="text-3xl max-md:text-base mb-5 font-light">
            I'm a B.Tech Computer Science Engineer with a passion for building
            innovative and responsive digital solutions. I specialize in web
            development, utilizing modern technologies to create seamless,
            user-friendly applications that solve real-world problems.
          </p>
          <a
            href="#contact"
            className="p-2 px-4 rounded-md text-base bg-white text-purple-500 hover:bg-purple-500 hover:text-white transition-all inline-block w-auto"
          >
            GET IN TOUCH
          </a>
        </div>
        <img
          className="h-80 max-xl:h-64 rounded max-[426px]:h-auto max-[426px]:w-full max-[426px]:mb-5"
          src={coding_gif}
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
