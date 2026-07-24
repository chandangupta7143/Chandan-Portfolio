import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    GraduationCap, Award, BookOpen, ExternalLink, Calendar, 
    School, CheckCircle2, Sparkles, X, Terminal, Cpu, ShieldCheck, Zap, ZoomIn 
} from 'lucide-react';

const certifications = [
    { 
        title: "Web Development", 
        provider: "LinkedIn Learning", 
        date: "2023", 
        image: "/webd.png", 
        link: "/webd.png", 
        color: "#61DAFB",
        tag: "Full-Stack Web",
        desc: "Certified in modern responsive frontend architectures, reactive state, and web application engineering."
    },
    { 
        title: "Java Programming", 
        provider: "Techvanto Academy", 
        date: "2024", 
        image: "/JAVA.png", 
        link: "/JAVA.png", 
        color: "#F89820",
        tag: "Enterprise Java",
        desc: "Advanced Java concepts, OOP design patterns, multithreading, and backend system architecture."
    },
    { 
        title: "C++ Programming", 
        provider: "Coursera", 
        date: "2023", 
        image: "/cpp_final.png", 
        link: "/cpp_final.png", 
        color: "#00599C",
        tag: "Systems & DSA",
        desc: "Low-level memory management, pointers, computational optimization, and C++ OOP principles."
    },
    { 
        title: "Cloud Computing", 
        provider: "NPTEL", 
        date: "2023", 
        image: "/NPTEL.png", 
        link: "/NPTEL.png", 
        color: "#0ea5e9",
        tag: "Cloud Architecture",
        desc: "Virtualization, distributed systems, cloud infrastructure paradigms, and cloud deployment."
    },
    { 
        title: "CompTIA Linux+ XKO-005", 
        provider: "Cybrary", 
        date: "2024", 
        image: "/linux.png", 
        link: "/linux.png", 
        color: "#10B981",
        tag: "Linux Administration",
        desc: "Bash scripting, system administration, kernel parameters, security permissions, and server management."
    },
    { 
        title: "Ethical Hacking", 
        provider: "EC-Council", 
        date: "2024", 
        image: "/EHE.png", 
        link: "/EHE.png", 
        color: "#EF4444",
        tag: "Cybersecurity & Security",
        desc: "Network security, penetration testing fundamentals, vulnerability assessment, and web defense."
    }
];

const training = {
    title: "Data Structures and Algorithms",
    organizer: "GEEKSFORGEEKS",
    period: "Jun - Jul '24",
    highlights: [
        "Completed a 12-week intensive training program on Data Structures and Algorithms (DSA) conducted by GeeksforGeeks (GFG), focusing on algorithmic problem solving.",
        "Mastered linear & non-linear data structures: Arrays, Linked Lists, Stacks, Queues, Trees, BSTs, Heaps, and Hashing.",
        "Engineered optimized solutions using Sorting, Searching, Dynamic Programming, and Recursion with Big-O time & space complexity analysis.",
        "Rigorous hands-on competitive programming strengthening memory utilization, computational efficiency, and technical interview readiness."
    ],
    image: "/dsa_final.png",
    link: "https://www.geeksforgeeks.org/certificate/a333e50a5c7eee941e226bca32b7a96c"
};

const education = [
    {
        degree: "B.Tech in Computer Science",
        institution: "Lovely Professional University",
        year: "2022 - 2026",
        grade: "CGPA 6.38",
        gradeLabel: "CGPA",
        status: "Completed",
        link: "https://www.lpu.in/",
        accent: "#10B981"
    },
    {
        degree: "Intermediate (PCM)",
        institution: "St. Al-Haneef Educational Centre",
        year: "2020 - 2022",
        grade: "70.4%",
        gradeLabel: "Percentage",
        status: "Completed",
        desc: "Major in Physics, Chemistry, and Mathematics (Science Stream).",
        link: "https://shaheengroup.org/st-al-haneef-educational-centre-varanasi/",
        accent: "#0ea5e9"
    },
    {
        degree: "Matriculation",
        institution: "St. Al-Haneef Educational Centre",
        year: "2018 - 2020",
        grade: "74.5%",
        gradeLabel: "Percentage",
        status: "Completed",
        desc: "Foundation in General Sciences and Mathematics.",
        link: "https://shaheengroup.org/st-al-haneef-educational-centre-varanasi/",
        accent: "#8B5CF6"
    }
];

