// src/components/HorizontalGallery.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const comboVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    rotateY: -15,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 14,
      duration: 0.8,
    },
  },
};

const HorizontalGallery = ({ title, media }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % media.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [media.length]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: activeIndex * containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section className="my-16">
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      <div
        ref={containerRef}
        className="overflow-x-auto whitespace-nowrap snap-x snap-mandatory scroll-smooth rounded-xl"
      >
        <div className="flex w-full">
          {media.map((item, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });
            return (
              <motion.div
                ref={ref}
                key={i}
                variants={comboVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="snap-center shrink-0 w-full sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[33%] px-2 cursor-pointer"
              >
                <div className="overflow-hidden rounded-xl bg-black shadow-md hover:scale-[1.03] hover:shadow-xl transition duration-300">
                  <img
                    src={item.src}
                    alt={`Slide ${i}`}
                    className="w-full h-auto object-cover aspect-video"
                    loading="lazy"
                  />
                  {item.caption && (
                    <div className="p-2 text-sm text-center text-white bg-black/60">
                      {item.caption}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {media.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-purple-500 scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HorizontalGallery;
