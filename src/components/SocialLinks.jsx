import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/harsh-raj-1a886723a/",
      style: "rounded-tr-md hover:bg-[#0077B5]/20 hover:text-[#00A0DC]",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Rajharsh0001",
      style: "hover:bg-white/10 hover:text-gray-300",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href:"https://mail.google.com/mail/?view=cm&fs=1&to=harsh821101@gmail.com&su=Hello%20Harsh&body=Hello%20Harsh%2C%0D%0AI%20have%20seen%20your%20portfolio%20and%20I%20am%20impressed.%0D%0AI%20want%20to%20connect%20with%20you.%0D%0A%0D%0ARegards%2C",
      style: "hover:bg-[#EA4335]/20 hover:text-[#EA4335]",
    },
    
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-44 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-transparent text-white border border-transparent hover:border-cyan-400/40 backdrop-blur-sm ${style}`}>
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={download}
              target="_blank"
              rel="noreferrer" >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;