import PageLayout from "@/components/PageLayout";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconSparkles, IconTrophy } from "@tabler/icons-react";

const projects = [
  {
    title: "CleanASF",
    subtitle: "'Best Use of Neurelo' by SF Hacks",
    date: "Apr 2024",
    tech: ["React Native", "Neurelo", "YoloV8", "MongoDB", "S3"],
    description: (
      <>
        Built a gamified garbage pickup mobile app to solve a critical SF
        challenge: unclean streets. Combined a back-end of{" "}
        <span className="text-violet-400 font-medium">MongoDB</span>,{" "}
        <span className="text-violet-400 font-medium">YoloV8</span>, and{" "}
        <span className="text-violet-400 font-medium">Neurelo</span>, with a
        sleek UI/UX assuring smooth performance. Employed a powerful{" "}
        <span className="text-violet-400 font-medium">
          YoloV8 garbage classification
        </span>{" "}
        model to help users dispose of trash in appropriate categories.
      </>
    ),
    image: "/cleanasf.png",
    link: "https://devpost.com/software/cleanasf",
    highlight: "Won 'Best Use of Neurelo' among 500+ participants",
    isWinner: true,
  },
  {
    title: "EasyPC",
    subtitle: "'Best Use of MindsDB' by Cal Hacks 10.0 (UC Berkeley)",
    date: "Oct 2023",
    tech: ["Python", "Next.js", "React-Three-Fiber", "Selenium"],
    description: (
      <>
        Utilized a{" "}
        <span className="text-violet-400 font-medium">Convex full-stack</span>,
        fine-tuned a{" "}
        <span className="text-violet-400 font-medium">LLaMA 7B LLM</span> to
        build a web application with React as the front-end. Won first in{" "}
        <span className="text-violet-400 font-medium">
          'Best Use of MindsDB'
        </span>{" "}
        against ~2000 other contestants. Gathered data on{" "}
        <span className="text-violet-400 font-medium">500+ PC parts</span> and
        descriptions to fine-tune LLM, using a custom Selenium web scraper.
      </>
    ),
    image: "/easypc.jpeg",
    link: "https://devpost.com/software/easypc",
    highlight: "First Place Winner among 2000+ contestants",
    isWinner: true,
  },
  {
    title: "Sonder",
    subtitle: "'Best Blockchain Hack' by IrvineHacks 2024 (UC Irvine)",
    date: "Jan 2024",
    tech: ["Vite", "React", "Tailwind", "Firebase", "Metamask"],
    description: (
      <>
        Guided beginner hackers on foundational web-development skills in{" "}
        <span className="text-violet-400 font-medium">React</span> and{" "}
        <span className="text-violet-400 font-medium">Tailwind</span>, building
        a winning project. Utilized a{" "}
        <span className="text-violet-400 font-medium">Vite full-stack</span>{" "}
        with <span className="text-violet-400 font-medium">Firebase</span> as
        the backend for efficient queries and information retrieval. Developed
        quick learning and adaptability, choosing to learn Firebase and
        Blockchain from scratch.
      </>
    ),
    image: "/sonder.png",
    link: "https://devpost.com/software/sonder-xiu693",
    highlight: "Won 'Best Blockchain Hack' at IrvineHacks 2024",
    isWinner: true,
  },
  {
    title: "Data @ UCI Website",
    subtitle: "Official Club Website",
    date: "Jul 2024",
    tech: [
      "Next.js",
      "Tailwind",
      "AceternityUI",
      "Figma",
      "React",
      "Framer Motion",
    ],
    description: (
      <>
        Was the sole developer for Data @ UCI&apos;s official website. Designed
        the UI/UX in <span className="text-violet-400 font-medium">Figma</span>{" "}
        and developed with{" "}
        <span className="text-violet-400 font-medium">Next.js</span>,{" "}
        <span className="text-violet-400 font-medium">Framer Motion</span>,{" "}
        <span className="text-violet-400 font-medium">Tailwind</span>,{" "}
        <span className="text-violet-400 font-medium">React</span>, and{" "}
        <span className="text-violet-400 font-medium">AceternityUI</span>.
      </>
    ),
    image: "/dataatuci.png",
    link: "https://dataatuci.com",
    highlight: "Serving 300+ active members",
  },
  {
    title: "Website for Kyla Uluğ",
    subtitle: "Birthday Website For My Friend",
    date: "Feb 2024",
    tech: [
      "Next.js",
      "Tailwind",
      "Framer Motion",
      "Vercel",
      "React",
      "Firebase",
    ],
    description: (
      <>
        Developed a personal website for a friend using{" "}
        <span className="text-violet-400 font-medium">Next.js</span> and{" "}
        <span className="text-violet-400 font-medium">React</span>. Integrated{" "}
        <span className="text-violet-400 font-medium">Firebase</span> to create
        an interactive birthday wishes system where visitors can leave
        celebratory messages. Styled with{" "}
        <span className="text-violet-400 font-medium">Tailwind CSS</span> and
        hosted on <span className="text-violet-400 font-medium">Vercel</span>{" "}
        with a fun custom domain. A meaningful project that combined technical
        learning with creating something special for a friend.
      </>
    ),
    image: "/kylaulug.png",
    link: "https://kylaulug.lol",
    highlight: "She loved it!",
  },
];

