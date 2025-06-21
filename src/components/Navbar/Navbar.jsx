import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const galleryRoutes = [
    "/add-gallery",
    "/square-gallery",
    "/portrait-gallery",
    "/youtube-gallery",
    "/banner-gallery",
  ];

  const isGalleryPage = galleryRoutes.includes(location.pathname);

  const menuItems = isGalleryPage
    ? [
        { path: "/", label: "Home", isRoute: true },
        { path: "/gallery", label: "Back", isRoute: true },
      ]
    : [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "project", label: "Projects" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },
        { path: "/gallery", label: "Gallery", isRoute: true },
      ];

  const gallerySubItems = isGalleryPage
    ? [
        { path: "/square-gallery", label: "Square" },
        { path: "/portrait-gallery", label: "Portrait" },
        { path: "/youtube-gallery", label: "YT" },
        { path: "/banner-gallery", label: "Banner" },
      ]
    : [];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let current = "";
      menuItems.forEach((item) => {
        if (!item.id) return;
        const section = document.getElementById(item.id);
        if (section && scrollPosition >= section.offsetTop) {
          current = item.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleMenuClick = (id) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition duration-300 px-[6vw] md:px-[6vw] lg:px-[14vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-60 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        <div
          className="text-lg font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-[#8245ec]">&lt;</span>Narayan
          <span className="text-[#8245ec]">/</span>Badatya
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm text-gray-300 font-medium">
          {menuItems.map((item) =>
            item.isRoute ? (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`hover:text-[#8245ec] ${
                    location.pathname === item.path ? "text-[#8245ec]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ) : (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
                onClick={() => handleMenuClick(item.id)}
              >
                {item.label}
              </li>
            )
          )}

          {gallerySubItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-[#8245ec] ${
                  location.pathname === item.path ? "text-[#8245ec]" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/narayanbadatya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-[#8245ec]" size={22} />
          </a>
          <a
            href="https://linkedin.com/in/narayanbadatya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-[#8245ec]" size={22} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec]"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec]"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-60 backdrop-blur-lg z-[999] rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) =>
              item.isRoute ? (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`hover:text-white ${
                      location.pathname === item.path ? "text-[#8245ec]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.id} onClick={() => handleMenuClick(item.id)}>
                  <span
                    className={`hover:text-white ${
                      activeSection === item.id ? "text-[#8245ec]" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </li>
              )
            )}

            {gallerySubItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-white ${
                    location.pathname === item.path ? "text-[#8245ec]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/narayanbadatya"
                target="_blank"
                className="hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/narayanbadatya"
                target="_blank"
                className="hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
