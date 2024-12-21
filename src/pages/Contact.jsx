import PageLayout from "@/components/PageLayout";
import {
  IconAtom,
  IconCode,
  IconServer,
  IconChartDots,
  IconBrain,
  IconFileTypeCss,
  IconRobot,
  IconBulb,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <PageLayout text="Contact">
      <div className="min-h-screen pt-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-20">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-7xl font-bold text-slate-200 tracking-tight font-alpino"
            >
              Let&apos;s
              <br />
              Connect
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              className="h-1 w-32 bg-orange-400 mt-6"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-xl text-slate-200 font-alpino mb-24 pointer-events-auto"
          >
            <p className="leading-relaxed">
              I&apos;m always up for a good conversation over a cup of matcha or
              in the quiet corners of
              <span className="text-orange-400 font-medium pointer-events-auto">
                {" "}
                libraries
              </span>
              . (especially the{" "}
              <a
                href="https://hbpl.org/locations/central-library"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 inline-flex items-center gap-1 transition-colors"
              >
                {" "}
                Huntington Beach Library
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
              ) There&apos;s something magical about those spaces, don&apos;t you
              think?
            </p>

            <p className="leading-relaxed">
              While I&apos;m a huge history nerd, what really gets me excited is
              diving deep into tech conversations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-3xl font-bold text-slate-200 mb-6 font-alpino">
              Let&apos;s Talk About:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: "Quantum Computing",
                  icon: <IconAtom className="w-5 h-5" stroke={1.5} />,
                },
                {
                  text: "Frontend Magic",
                  icon: <IconCode className="w-5 h-5" stroke={1.5} />,
                },
                {
                  text: "Backend Architecture",
                  icon: <IconServer className="w-5 h-5" stroke={1.5} />,
                },
                {
                  text: "Data Science",
                  icon: <IconChartDots className="w-5 h-5" stroke={1.5} />,
                },
                {
                  text: "Neural Networks",
                  icon: <IconBrain className="w-5 h-5" stroke={1.5} />,
                },
                {
                  text: "System Design",
                  icon: <IconFileTypeCss className="w-5 h-5" stroke={1.5} />,
                },
                {
                  text: "AI Ethics",
                  icon: <IconRobot className="w-5 h-5" stroke={1.5} />,
                },
                {
                  text: "Your Next Big Idea",
                  icon: <IconBulb className="w-5 h-5" stroke={1.5} />,
                },
              ].map(({ text, icon }, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  key={text}
                  className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 backdrop-blur-sm"
                >
                  <p className="text-slate-200 font-alpino flex items-center gap-2">
                    {icon}
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-h-[50vh] flex items-center justify-center pointer-events-auto"
          >
            <div className="space-y-6 text-center">
              <h2 className="text-4xl font-bold text-slate-200 font-alpino">
                Ready to Chat?
              </h2>
              <div className="space-y-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="mailto:pandy430@gmail.com"
                  className="block px-6 py-3 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg transition-all duration-300"
                >
                  pandy430@gmail.com
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="https://www.linkedin.com/in/andrew-hwang-78b375258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-all duration-300"
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="https://github.com/pandyrew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 bg-slate-500/10 hover:bg-slate-500/20 text-slate-400 rounded-lg transition-all duration-300"
                >
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
