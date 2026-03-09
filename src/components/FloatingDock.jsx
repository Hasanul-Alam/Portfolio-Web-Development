import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiCode,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTerminal,
  FiLayers,
} from "react-icons/fi";

const links = [
  { title: "Home", icon: <FiHome />, href: "#home" },
  { title: "About", icon: <FiUser />, href: "#about" },
  { title: "Projects", icon: <FiCode />, href: "#projects" },
  { title: "Stack", icon: <FiLayers />, href: "#tech-stack" },
  { title: "CP", icon: <FiTerminal />, href: "#competitive-programming" },
  { title: "Contact", icon: <FiMail />, href: "#contact" },
  {
    title: "GitHub",
    icon: <FiGithub />,
    href: "https://github.com/Hasanul-Alam",
    external: true,
  },
  {
    title: "LinkedIn",
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/md-hasanul-alam",
    external: true,
  },
];

export default function FloatingDock() {
  let mouseX = useMotionValue(Infinity);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div
      className={`
        fixed z-50 bg-black/80 border border-zinc-800 backdrop-blur-md shadow-2xl shadow-black/50
        transition-all duration-300
        
        ${
          isDesktop
            ? "bottom-8 left-1/2 -translate-x-1/2 flex flex-row items-end h-16 gap-4 px-4 pb-3 rounded-2xl"
            : "top-1/2 -translate-y-1/2 right-2 flex flex-col items-center gap-3 py-3 px-2 rounded-full w-12"
        }
      `}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {links.map((link, i) => (
        <DockIcon key={i} mouseX={mouseX} isDesktop={isDesktop} {...link} />
      ))}
    </div>
  );
}

function DockIcon({ mouseX, title, icon, href, external, isDesktop }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const handleClick = (e) => {
    if (href === "#home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noreferrer" : ""}
      ref={ref}
      style={isDesktop ? { width } : {}}
      onClick={handleClick}
      onMouseMove={(e) => isDesktop && mouseX.set(e.pageX)}
      onMouseLeave={() => isDesktop && mouseX.set(Infinity)}
      className={`
        group relative flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 transition-colors
        
        ${
          isDesktop
            ? "aspect-square hover:bg-white hover:text-black"
            : "w-8 h-8 text-sm hover:text-white active:scale-95"
        }
      `}
    >
      <span
        className={`${isDesktop ? "text-2xl" : "text-lg"} pointer-events-none`}
      >
        {icon}
      </span>

      {isDesktop && (
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-auto px-2 py-1 rounded border border-zinc-800 bg-black text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          {title}
        </span>
      )}
    </motion.a>
  );
}
