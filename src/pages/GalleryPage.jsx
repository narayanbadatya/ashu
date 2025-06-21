import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import AutoImageSlider from "../components/AutoImageSlider";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";


const SQUARE_MEDIA = [
  { type: "image", src: "src/assets/s/s-1.png", ratio: "square" },
  { type: "image", src: "src/assets/s/s-5.png", ratio: "square" },
  
  { type: "image", src: "src/assets/s/s-3.png", ratio: "square" },

];

const PORTRAIT_MEDIA = [
  { type: "image", src: "src/assets/p/p-12.png", ratio: "portrait" },
  { type: "image", src: "src/assets/p/p-11.png", ratio: "portrait" },
];

const YT_MEDIA = [
  { type: "image", src: "src/assets/ui/ui3.png", ratio: "16:9" },
   { type: "image", src: "src/assets/ui/ui5.png", ratio: "16:9" },
   { type: "image", src: "src/assets/ui/ui1.png", ratio: "16:9" },
    { type: "image", src: "src/assets/ui/ui2.png", ratio: "16:9" },
    
 
];

const BANNER_MEDIA = [
  {
    type: "image",
    src: "https://user-images.githubusercontent.com/10498744/210012254-234538ff-d198-48aa-8964-37e6fd45d227.gif",
    ratio: "21:9",
  },
 
 
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
      return "aspect-[]";
    default:
      return "aspect-video";
  }
};

const GalleryPage = () => {
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
      className="flex flex-col items-center mt-12"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
      <div
        className="cursor-pointer overflow-hidden rounded-xl shadow-lg w-full max-w-[800px] border border-purple-500/40 backdrop-blur-sm bg-white/5 hover:shadow-[0_0_35px_rgba(186,97,255,0.4)] transition"
        onClick={() => openGallery(media)}
      >
        <AutoImageSlider
          media={media}
          aspectClass={`w-full ${getMediaClass(media[0].ratio)}`}
          interval={3000}
        />
      </div>
      <button
        onClick={() => navigate(route)}
        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition"
      >
        See All {title}
      </button>
    </motion.div>
  );

  return (
    <>
      <Navbar />
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
        {renderGalleryBlock("UI & Thumbnails", YT_MEDIA, "/youtube-gallery", 0.2)}
        {renderGalleryBlock(" Banners", BANNER_MEDIA, "/banner-gallery", 0.3)}

        <Lightbox
          open={index >= 0}
          index={index}
          slides={currentSlides}
          close={() => setIndex(-1)}
        />
      </section>
    </>
  );
};

export default GalleryPage;