import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode, FiLayers } from "react-icons/fi";
import ScrollReveal from "../ScrollBar/Scrollbar";

import kidzImg from "../assets/kidz.png";
import utilityImg from "../assets/smart.png";
import dragonImg from "../assets/news.png";
import bookImg from "../assets/book.png";
import supportImg from "../assets/customer.png";
import ecoImg from "../assets/eco.png";
import englishImg from "../assets/english.png";
import loanlinkImg from "../assets/microcredx.png";

const projectsData = [
  {
    name: "MicroCredX",
    category: "FinTech",
    desc: "A comprehensive web-based microloan management system designed for NGOs. It enables role-based dashboards for borrowers, managers, and admins with payment integration and real-time tracking.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Framer Motion"],
    live: "https://microcredx.vercel.app/",
    github: "https://github.com/Hasanul-Alam/MicroCredX-Project-FrontendPart",
    image: loanlinkImg,
  },
  {
    name: "Smart Utility BD",
    category: "Management",
    desc: "A MERN-based utility management system that centralizes monthly Electricity, Gas, Water, and Internet bills. Features include real-time updates, filtering, and PDF generation.",
    tech: ["React", "Firebase", "Tailwind CSS", "DaisyUI"],
    live: "https://smart-utility-bd.netlify.app/",
    github: "https://github.com/Hasanul-Alam/SmartUtility-Project-ClientPart",
    image: utilityImg,
  },
  {
    name: "Kidz Corner",
    category: "E-Commerce",
    desc: "A full-featured toy e-commerce platform. Users can browse toys, view details, and manage their collection. Includes secure authentication and protected routes.",
    tech: ["React", "Firebase Auth", "Tailwind CSS", "DaisyUI"],
    live: "https://kidz-corner-webapp.netlify.app/",
    github: "https://github.com/Hasanul-Alam/Kidz-Corner-With-Firebase",
    image: kidzImg,
  },
  {
    name: "Dragon News",
    category: "Media",
    desc: "A modern news portal allowing users to explore articles by category. Features Firebase authentication for reading full stories and a distraction-free reading layout.",
    tech: ["React", "Firebase Auth", "Tailwind CSS"],
    live: "https://dragon-news-firebase22.netlify.app/",
    github: "https://github.com/Hasanul-Alam/Dragon-News-With-Firebase-Project",
    image: dragonImg,
  },
  {
    name: "Book Vibe",
    category: "Directory",
    desc: "A book discovery interface where users can browse a curated collection. Features smooth navigation between read lists and wishlists using React Router.",
    tech: ["React", "React Router", "Tailwind CSS"],
    live: "https://book-vibe-with-react-20022.netlify.app/",
    github:
      "https://github.com/Hasanul-Alam/Book-Vibe-With-React-Router-Project",
    image: bookImg,
  },
  {
    name: "Customer Support App",
    category: "Dashboard",
    desc: "A support dashboard for managing customer tickets with status tracking. Interacts with APIs to demonstrate structured state management.",
    tech: ["React", "API", "Tailwind CSS"],
    live: "https://customer-support-react-2200.netlify.app/",
    github: "https://github.com/Hasanul-Alam/Customer-Support-Zone-Using-React",
    image: supportImg,
  },
  {
    name: "Eco World",
    category: "Landing Page",
    desc: "A JavaScript-driven landing page highlighting eco-friendly products. Focuses on DOM manipulation and dynamic content loading.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    live: "https://mahfuz5634.github.io/Eco-World-Project/",
    github: "https://github.com/Hasanul-Alam/Eco-World-Project",
    image: ecoImg,
  },
  {
    name: "English Shikhi",
    category: "Education",
    desc: "Interactive vocabulary learning tool with text-to-speech. Demonstrates public API usage and DOM updates for a lightweight learning experience.",
    tech: ["JavaScript", "Fetch API", "Tailwind CSS"],
    live: "https://mahfuz5634.github.io/English-Shikhi-Project/",
    github: "https://github.com/Hasanul-Alam/English-Shikhi-Project",
    image: englishImg,
  },
];

const Projects = () => {
  const [page, setPage] = useState(1);
  const perPage = 4;
  const totalPages = Math.ceil(projectsData.length / perPage);
  const start = (page - 1) * perPage;
  const currentProjects = projectsData.slice(start, start + perPage);

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <ScrollReveal>
      <section id="projects" className="relative overflow-hidden py-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.1] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-blue-500"></span>
              <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">
                Selected Works
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Built for <span className="text-zinc-500">performance.</span>
                </h2>
                <p className="text-zinc-400 max-w-lg leading-relaxed">
                  A collection of projects highlighting full-stack architecture,
                  responsive UI/UX design, and complex state management.
                </p>
              </div>

              <div className="hidden md:flex items-center gap-4 text-zinc-500 font-mono text-sm">
                <span className="flex items-center gap-2">
                  <FiLayers /> {projectsData.length} Projects
                </span>
              </div>
            </div>
          </div>

          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {currentProjects.map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-zinc-900 pt-6">
            <span className="text-zinc-500 text-sm font-mono">
              Showing {start + 1}-
              {Math.min(start + perPage, projectsData.length)} of{" "}
              {projectsData.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                disabled={page === 1}
                className="px-4 py-2 text-sm text-zinc-400 border border-zinc-800 rounded-md hover:bg-zinc-900 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent transition-all"
              >
                Prev
              </button>

              <div className="flex gap-1">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`w-8 h-8 rounded-md text-xs font-mono transition-all ${
                      page === i + 1
                        ? "bg-blue-600 text-white"
                        : "bg-zinc-900 text-zinc-500 hover:bg-zinc-800"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={goNext}
                disabled={page === totalPages}
                className="px-4 py-2 text-sm text-zinc-400 border border-zinc-800 rounded-md hover:bg-zinc-900 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent transition-all"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <article className="group relative bg-zinc-900/40 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden bg-zinc-950">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>

        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-zinc-950/80 backdrop-blur border border-zinc-700/50 text-[10px] font-mono text-blue-300 rounded uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>

          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-white hover:bg-zinc-800 p-1.5 rounded-full transition-all"
              title="View Code"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-blue-400 hover:bg-zinc-800 p-1.5 rounded-full transition-all"
              title="Live Demo"
            >
              <FiExternalLink size={18} />
            </a>
          </div>
        </div>

        <p className="text-zinc-400 text-sm leading-snug mb-4 line-clamp-2 h-10">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-zinc-800/40 border border-zinc-700/50 rounded hover:border-blue-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] font-mono text-zinc-500">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default Projects;
