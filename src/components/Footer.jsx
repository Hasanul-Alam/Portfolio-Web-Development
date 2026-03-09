import React from "react";
import { FiArrowUp } from "react-icons/fi";
import ScrollReveal from "../ScrollBar/Scrollbar";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollReveal>
      <footer className="bg-black border-t border-zinc-900 py-7">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-white font-medium text-sm tracking-wide">
              Hasanul<span className="text-zinc-600">.</span>
            </h3>
            <p className="text-zinc-600 text-xs mt-1 font-mono">
              © {currentYear} • All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
              <span>Built with</span>
              <span className="text-zinc-400">React</span>
              <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
              <span className="text-zinc-400">Tailwind</span>
              <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
              <span className="text-zinc-400">Framer Motion</span>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 hover:text-white text-zinc-500 transition-all duration-300"
              title="Back to Top"
            >
              <FiArrowUp
                size={16}
                className="group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </footer>
    </ScrollReveal>
  );
}
