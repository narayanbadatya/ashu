import React from "react";
import { education } from "../../constants";
import BlurBlob from "../BlurBlob";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-[12vw] md:px-[7vw] lg:px-[vw] font-sans bg-transparent text-white overflow-hidden clip-path-custom-3"
    >
      <BlurBlob position={{ top: "10%", left: "10%" }} size={{ width: "180px", height: "180px" }} />
      <BlurBlob position={{ top: "90%", left: "90%" }} size={{ width: "160px", height: "160px" }} />

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative z-10">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full z-0"></div>

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={edu.id}
              className={`relative flex flex-col sm:flex-row items-center mb-16 ${
                isLeft ? "sm:justify-start" : "sm:justify-end"
              }`}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Mobile Dot */}
              <div className="absolute left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 rounded-full flex justify-center items-center z-10 sm:hidden">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Timeline Card */}
              <motion.div
                className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md hover:rotate-[1deg] hover:scale-[1.02] shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-all duration-300 ${
                  isLeft ? "sm:ml-0" : "sm:mr-0"
                } sm:ml-44 sm:mr-44 ml-8`}
                whileHover={{ rotateY: isLeft ? -3 : 3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <h4 className="text-sm text-gray-300">{edu.school}</h4>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>

                {!(
                  edu.degree.includes("Full Stack Web") ||
                  edu.degree.includes("Graphic Design")
                ) && (
                  <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                )}

                <p className="mt-4 text-gray-400">
                  {typeof edu.desc === "string" ? edu.desc : edu.desc}
                </p>

                {edu.skills && (
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {edu.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-purple-800 to-purple-400 text-white text-center py-2 rounded-lg text-xs sm:text-sm shadow-md hover:scale-105 transition-transform"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
