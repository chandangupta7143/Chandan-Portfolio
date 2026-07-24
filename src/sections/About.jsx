import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Target, Compass, Sparkles, CheckCircle2, CreditCard, X, ArrowUpRight, Cpu, Code2, ShieldCheck, Zap } from 'lucide-react';

const About = () => {
    const [isCardModalOpen, setIsCardModalOpen] = useState(false);

    return (
        <section id="about" className="py-12 md:py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-10 md:space-y-12">

                {/* Section Header */}
                <Reveal>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
                                <User className="w-3.5 h-3.5" />
                                Software Architect &amp; Developer Identity
                            </div>
                            <motion.h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase select-none">
                                <motion.span
                                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-zinc-100 to-indigo-400 bg-[length:200%_auto] inline-block drop-shadow-[0_0_30px_rgba(6,182,212,0.35)]"
                                >
                                    CHANDAN GUPTA
                                </motion.span>
                            </motion.h2>
                        </div>
                        <p className="text-zinc-400 font-light text-base md:text-lg max-w-md leading-relaxed">
                            Java Full-Stack Engineer crafting resilient backend systems, distributed microservices, and reactive web applications.
                        </p>
                    </div>
                </Reveal>

                {/* --- ROW 1: PRIMARY HERO (BIO & HIGH-TECH PORTRAIT) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Bio Narrative (7 Cols) */}
                    <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
                        <Reveal>
                            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                                Architecting <br />
                                <motion.span
                                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-200 to-purple-400 bg-[length:200%_auto] inline-block"
                                >
                                    Scalable Systems.
                                </motion.span>
                            </h3>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <div className="space-y-6 text-base md:text-lg text-zinc-300 font-light leading-relaxed">
                                <p>
                                    I am <span className="text-white font-semibold underline decoration-cyan-500/50 underline-offset-4">Chandan Gupta</span>, a Computer Science Engineer with an unwavering passion for building high-performance digital ecosystems.
                                </p>
                                <p>
                                    My expertise spans the entire software engineering lifecycle — from designing event-driven microservices with <span className="text-cyan-400 font-medium">Spring Boot, Redis, and MongoDB</span> to building reactive, intuitive user interfaces with <span className="text-cyan-400 font-medium">React.js &amp; Tailwind CSS</span>.
                                </p>
                                <p>
                                    Rooted in rigorous computer science principles, I prioritize clean code architecture, optimal algorithmic complexity, and production-grade security in every system I engineer.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/60 border border-white/10 text-xs font-mono text-zinc-300">
                                    <Zap className="w-4 h-4 text-cyan-400" />
                                    <span>High Concurrency Backend</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/60 border border-white/10 text-xs font-mono text-zinc-300">
                                    <Cpu className="w-4 h-4 text-indigo-400" />
                                    <span>Distributed Microservices</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/60 border border-white/10 text-xs font-mono text-zinc-300">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                    <span>JWT &amp; RBAC Security</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column: High-Tech Photo Portrait (5 Cols) */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
                        <Reveal width="100%">
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
                        </Reveal>
                    </div>
                </div>

                {/* --- ROW 2: SECONDARY PHILOSOPHY CARDS (3 COL GRID) --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Card 1: Mission Card */}
                    <Reveal delay={0.1} width="100%">
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="group h-full p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-cyan-500/40 transition-all duration-500 backdrop-blur-xl shadow-xl flex flex-col justify-between overflow-hidden relative"
                        >
                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <Target className="w-6 h-6 text-cyan-400" />
                                    <h4 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">Core Mission</h4>
                                </div>
                                <h5 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                    Resilient Engineering
                                </h5>
                                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                                    To architect and deliver high-concurrency, fault-tolerant software systems built on robust backend design and scalable cloud infrastructure.
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
                                    <h4 className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">Global Vision</h4>
                                </div>
                                <h5 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                                    Engineering Excellence
                                </h5>
                                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                                    To continually master emergent technologies, algorithms, and system design patterns to contribute to world-class software ecosystems.
                                </p>
                            </div>
                        </motion.div>
                    </Reveal>

                    {/* Card 3: Interactive Business Card Showcase */}
                    <Reveal delay={0.3} width="100%">
                        <motion.div
                            whileHover={{ y: -6 }}
                            onClick={() => setIsCardModalOpen(true)}
                            className="group h-full p-6 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-purple-500/40 transition-all duration-500 backdrop-blur-xl shadow-xl flex flex-col justify-between cursor-pointer overflow-hidden relative"
                        >
                            <div className="flex items-center justify-between mb-4 relative z-10">
                                <div className="flex items-center gap-2 text-purple-400">
                                    <CreditCard className="w-5 h-5" />
                                    <span className="text-xs font-mono font-bold tracking-widest uppercase">Digital Pass</span>
                                </div>
                                <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded-md border border-white/5 flex items-center gap-1 group-hover:text-white">
                                    <span>Expand</span>
                                    <ArrowUpRight className="w-3 h-3 text-purple-400" />
                                </span>
                            </div>

                            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 shadow-inner flex items-center justify-center p-2">
                                <img
                                    src="/business_card.png"
                                    alt="Chandan Gupta Business Card"
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    </Reveal>

                </div>

            </div>

            {/* Business Card Modal Lightbox */}
            <AnimatePresence>
                {isCardModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCardModalOpen(false)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-3xl w-full bg-zinc-900 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setIsCardModalOpen(false)}
                                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-950 text-zinc-400 hover:text-white border border-white/10 transition-colors z-20"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <h3 className="text-2xl font-bold text-white mb-2">Chandan Gupta</h3>
                            <p className="text-purple-400 text-xs font-mono mb-6 uppercase tracking-widest">Digital Developer Card</p>

                            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl p-4 flex items-center justify-center">
                                <img
                                    src="/business_card.png"
                                    alt="Chandan Gupta Business Card"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default About;
