import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// 🔽 Your media items
const MEDIA = [
  {
    type: "image",
    src: "https://user-images.githubusercontent.com/10498744/210012254-234538ff-d198-48aa-8964-37e6fd45d227.gif",
    ratio: "21:9",
    caption: "Animated Banner",
  },
  {
    type: "image",
    src: "src/assets/b/b-2.jpg",
    ratio: "21:9",
    caption: "Creative Poster",
  },
  {
    type: "image",
    src: "https://i.imgur.com/4ASafy0.png",
    ratio: "21:9",
    caption: "Promo Design",
  },
  {
    type: "image",
    src: "src/assets/b/b-1.jpg",
    ratio: "21:9",
    caption: "Dark Concept Art",
  },
];

// 🔁 Combo animation variant (fade + scale + rotate)
const comboVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    rotateY: -20,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      duration: 0.7,
    },
  },
};

const BannerGalleryPage = () => {
  const [index, setIndex] = useState(-1);
  const bannerImages = MEDIA;

  return (
    <section
      className="min-h-screen pt-28 pb-16 px-[5vw] lg:px-[12vw] font-sans text-white bg-transparent"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-6"
      >
        Banner Gallery
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-10 text-lg text-gray-300"
      >
        Scroll to explore animated banners and graphics.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bannerImages.map((item, i) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              key={i}
              ref={ref}
              variants={comboVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(255,255,255,0.15)",
              }}
              className="rounded-xl overflow-hidden shadow-lg aspect-[21/9] cursor-pointer transition-transform duration-300"
              onClick={() => setIndex(i)}
            >
              <img
                src={item.src}
                alt={`Banner ${i}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="text-sm text-center text-white bg-black/60 py-1">
                {item.caption}
              </div>
            </motion.div>
          );
        })}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={bannerImages.map((img) => ({ src: img.src }))}
      />
    </section>
  );
};

export default BannerGalleryPage;
