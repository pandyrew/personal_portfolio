import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { IconSparkles } from "@tabler/icons-react";

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
  },
  {
    title: "EasyPC",
    subtitle: "'Best Use of MindsDB' by Calhacks",
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
  },
  {
    title: "Sonder",
    subtitle: "'Best Blockchain Hack' by IrvineHacks",
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
  },
  {
    title: "Data @ UCI Website",
    subtitle: "Official Club Website",
    date: "May 2024",
    tech: ["Next.js", "Tailwind", "AceternityUI", "Clerk", "dSQL"],
    description: (
      <>
        Developed the official website for Data @ UCI using modern technologies.
        Implemented a{" "}
        <span className="text-violet-400 font-medium">
          sleek application system
        </span>{" "}
        serving 300+ applicants. Built with{" "}
        <span className="text-violet-400 font-medium">Next.js</span>,{" "}
        <span className="text-violet-400 font-medium">Clerk</span>, and{" "}
        <span className="text-violet-400 font-medium">dSQL</span> for robust
        performance and security.
      </>
    ),
    image: "/dataatuci.png",
    link: "https://dataatuci.com",
    highlight: "Serving 300+ active members and applicants",
  },
  {
    title: "Kyla Ulug",
    subtitle: "Personal Portfolio Website",
    date: "May 2024",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
    description: (
      <>
        Designed and developed a modern portfolio website with smooth animations
        and interactions. Utilized{" "}
        <span className="text-violet-400 font-medium">Framer Motion</span> for
        engaging animations and{" "}
        <span className="text-violet-400 font-medium">Tailwind CSS</span> for
        responsive design. Deployed on{" "}
        <span className="text-violet-400 font-medium">Vercel</span> for optimal
        performance.
      </>
    ),
    image: "/kylaulug.png",
    link: "https://kylaulug.lol",
    highlight: "Modern portfolio with seamless animations",
  },
];

const Projects = () => {
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

        <div className="max-w-4xl mx-auto space-y-32">
          {projects.map((project, index) => (
            <motion.article
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              key={project.title}
              className="space-y-8"
            >
              {/* Header */}
              <header className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-6xl font-bold text-slate-100 font-alpino tracking-tight">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-3 text-slate-300">
                    <h3 className="text-3xl font-alpino">{project.subtitle}</h3>
                    <span className="text-slate-500">•</span>
                    <p className="text-xl font-alpino">{project.date}</p>
                  </div>
                </div>
                <div className="border-t border-slate-800 pt-6" />
              </header>

              {/* Content */}
              <div className="space-y-8">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-slate-800/50 text-slate-200 rounded-full text-sm font-alpino backdrop-blur-sm border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="text-slate-200 leading-relaxed text-xl font-alpino">
                  {project.description}
                </div>

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="pointer-events-auto h-[400px] overflow-hidden rounded-xl border border-slate-700/50"
                >
                  <div className="relative h-full group">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-all duration-500 brightness-90 group-hover:brightness-100"
                      />
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

                {/* Highlight */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 backdrop-blur-md"
                >
                  <p className="text-violet-300 font-medium">
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
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
