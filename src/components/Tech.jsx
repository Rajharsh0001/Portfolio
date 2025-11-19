import { motion } from "framer-motion";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Adv_java from "../assets/Adv_java.png";
import java from "../assets/java.png";
import postman from "../assets/postman.jpg";
import api from "../assets/api.png";
import node from "../assets/node.png";
import Express from "../assets/Express.png";
import Postgres from "../assets/Postgres.png";
import Bootstrap from "../assets/Bootstrap.jpg";
import Mongo_DB from "../assets/Mongo_DB.png";
import SQL from "../assets/SQL.png";
import python from "../assets/python.png";

const Tech = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: node, title: "Node", style: "shadow-green-300" },
    { id: 7, src: Express, title: "Express", style: "shadow-yellow-500 color:white" },
    { id: 8, src: java, title: "Java", style: "shadow-white" },
    { id: 9, src: Adv_java, title: "Advance Java", style: "shadow-white" },
    { id: 10, src: python, title: "Python", style: "shadow-sky-400" },
    { id: 11, src: Postgres, title: "PostGreSQL", style: "shadow-blue-400" },
    { id: 12, src: SQL, title: "SQL", style: "shadow-blue-600" },
    { id: 13, src: Bootstrap, title: "BootStrap", style: "shadow-purple-800" },
    { id: 14, src: Mongo_DB, title: "Mongo_DB", style: "shadow-green-600" },
    { id: 15, src: api, title: "APIs", style: "shadow-sky-300" },
    { id: 16, src: github, title: "GitHub", style: "shadow-gray-400" },
    { id: 17, src: postman, title: "POSTMAN", style: "shadow-orange-400" },
  ];


  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  

  return (
    <div
  name="tech"
  className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center py-8 px-4"
        >
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              variants={item}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;