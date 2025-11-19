import React, { useState, useEffect } from "react";
import img3 from "../assets/img3.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ResumePDF from "../assets/Harsh_Raj.pdf"; 

const Home = () => {
  const fullText = "I'm Harsh Raj";
  const descText =
    "A Full Stack Developer ready to grow, create, and bring ideas to life through clean and functional web experiences.";

  const [displayText, setDisplayText] = useState("");
  const [descDisplay, setDescDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else clearInterval(timer);
    }, 150);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let j = 0;
    const descTimer = setInterval(() => {
      if (j < descText.length) {
        setDescDisplay(descText.slice(0, j + 1));
        j++;
      } else clearInterval(descTimer);
    }, 10);
    return () => clearInterval(descTimer);
  }, []);

  return (
    <div
  name="home"


  className="h-screen w-full bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white"
  style={{ paddingTop: "80px" }}>
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 md:gap-30">
        <div className="flex flex-col justify-center h-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl sm:text-7xl font-bold mb-4 text-white ">
            {displayText}
            {displayText.length < fullText.length && (
              <span className="animate-pulse">|</span>
            )}
          </h2>

          <div className="py-4 max-w-md mx-auto md:mx-0 "
            style={{ transformStyle: "preserve-3d" }}>
            <p className="text-gray-300 text-base leading-relaxed min-h-[80px]">
              {descDisplay}
              {descDisplay.length < descText.length && (
                <span className="animate-pulse text-cyan-400">|</span>
              )}
            </p>
          </div>

          <a href={ResumePDF}
            download="Harsh_Raj_Resume.pdf"
            className="group text-white w-fit px-6 py-3 my-4 flex items-center justify-center mx-auto md:mx-0 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition-all duration-300 hover:bg-[rgb(234,56,78)]">
            My Resume
            <span className="group-hover:translate-x-1 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
  <img
    src={img3}
    alt="my profile"
    className="rounded-2xl w-[70%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover transition-all duration-500 "
    style={{animation: "slideInFromRight 1s ease-out forwards", }} />
</div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          0% {
            transform: translateX(120px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        /* Custom hover tilt effect (3D illusion) */
        .hover\\:rotate-x-6:hover {
          transform: rotateX(6deg);
        }
        .hover\\:-rotate-y-6:hover {
          transform: rotateY(-6deg);
        }
      `}</style>
    </div>
  );
};

export default Home;