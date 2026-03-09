import React from "react";
import {
  FiBook,
  FiAward,
  FiCpu,
  FiCode,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import ScrollReveal from "../ScrollBar/Scrollbar";

const Education = () => {
  const courses = [
    "Basic Programming",
    "Object-Oriented Programming",
    "Information and Communication Technology",
  ];

  return (
    <ScrollReveal>
      <section id="education" className="relative overflow-hidden py-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.1] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-blue-500"></span>
              <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">
                Learning Path
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Academic <span className="text-zinc-500">Background.</span>
                </h2>
                <p className="text-zinc-400 max-w-lg leading-relaxed">
                  Formal education and theoretical foundations that support my
                  journey and problem-solving capabilities.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 md:p-10 hover:border-zinc-700 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="flex-shrink-0 md:w-1/3 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      B.Sc. in Physics
                    </h3>
                    <p className="text-blue-400 mt-2 font-medium">
                      National University, Bangladesh
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 text-sm text-zinc-500 font-mono">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-zinc-400" />
                      <span>2018 - 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-zinc-400" />
                      <span>Rajshahi, Bangladesh</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-blue-400 text-xs font-mono font-medium uppercase tracking-wide">
                      GPA-2.36
                    </span>
                  </div>
                </div>

                <div className="flex-grow space-y-6">
                  <p className="text-zinc-400 leading-relaxed">
                    My academic journey in Physics has provided me with a strong
                    foundation in analytical thinking, problem-solving, and a
                    deep understanding of complex systems. The rigorous
                    coursework and research projects have honed my ability to
                    approach challenges methodically and think critically,
                    skills that are directly transferable to software
                    development and system design.
                  </p>

                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                      <FiBook className="text-blue-500" /> Relevant Coursework
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {courses.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs text-zinc-400 font-mono bg-zinc-950 border border-zinc-800 rounded hover:border-zinc-600 hover:text-zinc-200 transition-colors cursor-default"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Education;
