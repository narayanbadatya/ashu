import React, { useEffect, useRef, useState } from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { motion, useAnimation, useInView } from "framer-motion";
import profileImage from "../../assets/profile2.png";

// Mobile detection hook
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

// Floating Blob
const FloatingBlob = () => (
  <div className="absolute w-80 h-80 bg-[#8245ec] opacity-30 blur-3xl rounded-full -z-10 top-10 left-1/2 transform -translate-x-1/2 animate-pulse" />
);

// Scroll-down Indicator
const ScrollIndicator = () => (
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
      <div className="w-1 h-2 bg-white rounded-full animate-ping" />
    </div>
  </div>
);

const About = () => {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const textVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 50 : 0 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: isMobile ? 40 : 0 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative px-2 sm:px-2 md:px-12 lg:px-16 pt-2 pb-10 text-white font-sans overflow-hidden"
    >
      <FloatingBlob />

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* LEFT */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">Hi, I am</h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Narayan Badatya</h2>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[#8245ec]">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={["Web Developer", "Graphic Designer", "UI/UX Designer"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-gray-300 mt-4 mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
            I’m a creative web developer focused on building clean, responsive
            websites. I also create engaging videos and compelling graphic
            designs, blending functionality with creativity.
          </p>

          <motion.a
            href="dv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block text-white py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-bold transition duration-300"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 10px #8245ec, 0 0 30px #8245ec",
            }}
          >
            DOWNLOAD CV
          </motion.a>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end lg: w-1/2"
          variants={imageVariants}
          initial="hidden"
          animate={controls}
        >
          <Tilt
            className="w-40 h-37 sm:w-57 sm:h-56 md:w-[22rem] md:h-[22rem] lg:w-[24rem] lg:h-[24rem]  border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1500}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Narayan Badatya"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_8px_10px_rgba(130,69,236,0.6)]"
            />
          </Tilt>
        </motion.div>
      </div>

     
    </section>
  );
};

export default About;
