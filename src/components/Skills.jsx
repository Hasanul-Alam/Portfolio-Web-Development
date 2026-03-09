import React from "react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMongoose,
  SiZod,
  SiDocker,
  SiGithub,
} from "react-icons/si";
import { FiCpu, FiLayout, FiDatabase } from "react-icons/fi";
import ScrollReveal from "../ScrollBar/Scrollbar";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Frameworks",
      icon: FiLayout,
      skills: [
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "React Native", icon: SiReact, color: "text-cyan-400" },
        { name: "Redux", icon: SiRedux, color: "text-cyan-400" },
        // { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        // { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        // { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
      ],
    },
    {
      title: "Backend & Database",
      icon: FiDatabase,
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-green-500" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "Mongoose", icon: SiMongoose, color: "text-green-500" },
        { name: "Zod", icon: SiZod, color: "text-green-500" },
      ],
    },
    {
      title: "Languages & Tools",
      icon: FiCpu,
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "Typescript", icon: SiTypescript, color: "text-blue-400" },
        { name: "Git", icon: SiGit, color: "text-red-500" },
        { name: "Github", icon: SiGithub, color: "text-red-500" },
        { name: "Docker", icon: SiDocker, color: "text-red-500" },
      ],
    },
  ];

  return (
    <ScrollReveal>
      <section id="skills" className=" relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.1] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-blue-500"></span>
              <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">
                Tech Stack
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tools & Technologies
            </h2>
            <p className="text-zinc-400 max-w-2xl leading-relaxed">
              A comprehensive list of languages, frameworks, and tools I use to
              build performant, scalable, and modern web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400">
                    <category.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-3 p-3 rounded-lg bg-zinc-950 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 cursor-default"
                    >
                      <div
                        className={`text-xl text-zinc-500 group-hover:${skill.color} transition-colors duration-300`}
                      >
                        <skill.icon />
                      </div>

                      <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Skills;
