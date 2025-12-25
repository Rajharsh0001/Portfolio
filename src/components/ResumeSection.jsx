import React from "react";
import ResumePDF from "../assets/Harsh_Raj.pdf";

const ResumeSection = ({ showResume }) => {
  return (
    <div
      className={`transition-all duration-700 ease-in-out overflow-hidden ${
        showResume ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
      }`}>
      <div className="max-w-screen-lg mx-auto mt-10 px-4 text-center">
        <h3 className="text-3xl font-semibold mb-4 text-[#cbf3bb]">
          My Resume
        </h3>

        <iframe
          src={ResumePDF}
          title="Harsh Raj Resume"
          className="w-full h-[700px] rounded-lg shadow-lg"
        ></iframe>

        <a
          href={ResumePDF}
          download="Harsh_Raj.pdf"
          className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-green-400 to-cyan-500 rounded-md font-semibold text-black hover:scale-105 transform transition-all duration-300">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeSection;