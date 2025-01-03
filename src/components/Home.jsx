import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { groupColors } from "../constants/colors";
import { images } from "../constants/images";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "../hooks/useWindowSize";

const MobileNavigation = () => (
  <div className="min-h-screen flex flex-col items-center justify-center p-8 space-y-12">
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-5xl font-array text-slate-200 text-center"
    >
      andrew hwang
      <div className="text-lg font-alpino text-slate-400 text-center">
        it looks better on desktop*
      </div>
    </motion.h1>

    <nav className="flex flex-col items-center gap-6 w-full max-w-xs">
      {[
        { to: "/aboutandrew", label: "About", color: "sky" },
        { to: "/experience", label: "Experience", color: "rose" },
        { to: "/projectsandawards", label: "Projects", color: "violet" },
        { to: "/involvement", label: "Involvement", color: "amber" },
        { to: "/skills", label: "Skills", color: "teal" },
        { to: "/contact", label: "Contact", color: "orange" },
      ].map(({ to, label, color }) => (
        <motion.div
          key={to}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <Link
            to={to}
            className={`w-full py-4 px-6 text-xl font-alpino rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm flex items-center justify-between group hover:bg-slate-700/50 transition-colors text-${color}-400`}
          >
            {label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      ))}
    </nav>
  </div>
);

const Home = () => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [cursorPos, setCursorPos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [displayText, setDisplayText] = useState("andrew hwang");
  const [hoveredGroup, setHoveredGroup] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(() => {
    // Check if images were already loaded in this session
    return !localStorage.getItem("imagesLoaded");
  });

  const backgroundMult = 3;
  const containerMult = 2.3;
  const imageMult = 1.5;

  const { width } = useWindowSize();
  const isMobile = width < 768;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // If images are already loaded, don't show loading screen
    if (localStorage.getItem("imagesLoaded")) {
      setIsLoading(false);
      return;
    }

    const imagePromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
          // Mark images as loaded in localStorage
          localStorage.setItem("imagesLoaded", "true");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        setIsLoading(false);
      });
  }, []);

  const handleImageClick = (group, image) => {
    if (group === "Resume") {
      setExpandedImage(image);
      return;
    }
    const route = group.toLowerCase().replace(/\s+/g, "");
    navigate(`/${route}`);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-white"
          >
            <div className="flex flex-col items-center justify-center min-h-screen">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{
                  scale: [0.8, 1.1, 0.8],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-[60px] h-[60px] border-4 border-t-sky-400 border-r-transparent border-b-violet-400 border-l-transparent rounded-full"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-slate-400 font-chillax mt-6 text-2xl"
              >
                Entering gallery
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isMobile ? (
        // Mobile version
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-[#0E1013] min-h-screen w-full h-full fixed inset-0 overflow-auto"
        >
          <MobileNavigation />
          <div className="fixed inset-0 opacity-[0.3] z-[999] pointer-events-none bg-noise-bg" />
        </motion.div>
      ) : (
        // Desktop version (your existing gallery view)
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="gallery-container noise-bg min-h-screen w-full overflow-hidden relative cursor-none"
          style={{
            backgroundPosition: `${(mousePos.x - 50) * -backgroundMult}px ${
              (mousePos.y - 50) * -backgroundMult
            }px`,
          }}
        >
          <Navbar groupColors={groupColors} />

          {/* Centered Text */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1000]">
            <div className="relative">
              <h1
                key={displayText}
                className={`text-7xl font-array whitespace-nowrap transition-all duration-300 ${
                  hoveredGroup ? groupColors[hoveredGroup] : "text-neutral-400"
                } ${
                  displayText === "andrew hwang" ? "opacity-70" : "opacity-100"
                }`}
                style={{
                  opacity: 0,
                  animation: "fadeInOut 800ms forwards",
                }}
              >
                {displayText.toLowerCase()}
              </h1>
            </div>
          </div>

          {/* Images Container */}
          <div
            className="relative w-full min-h-screen"
            style={{
              transform: `translate(${(mousePos.x - 50) * -containerMult}px, ${
                (mousePos.y - 50) * -containerMult
              }px)`,
            }}
          >
            {images.map((image) => (
              <div
                key={image.id}
                className={`absolute w-auto overflow-visible group transition-opacity duration-300 cursor-pointer ${
                  hoveredGroup && hoveredGroup !== image.group
                    ? "opacity-20"
                    : ""
                }`}
                style={{
                  top: image.top,
                  left: image.left,
                  transform: `translate(${(mousePos.x - 50) * -imageMult}px, ${
                    (mousePos.y - 50) * -imageMult
                  }px)`,
                  zIndex: 1,
                }}
                onMouseEnter={() => {
                  setHoveredGroup(image.group);
                  setDisplayText(image.group);
                }}
                onMouseLeave={() => {
                  setHoveredGroup(null);
                  setDisplayText("andrew hwang");
                }}
                onClick={() => handleImageClick(image.group, image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={image.style}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Expanded Resume View */}
          <AnimatePresence>
            {expandedImage && expandedImage.group === "Resume" && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[1001]"
                  onClick={() => setExpandedImage(null)}
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="fixed inset-0 flex items-start justify-center z-[1002] p-4 overflow-y-auto"
                >
                  <div className="relative w-full max-w-4xl mt-16 mb-8">
                    <img
                      src={expandedImage.src}
                      alt={expandedImage.alt}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                    <button
                      onClick={() => setExpandedImage(null)}
                      className="fixed top-4 right-4 text-slate-300 hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Copyright Notice */}
          <div className="fixed right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none z-[1000] [writing-mode:vertical-rl] [text-orientation:mixed]">
            © {new Date().getFullYear()} Andrew Hwang. All Rights Reserved.
          </div>

          {/* Custom Cursor - Only show when not loading */}
          {!isLoading && (
            <div
              className="fixed w-8 h-8 rounded-full pointer-events-none transition-opacity duration-200"
              style={{
                left: `${cursorPos.x}px`,
                top: `${cursorPos.y}px`,
                transform: "translate(-50%, -50%)",
                backgroundColor: hoveredGroup
                  ? groupColors[hoveredGroup].replace("text-", "bg-")
                  : "rgb(30 41 59)",
                zIndex: 9999,
                opacity: hoveredGroup ? 0 : 1,
              }}
            />
          )}
          <div className="fixed inset-0 opacity-[0.2] z-[999] pointer-events-none bg-noise-bg" />
        </motion.div>
      )}
    </>
  );
};

export default Home;
