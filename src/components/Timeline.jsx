import { Timeline } from "@/components/ui/timeline";

export default function MyTimeline() {
  const data = [
    {
      title: "2005",
      content: (
        <div className="font-alpino">
          <p className="text-slate-200 text-lg md:text-xl font-normal mb-8">
            I was born. I didn&apos;t know anything about coding.
          </p>
          <div className="flex">
            <img
              src="/baby.jpeg"
              alt="Baby at computer"
              className="rounded-lg object-cover h-[300px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] border border-slate-700/50"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div className="font-alpino">
          <p className="text-slate-200 text-lg md:text-xl font-normal mb-8">
            I started coding with{" "}
            <span className="text-sky-400">JavaScript</span> in Khan Academy. I
            was kind of bad at it - I just drew random stuff with it.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/khan.png"
              alt="Khan Academy JavaScript course"
              className="rounded-lg object-cover h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] border border-slate-700/50"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div className="font-alpino">
          <p className="text-slate-200 text-lg md:text-xl font-normal mb-8">
            Started &quot;The Complete Web Developer Course 3.0&quot; by Rob
            Percival on Udemy. My mom said her friends thought I&apos;d be good
            at web development because of my design skills. Built some stuff,
            but only finished <span className="text-sky-400">26%</span> of it.
            Gave up after struggling with CSS positioning.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/rob.png"
              alt="Udemy course"
              className="rounded-lg object-cover h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] border border-slate-700/50"
            />
            <img
              src="/notepad.png"
              alt="Notepad++"
              className="rounded-lg h-48 w-full bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] border border-slate-700/50"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="font-alpino">
          <p className="text-slate-200 text-lg md:text-xl font-normal mb-8">
            Took AP CSA and struggled. Wasn&apos;t passionate about coding yet
            and got a<span className="text-sky-400"> 1 </span>
            on the test (maybe because I slept through it).
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/java.png"
              alt="Java programming"
              className="rounded-lg object-cover h-[350px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] border border-slate-700/50"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Summer 2023",
      content: (
        <div className="font-alpino">
          <p className="text-slate-200 text-lg md:text-xl font-normal mb-8">
            <span className="text-sky-400 font-semibold">
              I gained consciousness!
            </span>{" "}
            Watching Oppenheimer and reflecting on my dad&apos;s passing helped
            me realize the passion people have for advancing the world.
            Discovered the fascinating worlds of
            <span className="text-sky-400"> machine learning</span>,
            <span className="text-sky-400"> quantum computing</span>,
            <span className="text-sky-400"> data science</span>, and
            <span className="text-sky-400"> full-stack development</span>.
            Completed Andrew Ng&apos;s Machine Learning Specialization on
            Coursera.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/coursera.png"
              alt="Coursera course"
              className="rounded-lg object-cover h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] border border-slate-700/50"
            />
            <img
              src="/oppen.jpg"
              alt="Oppenheimer"
              className="rounded-lg object-cover h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] border border-slate-700/50"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Fall 2023",
      content: (
        <div className="font-alpino">
          <p className="text-slate-200 text-lg md:text-xl font-normal mb-8">
            Won my first hackathon and met amazing people! Started falling in
            love with CS more every day. Used my passion for learning to absorb
            as much information as possible, which helped shape who I am today.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/calhacks.png"
              alt="Hackathon win"
              className="rounded-lg object-cover h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] border border-slate-700/50"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Present",
      content: (
        <div className="font-alpino">
          <p className="text-slate-200 text-lg md:text-xl font-normal mb-8">
            I now have a deep understanding and appreciation for all things
            computers. What started as something I disliked transformed into a
            passion that led me to become proficient in coding and so much more.
            The journey continues...
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
