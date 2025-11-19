import React from "react";
import { motion } from "framer-motion";

const Internships = () => {
  const internships = [
    
    {
      id: 1,
      role: "Full Stack Developer Intern",
      company: "Code Beat",
      duration: "May 2024 - July 2024",
      description:
        "During my MERN Full Stack Development Internship, I rapidly upskilled in the complete MERN stack gaining hands on mastery of MongoDB, Express.js, React, and Node.js. Through 120+ hours of intensive live coding, debugging sessions, and instructor led code reviews, I learned industry best practices in REST API design, responsive UI development, and full-stack integration transforming theoretical concepts into practical, deployable skills.",
    },
    {
      id: 2,
      role: "Python Intern",
      company: "Ingenious Tech",
      duration: "Aug 2022 - Sep 2022",
      description:
        "During my first Python Development Internship, I entered the programming world from scratch and rapidly learned core Python concepts including variables, loops, functions, OOP principles, and file handling. This 80+ hour hands on experience sharpened my problem solving skills, taught me clean code practices, and laid a strong foundation in software and programming development logic.",
    },
    
  ];

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <div
      name="internships"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-4xl font-bold inline border-b-4 border-white text-cyan-300">
            Internships
          </p>
          <p className="mt-3 text-gray-400 text-sm">
            My professional learning journey so far
          </p>
        </div>

        <div className="relative border-l-4 border-red-600 pl-8 space-y-16">
          {internships.map((intern, i) => (
            <motion.div
              key={intern.id}
              custom={i}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative bg-black backdrop-blur-lg border border-gray-400 p-6 rounded-2xl shadow-lg 
                         transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] 
                         hover:border-cyan-500">
              <div className="absolute -left-[37px] top-6 w-5 h-5 rounded-full bg-cyan-400 border-4 border-gray-900"></div>

              <h3 className="text-2xl font-semibold text-cyan-300">
                {intern.role}
              </h3>
              <p className="text-gray-300 text-sm mb-2">{intern.company}</p>
              <p className="text-gray-400 text-sm italic mb-4">
                {intern.duration}
              </p>
              <p className="text-gray-200 text-base leading-relaxed">
                {intern.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internships;