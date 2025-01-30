import React from "react";
import Logo from "../assets/company.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="bg-zinc-900 py-16"
    >
      <section
        id="about"
        className="container mx-auto px-6 lg:px-12 text-center space-y-16"
      >
        <div className="flex flex-col items-center text-gray-300 space-y-6 ">
          <h2 className="text-4xl font-semibold text-blue-500 mb-4 reveal-up">
            ABOUT ME
          </h2>
          <p className="leading-relaxed text-lg text-gray-300 max-w-4xl reveal-up">
            Hello! I'm <span className="text-blue-400">Abdul Kalam</span> , a{" "}
            <span className="text-blue-400">Full Stack Developer</span> and{" "}
            <span className="text-blue-400">UI/UX Designer </span>( Figma ). I
            specialize in building user-friendly and scalable web applications.
            Passionate about solving complex problems with innovative solutions.
            Constantly learning and improving to create impactful digital
            experiences.
          </p>
          <p className="leading-relaxed text-lg text-gray-300 max-w-4xl reveal-up">
            I specialize in front-end frameworks like{" "}
            <span className="text-blue-400">React</span>, and back-end
            technologies like{" "}
            <span className="text-blue-400">Node.js, MongoDB,</span> and{" "}
            <span className="text-blue-400">Express.js</span>. My focus is on
            building seamless user experiences and clean, maintainable code.
            When I'm not coding, you’ll find me exploring the latest trends in
            design or mentoring budding developers.
          </p>
        </div>
        <div id="work-experience" className="pt-16 border-t border-gray-700">
          <h3 className="text-2xl xl:text-3xl font-semibold text-white text-center mb-8 uppercase reveal-up">
            Work Experience
          </h3>
          <section className="w-full bg-zinc-900 text-white px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 reveal-up">
                What I Have Done So Far
                <span className="block text-blue-500">Work Experience</span>
              </h2>
              <div className="relative border-l-4 border-blue-500 pl-8">
                <div className="mb-16 relative flex flex-col sm:flex-row items-start sm:items-center gap-4 reveal-up">
                  <div className="absolute -left-12 top-0 w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="w-4 h-4 bg-zinc-900 rounded-full reveal-up"></span>
                  </div>
                  <p className="text-sm text-gray-400 sm:mr-6 reveal-up">
                    July 2024 - Present
                  </p>
                  <div className="bg-zinc-800 p-6 rounded-lg shadow-lg flex-1 hover:shadow-blue-400/50 transform hover:scale-110 transition-all duration-500">
                    <div className="flex items-center mb-4">
                      <img
                        src={Logo}
                        alt="why Global Services logo"
                        className="w-14 h-14 rounded-full bg-zinc-700 p-2 mr-4 reveal-up"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-blue-400 reveal-up ">
                          Full-Stack Web Developer Intern
                        </h3>
                        <h4 className="text-md text-gray-300 reveal-up">
                          Why Global Services
                        </h4>
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 reveal-up">
                      <li>
                        Developed dynamic and responsive web applications using
                        modern frameworks and libraries.
                      </li>
                      <li>
                        Enhanced application performance through optimized
                        database queries and caching techniques.
                      </li>
                      <li>
                        Collaborated with the design team to ensure a cohesive
                        user experience and responsive design.
                      </li>
                      <li>
                        Implemented secure and scalable APIs for seamless
                        communication between front-end and back-end systems.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-16 relative flex flex-col sm:flex-row items-start sm:items-center gap-4 reveal-up">
                  <div className="absolute -left-12 top-0 w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full  flex items-center justify-center reveal-up">
                    <span className="w-4 h-4 bg-zinc-900 rounded-full reveal-up"></span>
                  </div>
                  <p className="text-sm text-gray-400 sm:mr-6 reveal-up">
                    July 2024 - Present
                  </p>
                  <div className="bg-zinc-800 p-6 rounded-lg shadow-lg flex-1 hover:shadow-blue-400/50 transform hover:scale-110 transition-all duration-500">
                    <div className="flex items-center mb-4">
                      <img
                        src={Logo}
                        alt="why Global Services logo"
                        className="w-14 h-14 rounded-full bg-zinc-700 p-2 mr-4 reveal-up"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-blue-400 reveal-up">
                          UI/UX Designer Intern
                        </h3>
                        <h4 className="text-md text-gray-300 reveal-up">
                          Why Global Services
                        </h4>
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 reveal-up">
                      <li>
                        Created wireframes, prototypes, and high-fidelity
                        mockups using tools like Figma, Sketch, and Adobe XD.
                      </li>
                      <li>
                        Collaborated with developers to ensure the seamless
                        implementation of designs and consistent branding.
                      </li>
                      <li>
                        Developed user personas and journey maps to identify
                        pain points and enhance the user experience.
                      </li>
                      <li>
                        Conducted user research through surveys, interviews, and
                        usability tests to understand user needs and
                        preferences.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </section>
        </div>
      </section>
    </div>
  );
};

export default About;
