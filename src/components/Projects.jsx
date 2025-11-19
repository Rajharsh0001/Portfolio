import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Gym from "../assets/Gym.png";
import Dental from "../assets/Dental.png";
import Food from "../assets/Food.png";
import pharmacy from "../assets/pharmacy.png";
import Sundown from "../assets/Sundown.png";
import VoiceAssistant from "../assets/VoiceAssistant.png";
import Promptly from "../assets/Promptly.png";
import Resume from "../assets/Resume.png";
import AI from "../assets/AI.png";
import Dahej from "../assets/Dahej.png";
import Brain from "../assets/Brain.png";
import MOvie from "../assets/MOvie.png";
import Restaurant from "../assets/Restaurant.png";
import Lib from "../assets/Lib.png";
import Student from "../assets/Student.png";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState("MERN");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const { ref, inView } = useInView({ threshold: 0.2 });
  const controls = useAnimation();

  const projects = [
    // mern
    {
      id: 1,
      category: "MERN",
      image: Gym,
      title: "Gym App",
      description:
        "A complete gym app with gym membership plans, user can calculate their BMI and send their queries directly to gym head.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Nodemailer"],
      githubLink: "https://github.com/Rajharsh0001/Gym_app",
    },
    {
      id: 2,
      category: "MERN",
      image: Dental,
      title: "Dental Clinic Website",
      description:
        "A responsive dental care website that helps patients book appointments and learn about treatments. Built for seamless user experience.",
      tech: ["React", "Tailwind CSS"],
      githubLink: "https://github.com/Rajharsh0001/Dental_Clinic",
    },
    {
      id: 3,
      category: "MERN",
      image: Food,
      title: "Food Recipe App",
      description:
        "A modern food recipe web app where users can browse, add, edit, and save their favorite dishes.",
      tech: ["React", "Node", "Express", "MongoDB"],
      githubLink: "https://github.com/Rajharsh0001/Food_Receipe",
    },
    {
      id: 4,
      category: "MERN",
      image: pharmacy,
      title: "Pharmacy Website",
      description:
        "An e-commerce pharmacy website where users can browse medicines, add them to cart, read health blogs.",
      tech: ["React", "Bootstrap", "Express", "MongoDB", "Node.js", "API"],
      githubLink: "https://github.com/mrahulsit/Pharmacy-App",
    },
    {
      id: 5,
      category: "MERN",
      image: Sundown,
      title: "Sundown Studio Clone",
      description:
        "A visually aesthetic clone of the Sundown Studio website made with GSAP scroll animations and smooth transitions.",
      tech: ["HTML", "CSS", "GSAP"],
      githubLink: "https://github.com/Rajharsh0001/Sundown_website",
    },
    {
      id: 6,
      category: "MERN",
      image: VoiceAssistant,
      title: "Voice Assistant App",
      description:
        "A simple voice assistant app using Web Speech API that listens to user commands and performs actions like search, opening sites or open system apps.",
      tech: ["HTML", "Speech API", "CSS", "JavaScript"],
      githubLink: "https://github.com/Rajharsh0001/Voice_Assistant",
    },
    {
      id: 7,
      category: "MERN",
      image: Promptly,
      title: "Promptly AI",
      description:
        "An AI-powered chatgpt like model that uses open Api to fetch and show results according to user inputs.",
      tech: ["HTML", "CSS", "OpenAI API", "JavaScript"],
      githubLink: "https://github.com/Rajharsh0001/Promptly",
    },
    {
      id: 8,
      category: "MERN",
      image: Resume,
      title: "AI Resume Builder",
      description:
        "AI-based resume builder that auto-generates professional CVs from basic user input. User can add and customize sections.",
      tech: ["React", "TailwindCSS"],
      githubLink: "https://github.com/Rajharsh0001/Resume_Generator",
    },
    {
      id: 9,
      category: "MERN",
      image: AI,
      title: "AI Image Enhancer",
      description:
        "A web app that enhances low-quality images using AI-powered APIs. Includes image upload, preview, and download features.",
      tech: ["React", "Tailwind", "API"],
      githubLink: "https://github.com/Rajharsh0001/Image_Enhancer",
    },
    {
      id: 10,
      category: "MERN",
      image: Dahej,
      title: "Dahej Calculator",
      description:
        "A social awareness platform created to educate people about anti-dowry laws and calculate dowry for fun purpose (built purely for fun).",
      tech: ["React", "TailwindCSS"],
      githubLink: "https://github.com/Rajharsh0001/Dahej_Calculator",
    },

    //advance java
    {
      id: 11,
      category: "Advance Java",
      image: Lib,
      title: "Library Management System",
      description:
        "A Java JDBC-based library management system that consist admin and user panel allows admins to add books, delete books, view the borrowers list, and users to create accounts, borrow books, view books.",
      tech: ["Java", "JDBC", "MySQL", "HTML", "CSS"],
      githubLink: "https://github.com/Rajharsh0001/Library_Management_System",
    },
    {
      id: 12,
      category: "Advance Java",
      image: Student,
      title: "Student Management System",
      description:"A console-based backend system that allows inserting, updating, deleting, and retrieving student data using JDBC. Designed with PostgreSQL integration to manage persistent storage.",
      tech: ["Java", "JDBC",  "Postgre"],
      githubLink: "https://github.com/Rajharsh0001/Student_Management_System",
    },

    // python
    {
      id: 13,
      category: "Python & ML",
      image: Brain,
      title: "Brain-tumor Detection",
      description:"This project is built using Deep Learning, uses Convolutional Neural Network (CNN) to classify MRI images as tumor-affected or healthy. The model is trained on labeled brain MRI datasets and achieves high accuracy through effective preprocessing, augmentation, and model tuning. It aims to assist in early tumor detection for medical diagnostics.",
      tech: ["Python", "TensorFlow", "Keras", "CNN"],
      githubLink: "https://github.com/Rajharsh0001/Brain_Tumor_detection",
    },
    {
      id: 14,
      category: "Python & ML",
      image: MOvie,
      title: "Movie recommendation System",
      description:
        "This project is built with Python and machine learning. It uses content-based filtering to suggest movies similar to a user's selected title by analyzing metadata such as genres, keywords, and cast. Implemented in Jupyter Notebook, it applies TF-IDF vectorization and cosine similarity to deliver accurate, personalized recommendations efficiently.",
      tech: ["Python", "Pandas", "Scikit-learn", "TF-IDF"],
      githubLink: "https://github.com/Rajharsh0001/Movie-recommendation-system",
    },
    {
      id: 15,
      category: "Python & ML",
      image: Restaurant,
      title: "Restaurant Management System",
      description:"A console-based restaurant ordering system with admin and customer panels.Customers can view menus and place orders, while admins can track and manage them.",
      tech: ["Python"],
      githubLink: "https://github.com/Rajharsh0001/Restaurant_management_system",
    },
  ];

  useEffect(() => {
    const filtered = projects.filter(
      (project) => project.category === selectedCategory
    );
    setFilteredProjects(filtered);
    setCurrentIndex(0);
  }, [selectedCategory]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(filteredProjects.length / cardsPerView);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <div
      name="projects"
      className="min-h-screen bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white py-20 px-4"
      ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-10"
          initial={{ opacity: 0, y: 50, rotateX: 25 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}>
          My Projects
        </motion.h2>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
  {["MERN", "Advance Java", "Python & ML"].map((category) => {
    const isSelected = selectedCategory === category;

    return (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`px-8 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 cursor-pointer w-fit flex items-center justify-center border
          ${
            isSelected
              ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-white border-transparent shadow-[0_0_15px_3px_rgba(34,211,238,0.6)] scale-105"
              : "bg-transparent text-gray-300 border-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(34,211,238,0.6)]"
          }`}
      >
        {category} Projects
      </button>
    );
  })}
</div>

        
          <motion.div
            className="relative"
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            {filteredProjects.length > cardsPerView && (
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-400 hover:bg-red-400 text-white p-2 md:p-3 rounded-full backdrop-blur-sm">
                <ChevronLeft size={24} />
              </button>
            )}

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out gap-4 md:gap-6 lg:gap-8"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="min-w-full flex gap-4 md:gap-6 lg:gap-8 justify-center">
                    {filteredProjects
                      .slice(
                        slideIndex * cardsPerView,
                        slideIndex * cardsPerView + cardsPerView
                      )
                      .map((project) => (
                        <motion.div
                          key={project.id}
                          className="w-full md:w-80 bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-400 transition-all duration-300 scale-90 hover:scale-95 flex flex-col">
                          <div className="h-40 md:h-48 overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"/>
                          </div>

                          <div className="p-4 md:p-6 flex flex-col flex-grow">
                            <h3 className="text-lg md:text-xl font-semibold underline underline-offset-4 text-cyan-400 mb-3 text-center">
                              {project.title}
                            </h3>

                            <div className="h-24 overflow-y-auto no-scrollbar mb-3">
                              <p className="text-gray-200 text-sm leading-relaxed">
                                {project.description}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-3">
                              {project.tech.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full cursor-default hover:scale-110 transition-transform duration-300">
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <a href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-auto w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-2.5 md:py-3 rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-cyan-500/50">
                              See Code
                            </a>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {filteredProjects.length > cardsPerView && (
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-400 hover:bg-red-400 text-white p-2 md:p-3 rounded-full backdrop-blur-sm">
                <ChevronRight size={24} />
              </button>
            )}
          </motion.div>
        )
      </div>
    </div>
  );
}