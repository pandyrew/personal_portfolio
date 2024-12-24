import PageLayout from "@/components/PageLayout";
import {
  IconRocket,
  IconCode,
  IconChartBar,
  IconArrowRight,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const involvements = [
  {
    role: "Co-Founder & Technical Lead",
    organization: "SPACE @ UCI",
    date: "Jul 2024 - Present",
    description: (
      <>
        Co-founded UCI's premier space technology organization, fostering
        innovation in{" "}
        <span className="text-amber-400 font-medium">space exploration</span>{" "}
        and
        <span className="text-amber-400 font-medium">
          {" "}
          aerospace technology
        </span>
        . Led the establishment of the{" "}
        <span className="text-amber-400 font-medium">NASA SUITS</span> research
        division.
      </>
    ),
    image: "/space.png",
    icon: <IconRocket className="w-6 h-6" stroke={1.5} />,
    initiatives: [
      "NASA SUITS Research Division",
      "Technical Workshops",
      "Aerospace Projects",
      "Industry Networking",
    ],
    highlight: "Organized recruiting events",
  },
  {
    role: "Web Developer",
    organization: "Hack at UCI",
    date: "May 2024 - Present",
    description: (
      <>
        Spearheaded development of club websites using{" "}
        <span className="text-amber-400 font-medium">React.js and Next.js</span>
        , serving{" "}
        <span className="text-amber-400 font-medium">800+ applicants</span>.
        Integrated <span className="text-amber-400 font-medium">MongoDB</span>{" "}
        and <span className="text-amber-400 font-medium">UCI's SSO</span>.
      </>
    ),
    image: "/hack-white.png",
    icon: <IconCode className="w-6 h-6" stroke={1.5} />,
    initiatives: [
      "Club Website",
      "ZotHacks 2024",
      "IrvineHacks 2025",
      "Irvine Hacks",
    ],
    highlight: "Developed and maintained websites serving 800+ applicants",
  },
  {
    role: "Webmaster",
    organization: "Data @ UCI",
    date: "May 2024 - Present",
    description: (
      <>
        Re-implemented{" "}
        <a
          href="https://dataatuci.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 pointer-events-auto font-medium inline-flex items-center gap-1 hover:text-amber-300 transition-colors"
        >
          dataatuci.com
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </a>{" "}
        using <span className="text-amber-400 font-medium">NextJS</span> and{" "}
        <span className="text-amber-400 font-medium">AceternityUI</span>. Built
        system using Next.js, Clerk, dSQL, and Tailwind, serving{" "}
        <span className="text-amber-400 font-medium">300+ applicants</span>.
      </>
    ),
    image: "/data-icon.png",
    icon: <IconChartBar className="w-6 h-6" stroke={1.5} />,
    initiatives: [
      "Website Redesign",
      "Datathon Platform",
      "Member Management",
      "Growth Strategy",
    ],
    highlight: "Boosted club membership by 50% through technical improvements",
  },
];

const Involvement = () => {
  return (
    <PageLayout text="Clubs">
      <div className="min-h-screen pt-20 px-4 md:px-8 lg:px-16 font-array">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="relative mb-20">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-200 tracking-tight"
            >
              Club
              <br />
              Leadership
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              className="h-1 w-32 bg-amber-400 mt-6"
            />
          </div>

          {/* Club Cards */}
          <div className="space-y-32">
            {involvements.map((inv, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                key={inv.role}
                className="relative"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="p-2 rounded-lg bg-slate-800 text-amber-400">
                          {inv.icon}
                        </span>
                        <p className="text-slate-400 font-medium">{inv.date}</p>
                      </div>
                      <h2 className="text-4xl font-bold text-slate-200 leading-tight">
                        {inv.role}
                      </h2>
                      <h3 className="text-2xl text-slate-400">
                        {inv.organization}
                      </h3>
                    </div>

                    <div className="text-slate-300 leading-relaxed">
                      {inv.description}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {inv.initiatives.map((initiative) => (
                        <span
                          key={initiative}
                          className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm backdrop-blur-sm border border-slate-700/50"
                        >
                          {initiative}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="aspect-[4/3] rounded-2xl overflow-hidden"
                    >
                      <img
                        src={inv.image}
                        alt={inv.organization}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Highlight Box */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="absolute -bottom-12 -left-12 max-w-sm"
                    >
                      <div className="bg-slate-800/90 backdrop-blur-xl p-6 rounded-xl border border-slate-700/50">
                        <p className="text-amber-400 font-medium flex items-center gap-2">
                          <IconArrowRight className="w-5 h-5" />
                          {inv.highlight}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Line */}
                {index !== involvements.length - 1 && (
                  <div className="absolute -bottom-16 left-0 w-full h-px bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Involvement;
