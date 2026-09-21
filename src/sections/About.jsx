import React from 'react';
import { Reveal } from '../components/Reveal';
import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';
import ArchitecturalSystemBlueprint from '../components/ArchitecturalSystemBlueprint';

// TOGGLE FLAG: Set to false to instantly revert back to original photo setup!
const USE_TRIAL_IMAGE = true;

const About = () => {

    return (
        <section id="about" className="pt-8 pb-12 md:pt-10 md:pb-14 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-10 md:space-y-12">



                {/* --- PRIMARY COMPOSITION: ARCHITECTURE NARRATIVE & INTEGRATED STANDING FIGURE --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-2 xl:gap-4 items-start relative z-10">

                    {/* Left Column: Bio Narrative & Engineering Depth (5 Cols on large) */}
                    <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1 z-10 pb-4">
                        <Reveal>
                            <div className="flex flex-col items-start">
                                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl font-black tracking-tighter text-white uppercase select-none leading-[0.88]">
                                    CHANDAN <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-indigo-300">
                                        GUPTA
                                    </span>
                                </h1>
                                {/* Cyan Accent Underline */}
                                <div className="w-14 h-1 bg-cyan-400 rounded-full mt-4 mb-2 shadow-[0_0_12px_#22d3ee]" />
                            </div>
                        </Reveal>

                        {/* LEVEL 2: HEADLINE */}
                        <Reveal delay={0.05}>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
                                Architecting <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                                    Scalable Systems.
                                </span>
                            </h2>
                        </Reveal>

                        {/* LEVEL 3: PROFESSIONAL POSITIONING */}
                        <Reveal delay={0.1}>
                            <div className="space-y-4 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                                <p>
                                    I’m <span className="text-white font-semibold">Chandan Gupta</span>, a <span className="text-cyan-400 font-medium">Java Full Stack Developer</span> building scalable web applications and intelligent backend systems with <span className="text-white font-medium">Java, Spring Boot, React, and Spring AI</span>.
                                </p>
                                <p>
                                    My work spans the full stack — from robust <span className="text-cyan-400 font-medium">Spring Boot APIs</span>, secure backend services, and database-driven applications to responsive <span className="text-cyan-400 font-medium">React</span> interfaces and AI-powered features using <span className="text-white font-medium">Spring AI</span> and modern LLM integrations.
                                </p>
                                <p>
                                    I focus on writing clean, maintainable Java code and designing systems that are scalable, secure, and ready for real-world use — combining traditional software engineering with practical AI capabilities.
                                </p>
                            </div>
                        </Reveal>


                    </div>

                    {/* Right Column: Integrated Standing Figure & Architectural Blueprint Structure (7 Cols) */}
                    <div className="lg:col-span-7 flex justify-center lg:justify-start lg:-ml-6 xl:-ml-10 order-1 lg:order-2 w-full relative">
                        <Reveal width="100%">
                            {USE_TRIAL_IMAGE ? (
                                /* === REFERENCE BLUEPRINT: Full-Body Cutout (Head to Shoes) + Architectural System Blueprint === */
                                <div className="relative w-full flex justify-center lg:justify-start items-start select-none">
                                    {/* Ambient Backlight Glow behind silhouette */}
                                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

                                    {/* Standing Cutout Figure of Chandan (HEAD TO SHOES 100% VISIBLE) */}
                                    <div className="relative flex items-start justify-center lg:justify-start">
                                        <div className="relative z-20 shrink-0">
                                            <img
                                                src="/chandan_fullbody.png"
                                                alt="Chandan Gupta - Software Architect"
                                                className="w-auto h-[700px] sm:h-[760px] md:h-[820px] lg:h-[860px] xl:h-[900px] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
                                            />
                                            {/* Floor Shadow Under Shoes */}
                                            <div className="absolute bottom-0 left-4 right-12 h-5 bg-black/90 blur-md rounded-full -z-10" />
                                        </div>

                                        {/* === ARCHITECTURAL SYSTEM BLUEPRINT (Directly Under Resting Hand) === */}
                                        <div className="relative z-10 -ml-16 sm:-ml-20 md:-ml-28 lg:-ml-38 mt-[255px] sm:mt-[280px] md:mt-[305px] lg:mt-[325px] xl:mt-[335px] pointer-events-auto transform origin-top-left scale-90 sm:scale-95 md:scale-95 lg:scale-95 xl:scale-100">
                                            <ArchitecturalSystemBlueprint />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* === ORIGINAL MODE: Exact original portrait for instant undo === */
                                <motion.div
                                    whileHover={{ y: -6, scale: 1.01 }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-cyan-500/40 bg-zinc-950 shadow-[0_0_60px_rgba(6,182,212,0.25)] hover:shadow-[0_0_85px_rgba(6,182,212,0.45)] transition-all duration-500"
                                >
                                    {/* Top Glow Accent Line */}
                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-30" />

                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10 opacity-80 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />

                                    <img
                                        src="/myimg.png"
                                        alt="Chandan Gupta"
                                        className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />

                                    {/* Identity Overlay Card */}
                                    <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col items-start gap-3 p-5 rounded-2xl bg-zinc-950/90 border border-white/10 backdrop-blur-2xl shadow-2xl">
                                        <div className="flex flex-col gap-0.5">
                                            <h4 className="text-white font-black text-2xl tracking-tight">Chandan Gupta</h4>
                                            <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase font-bold">Java Full Stack Engineer</p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className="relative flex h-2.5 w-2.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                            </span>
                                            <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest">Available For Software Roles</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </Reveal>
                    </div>
                </div>

                {/* --- ROW 2: PHILOSOPHY CARDS (CORE MISSION & GLOBAL VISION) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Card 1: Mission Card */}
                    <Reveal delay={0.1} width="100%">
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="group h-full p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-cyan-500/40 transition-all duration-500 backdrop-blur-xl shadow-xl flex flex-col justify-between overflow-hidden relative"
                        >
                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <Target className="w-6 h-6 text-cyan-400" />
                                    <h4 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">CORE MISSION</h4>
                                </div>
                                <h5 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                    Building Reliable Systems
                                </h5>
                                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                                    To build scalable and secure applications with Java, Spring Boot, and modern full-stack technologies — turning complex requirements into reliable real-world software.
                                </p>
                            </div>
                        </motion.div>
                    </Reveal>

                    {/* Card 2: Vision Card */}
                    <Reveal delay={0.2} width="100%">
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="group h-full p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-indigo-500/40 transition-all duration-500 backdrop-blur-xl shadow-xl flex flex-col justify-between overflow-hidden relative"
                        >
                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <Compass className="w-6 h-6 text-indigo-400" />
                                    <h4 className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">GLOBAL VISION</h4>
                                </div>
                                <h5 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                                    Engineering Intelligent Solutions
                                </h5>
                                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                                    To continuously evolve as a software engineer by combining strong engineering fundamentals with AI, Spring AI, and modern technologies to build smarter digital experiences.
                                </p>
                            </div>
                        </motion.div>
                    </Reveal>

                </div>

            </div>
        </section>
    );
};

export default About;
