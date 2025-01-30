import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Hero = () => {
  return (
    <section
      id="home"
      className=" h-screen py-12 pt-24  flex flex-col items-center justify-center text-center px-6 sm:left-10   text-white bg-[url(./assets/Hero-img.jpg)] bg-no-repeat bg-cover bg-center opacity-100 "
    >
      <motion.h1
        className="text-5xl xl:text-6xl font-extrabold mb-4 text-white leading-snug tracking-wide max-sm:text-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm <span className="">Abdul Kalam</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-4 text-3xl md:text-4xl text-gray-300 sm:text-[24px]"
      >
        <span className=" text-blue-400">Full Stack Developer</span> and{" "}
        <span className=" text-blue-400"> UI/UX Designer </span>
      </motion.h2>
      <motion.p
        className="text-lg text-gray-300 max-w-xl mb-6 mt-4 leading-relaxed sm:mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Passionate about creating interactive web applications. I specialize in
        front-end and back-end technologies, building seamless and dynamic user
        experiences. Let’s create something extraordinary together!
      </motion.p>
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <a href="https://drive.google.com/file/d/1tTuJCVa0F1MpyT_KZ7lFurRyzm1IGL-R/view?usp=drive_link"  className="px-4 py-3 text-lg rounded-xl bg-blue-500 hover:bg-blue-600 transition shadow-lg">
          Download CV
        </a>
        <a href="#contact"  className="px-6 py-3 text-lg rounded-xl bg-zinc-700 hover:bg-zinc-600 transition shadow-lg">
          Contact
        </a>
      </motion.div>
      <div className="flex gap-4 mt-16 max-sm:mt-2">
        <a href="https://www.alkalam456@gmail.com">
          <MdEmail className="h-7 w-7" />
        </a>
        <a href="https://github.com/in/Abdul2102">
          <FaGithub className="h-7 w-7" />
        </a>
        <a href="https://www.linkedin.com/in/abdulkalam-">
          <FaLinkedin className="h-7 w-7" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
