import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import CustomCursor from "./components/CustomCursor";
import FloatingDock from "./components/FloatingDock";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-black text-zinc-200 selection:bg-blue-500/30 selection:text-blue-200 font-sans">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {!isLoading && (
        <>
          <CustomCursor />

          <main className="relative z-10">
            <section id="home">
              <Hero />
            </section>

            <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32 pb-24">
              <section id="about">
                <About />
              </section>

              <Education />

              <section id="projects">
                <Projects />
              </section>

              <section id="tech-stack">
                <Skills />
              </section>

              <section id="competitive-programming">
                {/* <CompetitiveProgramming /> */}
              </section>

              <section id="contact">
                <Contact />
              </section>
            </div>
          </main>

          <Footer />
          <FloatingDock />
        </>
      )}
    </div>
  );
};

const Preloader = ({ onLoadingComplete }) => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("Initializing...");

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }

        if (prev === 30) setStatus("Resolving dependencies...");
        if (prev === 60) setStatus("Compiling assets...");
        if (prev === 85) setStatus("Starting environment...");

        return prev + 1;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-zinc-950 p-10 font-mono"
    >
      <div className="w-full flex justify-between text-[10px] text-zinc-600 uppercase tracking-widest">
        <span>MAHFUZ.DEV</span>
        <span>V 1.0.0</span>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <div className="relative">
          <motion.h1
            className="text-9xl md:text-[12rem] font-bold text-zinc-900 leading-none select-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {count}
          </motion.h1>
          <motion.h1
            className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-white leading-none overflow-hidden select-none"
            style={{ clipPath: `inset(${100 - count}% 0 0 0)` }}
          >
            {count}
          </motion.h1>
        </div>

        <motion.p
          key={status}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-sm text-zinc-500 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
          {status}
        </motion.p>
      </div>

      <div className="w-full max-w-md">
        <div className="h-[1px] w-full bg-zinc-900 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-zinc-600">
          <span>[ SYSTEM_BOOT ]</span>
          <span>{count}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default App;
