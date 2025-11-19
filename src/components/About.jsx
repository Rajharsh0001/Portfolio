import React from "react";

const About = () => {
  return (
    <div
  name="about"
  className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white">

      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4  ">
            About
          </p>
        </div>

        <p className="text-xl mt-10 ">
          Hello! I'm Harsh Raj, a Full Stack Developer with a B.Tech in Computer Engineering from Silicon University, Bhubaneswar (2025). I have a strong passion 
          for building dynamic and responsive web applications that provide seamless user experiences.Over the past few years, I have gained hands-on experience 
          in full stack development.
        </p>

        <br />

        <p className="text-xl">
          In addition, I completed internships where I applied my skills in a professional environment, collaborating with teams and learning 
          industry best practices. My goal is to leverage my skills to build applications that make a real impact. I'm excited to contribute 
          and create solutions that combine functionality, performance, and great user experience.

        
        </p>

        <br />

          <p className="text-xl  ">
          Beyond web development, I have also worked with Python and explored Machine Learning to develop intelligent, data-driven solutions. 
          Currently, I'm expanding my expertise by focusing on Hibernate and Spring Boot, enhancing my backend proficiency and understanding 
          of enterprise-level application development. I enjoy learning new technologies and continuously improving my skills to stay 
          updated with evolving tech trends.
        
        </p>
      </div>
    </div>
  );
};

export default About;