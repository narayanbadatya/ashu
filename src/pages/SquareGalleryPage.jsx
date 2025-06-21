import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const MEDIA = [
  { type: "image", src: "src/assets/s/s-5.png", ratio: "square" },
  { type: "image", src: "src/assets/gallery/11.png", ratio: "square" },
  { type: "image", src: "src/assets/s/s-1.png", ratio: "square" },
  { type: "image", src: "src/assets/s/s-3.png", ratio: "square" },
  { type: "image", src: "src/assets/s/s-4.png", ratio: "square" },
  { type: "image", src: "src/assets/gallery/biryani.png", ratio: "square" },
  { type: "image", src: "src/assets/gallery/10.png", ratio: "square" },
  { type: "image", src: "src/assets/s/s-2.png", ratio: "square" },
];

const squareImages = MEDIA.filter(item => item.type === "image" && item.ratio === "square");

const comboVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      duration: 0.6,
    },
  },
};

const SquareGalleryPage = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section
      id="square-gallery"
      className="min-h-screen pt-28 pb-12 px-[5vw] lg:px-[12vw] font-sans text-white relative z-10"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-6"
      >
        Poster & logo
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-10 text-lg text-gray-300"
      >
        Explore all square artworks
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {squareImages.map((item, i) => {
          const ref = React.useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              key={i}
              ref={ref}
              variants={comboVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(255,255,255,0.15)" }}
              className="rounded-xl overflow-hidden bg-black shadow-lg flex items-center justify-center aspect-square cursor-pointer transition-transform duration-300"
              onClick={() => setIndex(i)}
            >
              <img
                src={item.src}
                alt={`Square Image ${i}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={squareImages.map((img) => ({ src: img.src }))}
      />
    </section>
  );
};

export default SquareGalleryPage;
