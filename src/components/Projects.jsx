import React from "react";
import Hero from "../assets/Hero-img.jpg"

const Projects = () => {
  return (
    <section id="projects" className="bg-zinc-900 py-16 pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-500 tracking-wide reveal-up">
            PROJECTS
          </h2>
          <p className="text-lg text-zinc-300 mt-4 reveal-up">
            Explore some of my featured projects. Click on the links to view the
            source code on GitHub.
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="relative rounded-lg overflow-hidden shadow-lg bg-zinc-800 group hover:shadow-2xl transition-all duration-300 reveal-up">
            <img
              src={Hero}
              alt="Portfolio Website"
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">
                Portfolio Website
              </h3>
              <p className="text-zinc-300 text-sm text-center px-4 mb-4">
                A personal portfolio website showcasing my skills, projects, and
                contact details.
              </p>
              <a href="" className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 hover:shadow-lg transition-all ">View on GitHub</a>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg bg-zinc-800 group hover:shadow-2xl transition-all duration-300 reveal-up">
          <img
              src="https://img.freepik.com/free-photo/front-view-blurry-lawyer-working_23-2151202429.jpg?ga=GA1.1.1895733828.1727070152&semt=ais_hybrid"
              alt="Lawyer Appointment Booking Website"
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold text-white mb-2 px-12">
              Lawyer Appointment Booking Website
              </h3>
              <p className="text-zinc-300 text-sm text-center px-4 mb-4">
              A fully functional web application that allows clients to book appointments with lawyers based on availability.
              </p>
              <a href="https://lawlinkuser.netlify.app/" className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 hover:shadow-lg transition-all ">View My Website</a>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg bg-zinc-800 group hover:shadow-2xl transition-all duration-300 reveal-up">
          <img
              src="https://img.freepik.com/free-photo/nurse-portrait-hospital_23-2150780304.jpg?ga=GA1.1.1895733828.1727070152&semt=ais_hybrid"
              alt="Doctor Appointment Booking Website"
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold text-white mb-2 px-12">
              Doctor Appointment Booking Website
              </h3>
              <p className="text-zinc-300 text-sm text-center px-4 mb-4">
              Built a user-friendly doctor appointment booking platform with an intuitive interface, real-time availability updates, and secure patient-doctor interactions.
              </p>
              <a href="" className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 hover:shadow-lg transition-all ">View on GitHub</a>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg bg-zinc-800 group hover:shadow-2xl transition-all duration-300 reveal-up">
          <img
              src="https://img.freepik.com/free-photo/close-up-metallic-equipment-part-turning-factory-generated-by-ai_188544-21933.jpg?ga=GA1.1.1895733828.1727070152&semt=ais_hybrid"
              alt="E-Commerce Website"
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">
              E-Commerce Website
              </h3>
              <p className="text-zinc-300 text-sm text-center px-4 mb-4">
              Created an e-commerce platform for bike spares, offering a seamless shopping experience with easy product search, secure payment options, and fast delivery.
              </p>
              <a href="" className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 hover:shadow-lg transition-all ">View on GitHub</a>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg bg-zinc-800 group hover:shadow-2xl transition-all duration-300 reveal-up">
          <img
              src="https://img.freepik.com/free-photo/3d-cinema-theatre-seating-with-popcorn_23-2151005463.jpg?t=st=1739451769~exp=1739455369~hmac=b698171f9c54d5bf65a3892b5d6e720ad12a83e53c391e35971b43ec60ade087&w=1380"
              alt="Movie Ticket Booking Website"
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">
                Movie Ticket Booking Website
              </h3>
              <p className="text-zinc-300 text-sm text-center px-4 mb-4">
              A user-friendly movie ticket booking website for seamless online reservations and seat selection.
              </p>
              <a href="https://popcornspot.netlify.app/" className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 hover:shadow-lg transition-all ">View MY WEBSITE</a>
            </div>
          </div>
          {/* <div className="relative rounded-lg overflow-hidden shadow-lg bg-zinc-800 group hover:shadow-2xl transition-all duration-300 reveal-up">
          <img
              src={Hero}
              alt="Portfolio Website"
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">
                Portfolio Website
              </h3>
              <p className="text-zinc-300 text-sm text-center px-4 mb-4">
                A personal portfolio website showcasing my skills, projects, and
                contact details.
              </p>
              <a href="" className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 hover:shadow-lg transition-all ">View on GitHub</a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
