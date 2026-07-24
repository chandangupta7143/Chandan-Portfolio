import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Code2, Sparkles, Heart } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-transparent overflow-hidden relative pt-2 pb-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center gap-6 relative z-10">

                {/* PROUD CREATOR SIGNATURE BANNER */}
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="relative group px-8 py-4 rounded-full bg-zinc-950/80 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.25)] hover:shadow-[0_0_55px_rgba(6,182,212,0.5)] backdrop-blur-2xl transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden cursor-default"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <p className="relative z-10 text-sm md:text-base font-mono tracking-wider text-zinc-200 font-semibold flex items-center flex-wrap justify-center gap-1">
                        CRAFTED &amp; ENGINEERED WITH <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400 inline-block mx-1 animate-pulse drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]" /> BY{" "}
                        <motion.span
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-400 font-extrabold tracking-widest bg-[length:200%_auto] uppercase drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] ml-1"
                        >
                            CHANDAN GUPTA
                        </motion.span>
                    </p>

                    <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 relative z-10" />
                </motion.div>

                {/* Footer Main Bar */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
                    
                    {/* Left: Brand Identity */}
                    <a href="#" className="group flex items-center gap-4">
                        <div className="relative flex items-center justify-center w-10 h-10">
                            <div className="absolute inset-0 rounded-full border border-cyan-500/40 border-t-white/80 animate-[spin_4s_linear_infinite]" />
                            <div className="absolute inset-1 rounded-full border border-indigo-500/30 border-b-white/50 animate-[spin_6s_linear_infinite_reverse]" />
                            <div className="flex items-center justify-center w-6 h-6 bg-zinc-950 rounded-full border border-white/10 shadow-inner">
                                <span className="font-bold text-[8px] text-white tracking-tighter">CG</span>
                            </div>
                        </div>

                        <span className="text-lg font-bold tracking-tighter text-white font-sans group-hover:text-cyan-300 transition-colors">
                            CHANDAN <span className="text-cyan-400">GUPTA</span>
                        </span>
                    </a>

                    {/* Center: Clean Copyright */}
                    <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase text-center">
                        © {new Date().getFullYear()} CHANDAN GUPTA. ALL RIGHTS RESERVED.
                    </p>

                    {/* Right: Social Icons & Back to Top */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2.5">
                            {[
                                { Icon: Github, href: "https://github.com/chandangupta7143", color: "text-white", glow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/in/chandan-gupta7143", color: "text-sky-400", glow: "hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]" },
                                { Icon: Mail, href: "mailto:Chandangupta21092005@gmail.com", color: "text-rose-400", glow: "hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]" }
                            ].map(({ Icon, href, color, glow }, idx) => (
                                <motion.a
                                    key={idx}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`p-2.5 rounded-full bg-zinc-950 border border-white/10 ${color} ${glow} transition-all duration-300`}
                                >
                                    <Icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ y: -3, scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToTop}
                            className="p-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300"
                            aria-label="Scroll to top"
                            title="Back to top"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </motion.button>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
