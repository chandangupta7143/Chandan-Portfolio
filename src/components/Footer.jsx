import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black/80 backdrop-blur-sm overflow-hidden relative border-t border-white/5">

            {/* Simple Ambient Glow */}
            <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 h-24 flex flex-col md:flex-row justify-between items-center relative z-10 gap-4 md:gap-0">

                {/* Brand & Status */}
                <div className="flex items-center gap-4">
                    <a href="#" className="group flex items-center gap-5">
                        <div className="relative flex items-center justify-center w-12 h-12">
                            {/* Outer Rotating Ring (Cosmic) */}
                            <div className="absolute inset-0 rounded-full border border-indigo-500/30 border-t-white/50 border-r-transparent border-l-transparent animate-[spin_3s_linear_infinite] group-hover:border-indigo-400/80 transition-colors" />

                            {/* Inner Rotating Ring (Reverse) */}
                            <div className="absolute inset-1 rounded-full border border-purple-500/30 border-b-white/50 border-l-transparent border-r-transparent animate-[spin_5s_linear_infinite_reverse] group-hover:border-purple-400/80 transition-colors" />

                            {/* Core Glow */}
                            <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full group-hover:bg-indigo-500/40 transition-colors duration-500" />

                            {/* Glass Core */}
                            <div className="relative flex items-center justify-center w-8 h-8 bg-zinc-950 rounded-full border border-white/10 shadow-[inner_0_0_10px_rgba(255,255,255,0.1)] group-hover:scale-90 transition-transform duration-500">
                                <span className="font-bold text-[10px] text-white tracking-tighter">CG<span className="text-indigo-500 animate-pulse">.</span></span>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 group-hover:via-indigo-300 group-hover:to-white transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                                CHANDAN GUPTA
                            </span>
                        </div>
                    </a>
                </div>

                {/* Copyright - Centered on Desktop */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
                    <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.2em] hover:text-zinc-400 transition-colors cursor-default">
                        Copyright © {new Date().getFullYear()} Chandan Gupta. All Rights Reserved.
                    </p>
                </div>

                {/* Right: Icons & Back to Top */}
                <div className="flex items-center gap-6">
                    <div className="flex gap-4">
                        {[
                            { Icon: Github, href: "https://github.com/chandangupta7143", color: "text-white" },
                            { Icon: Linkedin, href: "https://www.linkedin.com/in/chandan-gupta7143", color: "text-[#0077b5]" },
                            { Icon: Mail, href: "mailto:Chandangupta21092005@gmail.com", color: "text-[#EA4335]" }
                        ].map(({ Icon, href, color }, index) => (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className={`${color} opacity-60 hover:opacity-100 transition-opacity hover:scale-110 duration-300`}
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 group"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Mobile Copyright show only on really small screens */}
            <div className="md:hidden pb-6 text-center">
                <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.2em]">
                    Copyright © {new Date().getFullYear()} Chandan Gupta. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
