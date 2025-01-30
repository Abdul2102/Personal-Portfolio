import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import AK from "../assets/Ak.png";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-20  flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr,3fr,1fr]"
      >
        <h1>
          <a href="/" className="logo">
            <img src={AK} alt="AK" width={50} height={50} />
          </a>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative md:justify-self-center"
        >
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {" "}
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-3 max-md:hidden"
        >
          <a href="https://www.alkalam456@gmail.com">
            <MdEmail className="h-7 w-7" />
          </a>
          <a href="https://github.com/in/Abdul2102">
            <FaGithub className="h-7 w-7" />
          </a>
          <a href="https://www.linkedin.com/in/abdulkalam-">
            <FaLinkedin className="h-7 w-7" />
          </a>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
