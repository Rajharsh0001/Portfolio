import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const data = [
    {
      id: 1,
      degree: "B.Tech - Computer Engineering",
      school: "Silicon University",
      year: "2021-2025",
      location: " Odisha",
      color: "white",
    },
    {
      id: 2,
      degree: "12th - PCM",
      school: "S.V.P. College",
      year: "2018-2020",
      location: "Bihar",
      color: "white", 
    },
    {
      id: 3,
      degree: "10th - Secondary Education",
      school: "Ishwarchandra Vidyasagar Academy",
      year: "2018",
      location: "Bihar",
      color: "white", 
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      name="education"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white overflow-hidden py-16">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center text-white">
        <div className="text-center mb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-cyan-300">
            Education
          </p>
          <p className="mt-3 text-gray-300">My academic background</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map(({ id, degree, school, year, location, color }) => (
            <motion.div
              key={id}
              variants={item}
              whileHover={{
                boxShadow: `0 0 20px ${color}`,
                scale: 1.03,
              }}
              className="relative rounded-2xl p-8 text-center backdrop-blur-lg bg-white/5 border border-cyan-400/20 shadow-lg transition-all duration-500">
              <h3
                className="text-2xl font-semibold mb-2 relative z-10"
                style={{ color }}>
                {school}
              </h3>

              <p className="text-lg text-yellow-300 opacity-90 mb-2 z-10 relative">
                {degree}
              </p>
              <p className="text-sm text-gray-300 z-10 relative">{location}</p>
              <p className="text-sm text-gray-400 mt-1 z-10 relative">{year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;