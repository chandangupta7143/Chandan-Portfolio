import React from 'react';
import { Reveal } from '../components/Reveal';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">

            {/* --- ETHEREAL ATMOSPHERE --- */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[100px] pointer-events-none opacity-40"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-16 md:space-y-24">

                {/* --- ROW 1: PRIMARY (BIO & PHOTO) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* COL 1: BIO NARRATIVE */}
                    <div className="flex flex-col gap-8 order-2 lg:order-1">
                        <Reveal>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1]">
                                Building the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300">
                                    Unimaginable.
                                </span>
                            </h3>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <div className="space-y-6 max-w-xl">
                                <h4 className="text-xl text-indigo-300/90 font-light tracking-wide">
                                    Engineering with <span className="text-indigo-300 font-normal">Soul.</span>
                                </h4>

                                <div className="space-y-4 text-base text-zinc-400 font-light leading-relaxed">
                                    <p>
                                        I'm <span className="text-zinc-100 font-medium pt-0.5 border-b border-indigo-500/30">Chandan Gupta</span>, a Java Full-Stack Engineer focused on building scalable, secure, and maintainable software systems.
                                    </p>
                                    <p>
                                        I work across backend architecture, RESTful APIs, databases, and modern frontend interfaces — with a foundation in <span className="text-zinc-100">data structures, algorithms, and system design</span>.
                                    </p>
                                </div>
                                <div className="w-12 h-px bg-indigo-500/30 mt-2"></div>
                            </div>
                        </Reveal>
                    </div>

                    {/* COL 2: PHOTO PORTRAIT */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <Reveal width="100%">
                            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50 border border-white/10 bg-zinc-900 group transition-all duration-500 hover:border-indigo-500/30 hover:shadow-indigo-900/20">
                                {/* Ambient Inner Glow (Appears on Hover) */}
                                <div className="absolute inset-0 bg-radial-gradient from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>

                                {/* Dark Gradient Overlay (Depth) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>

                                <img
                                    src="/myimg.png"
                                    alt="Chandan Gupta"
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                />

                                {/* --- IDENTITY OVERLAY (Seamless Integration) --- */}
                                <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col items-start gap-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-white font-bold text-2xl tracking-tight leading-none drop-shadow-lg">Chandan Gupta</h3>
                                        <p className="text-indigo-200/90 text-sm font-medium tracking-widest uppercase drop-shadow-md">Full Stack Visionary</p>
                                    </div>

                                    <div className="flex items-center gap-2.5">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"></span>
                                        </span>
                                        <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-[0.2em] shadow-black drop-shadow-md">Available for work</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* --- ROW 2: SECONDARY (3 COL Grid) --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Mission (Premium Glass) */}
                    <Reveal delay={0.2} className="h-full">
                        <div className="group h-full p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-violet-500/30 transition-all duration-500 backdrop-blur-sm relative overflow-hidden flex flex-col gap-4">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative z-10">
                                <h4 className="flex items-center gap-3 text-violet-200/90 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.5)]"></span>
                                    Mission
                                </h4>
                                <p className="text-sm text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                                    To design and build <span className="text-zinc-200 font-medium border-b border-violet-500/20">reliable, scalable, and maintainable</span> software systems that solve real-world problems.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 2: Vision (Premium Glass) */}
                    <Reveal delay={0.3} className="h-full">
                        <div className="group h-full p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-sm relative overflow-hidden flex flex-col gap-4">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative z-10">
                                <h4 className="flex items-center gap-3 text-cyan-200/90 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></span>
                                    Vision
                                </h4>
                                <p className="text-sm text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                                    To grow as a <span className="text-zinc-200 font-medium border-b border-cyan-500/20">globally competent software engineer</span> contributing to high-impact systems.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 3: Business Card (Premium Display Case) */}
                    <Reveal delay={0.4} className="h-full">
                        <div className="h-full group relative rounded-3xl bg-black/80 border border-white/10 overflow-hidden shadow-2xl shadow-black/50 p-6 flex items-center justify-center transition-all duration-500 hover:border-indigo-500/20">
                            {/* Ambient Glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-indigo-500/50 blur-[20px] group-hover:bg-indigo-400/80 transition-all duration-700"></div>

                            {/* Inner Spotlight */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <img
                                src="/business_card.png"
                                alt="Business Card"
                                className="w-full h-auto object-contain md:max-h-[120px] opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out relative z-10 drop-shadow-2xl"
                            />
                        </div>
                    </Reveal>
                </div>

            </div>

            <style jsx>{`
                .perspective-1000 { perspective: 1000px; }
                .preserve-3d { transform-style: preserve-3d; }
            `}</style>
        </section>
    );
};

export default About;
