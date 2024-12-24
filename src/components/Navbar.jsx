import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/aboutandrew" color="sky" current={location.pathname} scrollOpacity={scrollOpacity}>
              About
            </NavLink>
            <NavLink to="/experience" color="rose" current={location.pathname} scrollOpacity={scrollOpacity}>
              Experience
            </NavLink>
            <NavLink
              to="/projectsandawards"
              color="violet"
              current={location.pathname}
              scrollOpacity={scrollOpacity}
            >
              Projects
            </NavLink>
            <NavLink
              to="/involvement"
              color="amber"
              current={location.pathname}
              scrollOpacity={scrollOpacity}
            >
              Involvement
            </NavLink>
            <NavLink to="/skills" color="teal" current={location.pathname} scrollOpacity={scrollOpacity}>
              Skills
            </NavLink>
            <NavLink to="/contact" color="orange" current={location.pathname} scrollOpacity={scrollOpacity}>
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-200 hover:text-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full right-0 w-64 mt-2 mr-4 py-2 bg-slate-800/95 backdrop-blur-sm rounded-lg border border-slate-700/50 shadow-lg md:hidden"
              >
                <nav className="flex flex-col">
                  <MobileNavLink
                    to="/aboutandrew"
                    color="sky"
                    current={location.pathname}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </MobileNavLink>
                  <MobileNavLink
                    to="/experience"
                    color="rose"
                    current={location.pathname}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Experience
                  </MobileNavLink>
                  <MobileNavLink
                    to="/projectsandawards"
                    color="violet"
                    current={location.pathname}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </MobileNavLink>
                  <MobileNavLink
                    to="/involvement"
                    color="amber"
                    current={location.pathname}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Involvement
                  </MobileNavLink>
                  <MobileNavLink
                    to="/skills"
                    color="teal"
                    current={location.pathname}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Skills
                  </MobileNavLink>
                  <MobileNavLink
                    to="/contact"
                    color="orange"
                    current={location.pathname}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </MobileNavLink>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Helper components for cleaner code
const NavLink = ({ to, color, current, scrollOpacity, children }) => (
  <Link
    to={to}
    className={`text-lg font-alpino hover:text-${color}-400 transition-all duration-200 opacity-[var(--nav-opacity)] hover:opacity-100 px-4 py-2 rounded-lg backdrop-blur-sm ${
      current === to ? `text-${color}-400` : "text-slate-200"
    }`}
    style={{ "--nav-opacity": scrollOpacity }}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, color, current, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`px-4 py-3 text-lg font-alpino hover:bg-slate-700/50 transition-colors ${
      current === to ? `text-${color}-400` : "text-slate-200"
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
