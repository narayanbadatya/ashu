import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../constants";
import ImageSlider from "../Gallery/ImageSlider";
import BlurBlob from "../BlurBlob";
import GlowButton from "../Buttons/GlowButton";

const GALLERY_IMAGES = [];

const WorkGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section id="gallery" className="relative bg-[#050414] text-white font-sans overflow-hidden">
      {/* Blobs */}
      <BlurBlob position={{ top: "3%", left: "85%" }} size={{ width: "180px", height: "180px" }} />
      <BlurBlob position={{ top: "20%", left: "30%" }} size={{ width: "200px", height: "250px" }} />
      <BlurBlob position={{ top: "85%", left: "85%" }} size={{ width: "220px", height: "220px" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent z-0" />

      {/* Graphic Design */}
      <div className="relative z-10 px-[6vw] py-2">
        <h2 className="text-4xl font-bold text-center mb-2 mt-4">Graphic Design</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-center p-2 text-gray-400">
          Bringing ideas to life through visual storytelling, creating compelling art and designs.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt || `gallery-${index}`}
              className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
            />
          ))}
        </div>

        <ImageSlider />

        <div className="flex justify-center mt-10">
          <GlowButton onClick={() => window.location.href = "/gallery"}>More Information</GlowButton>
        </div>
      </div>

      {/* Projects Section */}
      <div className="relative z-10 px-[6vw] py-10">
        <div className="text-center mb-14">
          <motion.h2
            id="project"
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            PROJECTS
          </motion.h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            A showcase of the projects I have worked on, highlighting my skills and experience in various technologies.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] overflow-hidden cursor-pointer transition-transform duration-300"
            >
              <div className="p-4">
                <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl">
                  <div className="absolute inset-0 overflow-y-auto snap-y snap-mandatory custom-scrollbar">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full object-cover snap-start"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6 relative">
                <BlurBlob position={{ top: "50%", left: "-20%" }} size={{ width: "80px", height: "80px" }} />
                <h3 className="text-2xl font-bold relative z-10">{project.title}</h3>
                <p className="text-gray-500 mb-4 pt-4 line-clamp-3">{project.description}</p>
                <div className="mb-4">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-gradient-to-br from-purple-500 to-purple-800 text-blue text-xs font-medium rounded-full px-3 py-1 shadow-md hover:scale-110 transition-transform inline-block mr-2 mb-2"
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] overflow-hidden relative flex flex-col">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-cover"
                />
              </div>
              <div className="py-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-gray-400 mb-6 lg:text-base text-sm">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-gradient-to-br from-purple-600 to-purple-600 text-gray-200 text-xs font-medium rounded-full px-3 py-1 shadow-md hover:scale-110 transition-transform"
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 bg-gray-800 hover:bg-purple-700 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300 text-white px-5 py-2 rounded-xl text-center font-semibold text-sm flex items-center justify-center gap-2 group"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 bg-gradient-to-r from-purple-500 to-purple-900 hover:from-purple-300 hover:to-purple-900 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 text-white px-5 py-2 rounded-xl text-center font-semibold text-sm flex items-center justify-center gap-2 group"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkGallery;
