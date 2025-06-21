import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-4 md:px-[8vw] lg:px-[12vw] font-sans"
    >
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h2
          className="text-4xl font-bold text-white"
          variants={fadeVariant}
        >
          SKILLS
        </motion.h2>
        <motion.div
          className="w-28 h-1 bg-purple-500 mx-auto mt-2"
          variants={fadeVariant}
        ></motion.div>
        <motion.p
          className="text-gray-400 mt-4 text-lg font-semibold"
          variants={fadeVariant}
        >
          My technical abilities in frontend, backend and design.
        </motion.p>
      </motion.div>

      <div className="flex flex-wrap gap-6 justify-between">
        {SkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            className={`w-full md:w-[48%] border border-purple-500 rounded-2xl p-6 bg-[#0e0a1f]/50 shadow-[0_0_30px_1px_rgba(130,69,236,0.3)]`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeVariant}
            custom={index}
          >
            <h3 className="text-2xl font-semibold text-white text-center mb-6">
              {category.title}
            </h3>
            <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.05}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="relative flex flex-col items-center justify-center gap-2 border border-gray-700 rounded-2xl px-4 py-3 text-center"
                    data-tooltip-id={`skill-${skill.name}`}
                    data-tooltip-content={skill.description || skill.name}
                    variants={fadeVariant}
                    custom={i}
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-8 h-8"
                    />
                    <span className="text-sm text-gray-300">{skill.name}</span>
                    <ReactTooltip id={`skill-${skill.name}`} place="top" effect="solid" />
                  </motion.div>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
