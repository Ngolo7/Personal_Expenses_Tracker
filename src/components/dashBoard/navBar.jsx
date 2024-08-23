import React from "react";
import { BsGithub } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="flex items-center gap-5 p-4  bg-gradient-to-r from-gray-400 via-green-500 bg-gray-600 text-white">
      <a
        href="https://github.com/ngolo7" // Replace with your GitHub profile URL
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-700 transition-colors"
      >
        <BsGithub size={64} className="hover:scale-110 transition-transform" />
      </a>
      <div className="flex flex-col">
        <h1 className="text-3xl">Welcome</h1>
        <p className="text-2xl">Gurung</p>
      </div>
    </div>
  );
};

export default NavBar;
