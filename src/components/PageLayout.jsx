import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function PageLayout({ children, text }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Add mouse move handler
  const handleMouseMove = (e) => {
    // Calculate mouse position as percentage of screen width/height
    const x = (e.clientX / window.innerWidth - 0.5) * 20; // multiplier controls movement amount
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="min-h-screen text-slate-200 relative"
      onMouseMove={handleMouseMove}
    >
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-[#0E1013] -z-10" />

      {/* Navbar */}
      <Navbar />

      {/* Background Text Effect */}
      <div className="opacity-50 fixed inset-0 z-[2] flex items-center justify-center mix-blend-difference">
        <div
          className="w-[80vw] max-w-7xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.2s ease-out",
            filter: "blur(2px)",
          }}
        >
          <TextHoverEffect text={text} />
        </div>
      </div>

      {/* Page Content */}
      <main className="relative pt-16 z-[3] pointer-events-none">
        {children}
      </main>

      {/* Footer */}
      <div className="relative z-[4]">
        <Footer />
      </div>

      {/* Noise Overlay */}
      <div className="fixed inset-0 opacity-[0.3] z-[999] pointer-events-none bg-noise-bg" />
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default PageLayout;
