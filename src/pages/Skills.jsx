import PageLayout from "@/components/PageLayout";
import {
  IconBrandReact,
  IconBolt,
  IconBook,
  IconCloud,
  IconStars,
  IconBracketsAngle,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const skillCategories = {
  "Favorite Stack": {
    icon: <IconStars className="w-8 h-8 text-teal-400" stroke={1.5} />,
    skills: [
      { name: "NextJS", level: "Frontend Framework" },
      { name: "Clerk", level: "Authentication" },
      { name: "Tailwind", level: "Styling" },
      { name: "FastAPI", level: "Backend Framework" },
      { name: "Python", level: "Backend Language" },
      { name: "DSQL", level: "AWS Database" },
      { name: "Drizzle", level: "ORM" },
    ],
  },
  "Programming Languages": {
    icon: <IconBracketsAngle className="w-8 h-8 text-teal-400" stroke={2} />,
    skills: [
      { name: "Python", level: "Expert" },
      { name: "JavaScript/TypeScript", level: "Expert" },
      { name: "C++", level: "Advanced" },
      { name: "Java", level: "Advanced" },
      { name: "Rust", level: "Intermediate" },
      { name: "R", level: "Intermediate" },
      { name: "MATLAB", level: "Intermediate" },
      { name: "GraphQL", level: "Intermediate" },
    ],
  },
  "JavaScript Frameworks": {
    icon: <IconBrandReact className="w-8 h-8 text-teal-400" stroke={1.5} />,
    skills: [
      { name: "React", level: "Expert" },
      { name: "NextJS", level: "Expert" },
      { name: "Vue", level: "Intermediate" },
      { name: "Angular", level: "Intermediate" },
      { name: "Vite", level: "Advanced" },
    ],
  },
  "Frameworks & Libraries": {
    icon: <IconBolt className="w-8 h-8 text-teal-400" stroke={1.5} />,
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "React Native", level: "Intermediate" },
      { name: "TensorFlow", level: "Advanced" },
      { name: "Scikit Learn", level: "Advanced" },
      { name: "NumPy", level: "Advanced" },
      { name: "pandas", level: "Advanced" },
    ],
  },
  "Developer Tools": {
    icon: <IconBook className="w-8 h-8 text-teal-400" stroke={1.5} />,
    skills: [
      { name: "Git", level: "Expert" },
      { name: "Firebase", level: "Advanced" },
      { name: "PyCharm", level: "Advanced" },
      { name: "Jupyter Notebook", level: "Expert" },
      { name: "VS Code", level: "Expert" },
      { name: "Docker", level: "Intermediate" },
    ],
  },
  "Cloud & DevOps": {
    icon: <IconCloud className="w-8 h-8 text-teal-400" stroke={1.5} />,
    skills: [
      { name: "AWS Lambda", level: "Advanced" },
      { name: "Vercel", level: "Advanced" },
      { name: "GitHub Actions", level: "Intermediate" },
      { name: "CI/CD", level: "Intermediate" },
    ],
  },
};

const FavoriteStack = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="relative p-8 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm pointer-events-auto"
  >
    <h2 className="text-4xl font-bold text-slate-200 font-alpino flex items-center gap-4 mb-12">
      <IconStars className="w-8 h-8 text-teal-400" stroke={1.5} />
      Favorite Stack
    </h2>

    <div className="grid grid-cols-3 gap-8">
      {/* Frontend Layer */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="col-span-3 flex justify-center gap-6"
      >
        <div className="relative group p-4 bg-sky-500/10 rounded-lg border border-sky-500/30 w-48 text-center">
          <h3 className="text-xl font-alpino text-sky-400">NextJS</h3>
          <p className="text-sm text-slate-400 font-alpino">Framework</p>
          <div className="absolute opacity-0 inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/5 to-sky-500/0 group-hover:opacity-100 duration-300 transition-opacity rounded-lg" />
        </div>
        <div className="relative group p-4 bg-rose-500/10 rounded-lg border border-rose-500/30 w-48 text-center">
          <h3 className="text-xl font-alpino text-rose-400">Tailwind</h3>
          <p className="text-sm text-slate-400 font-alpino">Styling</p>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/0 via-rose-500/5 to-rose-500/0 opacity-0 group-hover:opacity-100 duration-300 transition-opacity rounded-lg" />
        </div>
      </motion.div>

      {/* Backend Layer */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="col-span-3 flex justify-center gap-6 -mt-4"
      >
        <div className="relative group p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/30 w-48 text-center">
          <h3 className="text-xl font-alpino text-emerald-400">FastAPI</h3>
          <p className="text-sm text-slate-400 font-alpino">Backend</p>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 duration-300 transition-opacity rounded-lg" />
        </div>
        <div className="relative group p-4 bg-violet-500/10 rounded-lg border border-violet-500/30 w-48 text-center">
          <h3 className="text-xl font-alpino text-violet-400">Clerk</h3>
          <p className="text-sm text-slate-400 font-alpino">Auth</p>
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/5 to-violet-500/0 opacity-0 group-hover:opacity-100 duration-300 transition-opacity rounded-lg" />
        </div>
      </motion.div>

      {/* Database Layer */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="col-span-3 flex justify-center gap-6 -mt-4"
      >
        <div className="relative group p-4 bg-amber-500/10 rounded-lg border border-amber-500/30 w-48 text-center">
          <h3 className="text-xl font-alpino text-amber-400">DSQL</h3>
          <p className="text-sm text-slate-400 font-alpino">Database</p>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 duration-300 transition-opacity rounded-lg" />
        </div>
        <div className="relative group p-4 bg-teal-500/10 rounded-lg border border-teal-500/30 w-48 text-center">
          <h3 className="text-xl font-alpino text-teal-400">Drizzle</h3>
          <p className="text-sm text-slate-400 font-alpino">ORM</p>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 duration-300 transition-opacity rounded-lg" />
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <PageLayout text="Skills">
      <div className="min-h-screen pt-20 px-4 md:px-8 lg:px-16 pb-12">
        <div className="relative mb-20">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-200 tracking-tight font-array"
          >
            Technical
            <br />
            Skills
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="h-1 w-32 bg-teal-400 mt-6"
          />
        </div>

        <div className="max-w-6xl mx-auto space-y-32">
          {/* Favorite Stack */}
          <FavoriteStack />

          {/* Other Categories */}
          {Object.entries(skillCategories)
            .filter(([category]) => category !== "Favorite Stack")
            .map(([category, { icon, skills }], categoryIndex) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                key={category}
                className="space-y-8"
              >
                <h2 className="text-4xl font-bold text-slate-200 font-alpino flex items-center gap-4">
                  {icon} {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      key={skill.name}
                      className="group relative p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 backdrop-blur-sm overflow-hidden"
                    >
                      <div className="relative z-10">
                        <h3 className="text-xl font-alpino text-slate-200">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-slate-400 font-alpino">
                          {skill.level}
                        </p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-800/0 via-slate-800/5 to-slate-800/0 group-hover:translate-x-full duration-1000 transition-transform" />
                    </motion.div>
                  ))}
                </div>

                {/* Add decorative line between categories */}
              </motion.div>
            ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Skills;
