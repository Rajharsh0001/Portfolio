import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white flex justify-center items-center p-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
        <div className="bg-gray-900 p-8 rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.2)]">
          <div className="pb-6">
            <p className="text-4xl font-bold border-b-4 border-gray-500 inline-block pb-2">
              Contact
            </p>
            <p className="py-3 text-gray-300 text-sm">
              Submit the form below to get in touch with me
            </p>
          </div>

          <form
            action="https://getform.io/f/bqoejwpb"
            method="POST"
            className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-cyan-500 rounded-md text-white focus:outline-none focus:border-blue-400"/>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 border-cyan-500 rounded-md text-white focus:outline-none focus:border-blue-400" />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="p-2 bg-transparent border-2 border-cyan-500 rounded-md text-white focus:outline-none focus:border-blue-400">
            </textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:scale-105 duration-300 font-semibold">
              Let's Talk
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center space-y-6 p-8 rounded-2xl">
          <h2 className="text-3xl font-semibold border-b-2 border-cyan-500 pb-2 inline-block">
            Get in Touch
          </h2>

          <div className="flex items-center space-x-4">
            <Phone className="text-cyan-400" />
            <p className="text-gray-300 text-lg">+91 7258028871</p>
          </div>

          <div className="flex items-center space-x-4">
            <Mail className="text-cyan-400" />
            <p className="text-gray-300 text-lg">harsh821101@gmail.com</p>
          </div>

          <div className="flex items-center space-x-4">
            <MapPin className="text-cyan-400" />
            <p className="text-gray-300 text-lg">Bengaluru-56103, India</p>
          </div>

          <div className="flex flex-col space-y-4 mt-6">
            <a
              href="https://github.com/Rajharsh0001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gray-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-cyan-500"
            >
              <Github className="text-white" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-raj0001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gray-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-cyan-500"
            >
              <Linkedin className="" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;