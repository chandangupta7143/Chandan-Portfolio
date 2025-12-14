import React from 'react';
import { Reveal } from '../components/Reveal';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, ExternalLink, Calendar, School } from 'lucide-react';

const certifications = [
    { title: "Web Development", provider: "LinkedIn Learning", date: "2023", image: "/webd.png", link: "/webd.png" },
    { title: "Java Programming", provider: "Techvanto Academy", date: "2024", image: "/JAVA.png", link: "/JAVA.png" },
    { title: "C++ Programming", provider: "Coursera", date: "2023", image: "/cpp_final.png", link: "/cpp_final.png" },
    { title: "Cloud Computing", provider: "NPTEL", date: "2023", image: "/NPTEL.png", link: "/NPTEL.png" },
    { title: "CompTIA Linux+ XKO-005", provider: "Cybrary", date: "2024", image: "/linux.png", link: "/linux.png" },
    { title: "Ethical Hacking", provider: "EC-Council", date: "2024", image: "/EHE.png", link: "/EHE.png" }
];

const training = [
    {
        title: "Data Structures and Algorithms",
        organizer: "GEEKSFORGEEKS",
        period: "Jun - Jul '24",
        desc: [
            "Completed a 12-week structured training program on Data Structures and Algorithms (DSA) conducted by GeeksforGeeks (GFG), focusing on algorithmic problem solving and computational efficiency.",
            "The training covered linear and non-linear data structures, including Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Binary Search Trees, Heaps, and Hashing, along with core algorithmic paradigms such as Sorting, Searching, and Recursion.",
            "Emphasis was placed on time and space complexity analysis (Big-O notation), optimized algorithm design, and coding practices aligned with technical interview standards.",
            "Hands-on problem solving strengthened understanding of data organization, memory utilization, and performance trade-offs in software systems."
        ],
        image: "/dsa_final.png",
        link: "https://www.geeksforgeeks.org/certificate/a333e50a5c7eee941e226bca32b7a96c"
    }
];

const education = [
    {
        degree: "B.Tech in Computer Science",
        institution: "Lovely Professional University",
        year: "2022 - Present",
        grade: "CGPA 6.05",
        gradeLabel: "CGPA",
        status: "Pursuing",

        link: "https://www.lpu.in/",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20"
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
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
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
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    }
];

const SectionHeader = ({ title, bgText }) => (
    <div className="relative mb-12 md:mb-20">
        <h2 className="text-[3rem] md:text-[8rem] font-bold text-zinc-900 absolute -top-4 md:-top-16 left-0 opacity-50 select-none pointer-events-none -z-10">
            {bgText}
        </h2>
        <div className="flex items-center gap-4">
            <div className="h-px w-8 md:w-12 bg-indigo-500"></div>
            <h3 className="text-2xl md:text-5xl font-bold text-zinc-100 uppercase tracking-tight">
                {title}
            </h3>
        </div>
    </div>
);

