import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const MEDIA = [
  { type: "image", src: "src/assets/gallery/9.png", ratio: "portrait" },
  { type: "image", src: "src/assets/gallery/8.png", ratio: "portrait" },
  { type: "image", src: "src/assets/gallery/7.jpg", ratio: "portrait" },
  { type: "image", src: "src/assets/p/p-11.png", ratio: "portrait" },
  { type: "image", src: "src/assets/p/p-12.png", ratio: "portrait" },
  { type: "image", src: "src/assets/gallery/6.jpg", ratio: "portrait" },
  { type: "image", src: "src/assets/gallery/11.png", ratio: "portrait" },
  { type: "image", src: "src/assets/gallery/1.png", ratio: "portrait" },
  { type: "image", src: "src/assets/gallery/2.png", ratio: "portrait" },
  { type: "image", src: "src/assets/gallery/3.png", ratio: "portrait" },
];

const portraitImages = MEDIA.filter(item => item.ratio === "portrait");

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

const PortraitGalleryPage = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="min-h-screen pt-28 pb-12 px-[5vw] lg:px-[12vw] font-sans text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-6"
      >
        Poster Gallery
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-10 text-lg text-gray-300"
      >
        All designs & posters
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {portraitImages.map((item, i) => {
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
              className="rounded-xl overflow-hidden bg-black aspect-[4/5] cursor-pointer transition-transform duration-300"
              onClick={() => setIndex(i)}
            >
              <img src={item.src} alt={`Portrait ${i}`} className="w-full h-full object-cover" />
            </motion.div>
          );
        })}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={portraitImages.map(img => ({ src: img.src }))}
      />
    </section>
  );
};

export default PortraitGalleryPage;