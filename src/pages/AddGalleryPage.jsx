import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import GlowButton from "../components/Buttons/GlowButton";

const SQUARE_MEDIA = [
  { type: "image", src: "/assets/gallery/11.png", ratio: "square" },

];

const PORTRAIT_MEDIA = [
  { type: "image", src: "/assets/p/p-12.png", ratio: "portrait" },

];

const YT_MEDIA = [
  { type: "image", src: "/assets/ui/ui3.png", ratio: "16:9" },

];

const BANNER_MEDIA = [


 
];

const getMediaClass = (ratio) => {
  switch (ratio) {
    case "square":
      return "aspect-square";
    case "portrait":
      return "aspect-[4/5]";
    case "16:9":
      return "aspect-video";
    case "21:9":
      return "aspect-[21/9]";
    default:
      return "aspect-video";
  }
};

const AddGalleryPage = () => {
  const [index, setIndex] = useState(-1);
  const [currentSlides, setCurrentSlides] = useState([]);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (index >= 0 && currentSlides.length > 0) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % currentSlides.length);
      }, 2500);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [index, currentSlides]);

  const openGallery = (slides, startIndex = 0) => {
    const validSlides = slides.map((item) => ({ src: item.src }));
    setCurrentSlides(validSlides);
    setIndex(startIndex);
  };

  const renderGalleryBlock = (title, media, route, delay = 0) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, type: "spring" }}
      viewport={{ once: true }}
      className="flex flex-col items-center mt-12 w-full"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>

      {/* Horizontal scrollable image strip */}
      <div className="flex gap-4 overflow-x-auto w-full pb-2 snap-x">
        {media.map((item, idx) => (
          <img
            key={idx}
            src={item.src}
            alt={`${title}-${idx}`}
            onClick={() => openGallery(media, idx)}
            className={`cursor-pointer rounded-xl shadow-md transition-transform transform hover:scale-105 w-[300px] snap-center shrink-0 ${getMediaClass(item.ratio)}`}
          />
        ))}
      </div>

      <div className="mt-6">
        <GlowButton onClick={() => navigate(route)}>
          See All {title}
        </GlowButton>
      </div>
    </motion.div>
  );

  return (
    <section
      id="gallery"
      className="min-h-screen pt-28 pb-12 px-[5vw] lg:px-[12vw] font-sans relative z-10 text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-6"
      >
        Gallery of Visual Art
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-10 text-lg text-gray-300"
      >
        Explore a curated display of my best graphic design work — posters,
        thumbnails, banners & more.
      </motion.p>

      {renderGalleryBlock("Logo & Poster", SQUARE_MEDIA, "/square-gallery", 0)}
      {renderGalleryBlock("Portrait Gallery", PORTRAIT_MEDIA, "/portrait-gallery", 0.1)}
      {renderGalleryBlock(" UI & Thumbnails", YT_MEDIA, "/youtube-gallery", 0.2)}
      {renderGalleryBlock("Banners", BANNER_MEDIA, "/banner-gallery", 0.3)}

      <Lightbox
        open={index >= 0}
        index={index}
        slides={currentSlides}
        close={() => setIndex(-1)}
      />
    </section>
  );
};

export default AddGalleryPage;
