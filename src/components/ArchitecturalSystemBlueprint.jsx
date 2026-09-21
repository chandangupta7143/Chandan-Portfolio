import React from "react";
import { motion } from "framer-motion";
import { Settings, CheckCircle2 } from "lucide-react";

export const ArchitecturalSystemBlueprint = () => {
    return (
        <div className="relative w-full max-w-[440px] lg:max-w-[470px] select-none pointer-events-auto">

            {/* === TIER 1: DUAL GLASS BLOCK (JAVA & SPRING BOOT) === */}
            {/* Directly beneath Chandan's resting left hand/forearm */}
            <div className="relative">
                {/* Glowing Laser Top Edge (Resting surface for forearm) */}
                <div className="relative z-20">
                    <div className="h-[4px] w-full bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee,0_0_35px_rgba(6,182,212,0.9)]" />
                    <div className="absolute -top-1.5 left-6 right-6 h-3 bg-cyan-400/40 blur-sm rounded-full" />
                </div>

                {/* Main Double-Chamber Glass Module */}
                <div className="mt-1 p-3 rounded-2xl bg-gradient-to-b from-sky-950/50 via-zinc-950/80 to-zinc-950/95 border-2 border-cyan-400/60 shadow-[0_0_40px_rgba(6,182,212,0.3),inset_0_0_25px_rgba(6,182,212,0.15)] backdrop-blur-2xl">
                    <div className="grid grid-cols-2 gap-3">

                        {/* Chamber 1: Java */}
                        <div className="flex flex-col items-center justify-center py-3.5 px-3 rounded-xl bg-cyan-950/30 border border-cyan-400/40 shadow-[inset_0_0_15px_rgba(6,182,212,0.2)] hover:border-cyan-300 transition-all duration-300 group">
                            {/* Neon Java Cup SVG */}
                            <svg className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.9)] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                                <line x1="6" y1="1" x2="6" y2="4" stroke="currentColor" strokeWidth="1.8" />
                                <line x1="10" y1="1" x2="10" y2="4" stroke="currentColor" strokeWidth="1.8" />
                                <line x1="14" y1="1" x2="14" y2="4" stroke="currentColor" strokeWidth="1.8" />
                            </svg>
                            <span className="mt-2 text-base font-bold text-white tracking-wider drop-shadow-[0_0_10px_rgba(6,182,212,0.7)] font-sans">
                                Java
                            </span>
                        </div>

                        {/* Chamber 2: Spring Boot */}
                        <div className="flex flex-col items-center justify-center py-3.5 px-3 rounded-xl bg-emerald-950/25 border border-emerald-400/40 shadow-[inset_0_0_15px_rgba(16,185,129,0.2)] hover:border-emerald-300 transition-all duration-300 group">
                            {/* Neon Spring Boot Leaf SVG */}
                            <svg className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.9)] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                            </svg>
                            <span className="mt-2 text-base font-bold text-white tracking-wider drop-shadow-[0_0_10px_rgba(52,211,153,0.7)] font-sans">
                                Spring Boot
                            </span>
                        </div>

                    </div>
                </div>

                {/* === CONNECTED AI MODULE (To the Right of Spring Boot) === */}
                <div className="absolute left-[calc(100%+6px)] top-3 z-30 w-[165px]">
                    {/* Glowing bus connection track from Spring Boot to AI */}
                    <div className="absolute -left-1.5 top-8 w-1.5 h-[2px] bg-gradient-to-r from-emerald-400 to-blue-400 shadow-[0_0_8px_#34d399]" />

                    <div className="p-2.5 rounded-2xl bg-zinc-950/90 border-2 border-blue-400/60 shadow-[0_0_30px_rgba(59,130,246,0.35),inset_0_0_15px_rgba(59,130,246,0.2)] backdrop-blur-2xl">
                        {/* AI Header */}
                        <div className="flex items-center gap-2 pb-2 mb-2 border-b border-blue-400/20">
                            {/* Brain SVG Icon */}
                            <svg className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-4.54z" />
                                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-4.54z" />
                            </svg>
                            <span className="text-lg font-black text-white tracking-wider drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
                                AI
                            </span>
                        </div>

                        {/* AI Features List */}
                        <div className="space-y-1.5 text-[10px] font-mono text-cyan-200">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full border border-cyan-400 flex items-center justify-center shrink-0">
                                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                                </span>
                                <span className="whitespace-nowrap">Spring AI</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full border border-cyan-400 flex items-center justify-center shrink-0">
                                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                                </span>
                                <span className="whitespace-nowrap">LLMs</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full border border-cyan-400 flex items-center justify-center shrink-0">
                                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                                </span>
                                <span className="whitespace-nowrap">Smart Features</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full border border-cyan-400 flex items-center justify-center shrink-0">
                                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                                </span>
                                <span className="whitespace-nowrap">Real World Solutions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vertical Connector Line from Java/Spring Boot to REST APIs */}
            <div className="flex justify-center my-1.5">
                <div className="w-[2px] h-4 bg-gradient-to-b from-cyan-400 to-sky-400 shadow-[0_0_8px_#22d3ee]" />
            </div>

            {/* === TIER 2: HORIZONTAL ROUTE BEAM (REST APIS | MICROSERVICES | EVENT DRIVEN) === */}
            <div className="relative py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-950/70 via-blue-950/75 to-indigo-950/70 border-2 border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.35),inset_0_0_15px_rgba(6,182,212,0.2)] backdrop-blur-2xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.9)] animate-spin-slow" />
                    <span className="text-xs md:text-sm font-bold text-white font-mono tracking-wider">
                        REST APIs
                    </span>
                </div>
                <div className="w-px h-4 bg-cyan-400/40" />
                <span className="text-xs md:text-sm font-bold text-white font-mono tracking-wider">
                    Microservices
                </span>
                <div className="w-px h-4 bg-cyan-400/40" />
                <span className="text-xs md:text-sm font-bold text-white font-mono tracking-wider">
                    Event Driven
                </span>
            </div>

            {/* Connector Bus Lines Downward to Frontend & Database Blocks */}
            <div className="relative h-4 w-full">
                <svg className="w-full h-full" viewBox="0 0 400 16" fill="none">
                    <path d="M 200 0 L 200 8 M 65 8 L 335 8 M 65 8 L 65 16 M 200 8 L 200 16 M 335 8 L 335 16" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.8" />
                </svg>
            </div>

            {/* === TIER 3: LOWER MODULES (REACT.JS | TAILWIND CSS | DATABASES) === */}
            <div className="grid grid-cols-3 gap-2.5">

                {/* Block 1: React.js */}
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-cyan-950/40 border-2 border-cyan-400/50 shadow-[0_0_25px_rgba(6,182,212,0.25),inset_0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-xl group hover:border-cyan-300 transition-all duration-300">
                    {/* Neon React Atom SVG */}
                    <svg className="w-9 h-9 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)] transition-transform duration-700 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
                        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
                        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
                    </svg>
                    <span className="mt-2 text-xs md:text-sm font-bold text-white tracking-wide">
                        React.js
                    </span>
                </div>

                {/* Block 2: Tailwind CSS */}
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-cyan-950/40 border-2 border-cyan-400/50 shadow-[0_0_25px_rgba(6,182,212,0.25),inset_0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-xl group hover:border-cyan-300 transition-all duration-300">
                    {/* Neon Tailwind Wave SVG */}
                    <svg className="w-9 h-9 text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.9)] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.975 12 6.001 12z" />
                    </svg>
                    <span className="mt-2 text-xs md:text-sm font-bold text-white tracking-wide">
                        Tailwind CSS
                    </span>
                </div>

                {/* Block 3: Databases (MySQL, PostgreSQL, MongoDB) */}
                <div className="flex flex-col p-2.5 rounded-xl bg-cyan-950/40 border-2 border-cyan-400/50 shadow-[0_0_25px_rgba(6,182,212,0.25),inset_0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-xl group hover:border-cyan-300 transition-all duration-300">
                    <div className="flex items-center gap-1.5 mb-1">
                        {/* 3-Tier Database Cylinder SVG */}
                        <svg className="w-5 h-5 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.9)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <ellipse cx="12" cy="5" rx="9" ry="3" />
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                        </svg>
                        <span className="text-xs font-bold text-white tracking-wide">
                            Databases
                        </span>
                    </div>
                    <div className="space-y-0.5 text-[9px] font-mono text-cyan-200/90 pl-1">
                        <div>MySQL</div>
                        <div>PostgreSQL</div>
                        <div>MongoDB</div>
                    </div>
                </div>

            </div>

            {/* === TIER 4: FOUNDATION RAIL (BOTTOM BEAM) === */}
            <div className="mt-3.5 relative">
                {/* Foundation Plinth with 3D Perspective Glow */}
                <div className="py-2 px-4 rounded-xl bg-gradient-to-r from-cyan-950/90 via-blue-950/90 to-cyan-950/90 border-2 border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.5),inset_0_0_20px_rgba(6,182,212,0.3)] backdrop-blur-2xl text-center">
                    <span className="text-[10px] md:text-[11px] font-mono font-bold tracking-[0.18em] text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)] uppercase">
                        SCALABLE &bull; SECURE &bull; INTELLIGENT &bull; REAL WORLD IMPACT
                    </span>
                </div>
            </div>

        </div>
    );
};

export default ArchitecturalSystemBlueprint;
