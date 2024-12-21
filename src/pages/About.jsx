import MyTimeline from "@/components/Timeline";
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

const About = () => {
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

        <div className="max-w-7xl mx-auto">
          <MyTimeline />
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
