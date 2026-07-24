import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ShieldCheck, Server, Zap, Globe, Code2, Database, Lock, 
    Brain, Sparkles, Layers, Package, Network, BarChart2, 
    QrCode, ExternalLink, ArrowUpRight, Search, CheckCircle2 
} from 'lucide-react';

// Tech SVG Icons
const Icons = {
    React: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#61DAFB]">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="none" />
            <ellipse rx="10" ry="4.5" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.5" />
            <ellipse rx="10" ry="4.5" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth="1.5" />
            <ellipse rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
    ),
    Tailwind: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#38B2AC]">
            <path d="M18.5 4.5C18.5 4.5 15.5 8 15.5 11C15.5 13.5 17 14.5 18 15.5C19.5 17 21 17.5 21 19.5C21 21.5 18.5 22.5 16.5 22.5C14.5 22.5 12.5 21 11.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.5 4.5C10.5 4.5 7.5 8 7.5 11C7.5 13.5 9 14.5 10 15.5C11.5 17 13 17.5 13 19.5C13 21.5 10.5 22.5 8.5 22.5C6.5 22.5 4.5 21 3.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Java: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#E76F00]">
            <path d="M4.5 19C4.5 19 8 22 12 22C16 22 19.5 19 19.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 19C12 19 7 16 7 13C7 10 12 8 12 8C12 8 17 10 17 13C17 16 12 19 12 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 4L12 2L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Spring: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#6DB33F]">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 12C8 12 10 8 12 8C14 8 16 10 15 14C14 18 8 16 8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    MySQL: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#4479A1]">
            <path d="M12 3C7 3 3 5 3 7.5C3 10 7 12 12 12C17 12 21 10 21 7.5C21 5 17 3 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 7.5V11.5C3 14 7 16 12 16C17 16 21 14 21 11.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 11.5V16.5C3 19 7 21 12 21C17 21 21 19 21 16.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    JavaScript: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#F7DF1E]">
            <path d="M4 2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 17v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 17v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Vite: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#646CFF]">
            <path d="M12 2L2 7l10 15L22 7l-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
};

