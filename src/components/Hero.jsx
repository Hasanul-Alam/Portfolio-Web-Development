import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiMail,
} from "react-icons/fi";
import image from "../assets/myPhoto.png";

const Hero = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-zinc-950 pt-10 pb-20 overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.15]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 h-full flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-12 md:mb-20"
        >
          <div className="group flex items-center gap-3 cursor-pointer">
            <div className="h-9 w-9 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/50">
              <span className="font-bold text-white text-sm group-hover:scale-110 transition-transform">
                ⌘
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-zinc-200 font-bold text-sm tracking-wide">
                HASANUL
              </span>
              <span className="text-[10px] text-zinc-500 font-mono group-hover:text-blue-400 transition-colors">
                fullstack.dev
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800">
              <FiMapPin className="text-zinc-400 text-xs" />
              <span className="text-xs font-mono text-zinc-300">Dhaka, BD</span>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 mr-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span>{time || "Loading..."}</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-grow">
          <div className="lg:col-span-8 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-blue-500"></div>
              <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">
                Hasanul — Portfolio v1.0
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6"
            >
              Engineering <br />
              <span className="text-zinc-500">reliable & scalable</span> <br />
              web solutions.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-400 text-pretty  text-lg leading-relaxed max-w-xl mb-10 border-l-2 border-zinc-800 pl-6"
            >
              I am a{" "}
              <strong className="text-zinc-200">
                Web & Mobile Application Developer.
              </strong>{" "}
              I specialize in building performance-critical applications with
              strict adherence to clean architecture and modern design patterns.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-zinc-950 font-semibold text-sm rounded-md hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                Selected Work <FiArrowRight />
              </a>
              {/* https://drive.google.com/file/d/1BqUU05jcf51s842V1PeaXVDT2JuPQFX9/view?usp=drive_link */}
              <a
                href="https://drive.google.com/uc?export=download&id=1BqUU05jcf51s842V1PeaXVDT2JuPQFX9"
                className="px-6 py-3 border border-zinc-700 text-zinc-300 font-medium text-sm rounded-md hover:border-zinc-500 hover:text-white transition-colors flex items-center gap-2 bg-zinc-900/50"
              >
                Resume PDF <FiDownload />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 relative w-full max-w-[320px] mx-auto lg:mr-0"
          >
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-2 shadow-2xl overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-900/20 blur-[50px] rounded-full"></div>

              <div className="relative bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800/50">
                <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800 bg-zinc-900/50">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                  </div>
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                    DEV_ID: 5634
                  </div>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={image}
                    alt="Hasanul Profile"
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-zinc-950 to-transparent pt-10">
                    <h3 className="text-white font-bold text-base">
                      Md. Hasanul
                    </h3>

                    <div className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono">
                      <span className="flex items-center gap-1">
                        <FiMapPin /> Dhaka
                      </span>
                      <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                      <span className="text-emerald-500 flex items-center gap-1">
                        ● Online
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 divide-x divide-zinc-800 border-t border-zinc-800 bg-zinc-900">
                  <SocialBtn
                    icon={FiGithub}
                    href="https://github.com/Hasanul-Alam"
                  />
                  <SocialBtn
                    icon={FiLinkedin}
                    href="https://www.linkedin.com/in/md-hasanul-alam"
                  />
                  <SocialBtn icon={FiMail} href="#contact" />
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-4 -right-4 w-full h-full border border-zinc-800 rounded-xl bg-zinc-900/30 hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialBtn = ({ icon: Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-center py-3 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
  >
    <Icon size={16} />
  </a>
);

export default Hero;
