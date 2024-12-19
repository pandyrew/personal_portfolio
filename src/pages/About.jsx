import { TextHover } from "@/components/TextHover";
import PageLayout from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout text="About">
      <div className="min-h-screen pt-20 px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl font-bold text-slate-200 mb-12">About Andrew</h1>
        {/* Your content here */}
      </div>
    </PageLayout>
  );
};

export default About;
