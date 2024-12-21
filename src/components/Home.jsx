import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { groupColors } from "../constants/colors";
import { images } from "../constants/images";

const Home = () => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [cursorPos, setCursorPos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [displayText, setDisplayText] = useState("Andrew Hwang");
  const [hoveredGroup, setHoveredGroup] = useState(null);

  const backgroundMult = 2;
  const containerMult = 1.6;
  const imageMult = 1;

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

  const handleImageClick = (group) => {
    const route = group.toLowerCase().replace(/\s+/g, "");
    navigate(`/${route}`);
  };

  return (
    <div
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
            className={`text-7xl font-alpino absolute left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
              hoveredGroup ? groupColors[hoveredGroup] : "text-slate-800"
            } ${displayText === "Andrew Hwang" ? "opacity-70" : "opacity-100"}`}
            style={{
              opacity: 0,
              animation: "fadeInOut 800ms forwards",
            }}
          >
            {displayText}
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
            className={`absolute w-auto overflow-hidden group transition-opacity duration-300 cursor-pointer ${
              hoveredGroup && hoveredGroup !== image.group ? "opacity-20" : ""
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
              setDisplayText("Andrew Hwang");
            }}
            onClick={() => handleImageClick(image.group)}
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

      {/* Copyright Notice */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none z-[1000] [writing-mode:vertical-rl] [text-orientation:mixed]">
        © {new Date().getFullYear()} Andrew Hwang. All Rights Reserved.
      </div>

      {/* Custom Cursor */}
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
    </div>
  );
};

export default Home;