const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-32 relative overflow-hidden">

            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 space-y-20 md:space-y-40 relative z-10">

                {/* --- EDUCATION SECTION (HYPER-HOLOGRAPHIC) --- */}
                <div id="education">
                    <Reveal>
                        <SectionHeader title="Education" bgText="ACADEMIC" />
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {education.map((edu, i) => (
                            <Reveal key={i} delay={i * 0.1} width="100%" className="h-full">
                                <div
                                    className="group relative h-full rounded-2xl bg-zinc-900/40 border border-white/5 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] backdrop-blur-md"
                                    onMouseMove={(e) => {
                                        const { currentTarget, clientX, clientY } = e;
                                        const { left, top } = currentTarget.getBoundingClientRect();
                                        const x = clientX - left;
                                        const y = clientY - top;
                                        currentTarget.style.setProperty("--x", `${x}px`);
                                        currentTarget.style.setProperty("--y", `${y}px`);
                                        currentTarget.style.setProperty("--opacity", "1");
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.setProperty("--opacity", "0");
                                    }}
                                >
                                    {/* Mouse-Tracking Spotlight (Aurora Effect) */}
                                    <div
                                        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-0"
                                        style={{
                                            opacity: 'var(--opacity, 0)',
                                            background: `radial-gradient(800px circle at var(--x) var(--y), rgba(99, 102, 241, 0.15), transparent 40%)`
                                        }}
                                    />

                                    {/* Prismatic Border Glow */}
                                    <div
                                        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-10"
                                        style={{
                                            opacity: 'var(--opacity, 0)',
                                            background: `radial-gradient(600px circle at var(--x) var(--y), rgba(168, 85, 247, 0.4), transparent 40%)`,
                                            maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
                                            maskClip: 'content-box, border-box',
                                            maskComposite: 'exclude',
                                            padding: '1.5px',
                                            borderRadius: 'inherit'
                                        }}
                                    />

                                    <div className="relative z-20 p-6 md:p-8 flex flex-col h-full justify-between gap-6 md:gap-8 bg-transparent">

                                        {/* Top Rail: Status & Date */}
                                        <div className="flex items-center justify-between">
                                            <div className={`
                                                relative px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] 
                                                border border-white/5 bg-zinc-950/50 overflow-hidden group-hover:border-indigo-500/30 transition-all duration-500 shadow-inner
                                            `}>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                                <span className={`${edu.color} relative z-10 drop-shadow-md`}>{edu.status}</span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="h-px w-8 bg-gradient-to-r from-transparent to-zinc-700 group-hover:to-indigo-500/50 transition-colors" />
                                                <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-indigo-300 transition-colors duration-300">
                                                    {edu.year}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Main Content */}
                                        <div>
                                            <a href={edu.link} target="_blank" rel="noreferrer" className="block group/title">
                                                <h4 className="text-2xl md:text-3xl font-black text-zinc-100 mb-4 leading-none group-hover/title:text-indigo-300 transition-colors drop-shadow-lg">
                                                    {edu.degree}
                                                </h4>
                                            </a>

                                            <a href={edu.link} target="_blank" rel="noreferrer" className="group/link flex items-center gap-3 w-fit">
                                                <div className="p-2 rounded-lg bg-zinc-950 border border-white/5 text-zinc-400 group-hover/link:bg-indigo-500 group-hover/link:text-white group-hover/link:border-indigo-400 transition-all duration-300 shadow-lg">
                                                    <School className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm text-zinc-400 font-bold tracking-wide group-hover/link:text-indigo-300 transition-colors border-b border-transparent group-hover/link:border-indigo-500/30 pb-0.5">
                                                    {edu.institution}
                                                </span>
                                            </a>
                                        </div>

                                        {/* Bottom Rail: Grade & Action */}
                                        <div className="pt-6 border-t border-white/5 flex items-end justify-between">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-600">{edu.gradeLabel}</span>
                                                <div className="flex items-center gap-2">
                                                    <Award className="w-4 h-4 text-indigo-500 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                                                    <span className="text-xl font-black text-white tracking-tight">{edu.grade}</span>
                                                </div>
                                            </div>

                                            <a href={edu.link} target="_blank" rel="noreferrer" className="relative group/btn cursor-pointer">
                                                <div className="absolute -inset-3 bg-indigo-500/20 rounded-full opacity-0 group-hover/btn:opacity-100 blur-lg transition-opacity duration-500" />
                                                <div className="w-10 h-10 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-zinc-400 group-hover/btn:text-white group-hover/btn:border-indigo-400 group-hover/btn:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 relative z-10">
                                                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-45" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* --- CREDENTIALS (HYPER-HOLOGRAPHIC QUANTUM TIER) --- */}
                <div id="certificates">
                    <Reveal>
                        <SectionHeader title="Credentials" bgText="CERTIF." />
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {certifications.map((cert, i) => (
                            <Reveal key={i} delay={i * 0.1} width="100%">
                                <div
                                    className="group relative w-full bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] backdrop-blur-md"
                                    onMouseMove={(e) => {
                                        const { currentTarget, clientX, clientY } = e;
                                        const { left, top } = currentTarget.getBoundingClientRect();
                                        const x = clientX - left;
                                        const y = clientY - top;
                                        currentTarget.style.setProperty("--x", `${x}px`);
                                        currentTarget.style.setProperty("--y", `${y}px`);
                                        currentTarget.style.setProperty("--opacity", "1");
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.setProperty("--opacity", "0");
                                    }}
                                >

                                    {/* Mouse-Tracking Spotlight (Aurora Effect) */}
                                    <div
                                        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-0"
                                        style={{
                                            opacity: 'var(--opacity, 0)',
                                            background: `radial-gradient(800px circle at var(--x) var(--y), rgba(99, 102, 241, 0.15), transparent 40%)`
                                        }}
                                    />

                                    {/* Prismatic Border Glow */}
                                    <div
                                        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-10"
                                        style={{
                                            opacity: 'var(--opacity, 0)',
                                            background: `radial-gradient(600px circle at var(--x) var(--y), rgba(168, 85, 247, 0.4), transparent 40%)`,
                                            maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
                                            maskClip: 'content-box, border-box',
                                            maskComposite: 'exclude',
                                            padding: '1.5px',
                                            borderRadius: 'inherit'
                                        }}
                                    />

                                    <div className="flex flex-col sm:flex-row h-full relative z-20">
                                        {/* Image/Preview Column */}
                                        <div className="relative w-full sm:w-52 h-52 sm:h-auto shrink-0 bg-zinc-950/50 border-b sm:border-b-0 sm:border-r border-white/5 overflow-hidden group/image">
                                            {/* Image */}
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />

                                            {/* Fallback */}
                                            <div className="absolute inset-0 hidden flex-col items-center justify-center bg-zinc-900/80 p-4 text-center">
                                                <Award className="w-8 h-8 text-zinc-600 mb-2" />
                                                <span className="text-[10px] font-mono uppercase text-zinc-600">No Preview</span>
                                            </div>

                                            {/* Holographic Sheen on Image */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        {/* Content Column */}
                                        <div className="flex-1 p-6 flex flex-col justify-between gap-4 relative bg-transparent">
                                            {/* Watermark Logo */}
                                            <Award className="absolute right-[-20px] top-[-20px] w-40 h-40 text-indigo-500/5 rotate-12 pointer-events-none transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110" />

                                            <div className="relative z-10">
                                                {/* Badge Row */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-2">
                                                        <div className="px-3 py-1 rounded-full bg-zinc-950 border border-indigo-500/30 text-indigo-300 flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.15)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-500">
                                                            <div className="relative flex h-2 w-2">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
                                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                                            </div>
                                                            <span className="text-[10px] font-black uppercase tracking-wider">Verified ID</span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest bg-zinc-950/50 px-3 py-1 rounded-full border border-white/5">{cert.date}</span>
                                                </div>

                                                {/* Title */}
                                                <h4 className="text-xl md:text-2xl font-bold text-zinc-100 mb-2 group-hover:text-white transition-colors leading-tight drop-shadow-lg">
                                                    {cert.title}
                                                </h4>

                                                {/* Provider */}
                                                <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono tracking-wide">
                                                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                                                    <span className="uppercase font-bold">{cert.provider}</span>
                                                </div>
                                            </div>

                                            {/* Bottom Action Area - Cleanest Possible */}
                                            <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-end">
                                                <a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/btn relative flex items-center gap-3 px-5 py-2.5 bg-zinc-950 hover:bg-white text-zinc-400 hover:text-zinc-950 text-xs font-black uppercase tracking-wider rounded-lg border border-white/10 hover:border-white transition-all duration-300 shadow-lg overflow-hidden"
                                                >
                                                    <span className="relative z-10">View Certificate</span>
                                                    <ExternalLink className="w-3.5 h-3.5 relative z-10 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />

                                                    {/* Hover Swipe Effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* --- TRAINING SECTION (CLASSIFIED DOSSIER) --- */}
                <div id="training">
                    <Reveal>
                        <SectionHeader title="Training" bgText="TRAIN" />
                    </Reveal>

                    <div className="relative group perspective-1000">
                        <div
                            className="relative bg-zinc-900/40 border border-white/5 rounded-3xl p-6 md:p-8 lg:p-12 overflow-hidden hover:border-indigo-500/30 transition-all duration-700 backdrop-blur-md"
                        >

                            {training.map((t, i) => (
                                <div key={i} className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">

                                    {/* Left Column: Mission Brief */}
                                    <div className="lg:col-span-7 flex flex-col gap-8">

                                        {/* Header Block */}
                                        <div className="border-b border-white/5 pb-8 relative">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="h-12 w-12 rounded-xl bg-zinc-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                                                    <BookOpen className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <span className="text-indigo-400 font-mono text-xs tracking-[0.2em] uppercase font-bold mb-1 block">Training Authority</span>
                                                    <span className="text-zinc-300 font-bold text-lg tracking-wide">{t.organizer}</span>
                                                </div>
                                            </div>

                                            <h3 className="text-4xl md:text-5xl font-black text-white mb-2 leading-none tracking-tight drop-shadow-xl group-hover:text-indigo-100 transition-colors">
                                                {t.title}
                                            </h3>
                                        </div>

                                        {/* Mission Details */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest ">
                                                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                                                Program Modules
                                            </div>

                                            <div className="text-zinc-400 leading-relaxed text-sm md:text-base space-y-4 font-light tracking-wide">
                                                {Array.isArray(t.desc) ? (
                                                    t.desc.map((paragraph, idx) => (
                                                        <p key={idx} className="border-l border-white/5 pl-4 hover:border-indigo-500/50 transition-colors duration-300">
                                                            {paragraph}
                                                        </p>
                                                    ))
                                                ) : (
                                                    <p>{t.desc}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Visual Intel */}
                                    <div className="lg:col-span-5 flex flex-col gap-6 ">

                                        {/* Date/Period Badge - Professional & Clean */}
                                        <div className="flex items-center justify-end">
                                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-950/50 border border-white/10 shadow-sm backdrop-blur-sm">
                                                <div className="p-1.5 rounded-full bg-emerald-500/10 text-emerald-400">
                                                    <Calendar className="w-4 h-4" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 leading-none mb-0.5">Timeline</span>
                                                    <span className="text-sm font-medium text-zinc-200 tracking-wide">
                                                        {t.period}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Holographic Certificate Projection */}
                                        {t.image && (
                                            <div className="relative group/cert mt-4">
                                                <div className="absolute -inset-4 bg-emerald-500/10 rounded-2xl blur-xl opacity-0 group-hover/cert:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                                <a
                                                    href={t.image}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="relative block w-full rounded-2xl overflow-hidden border border-white/10 group-hover/cert:border-emerald-500/50 transition-all duration-500 shadow-2xl bg-zinc-950 z-10"
                                                >
                                                    <img
                                                        src={t.image}
                                                        alt="Classified Document"
                                                        className="w-full h-auto object-cover opacity-80 group-hover/cert:opacity-100 group-hover/cert:scale-105 transition-all duration-700"
                                                    />

                                                    {/* Screen Glitch Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 via-transparent to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                                    {/* View Text */}
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/cert:opacity-100 transition-all duration-300 pointer-events-none">
                                                        <span className="px-6 py-3 bg-zinc-950/90 rounded-full border border-emerald-500 text-emerald-400 text-xs font-black uppercase tracking-widest backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] transform translate-y-4 group-hover/cert:translate-y-0 transition-transform">
                                                            Access Document
                                                        </span>
                                                    </div>
                                                </a>

                                                {/* Action Buttons */}
                                                <div className="grid grid-cols-1 pt-6 relative z-20">
                                                    <a
                                                        href={t.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full flex items-center justify-between px-6 py-4 bg-zinc-900 border border-white/5 rounded-xl hover:bg-zinc-800 hover:border-emerald-500/40 transition-all duration-300 group/verify shadow-lg"
                                                    >
                                                        <span className="flex items-center gap-3">
                                                            <div className="relative flex h-2.5 w-2.5">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-500"></span>
                                                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                                            </div>
                                                            <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest group-hover/verify:text-white transition-colors">
                                                                Live Verification
                                                            </span>
                                                        </span>
                                                        <ExternalLink className="w-4 h-4 text-zinc-500 group-hover/verify:text-emerald-400 transition-colors" />
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div >

            </div >
        </section >
    );
};

export default Experience;
