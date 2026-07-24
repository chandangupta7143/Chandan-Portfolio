import React from "react";
import { Reveal } from "../components/Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Terminal, Sparkles, Code, Cpu, ShieldCheck, Zap } from "lucide-react";

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-8 overflow-hidden pt-20 pb-8">
            <div className="max-w-[1400px] mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left Column: Text Content & Action (4 Columns) */}
                <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col justify-center items-start">
                    
                    {/* Top Greeting */}
                    <Reveal>
                        <div className="inline-flex items-center gap-3 mb-4">
                            <span className="text-base md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-indigo-300 font-mono tracking-widest uppercase">
                                Hello world!<span className="text-white"> i Am</span>
                            </span>
                        </div>
                    </Reveal>

                    {/* Master Animated Title */}
                    <Reveal delay={0.1}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-5 font-sans leading-[0.95] select-none">
                            <motion.span
                                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-400 bg-[length:200%_auto] inline-block drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                            >
                                CHANDAN
                            </motion.span>{" "}
                            <br />
                            <motion.span
                                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-400 bg-[length:200%_auto] inline-block drop-shadow-[0_0_25px_rgba(99,102,241,0.4)]"
                            >
                                GUPTA
                            </motion.span>
                        </h1>
                    </Reveal>

                    {/* Elite Developer Bio */}
                    <Reveal delay={0.2}>
                        <p className="text-base md:text-lg text-zinc-300 max-w-md leading-relaxed mb-8 font-light">
                            Engineering <span className="text-cyan-400 font-semibold underline decoration-cyan-500/50 underline-offset-4">scalable microservices</span>, real-time distributed systems, and modern interactive web experiences.
                        </p>
                    </Reveal>

                    {/* Action Buttons */}
                    <Reveal delay={0.3}>
                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href="https://drive.google.com/file/d/1D81Z1b_JP9yx6JNutnSM0EwqDPmpVVOa/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-8 py-4 flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm text-white shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] transition-all duration-300 hover:scale-105 overflow-hidden"
                            >
                                <Download className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
                                <span>Get CV</span>
                                <ArrowUpRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>

                            <a
                                href="#projects"
                                className="px-6 py-4 rounded-full bg-zinc-950 border border-white/10 text-zinc-300 hover:text-white hover:border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider transition-all hover:bg-zinc-900"
                            >
                                View Projects
                            </a>
                        </div>
                    </Reveal>
                </div>

                {/* Right Column: Larger Banner Image Container (8 Columns) */}
                <div className="lg:col-span-8 order-1 lg:order-2 flex justify-center w-full items-center">
                    <Reveal delay={0.3} width="100%">
                        <motion.div
                            className="relative w-full group overflow-hidden rounded-3xl border border-cyan-500/40 bg-zinc-950/80 shadow-[0_0_60px_rgba(6,182,212,0.3)] hover:shadow-[0_0_90px_rgba(6,182,212,0.5)] transition-all duration-700 ease-out"
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            {/* Ambient Top Glow Line */}
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-20" />

                            <img
                                src="/hero_banner.png"
                                alt="Chandan Gupta Java Full Stack Developer Banner"
                                className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
                            />

                        </motion.div>
                    </Reveal>
                </div>

            </div>

        </section>
    );
};

export default Hero;
