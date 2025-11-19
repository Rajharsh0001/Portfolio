import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "education" },
    { id: 4, link: "internships" },
    { id: 5, link: "projects" },
    { id: 6, link: "tech" },
    { id: 7, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gray-900 fixed z-50">
      <Link
        to="home"
        smooth={true}
        duration={600}
        offset={-80}
        spy={true}
        activeClass="active"
        className="cursor-pointer" >
        <h1 className="text-4xl font-signature ml-2 bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent tracking-wide transition-all duration-300 hover:scale-110">
          Harsh
        </h1>
      </Link>

      <ul className="hidden md:flex space-x-6">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-6 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all duration-300 capitalize border border-transparent">
            <Link
              to={link}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass="active"
              className="nav-link">
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
                      bg-gradient-to-b from-black to-gray-800 text-gray-300 space-y-6">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-6 py-3 text-3xl capitalize rounded-md transition-all duration-300">
              <Link
                to={link}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="active"
                onClick={() => setNav(false)}
                className="nav-link">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <style jsx>{`
        .nav-link {
          color: #d1d5db;
          border: 1px solid transparent;
          padding: 0.5rem 1.25rem;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          background: linear-gradient(to right, #06b6d4, #3b82f6);
          color: white;
          box-shadow: 0 0 15px 3px rgba(34, 211, 238, 0.6);
          transform: scale(1.05);
        }
        .nav-link.active {
          background: linear-gradient(to right, #06b6d4, #3b82f6);
          color: white;
          box-shadow: 0 0 15px 3px rgba(34, 211, 238, 0.6);
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default NavBar;