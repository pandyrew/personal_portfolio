import MyTimeline from "@/components/Timeline";
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import {
  IconFish,
  IconMusic,
  IconBuildingSkyscraper,
  IconCup,
  IconChefHat,
  IconBooks,
  IconBrandGithub,
} from "@tabler/icons-react";

const InterestSection = ({ title, icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-6"
  >
    <h2 className="text-3xl font-bold text-slate-200 flex items-center gap-3 font-alpino">
      {icon}
      {title}
    </h2>
    {children}
  </motion.div>
);

// Helper component for images with hover effect
const ImageWithHover = ({ src, alt, className }) => (
  <div className="relative h-full group pointer-events-auto overflow-hidden rounded-lg">
    <a className="block h-full">
      <img
        src={src}
        alt={alt}
        className={`${className} group-hover:scale-[1.02] transition-all duration-500 brightness-90 group-hover:brightness-100`}
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] group-hover:backdrop-blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-xl text-white font-alpino text-center px-6">{alt}</p>
      </div>
    </a>
  </div>
);

const About = () => {
  const instruments = [
    "Piano",
    "Guitar",
    "Bass Guitar",
    "Marimba",
    "Vibraphone",
    "Clarinet",
    "Bass Clarinet",
    "Drumset",
    "Flute",
  ];

  return (
    <PageLayout text="About">
      <div className="min-h-screen pt-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl font-bold text-slate-200 tracking-tight font-array"
              >
                Hey, I&apos;m Andrew 👋
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-300 leading-relaxed font-alpino"
              >
                A software engineer with a passion for building things that
                matter. Currently exploring the intersections of data science,
                AI, and web development.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 backdrop-blur-sm"
              >
                <p className="text-slate-300 font-alpino">
                  I believe in the power of technology to solve real-world
                  problems. When I&apos;m not coding, you&apos;ll find me
                  exploring new coffee shops, practicing instruments, or diving
                  deep into quantum computing research.
                </p>
              </motion.div>
            </div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative aspect-square w-full max-w-md mx-auto lg:ml-auto"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-3xl" />
              <img
                src="/andrew1.jpg"
                alt="Andrew Hwang"
                className="relative rounded-2xl w-full h-full object-cover border border-slate-700/50"
              />
            </motion.div>
          </div>
        </div>

        {/* Your Original Content */}
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-20">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-7xl font-bold text-slate-200 tracking-tight font-array"
            >
              Timeline
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              className="h-1 w-32 bg-blue-400 mt-6"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto mb-32">
          <MyTimeline />
        </div>

        {/* Interests Sections */}
        <div className="max-w-4xl mx-auto space-y-32">
          {/* Music Section */}
          <InterestSection
            title="Musical Journey"
            icon={<IconMusic className="w-8 h-8 text-sky-400" stroke={1.5} />}
          >
            <p className="text-slate-200 text-lg leading-relaxed font-alpino mb-6">
              Music has been a significant part of my life. I&apos;ve learned to
              play nine different instruments:
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {instruments.map((instrument) => (
                <div
                  key={instrument}
                  className="bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50 text-slate-200 text-center font-alpino"
                >
                  {instrument}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6">
              <ImageWithHover
                src="/marimba.jpg"
                alt="Marimba (not my marimba. they are very expensive)"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
              <ImageWithHover
                src="/bass.jpg"
                alt="Bass Clarinet (not my bass clarinet. i found this on pinterest)"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
              <ImageWithHover
                src="/drums.jpg"
                alt="Drumset (not my drumset. i also found this on pinterest)"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
            </div>
          </InterestSection>

          {/* Favorite Study Spots Section */}
          <InterestSection
            title="Favorite Study Spots"
            icon={<IconBooks className="w-8 h-8 text-sky-400" stroke={1.5} />}
          >
            <p className="text-slate-200 text-lg leading-relaxed font-alpino">
              I&apos;m always on the hunt for the perfect study environment. I
              love cozy coffee shops and quiet libraries. The Huntington Beach
              Library holds a special place in my heart.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 space-y-4">
                <div className="w-full">
                  <ImageWithHover
                    src="/b1.png"
                    alt="Cool building from Chico State"
                    className="rounded-lg aspect-video object-cover w-full shadow-lg border border-slate-700/50"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <ImageWithHover
                    src="/b5.JPG"
                    alt="Picture of greenery from Huntington Beach Library"
                    className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
                  />
                  <ImageWithHover
                    src="/b4.JPG"
                    alt="More greenery from Huntington Beach Library"
                    className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
                  />
                  <ImageWithHover
                    src="/b2.png"
                    alt="Li Ka Shing Center in UCB"
                    className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
                  />
                </div>
              </div>
              <div>
                <ImageWithHover
                  src="/b3.png"
                  alt="Study spot in UCB (Cafe Milano)"
                  className="rounded-lg h-full w-full object-cover shadow-lg border border-slate-700/50"
                />
              </div>
            </div>
          </InterestSection>

          {/* San Francisco Section */}
          <InterestSection
            title="San Francisco Love"
            icon={
              <IconBuildingSkyscraper
                className="w-8 h-8 text-sky-400"
                stroke={1.5}
              />
            }
          >
            <p className="text-slate-200 text-lg leading-relaxed font-alpino">
              The city by the bay has captured my heart. From its vibrant tech
              scene to its diverse culture, San Francisco feels like home.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ImageWithHover
                src="/sf1.jpg"
                alt="Cool building from SF"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
              <ImageWithHover
                src="/sf2.JPG"
                alt="Me holding the entire Golden Gate Bridge!"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
              <ImageWithHover
                src="/sf3.png"
                alt="1 sansome street"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
              <ImageWithHover
                src="/sf4.JPG"
                alt="Palace of Fine Arts"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
            </div>
          </InterestSection>

          {/* Marine Life Section */}
          <InterestSection
            title="Orca Lover"
            icon={<IconFish className="w-8 h-8 text-sky-400" stroke={1.5} />}
          >
            <p className="text-slate-200 text-lg leading-relaxed font-alpino">
              I have a deep fascination with orcas, these intelligent and
              majestic creatures of the ocean. Their complex social structures
              and hunting strategies never cease to amaze me. Also, they are so
              cute!
            </p>
            <div className="grid grid-cols-2 gap-6">
              <ImageWithHover
                src="/orca1.jpg"
                alt="REAL ORCA"
                className="rounded-lg aspect-video object-cover h-[400px] shadow-lg border border-slate-700/50"
              />
              <ImageWithHover
                src="/orca2.jpg"
                alt="Cute orca stuffed animal"
                className="rounded-lg aspect-video object-cover h-[400px] shadow-lg border border-slate-700/50"
              />
            </div>
          </InterestSection>

          {/* Matcha Section */}
          <InterestSection
            title="Matcha Enthusiast"
            icon={<IconCup className="w-8 h-8 text-sky-400" stroke={1.5} />}
          >
            <p className="text-slate-200 text-lg leading-relaxed font-alpino">
              My love for matcha runs deep. Having that hit of green next to me
              while I study is a great way to start my day. Although caffeine
              doesn&apos;t really affect me that much, I still love the ritual
              of matcha. Coding + Matcha = 💚
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ImageWithHover
                src="/matcha1.JPG"
                alt="Matcha"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
              <ImageWithHover
                src="/matcha2.JPG"
                alt="Matcha"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
              <ImageWithHover
                src="/matcha3.JPG"
                alt="Matcha"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
              <ImageWithHover
                src="/matcha4.JPG"
                alt="Matcha"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
            </div>
          </InterestSection>

          {/* Cooking Section */}
          <InterestSection
            title="Cooking Adventures"
            icon={<IconChefHat className="w-8 h-8 text-sky-400" stroke={1.5} />}
          >
            <p className="text-slate-200 text-lg leading-relaxed font-alpino">
              Cooking is one of my creative outlets. I love experimenting with
              different cuisines and techniques, turning simple ingredients into
              something special. I believe that everything is a learnable skill
              and I&apos;m always looking to improve.
            </p>
            <div className="grid grid-cols-4 gap-6">
              <ImageWithHover
                src="/food1.JPG"
                alt="Making meal prep"
                className="rounded-lg aspect-video h-[400px] object-cover shadow-lg border border-slate-700/50"
              />
              <ImageWithHover
                src="/food2.JPG"
                alt="Plated dish"
                className="rounded-lg aspect-video h-[400px] object-cover shadow-lg border border-slate-700/50"
              />
              <ImageWithHover
                src="/food3.JPG"
                alt="Awesome pasta"
                className="rounded-lg aspect-video h-[400px] object-cover shadow-lg border border-slate-700/50"
              />
              <ImageWithHover
                src="/food4.JPG"
                alt="Perfect steak"
                className="rounded-lg aspect-video h-[400px] object-cover shadow-lg border border-slate-700/50"
              />
            </div>
          </InterestSection>
        </div>

        {/* Additional Info Section */}
        <div className="max-w-4xl mx-auto mt-32 mb-16 space-y-16 pointer-events-auto">
          {/* Credits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-200 font-alpino">
              Credits
            </h2>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 backdrop-blur-sm space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl text-slate-200 font-alpino">
                  Gallery Design
                </h3>
                <p className="text-slate-300 font-alpino">
                  Home page gallery design inspired by{" "}
                  <a
                    href="https://torquetorque.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    torquetorque.net
                  </a>
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl text-slate-200 font-alpino">
                  Motion & Styling
                </h3>
                <p className="text-slate-300 font-alpino">
                  Page animations and styling inspired by{" "}
                  <a
                    href="https://motion.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    motion.dev
                  </a>
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl text-slate-200 font-alpino">
                  Gallery Images
                </h3>
                <p className="text-slate-300 font-alpino">
                  Images from my gallery are from{" "}
                  <a
                    href="https://www.pinterest.com/andy_hwang/portolfio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    Pinterest
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* GitHub Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-200 font-alpino">
              GitHub
            </h2>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <a
                    href="https://github.com/pandyrew/personal_portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-2 font-alpino"
                  >
                    <IconBrandGithub className="w-6 h-6" />
                    View Source Code
                  </a>
                  <p className="text-slate-300 font-alpino">
                    Total Lines of Code Written:{" "}
                    <span className="text-sky-400">2950</span>
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-700/50 px-4 py-2 rounded-lg border border-slate-600/50"
                >
                  <p className="text-slate-200 font-alpino">
                    Built with React + Vite
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
