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
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-20">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-7xl font-bold text-slate-200 tracking-tight font-alpino"
            >
              About Andrew
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
              <img
                src="/orca1.jpg"
                alt="Orca breaching"
                className="rounded-lg aspect-video object-cover shadow-lg border border-slate-700/50"
              />
              <img
                src="/orca2.jpg"
                alt="Orca pod"
                className="rounded-lg aspect-video object-cover shadow-lg border border-slate-700/50"
              />
            </div>
          </InterestSection>

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
              <img
                src="/music1.jpg"
                alt="Playing piano"
                className="rounded-lg aspect-video object-cover shadow-lg border border-slate-700/50"
              />
              <img
                src="/music2.jpg"
                alt="Playing marimba"
                className="rounded-lg aspect-video object-cover shadow-lg border border-slate-700/50"
              />
              <img
                src="/music3.jpg"
                alt="Playing guitar"
                className="rounded-lg aspect-video object-cover shadow-lg border border-slate-700/50"
              />
            </div>
          </InterestSection>

          {/* Fashion Section */}

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
              <img
                src="/sf1.jpg"
                alt="Golden Gate Bridge"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
              <img
                src="/sf2.JPG"
                alt="SF Streets"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
              <img
                src="/sf3.png"
                alt="SF Skyline"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
              <img
                src="/sf4.JPG"
                alt="SF Skyline"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
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
            <div className="grid grid-cols-4 gap-6">
              <img
                src="/matcha1.JPG"
                alt="Matcha"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
              <img
                src="/matcha2.JPG"
                alt="Matcha"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
              <img
                src="/matcha3.JPG"
                alt="Matcha"
                className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
              />
              <img
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
            <div className="grid grid-cols-3 gap-6">
              <img
                src="/cooking1.jpg"
                alt="Cooking process"
                className="rounded-lg aspect-video object-cover shadow-lg border border-slate-700/50"
              />
              <img
                src="/cooking2.jpg"
                alt="Plated dish"
                className="rounded-lg aspect-video object-cover shadow-lg border border-slate-700/50"
              />
              <img
                src="/cooking3.jpg"
                alt="Baking"
                className="rounded-lg aspect-video object-cover shadow-lg border border-slate-700/50"
              />
            </div>
          </InterestSection>

          {/* Study Spots Section */}
          <InterestSection
            title="Favorite Study Spots"
            icon={<IconBooks className="w-8 h-8 text-sky-400" stroke={1.5} />}
          >
            <p className="text-slate-200 text-lg leading-relaxed font-alpino">
              I&apos;m always on the hunt for the perfect study environment. I
              love cozy coffee shops and quiet libraries. The Huntington Beach
              Library holds a special place in my heart.
            </p>
            <div className="space-y-4">
              <div className="w-full">
                <img
                  src="/b1.png"
                  alt="Study spot"
                  className="rounded-lg aspect-video object-cover w-full shadow-lg border border-slate-700/50"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <img
                  src="/b2.png"
                  alt="Study spot"
                  className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
                />
                <img
                  src="/b3.png"
                  alt="Study spot"
                  className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
                />
                <img
                  src="/b4.JPG"
                  alt="Study spot"
                  className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
                />
                <img
                  src="/b5.JPG"
                  alt="Study spot"
                  className="rounded-lg h-[400px] w-full object-cover shadow-lg border border-slate-700/50"
                />
              </div>
            </div>
          </InterestSection>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