const Projects = () => {
  const { scrollYProgress } = useScroll();

  const leftColumnY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rightColumnY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <PageLayout text="Projects">
      <div className="min-h-screen pt-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-20">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-7xl font-bold text-slate-200 tracking-tight font-alpino"
            >
              Featured
              <br />
              Projects
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              className="h-1 w-32 bg-violet-400 mt-6"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div style={{ y: leftColumnY }} className="space-y-16">
            {projects
              .filter((_, i) => i % 2 === 0)
              .map((project) => (
                <motion.article
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  key={project.title}
                  className="space-y-8"
                >
                  {/* Image Section - Now at the top */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="pointer-events-auto aspect-[16/9] overflow-hidden rounded-xl border border-slate-700/50"
                  >
                    <div className="relative h-full group">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <div className="relative w-full h-full">
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.1)",
                              backdropFilter: "blur(20px)",
                            }}
                          />
                          <img
                            src={project.image}
                            alt={project.title}
                            className="relative w-full h-full object-cover object-center group-hover:scale-[1.02] transition-all duration-500 brightness-90 group-hover:brightness-100"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] group-hover:backdrop-blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <p className="text-xl text-white font-alpino text-center px-6 flex items-center gap-2">
                            Visit Project
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                              />
                            </svg>
                          </p>
                        </div>
                      </a>
                    </div>
                  </motion.div>

                  {/* Project Info */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-4xl font-bold text-slate-100 font-alpino tracking-tight flex items-center gap-3">
                        {project.isWinner && (
                          <IconTrophy
                            className="w-8 h-8 text-yellow-400"
                            stroke={1.5}
                          />
                        )}
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-3 text-slate-300">
                        <h3 className="text-xl font-alpino">
                          {project.subtitle}
                        </h3>
                        <span className="text-slate-500">•</span>
                        <p className="text-lg font-alpino">{project.date}</p>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-800/50 text-slate-200 rounded-full text-sm font-alpino backdrop-blur-sm border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <div className="text-slate-200 leading-relaxed text-lg font-alpino">
                      {project.description}
                    </div>

                    {/* Highlight */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 backdrop-blur-md"
                    >
                      <p className="text-violet-300 font-medium font-alpino">
                        <span className="flex items-center gap-2">
                          <IconSparkles
                            className="w-5 h-5 text-yellow-400"
                            stroke={1.5}
                          />
                          {project.highlight}
                        </span>
                      </p>
                    </motion.div>
                  </div>
                </motion.article>
              ))}
          </motion.div>

          <motion.div
            style={{ y: rightColumnY }}
            className="space-y-16 lg:mt-32"
          >
            {projects
              .filter((_, i) => i % 2 === 1)
              .map((project) => (
                <motion.article
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  key={project.title}
                  className="space-y-8"
                >
                  {/* Image Section - Now at the top */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="pointer-events-auto aspect-[16/9] overflow-hidden rounded-xl border border-slate-700/50"
                  >
                    <div className="relative h-full group">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <div className="relative w-full h-full">
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.1)",
                              backdropFilter: "blur(20px)",
                            }}
                          />
                          <img
                            src={project.image}
                            alt={project.title}
                            className="relative w-full h-full object-cover object-center group-hover:scale-[1.02] transition-all duration-500 brightness-90 group-hover:brightness-100"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] group-hover:backdrop-blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <p className="text-xl text-white font-alpino text-center px-6 flex items-center gap-2">
                            Visit Project
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                              />
                            </svg>
                          </p>
                        </div>
                      </a>
                    </div>
                  </motion.div>

                  {/* Project Info */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-4xl font-bold text-slate-100 font-alpino tracking-tight flex items-center gap-3">
                        {project.isWinner && (
                          <IconTrophy
                            className="w-8 h-8 text-yellow-400"
                            stroke={1.5}
                          />
                        )}
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-3 text-slate-300">
                        <h3 className="text-xl font-alpino">
                          {project.subtitle}
                        </h3>
                        <span className="text-slate-500">•</span>
                        <p className="text-lg font-alpino">{project.date}</p>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-800/50 text-slate-200 rounded-full text-sm font-alpino backdrop-blur-sm border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <div className="text-slate-200 leading-relaxed text-lg font-alpino">
                      {project.description}
                    </div>

                    {/* Highlight */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 backdrop-blur-md"
                    >
                      <p className="text-violet-300 font-medium font-alpino">
                        <span className="flex items-center gap-2">
                          <IconSparkles
                            className="w-5 h-5 text-yellow-400"
                            stroke={1.5}
                          />
                          {project.highlight}
                        </span>
                      </p>
                    </motion.div>
                  </div>
                </motion.article>
              ))}
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
