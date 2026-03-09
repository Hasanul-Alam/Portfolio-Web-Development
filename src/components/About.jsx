import React from "react";
import ScrollReveal from "../ScrollBar/Scrollbar";

import { AiOutlineCode, AiFillProject, AiOutlineTrophy } from "react-icons/ai";
import { FiCpu } from "react-icons/fi";

const About = () => {
  return (
    <ScrollReveal>
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12 bg-zinc-700"></div>
            <span className="text-zinc-400 uppercase tracking-widest text-sm font-medium">
              01. About Me
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                A disciplined{" "}
                <span className="text-zinc-500">full stack engineer</span>{" "}
                <br />
                shipping production-grade web apps.
              </h3>

              <div className="space-y-4 text-zinc-400 leading-relaxed text-base md:text-lg">
                <p className="text-justify">
                  I am a Full Stack Web & Mobile App Developer based in
                  Bangladesh, specializing in{" "}
                  <strong className="text-zinc-100">
                    React, Next.js, and TypeScript
                  </strong>
                  . I currently work at Lancepilot LTD, where I build and
                  maintain production web applications end-to-end.
                </p>
                <p className="text-justify">
                  I care about more than just working code — I focus on{" "}
                  <strong className="text-zinc-100">
                    architecture, scalability, and performance
                  </strong>
                  , from database design and RESTful APIs to polished,
                  responsive UIs.
                </p>
                <p className="text-justify">
                  My hands-on experience spans e-commerce platforms,
                  subscription management systems, real-time dashboards, and
                  OAuth authentication — taking each from concept to deployment.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <AiOutlineTrophy className="text-blue-400 text-xl" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">10+</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-wide">
                  Technologies Mastered
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <AiFillProject className="text-emerald-400 text-xl" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">3+</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-wide">
                  Production Projects
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <AiOutlineCode className="text-purple-400 text-xl" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">03+</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-wide">
                  Years Coding
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
                <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FiCpu className="text-orange-400 text-xl" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">Next.js</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-wide">
                  Primary Stack
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default About;
