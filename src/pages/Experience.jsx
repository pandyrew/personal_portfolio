import PageLayout from "@/components/PageLayout";

const experiences = [
  {
    role: "Machine Learning Researcher",
    company: "Johnson Space Center (NASA SUITS)",
    link: "https://microgravityuniversity.jsc.nasa.gov/nasasuits",
    date: "Jun 2024 - Present",
    description: (
      <>
        Developing <span className="text-rose-400 font-medium">MCS</span>{" "}
        (Mission Control Software) for NASA astronauts, invited to test with
        astronauts in 2025. Designed server with{" "}
        <span className="text-rose-400 font-medium">FastAPI</span> and{" "}
        <span className="text-rose-400 font-medium">Python</span> to process
        GPS, Biometrics, and Video Feeds, streaming real-time data to a mission
        control display. Devising a{" "}
        <span className="text-rose-400 font-medium">local RAG Model</span>,
        integrating real-time NASA data, providing cognitive assistance for
        astronauts
      </>
    ),
    image: "/suits.webp",
    skills: ["Python", "FastAPI", "LangChain", "Ollama", "PyTorch"],
    highlight:
      "Authored an accepted paper on a local RAG model for NASA astronauts",
    photoDescription: "Astronauts testing the MCS (Mission Control Software)",
  },
  {
    role: "Software Engineering Intern",
    company: "Atoma Media",
    link: "https://joinatoma.com",
    date: "Summer 2023",
    description: (
      <>
        Led a team of{" "}
        <span className="text-rose-400 font-medium">4 engineers</span> to
        develop a full-stack web application using{" "}
        <span className="text-rose-400 font-medium">NextJS</span> and{" "}
        <span className="text-rose-400 font-medium">Prisma ORM</span>.
        Implemented AI-powered features using{" "}
        <span className="text-rose-400 font-medium">OpenAI API</span>, resulting
        in 2X active users. Devised a multi-tenant{" "}
        <span className="text-rose-400 font-medium">authentication</span> system
        with role-based access control. Developed{" "}
        <span className="text-rose-400 font-medium">AWS Lambda</span> function
        with <span className="text-rose-400 font-medium">Puppeteer</span> to
        aggregate <span className="text-rose-400 font-medium">1100+</span>{" "}
        articles. Spearheaded a{" "}
        <span className="text-rose-400 font-medium">PostgreSQL</span> database
        migration to improve data integrity and performance. Initiated
        reapproaches to design{" "}
        <span className="text-rose-400 font-medium">modern</span> and
        <span className="text-rose-400 font-medium"> sleek</span> UI/UX.
      </>
    ),
    image: "/dashboard2.png",
    skills: [
      "NextJS",
      "NextAuth",
      "AWS Lambda",
      "OpenAI",
      "Prisma",
      "PostgreSQL",
    ],
    highlight:
      "Led by example, mentored 4 interns to develop a full-stack web application",
    photoDescription: "Atoma Media Dashboard",
  },
];

function Experience() {
  return (
    <PageLayout text="Career">
      <div className="h-[20vh]" />
      <div className="max-w-4xl mx-auto space-y-32 p-4 pb-12">
        {experiences.map((exp, index) => (
          <article key={exp.title} className="space-y-2">
            {/* Header */}
            <header className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-6xl font-bold text-slate-100 font-alpino tracking-tight">
                  {exp.role}
                </h2>
                <div className="flex items-center gap-3 text-slate-300">
                  <h3 className="text-3xl font-alpino">{exp.company}</h3>
                  <span className="text-slate-500">•</span>
                  <p className="text-xl font-alpino">{exp.date}</p>
                </div>
              </div>
              <div className="border-t border-slate-800 pt-6" />
            </header>

            {/* Content */}
            <div className="space-y-8">
              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-800/50 text-slate-200 rounded-full text-sm font-alpino backdrop-blur-sm border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="text-slate-200 leading-relaxed text-xl font-alpino">
                {exp.description}
              </div>

              <div className="pointer-events-auto h-[400px] overflow-hidden rounded-xl border border-slate-700/50">
                <div className="relative h-full group">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-all duration-500 brightness-90 group-hover:brightness-100"
                    />
                    {/* Blur Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] group-hover:backdrop-blur-sm" />
                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-xl text-white font-alpino text-center px-6 flex items-center gap-2">
                        {exp.photoDescription}
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
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 backdrop-blur-md">
                <p className="text-rose-300 font-medium">✨ {exp.highlight}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}

export default Experience;