const projectsData = [
    {
        id: "ecoquest-java",
        title: "ECOQUEST - JAVA FULL STACK",
        category: "Gamified EdTech",
        type: "java",
        badge: "Featured Enterprise",
        description: "EcoQuest is a gamified environmental education platform built for students and teachers. It empowers students to take real-world civic actions (planting trees, recycling, saving water) and rewards them with XP, leveling up their 'Eco-Warrior' status.",
        tech: [
            { name: "React 18", icon: Icons.React },
            { name: "Tailwind CSS", icon: Icons.Tailwind },
            { name: "React Router", icon: <Globe className="w-4 h-4 text-blue-400" /> },
            { name: "Lucide React", icon: <Zap className="w-4 h-4 text-pink-400" /> },
            { name: "Axios", icon: <Network className="w-4 h-4 text-indigo-400" /> },
            { name: "Java 17+", icon: Icons.Java },
            { name: "Spring Boot", icon: Icons.Spring },
            { name: "Spring Data JPA", icon: <Database className="w-4 h-4 text-orange-400" /> },
            { name: "Spring Security", icon: <ShieldCheck className="w-4 h-4 text-rose-400" /> },
            { name: "MySQL 8.0", icon: Icons.MySQL },
            { name: "Maven", icon: <Package className="w-4 h-4 text-red-400" /> }
        ],
        links: { github: "https://github.com/chandangupta7143/ECOQUEST", demo: "https://ecoquest-jy5g.vercel.app/" },
        image: "/ecoquest-java.png",
        accent: "#10B981"
    },
    {
        id: "food-delivery",
        title: "Smart Food Delivery Platform",
        category: "Full Stack & Micro-components",
        type: "java",
        badge: "Full-Stack Platform",
        description: "Built a production-grade full-stack food delivery platform featuring intelligent restaurant discovery, dynamic pricing, secure order lifecycle management, fraud detection, personalized recommendations, geospatial search, and live delivery tracking.",
        tech: [
            { name: "Spring Boot", icon: Icons.Spring },
            { name: "Spring Security", icon: <ShieldCheck className="w-4 h-4 text-rose-400" /> },
            { name: "Spring Data MongoDB", icon: <Database className="w-4 h-4 text-emerald-400" /> },
            { name: "MongoDB", icon: <Database className="w-4 h-4 text-green-500" /> },
            { name: "Redis", icon: <Zap className="w-4 h-4 text-red-500" /> },
            { name: "JWT Auth", icon: <Lock className="w-4 h-4 text-amber-400" /> },
            { name: "React.js", icon: Icons.React },
            { name: "Tailwind CSS", icon: Icons.Tailwind },
            { name: "REST APIs", icon: <Server className="w-4 h-4 text-indigo-400" /> },
            { name: "Docker", icon: <Package className="w-4 h-4 text-blue-400" /> },
            { name: "WebSockets", icon: <Network className="w-4 h-4 text-cyan-400" /> }
        ],
        links: { github: "https://github.com/chandangupta7143/food-delivery-backend", demo: "#" },
        image: "/food-delivery-comingsoon.png",
        comingSoon: true,
        accent: "#F59E0B"
    },
    {
        id: "ecoquest-mern",
        title: "ECOQUEST - MERN",
        category: "MERN Platform",
        type: "mern",
        badge: "Full Stack MERN",
        description: "A full-stack gamified environmental learning platform where students complete eco-challenges, participate in quizzes, earn XP points, climb leaderboards, and track their real-world environmental impact.",
        tech: [
            { name: "MongoDB", icon: <Database className="w-4 h-4 text-green-500" /> },
            { name: "Express.js", icon: <Server className="w-4 h-4 text-gray-400" /> },
            { name: "React", icon: Icons.React },
            { name: "Node.js", icon: <Layers className="w-4 h-4 text-green-400" /> },
            { name: "Vite", icon: Icons.Vite },
            { name: "TailwindCSS", icon: Icons.Tailwind },
            { name: "Docker", icon: <Package className="w-4 h-4 text-blue-400" /> }
        ],
        links: { github: "https://github.com/chandangupta7143/ECOQUEST-MERN", demo: "https://ecoquest-pearl.vercel.app/" },
        image: "/Ecoquest.png",
        accent: "#3B82F6"
    },
    {
        id: "smartbank",
        title: "SmartBank Hub",
        category: "Fintech Platform",
        type: "java",
        badge: "Fintech Engine",
        description: "Architected a high-performance banking portal using React and Spring Boot. Features secure user onboarding, real-time dashboards, transaction agent simulators, and QR code integration.",
        tech: [
            { name: "React", icon: Icons.React },
            { name: "Tailwind", icon: Icons.Tailwind },
            { name: "Axios", icon: <Network className="w-4 h-4 text-indigo-400" /> },
            { name: "Java", icon: Icons.Java },
            { name: "Spring Boot", icon: Icons.Spring },
            { name: "Spring MVC", icon: <Layers className="w-4 h-4 text-[#6DB33F]" /> },
            { name: "Spring Security", icon: <ShieldCheck className="w-4 h-4 text-rose-400" /> },
            { name: "Hibernate/JPA", icon: <Database className="w-4 h-4 text-orange-400" /> },
            { name: "REST API", icon: <Server className="w-4 h-4 text-emerald-400" /> },
            { name: "MySQL", icon: Icons.MySQL },
            { name: "JWT", icon: <Lock className="w-4 h-4 text-amber-400" /> },
            { name: "Maven", icon: <Package className="w-4 h-4 text-red-400" /> },
            { name: "QR Integration", icon: <QrCode className="w-4 h-4 text-cyan-400" /> }
        ],
        links: { github: "https://github.com/chandangupta7143/SmartBank-Hub", demo: "#" },
        image: "/SmartBAnkhHUb.png",
        accent: "#6366F1"
    },
    {
        id: "portfolio",
        title: "Advanced Portfolio",
        category: "Creative Dev",
        type: "frontend",
        badge: "Interactive Portfolio",
        description: "Engineered a modern, responsive portfolio platform using React (SPA) and Framer Motion for smooth animations. Designed to showcase projects and skills with an elite, SEO-optimized structure.",
        tech: [
            { name: "React", icon: Icons.React },
            { name: "JavaScript", icon: Icons.JavaScript },
            { name: "Motion", icon: <Zap className="w-4 h-4 text-yellow-400" /> },
            { name: "Tailwind v4", icon: Icons.Tailwind },
            { name: "Vite", icon: Icons.Vite }
        ],
        links: { github: "https://github.com/chandangupta7143/Chandan-Portfolio", demo: "https://chandan-portfolio-theta.vercel.app/" },
        image: "/project_portfolio.png",
        accent: "#A855F7"
    }
];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filterPills = [
        { id: "all", label: "All Works" },
        { id: "java", label: "Java & Spring Boot" },
        { id: "mern", label: "MERN Stack" },
        { id: "frontend", label: "Creative Frontend" }
    ];

    const filteredProjects = projectsData.filter((project) => {
        const matchesFilter = activeFilter === "all" || project.type === activeFilter;
        const matchesSearch = searchQuery.trim() === "" || 
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tech.some(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesFilter && matchesSearch;
    });

    return (
        <section id="projects" className="py-12 md:py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

                {/* Section Header */}
                <Reveal>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono tracking-widest uppercase mb-4">
                                <Sparkles className="w-3.5 h-3.5" />
                                Featured Engineering Works
                            </div>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter">
                                Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">Projects</span>
                            </h2>
                        </div>

                        <p className="text-zinc-400 font-light text-base md:text-lg max-w-md leading-relaxed">
                            A showcase of production-ready full-stack applications, microservices, fintech portals, and gamified platforms.
                        </p>
                    </div>
                </Reveal>

                {/* Filter & Search Bar */}
                <Reveal delay={0.1}>
                    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-16">
                        {/* Filter Buttons */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
                            {filterPills.map((pill) => (
                                <button
                                    key={pill.id}
                                    onClick={() => setActiveFilter(pill.id)}
                                    className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                                        activeFilter === pill.id
                                            ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] font-semibold scale-105"
                                            : "bg-zinc-900/60 border border-white/5 text-zinc-400 hover:text-white hover:border-white/10 hover:bg-zinc-900"
                                    }`}
                                >
                                    {pill.label}
                                </button>
                            ))}
                        </div>

                        {/* Search Input */}
                        <div className="relative shrink-0 w-full lg:w-72">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search by tech or keyword..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-zinc-900/80 border border-white/10 rounded-xl text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                            />
                        </div>
                    </div>
                </Reveal>

                {/* Projects Grid */}
                <div className="space-y-16 md:space-y-24">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="group relative w-full"
                            >
                                <div 
                                    className="relative w-full rounded-3xl bg-zinc-900/40 border border-white/5 group-hover:border-indigo-500/30 p-6 md:p-10 lg:p-12 transition-all duration-500 backdrop-blur-xl overflow-hidden shadow-2xl hover:shadow-[0_0_50px_rgba(99,102,241,0.15)]"
                                    onMouseMove={(e) => {
                                        const { currentTarget, clientX, clientY } = e;
                                        const { left, top } = currentTarget.getBoundingClientRect();
                                        const x = clientX - left;
                                        const y = clientY - top;
                                        currentTarget.style.setProperty("--x", `${x}px`);
                                        currentTarget.style.setProperty("--y", `${y}px`);
                                    }}
                                >
                                    {/* Spotlight Hover Radial */}
                                    <div
                                        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: `radial-gradient(600px circle at var(--x) var(--y), ${project.accent}15, transparent 60%)`
                                        }}
                                    />

                                    {/* Background Watermark Index */}
                                    <span className="absolute top-4 right-8 text-[6rem] md:text-[10rem] font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors select-none pointer-events-none font-mono">
                                        0{index + 1}
                                    </span>

                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

                                        {/* Left Side: Content & Badges (7 Columns) */}
                                        <div className="lg:col-span-7 flex flex-col justify-between">
                                            <div>
                                                {/* Header Category & Badges */}
                                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                                    <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 rounded-full font-bold">
                                                        {project.category}
                                                    </span>

                                                    <span className="text-xs font-mono tracking-wider uppercase text-zinc-400 border border-white/10 bg-zinc-950/60 px-3 py-1 rounded-full">
                                                        {project.badge}
                                                    </span>

                                                    {project.comingSoon && (
                                                        <span className="flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-amber-400 border border-amber-500/30 bg-amber-500/10 px-3 py-1 rounded-full animate-pulse font-semibold">
                                                            <Sparkles className="w-3 h-3 text-amber-400" />
                                                            Coming Soon
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all duration-300">
                                                    {project.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 font-light max-w-2xl">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* Tech Stack Pills */}
                                            <div className="flex flex-wrap gap-2.5 mb-8">
                                                {project.tech.map((t, i) => (
                                                    <span 
                                                        key={i} 
                                                        className="flex items-center gap-2 px-3.5 py-1.5 bg-zinc-950/80 border border-white/5 rounded-xl text-xs md:text-sm text-zinc-300 font-mono hover:border-cyan-500/40 hover:text-white transition-all duration-300 shadow-sm"
                                                    >
                                                        {t.icon}
                                                        <span>{t.name}</span>
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Action Links */}
                                            <div className="flex flex-wrap gap-4 pt-2">
                                                {project.links.demo && (
                                                    <a
                                                        href={project.links.demo}
                                                        target={project.links.demo === '#' ? '' : "_blank"}
                                                        rel={project.links.demo === '#' ? '' : "noopener noreferrer"}
                                                        onClick={(e) => project.links.demo === '#' && e.preventDefault()}
                                                        className={`group/btn relative px-6 py-3 rounded-xl flex items-center gap-2.5 text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                                                            project.links.demo === '#' 
                                                                ? 'bg-zinc-900/60 text-zinc-600 border border-white/5 cursor-not-allowed' 
                                                                : 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105'
                                                        }`}
                                                    >
                                                        <span>Live Demo</span>
                                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                                    </a>
                                                )}

                                                <a
                                                    href={project.links.github}
                                                    target={project.links.github === '#' ? '' : "_blank"}
                                                    rel={project.links.github === '#' ? '' : "noopener noreferrer"}
                                                    onClick={(e) => project.links.github === '#' && e.preventDefault()}
                                                    className={`group/btn relative px-6 py-3 rounded-xl flex items-center gap-2.5 text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                                                        project.links.github === '#' 
                                                            ? 'bg-zinc-900/60 text-zinc-600 border border-white/5 cursor-not-allowed' 
                                                            : 'bg-zinc-950 border border-white/10 text-zinc-200 hover:text-white hover:border-cyan-500/40 hover:bg-zinc-900 shadow-md'
                                                    }`}
                                                >
                                                    <span>Source Code</span>
                                                    <Code2 className="w-4 h-4 text-cyan-400 transition-transform group-hover/btn:rotate-12" />
                                                </a>
                                            </div>
                                        </div>

                                        {/* Right Side: Screenshot Card Showcase (5 Columns) */}
                                        <div className="lg:col-span-5 relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 group-hover:border-cyan-500/40 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]">
                                            {project.comingSoon ? (
                                                /* Coming Soon Screenshot Placeholder */
                                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-amber-950/30 via-zinc-950 to-indigo-950/30">
                                                    <div className="relative mb-3">
                                                        <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl animate-pulse" />
                                                        <Sparkles className="relative w-12 h-12 text-amber-400" />
                                                    </div>
                                                    <h4 className="text-white font-bold text-base tracking-wide">Screenshots &amp; Demo</h4>
                                                    <p className="text-amber-400/80 font-mono text-xs tracking-wider mt-1">In Final QA Review • Coming Soon</p>
                                                </div>
                                            ) : (
                                                /* Project Image */
                                                <div className="relative w-full h-full overflow-hidden group/img">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default Projects;
