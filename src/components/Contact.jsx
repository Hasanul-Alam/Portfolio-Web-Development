import { useRef, useState } from "react";
import {
  FiMail,
  FiPhone,
  FiCheck,
  FiX,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiArrowRight,
} from "react-icons/fi";
import ScrollReveal from "../ScrollBar/Scrollbar";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(null);
  // const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xzdpjwjw", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(new FormData(formRef.current))),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        formRef.current.reset();
        setStatus("success");
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  // Handle Copy to Clipboard
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const SocialLink = ({ href, icon: Icon }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-center w-12 h-12 rounded-full border border-zinc-800 bg-black text-zinc-400 hover:text-black hover:bg-white hover:border-white transition-all duration-300"
    >
      <Icon size={18} />
    </a>
  );

  return (
    <ScrollReveal>
      <section id="contact" className="relative  overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="flex flex-col h-full">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-white"></div>
                  <span className="text-white font-mono text-xs tracking-[0.2em] uppercase">
                    Get in Touch
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-6">
                  Let's build something <br />{" "}
                  <span className="text-zinc-500">exceptional.</span>
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                  Whether you have a project in mind or just want to chat, feel
                  free to reach out. I'm currently open for new opportunities.
                </p>
              </div>

              <div className="space-y-6 flex-1">
                <button
                  onClick={() =>
                    handleCopy("hasanul.alam.professional@gmail.com", "email")
                  }
                  className="w-full group flex items-center justify-between p-6 border border-zinc-800 bg-zinc-950/50 hover:bg-zinc-900 transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className="p-3 bg-zinc-900 border border-zinc-800 text-white group-hover:border-zinc-600 transition-colors">
                      <FiMail size={22} />
                    </div>
                    <div className="text-left">
                      <h4 className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-1">
                        Email Address
                      </h4>
                      <p className="text-white text-sm md:text-lg font-medium">
                        hasanul.alam.professional@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <FiCopy
                      className={`text-zinc-500 transition-all ${copied === "email" ? "opacity-0 scale-50" : "opacity-100 scale-100"}`}
                    />
                    <FiCheck
                      className={`absolute top-0 left-0 text-white transition-all ${copied === "email" ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                    />
                  </div>
                </button>

                <button
                  onClick={() => handleCopy("+880 1797 888924", "phone")}
                  className="w-full group flex items-center justify-between p-6 border border-zinc-800 bg-zinc-950/50 hover:bg-zinc-900 transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className="p-3 bg-zinc-900 border border-zinc-800 text-white group-hover:border-zinc-600 transition-colors">
                      <FiPhone size={22} />
                    </div>
                    <div className="text-left">
                      <h4 className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-1">
                        Phone Number
                      </h4>
                      <p className="text-white text-sm md:text-lg font-medium">
                        +880 1797 888924
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <FiCopy
                      className={`text-zinc-500 transition-all ${copied === "phone" ? "opacity-0 scale-50" : "opacity-100 scale-100"}`}
                    />
                    <FiCheck
                      className={`absolute top-0 left-0 text-white transition-all ${copied === "phone" ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                    />
                  </div>
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-zinc-900 flex gap-4">
                <SocialLink
                  href="https://github.com/Hasanul-Alam"
                  icon={FiGithub}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/md-hasanul-alam"
                  icon={FiLinkedin}
                />
              </div>
            </div>

            <div className="relative">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative bg-zinc-950 border border-zinc-800 p-8 md:p-10 shadow-[0_0_50px_rgba(255,255,255,0.03)]"
              >
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-white"></div>
                <div className="absolute top-0 left-0 w-[1px] h-8 bg-white"></div>
                <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-white"></div>
                <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-white"></div>

                <h3 className="text-2xl font-bold text-white mb-8">
                  Send a Message
                </h3>

                <div className="space-y-6">
                  <div className="relative group">
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-zinc-800 py-4 text-white outline-none focus:border-white transition-all placeholder-transparent"
                    />
                    <label className="absolute left-0 top-4 text-zinc-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-white peer-valid:top-0 peer-valid:text-xs peer-valid:text-white uppercase tracking-wider">
                      Your Name
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-zinc-800 py-4 text-white outline-none focus:border-white transition-all placeholder-transparent"
                    />
                    <label className="absolute left-0 top-4 text-zinc-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-white peer-valid:top-0 peer-valid:text-xs peer-valid:text-white uppercase tracking-wider">
                      Email Address
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-zinc-800 py-4 text-white outline-none focus:border-white transition-all placeholder-transparent"
                    />
                    <label className="absolute left-0 top-4 text-zinc-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-white peer-valid:top-0 peer-valid:text-xs peer-valid:text-white uppercase tracking-wider">
                      Subject
                    </label>
                  </div>

                  <div className="relative group pt-4">
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-zinc-800 py-4 text-white outline-none focus:border-white transition-all placeholder-transparent resize-none"
                    />
                    <label className="absolute left-0 top-8 text-zinc-500 text-sm transition-all peer-placeholder-shown:top-8 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-white peer-valid:top-2 peer-valid:text-xs peer-valid:text-white uppercase tracking-wider">
                      Your Message
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending" || status === "success"}
                    className={`w-full h-14 mt-4 flex items-center justify-center gap-2 text-sm font-bold tracking-widest uppercase transition-all duration-500 ${
                      status === "success"
                        ? "bg-black border border-white text-white cursor-default"
                        : status === "error"
                          ? "bg-black border border-zinc-800 text-zinc-400"
                          : "bg-white text-black hover:bg-zinc-200"
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {status === "idle" && (
                        <motion.div
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <span>Send Message</span>
                          <FiArrowRight size={18} />
                        </motion.div>
                      )}

                      {status === "sending" && (
                        <motion.div
                          key="sending"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <div className="h-4 w-4 border-2 border-zinc-400 border-t-black rounded-full animate-spin" />
                        </motion.div>
                      )}

                      {status === "success" && (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2"
                        >
                          <FiCheck size={18} />
                          <span>Message Sent</span>
                        </motion.div>
                      )}

                      {status === "error" && (
                        <motion.div
                          key="error"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-2"
                        >
                          <FiX size={18} />
                          <span>Something went wrong</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
