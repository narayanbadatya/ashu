// src/App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BlurBlob from "./components/BlurBlob";

// 💡 Lazy loaded components
const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const WorkGallery = lazy(() => import("./components/Work/WorkGallery"));
const Education = lazy(() => import("./components/Education/Education"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

const AddGalleryPage = lazy(() => import("./pages/AddGalleryPage"));
const SquareGalleryPage = lazy(() => import("./pages/SquareGalleryPage"));
const YouTubeGalleryPage = lazy(() => import("./pages/YouTubeGalleryPage"));
const BannerGalleryPage = lazy(() => import("./pages/BannerGalleryPage"));
const PortraitGalleryPage = lazy(() => import("./pages/PortraitGalleryPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));

const App = () => {
  return (
    <div className="bg-[#050414]">
      {/* 🔮 Decorative Blur */}
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <Navbar />

      <div className="relative pt-20">
        <Suspense fallback={<div className="text-white text-center mt-20">Loading...</div>}>
          <Routes>
            {/* ✅ Home Route */}
            <Route
              path="/"
              element={
                <>
                  <section id="about" className="pt-28">
                    <About />
                  </section>

                  <section id="skills" className="pt-28">
                    <Skills />
                  </section>

                  <section id="project">
                    <WorkGallery />
                  </section>

                  <section id="education">
                    <Education />
                  </section>

                  <Contact />
                  <Footer />
                </>
              }
            />

            {/* ✅ Gallery Routes */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/add-gallery" element={<AddGalleryPage />} />
            <Route path="/square-gallery" element={<SquareGalleryPage />} />
            <Route path="/portrait-gallery" element={<PortraitGalleryPage />} />
            <Route path="/youtube-gallery" element={<YouTubeGalleryPage />} />
            <Route path="/banner-gallery" element={<BannerGalleryPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
