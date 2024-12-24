import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const location = useLocation();
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 30);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showNavBar = location.pathname !== "/";

  if (!showNavBar) return null;

  return (
    <div className="fixed w-full top-0 z-[100]">
      <div className="h-[100px] w-full relative flex items-center">
        <div className="absolute inset-0 dotted-blur-bg-dark" />
        <div className="relative z-10 w-full px-8 flex items-center justify-between">
          <Link
            to="/"
            style={{ "--nav-opacity": scrollOpacity }}
            className="flex items-center opacity-[var(--nav-opacity)] hover:opacity-100 transition-all duration-200"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-auto rounded-xl"
            />
          </Link>

          <nav className="flex items-center gap-2">
            <Link
              to="/aboutandrew"
              className={`text-lg font-alpino hover:text-sky-400 transition-all duration-200 opacity-[var(--nav-opacity)] hover:opacity-100 px-4 py-2 rounded-lg backdrop-blur-sm ${
                location.pathname === "/aboutandrew"
                  ? "text-sky-400"
                  : "text-slate-200"
              }`}
              style={{ "--nav-opacity": scrollOpacity }}
            >
              About
            </Link>
            <Link
              to="/experience"
              className={`text-lg font-alpino hover:text-rose-400 transition-all duration-200 opacity-[var(--nav-opacity)] hover:opacity-100 px-4 py-2 rounded-lg backdrop-blur-sm ${
                location.pathname === "/experience"
                  ? "text-rose-400"
                  : "text-slate-200"
              }`}
              style={{ "--nav-opacity": scrollOpacity }}
            >
              Experience
            </Link>
            <Link
              to="/projectsandawards"
              className={`text-lg font-alpino hover:text-violet-400 transition-all duration-200 opacity-[var(--nav-opacity)] hover:opacity-100 px-4 py-2 rounded-lg backdrop-blur-sm ${
                location.pathname === "/projectsandawards"
                  ? "text-violet-400"
                  : "text-slate-200"
              }`}
              style={{ "--nav-opacity": scrollOpacity }}
            >
              Projects
            </Link>
            <Link
              to="/involvement"
              className={`text-lg font-alpino hover:text-amber-400 transition-all duration-200 opacity-[var(--nav-opacity)] hover:opacity-100 px-4 py-2 rounded-lg backdrop-blur-sm ${
                location.pathname === "/involvement"
                  ? "text-amber-400"
                  : "text-slate-200"
              }`}
              style={{ "--nav-opacity": scrollOpacity }}
            >
              Involvement
            </Link>
            <Link
              to="/skills"
              className={`text-lg font-alpino hover:text-teal-400 transition-all duration-200 opacity-[var(--nav-opacity)] hover:opacity-100 px-4 py-2 rounded-lg backdrop-blur-sm ${
                location.pathname === "/skills"
                  ? "text-teal-400"
                  : "text-slate-200"
              }`}
              style={{ "--nav-opacity": scrollOpacity }}
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className={`text-lg font-alpino hover:text-orange-400 transition-all duration-200 opacity-[var(--nav-opacity)] hover:opacity-100 px-4 py-2 rounded-lg backdrop-blur-sm ${
                location.pathname === "/contact"
                  ? "text-orange-400"
                  : "text-slate-200"
              }`}
              style={{ "--nav-opacity": scrollOpacity }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