const Experience = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="education" className="py-12 md:py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-12">

                {/* Section Header */}
                <Reveal>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
                                <GraduationCap className="w-3.5 h-3.5" />
                                Academic Distinction &amp; Qualifications
                            </div>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter">
                                Education &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-400">Specialization</span>
                            </h2>
                        </div>
                        <p className="text-zinc-400 font-light text-base md:text-lg max-w-md leading-relaxed">
                            Computer Science Degree, Algorithm Design Mastery, and verified industry technical credentials.
                        </p>
                    </div>
                </Reveal>

                {/* ========================================================================= */}
                {/* 1. ACADEMIC HIGHLIGHT (50% VISUAL WEIGHT - POWERFUL HERO CARDS) */}
                {/* ========================================================================= */}
                <div className="space-y-8">
                    <Reveal>
                        <div className="flex items-center justify-between border-l-4 border-emerald-500 pl-4 py-1">
                            <div className="flex items-center gap-3">
                                <School className="w-7 h-7 text-emerald-400" />
                                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Academic Degrees</h3>
                            </div>
                        </div>
                    </Reveal>

                    {/* FLAGSHIP B.TECH HERO CARD */}
                    <Reveal width="100%">
                        <motion.div
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="group relative w-full rounded-3xl bg-gradient-to-br from-zinc-900/80 via-zinc-900/40 to-emerald-950/20 border border-emerald-500/30 hover:border-emerald-400/60 p-8 md:p-12 transition-all duration-500 backdrop-blur-2xl shadow-2xl hover:shadow-[0_0_50px_rgba(16,185,129,0.2)] overflow-hidden"
                        >
                            {/* Top Ambient Glow Line */}
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                                {/* Left side: Degree Details (8 Cols) */}
                                <div className="lg:col-span-8 space-y-6">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 rounded-full font-bold uppercase tracking-wider">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                            Completed
                                        </span>
                                        <span className="text-xs font-mono text-zinc-400 bg-zinc-950/80 border border-white/10 px-3.5 py-1 rounded-full flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                                            2022 – 2026
                                        </span>
                                        <span className="text-xs font-mono text-zinc-400 bg-zinc-950/80 border border-white/10 px-3.5 py-1 rounded-full">
                                            Graduation Degree
                                        </span>
                                    </div>

                                    <div>
                                        <h4 className="text-3xl md:text-5xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                                            B.Tech in Computer Science &amp; Engineering
                                        </h4>
                                        <a
                                            href="https://www.lpu.in/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-zinc-300 hover:text-white text-lg font-medium mt-2 transition-colors"
                                        >
                                            <span>Lovely Professional University</span>
                                            <ExternalLink className="w-4 h-4 text-emerald-400" />
                                        </a>
                                    </div>

                                    </div>

                                {/* Right side: Grade Meter Display (4 Cols) */}
                                <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-zinc-950/80 border border-emerald-500/20 shadow-inner text-center">
                                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Final Cumulative Score</span>
                                    <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 tracking-tight">
                                        6.38
                                    </div>
                                    <span className="text-xs font-mono text-emerald-400 font-bold tracking-widest uppercase mt-1">CGPA Grade</span>
                                    <div className="w-full bg-zinc-900 h-2 rounded-full mt-4 overflow-hidden border border-white/5">
                                        <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full w-[63.8%]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Reveal>

                    {/* INTERMEDIATE & MATRICULATION (SECONDARY ACADEMICS) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {education.slice(1).map((item, idx) => (
                            <Reveal key={idx} delay={idx * 0.1} width="100%">
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    transition={{ duration: 0.3 }}
                                    className="group relative p-7 bg-zinc-900/50 border border-white/5 hover:border-cyan-500/40 rounded-3xl backdrop-blur-xl transition-all duration-300 shadow-xl overflow-hidden h-full flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-3 mb-5">
                                            <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full font-bold">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                                Completed
                                            </span>
                                            <span className="text-xs font-mono text-zinc-400 bg-zinc-950/80 border border-white/10 px-3 py-1 rounded-full">
                                                {item.year}
                                            </span>
                                        </div>

                                        <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                            {item.degree}
                                        </h4>

                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white text-sm font-medium transition-colors mb-4"
                                        >
                                            <span>{item.institution}</span>
                                            <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                                        </a>

                                        <p className="text-zinc-500 text-xs font-light leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between">
                                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Aggregate Percentage</span>
                                        <span className="text-base font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-0.5 rounded-lg">
                                            {item.grade}
                                        </span>
                                    </div>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* ========================================================================= */}
                {/* 2. DSA SPECIALIZATION COMMAND CENTER (40% VISUAL WEIGHT) */}
                {/* ========================================================================= */}
                <div className="space-y-8">
                    <Reveal>
                        <div className="flex items-center justify-between border-l-4 border-cyan-500 pl-4 py-1">
                            <div className="flex items-center gap-3">
                                <Terminal className="w-7 h-7 text-cyan-400" />
                                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Structured Training Specialization</h3>
                            </div>
                            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1 rounded-full uppercase tracking-widest font-semibold">
                                Intensive 12-Week Track
                            </span>
                        </div>
                    </Reveal>

                    <Reveal width="100%">
                        <div className="group relative rounded-3xl bg-gradient-to-br from-zinc-900/80 via-zinc-900/50 to-cyan-950/20 border border-cyan-500/30 hover:border-cyan-400/60 p-8 md:p-12 transition-all duration-500 backdrop-blur-2xl shadow-2xl overflow-hidden">
                            {/* Ambient Top Glow Line */}
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                <div className="lg:col-span-8 space-y-6">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1 rounded-full font-bold">
                                            {training.organizer}
                                        </span>
                                        <span className="text-xs font-mono text-zinc-400 bg-zinc-950/60 border border-white/10 px-3 py-1 rounded-full">
                                            {training.period}
                                        </span>
                                    </div>

                                    <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                                        {training.title} Specialization
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                        {training.highlights.map((bullet, bIdx) => (
                                            <div key={bIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-950/60 border border-white/5 text-zinc-300 text-xs md:text-sm font-light leading-relaxed">
                                                <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                                <span>{bullet}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-2">
                                        <a
                                            href={training.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105"
                                        >
                                            <span>Verify GFG Certificate</span>
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                {/* Certificate Interactive Card */}
                                <div className="lg:col-span-4 relative aspect-video rounded-2xl overflow-hidden bg-zinc-950 border border-cyan-500/30 group-hover:border-cyan-400 shadow-2xl">
                                    <img
                                        src={training.image}
                                        alt={training.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* ========================================================================= */}
                {/* 3. HIGH-IMPACT CERTIFICATIONS SHOWCASE (FEATURED CARDS WITH LIGHTBOX) */}
                {/* ========================================================================= */}
                <div id="certificates" className="space-y-8">
                    <Reveal>
                        <div className="flex items-center justify-between border-l-4 border-indigo-500 pl-4 py-1">
                            <div className="flex items-center gap-3">
                                <Award className="w-7 h-7 text-indigo-400" />
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Verified Certifications</h3>
                            </div>
                        </div>
                    </Reveal>

                    {/* High-Impact 3D Card Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, idx) => (
                            <Reveal key={idx} delay={idx * 0.08} width="100%">
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="group relative flex flex-col justify-between p-6 bg-zinc-900/50 border border-white/5 hover:border-indigo-500/40 rounded-3xl backdrop-blur-xl transition-all duration-300 shadow-xl hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] overflow-hidden h-full"
                                    onMouseMove={(e) => {
                                        const { currentTarget, clientX, clientY } = e;
                                        const { left, top } = currentTarget.getBoundingClientRect();
                                        const x = clientX - left;
                                        const y = clientY - top;
                                        currentTarget.style.setProperty("--x", `${x}px`);
                                        currentTarget.style.setProperty("--y", `${y}px`);
                                    }}
                                >
                                    {/* Spotlight hover effect */}
                                    <div
                                        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            background: `radial-gradient(300px circle at var(--x) var(--y), ${cert.color}20, transparent 60%)`
                                        }}
                                    />

                                    <div>
                                        {/* Image Preview with Hover Zoom Icon */}
                                        <div 
                                            onClick={() => setSelectedCert(cert)}
                                            className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 mb-5 group/img cursor-pointer"
                                        >
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                                                <ZoomIn className="w-6 h-6 text-indigo-400" />
                                                <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">Inspect Credential</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between gap-2 mb-3">
                                            <span className="text-xs font-mono text-indigo-400 font-bold bg-indigo-500/10 border border-indigo-500/30 px-3 py-0.5 rounded-full">
                                                {cert.tag}
                                            </span>
                                            <span className="text-xs font-mono text-zinc-400 bg-zinc-950/60 border border-white/5 px-2.5 py-0.5 rounded-md">{cert.date}</span>
                                        </div>

                                        <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors mb-2">
                                            {cert.title}
                                        </h4>

                                        <p className="text-zinc-400 text-xs font-light leading-relaxed mb-4">
                                            {cert.desc}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                        <span className="text-xs font-mono text-zinc-400 font-medium">{cert.provider}</span>
                                        <button
                                            onClick={() => setSelectedCert(cert)}
                                            className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-white font-bold transition-colors"
                                        >
                                            <span>View Full</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>

            </div>

            {/* Credential Lightbox Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full bg-zinc-900 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-950 text-zinc-400 hover:text-white border border-white/10 transition-colors z-20"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs font-mono text-indigo-400 font-bold bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full uppercase tracking-widest">
                                    {selectedCert.tag}
                                </span>
                                <span className="text-xs font-mono text-zinc-400">{selectedCert.provider} • {selectedCert.date}</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{selectedCert.title} Certificate</h3>

                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 mb-6 shadow-2xl">
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="flex justify-end">
                                <a
                                    href={selectedCert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                                >
                                    Open Image in Full Tab
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;
