import { Link } from "react-router-dom";

const FooterLink = ({ href, text, color = "hover:text-rose-400" }) => (
  <Link to={href}>
    <div className="group border-b border-slate-700/50 items-end flex flex-1 pb-3 pr-2 justify-between pointer-events-auto">
      <span
        className={`font-alpino text-slate-400 ${color} transition-colors duration-200`}
      >
        {text}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`w-5 h-5 transition-transform duration-200 group-hover:translate-x-2 ${color} text-slate-400`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </div>
  </Link>
);

const Footer = () => {
  return (
    <footer className="w-full py-20 px-8 pointer-events-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-20">
          {/* Left Side */}
          <div className="lg:flex flex-col gap-4 hidden">
            <p className="font-alpino text-slate-400 text-xl">
              Want to get in touch?
            </p>
            <p className="font-alpino font-bold text-5xl text-slate-200">
              Connect With Me:
            </p>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[600px] space-y-16">
            {/* Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-xl">
              <FooterLink
                href="/aboutandrew"
                text="About"
                color="hover:text-amber-400"
              />
              <FooterLink
                href="https://github.com/pandyrew"
                text="GitHub"
                color="hover:text-violet-400"
              />
              <FooterLink
                href="https://www.linkedin.com/in/andrew-hwang-78b375258/"
                text="LinkedIn"
                color="hover:text-sky-400"
              />
              <FooterLink
                href="mailto:pandy430@gmail.com"
                text="Email"
                color="hover:text-teal-400"
              />
            </div>

            {/* Copyright */}
            <div className="text-right font-alpino text-sm text-slate-500">
              <p>
                © {new Date().getFullYear()} Andrew Hwang. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
