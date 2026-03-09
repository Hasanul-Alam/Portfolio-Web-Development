import React, { useState } from "react";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import {
  FiAward,
  FiTrendingUp,
  FiTarget,
  FiCpu,
  FiImage,
  FiX,
  FiMaximize2,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import ScrollReveal from "../ScrollBar/Scrollbar";
import pic1 from "../assets/bubt-2025.jfif";
import pic2 from "../assets/uits-intra.jfif";
import pic3 from "../assets/aust-codeclash.jfif";
import pic4 from "../assets/uap.jpg";

const CompetitiveProgramming = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const platforms = [
    {
      name: "Codeforces",
      handle: "_Mahfuz",
      link: "https://codeforces.com/profile/_Mahfuz",
      icon: SiCodeforces,
      color: "text-blue-500",
      borderColor: "group-hover:border-blue-500/50",
      bgHover: "group-hover:bg-blue-500/10",
      stats: "Max Rating: 1380 (Pupil)",
    },
    {
      name: "LeetCode",
      handle: "MahfuzCSE_53",
      link: "https://leetcode.com/MahfuzCSE_53/",
      icon: SiLeetcode,
      color: "text-yellow-500",
      borderColor: "group-hover:border-yellow-500/50",
      bgHover: "group-hover:bg-yellow-500/10",
      stats: "Solved: 450+",
    },
  ];

  const contests = [
    {
      title: "UITS Intra-University 2025",
      rank: "3rd Place",
      team: "UITS_Bitwisers",
      total: "40+ Teams",
      icon: FiAward,
      highlight: true,
    },
    {
      title: "BUBT Inter-University 2025",
      rank: "Top 50",
      team: "UITS_CodeVengers",
      total: "100+ Teams",
      icon: FiTarget,
      highlight: false,
    },
    {
      title: "UAP Inter-University 2024",
      rank: "28th Place",
      team: "UITS_Bitwisers",
      total: "60+ Teams",
      icon: FiTarget,
      highlight: false,
    },
  ];

  const galleryPhotos = [
    {
      id: 1,
      title: "BUBT Inter-University",
      subtitle: "Top 50 Achieved",
      date: "Nov 2025",
      location: "BUBT Campus",
      caption: "Team UITS_CodeVengers battling against 100+ universities.",
      src: pic1,
    },
    {
      id: 2,
      title: "Aust Inter-University",
      subtitle: "Contest Moments",
      date: "Jan 2025",
      location: "AUST Grounds",
      caption: "Focused on solving the critical dynamic programming problem.",
      src: pic3,
    },
    {
      id: 3,
      title: "UITS Intra-University",
      subtitle: "2nd Runner Up",
      date: "Feb 2025",
      location: "UITS Lab 4",
      caption: "Secured 3rd place with Team UITS_Bitwisers.",
      src: pic2,
    },

    {
      id: 4,
      title: "Uap Inter-University",
      subtitle: "Contest Moments",
      date: "Jan 2024",
      location: "UAP Grounds",
      caption: "Focused on solving the critical dynamic programming problem.",
      src: pic4,
    },
  ];

  return (
    <ScrollReveal>
      <section id="cp" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.1] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-emerald-500"></span>
              <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase">
                Problem Solving
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Competitive Programming
            </h2>
            <p className="text-zinc-400 max-w-2xl leading-relaxed">
              Sharpening algorithmic thinking through regular contests. I focus
              on{" "}
              <span className="text-zinc-200">
                Data Structures, Graph Algorithms, and Dynamic Programming.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <FiCpu size={120} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-zinc-400 font-mono text-sm uppercase tracking-wider mb-2">
                    Total Problems Solved
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white tracking-tight">
                      700+
                    </span>
                    <span className="text-emerald-500 font-mono text-sm">
                      + Daily Active
                    </span>
                  </div>
                  <div className="mt-6 flex gap-1 h-1.5 w-full max-w-md">
                    <div className="h-full bg-emerald-500 w-[40%] rounded-l-full"></div>
                    <div className="h-full bg-blue-500 w-[30%]"></div>
                    <div className="h-full bg-yellow-500 w-[20%]"></div>
                    <div className="h-full bg-zinc-700 w-[10%] rounded-r-full"></div>
                  </div>
                  <div className="flex gap-4 mt-2 text-[10px] uppercase font-mono text-zinc-500">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>{" "}
                      Easy
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>{" "}
                      Medium
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>{" "}
                      Hard
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`group bg-zinc-900/30 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-all duration-300 ${platform.borderColor}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`p-2 rounded-lg bg-zinc-950 ${platform.color}`}
                      >
                        <platform.icon size={24} />
                      </div>
                      <FiTrendingUp className="text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        {platform.name}
                      </h4>
                      <p className="text-zinc-500 text-sm font-mono mt-1 group-hover:text-zinc-300 transition-colors">
                        @{platform.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 h-full">
                <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                  <FiAward className="text-yellow-500" /> Contest Highlights
                </h3>
                <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[19px] before:w-px before:bg-zinc-800">
                  {contests.map((contest, index) => (
                    <div key={index} className="relative flex gap-4">
                      <div
                        className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border bg-zinc-900 shrink-0 ${contest.highlight ? "border-yellow-500/50 text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.2)]" : "border-zinc-700 text-zinc-500"}`}
                      >
                        <contest.icon size={16} />
                      </div>
                      <div>
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider mb-1 ${contest.highlight ? "bg-yellow-500/10 text-yellow-500" : "bg-zinc-800 text-zinc-400"}`}
                        >
                          {contest.rank}
                        </span>
                        <h4 className="text-zinc-200 font-medium text-sm leading-snug mb-1">
                          {contest.title}
                        </h4>
                        <p className="text-emerald-500/80 text-xs font-mono mb-0.5">
                          {contest.team}
                        </p>
                        <p className="text-zinc-500 text-xs">
                          vs {contest.total}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-800 text-center">
                  <p className="text-xs text-zinc-600 font-mono">
                    // CONSISTENCY IS KEY
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="relative border-t border-zinc-800 pt-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FiImage className="text-emerald-500" />
                Gallery
              </h3>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Snapshots
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryPhotos.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedImage(photo)}
                  className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-emerald-500/40 transition-all duration-300"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <div className="bg-black/60 backdrop-blur-sm p-1.5 rounded-lg text-white border border-white/10">
                        <FiMaximize2 size={14} />
                      </div>
                    </div>

                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                          <FiCalendar size={10} /> {photo.date}
                        </span>
                      </div>

                      <h4 className="text-white font-bold text-lg leading-tight group-hover:text-emerald-50 transition-colors">
                        {photo.title}
                      </h4>

                      <p className="text-zinc-300 text-xs mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {photo.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-950/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all z-10"
              onClick={() => setSelectedImage(null)}
            >
              <FiX size={24} />
            </button>

            <div
              className="max-w-4xl w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full md:w-2/3 bg-black flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[60vh] md:max-h-[80vh] w-full object-contain"
                />
              </div>

              <div className="w-full md:w-1/3 p-6 flex flex-col justify-center bg-zinc-900 border-l border-zinc-800">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-mono uppercase tracking-wider">
                    Contest Memory
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <div className="flex items-center gap-2 text-zinc-500 text-xs mb-4 font-mono">
                  <span className="flex items-center gap-1">
                    <FiCalendar size={12} /> {selectedImage.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FiMapPin size={12} /> {selectedImage.location}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-zinc-700 pl-3">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </ScrollReveal>
  );
};

export default CompetitiveProgramming;
