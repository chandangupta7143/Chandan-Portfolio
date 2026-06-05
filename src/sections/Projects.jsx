import React from 'react';
import { Reveal } from '../components/Reveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Server, Zap, Globe, Code2, Database, Lock, Brain, Sparkles, Layers, Package, Network, BarChart2, QrCode, Users, GitBranch } from 'lucide-react';

// Icons
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

const projects = [
    {
        title: "ECOQUEST - JAVA FULL STACK",
        category: "Gamified EdTech",
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
        color: "from-emerald-900 to-teal-900"
    },
    {
        title: "ECOQUEST - MERN",
        category: "MERN Platform",
        description: "A full-stack gamified environmental learning platform where students complete eco-challenges, participate in quizzes, earn XP points, climb leaderboards, and track their real-world environmental impact. Teachers can create challenges, manage quizzes, review submissions, monitor analytics, and track student progress.",
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
        color: "from-emerald-900 to-teal-900"
    },
    {
        title: "Expense Tracker",
        category: "Fintech Platform",
        description: "A full-stack AI-powered expense management platform that auto-categorizes spending, generates smart financial insights, and visualizes real-time analytics through interactive dashboards — helping users predict budgets and build smarter financial habits.",
        tech: [
            { name: "React", icon: Icons.React },
            { name: "Tailwind", icon: Icons.Tailwind },
            { name: "JavaScript", icon: Icons.JavaScript },
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
            { name: "AI Insights", icon: <Brain className="w-4 h-4 text-violet-400" /> },
            { name: "Analytics", icon: <BarChart2 className="w-4 h-4 text-purple-400" /> }
        ],
        links: { github: "#", demo: "#" },
        image: "/ai-expense-tracker.png",
        color: "from-violet-900 to-purple-900",
        comingSoon: true
    },
    {
        title: "SmartBank Hub",
        category: "Fintech Platform",
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
            { name: "QR Integration", icon: <QrCode className="w-4 h-4 text-cyan-400" /> },
            { name: "MVC Pattern", icon: <GitBranch className="w-4 h-4 text-zinc-400" /> }
        ],
        links: { github: "https://github.com/chandangupta7143/SmartBank-Hub", demo: "#" },
        image: "/SmartBAnkhHUb.png",
        color: "from-indigo-900 to-blue-900"
    },
    {
        title: "Advanced Portfolio",
        category: "Creative Dev",
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
        color: "from-purple-900 to-fuchsia-900"
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <Reveal width="100%">
            <div className={`group relative w-full py-12 md:py-20 transition-all duration-500 hover:bg-zinc-900/20`}>

                {/* Large Watermark Number */}
                <span className="absolute top-0 right-0 text-[6rem] md:text-[12rem] font-bold text-zinc-900/50 select-none pointer-events-none leading-none -translate-y-1/4 translate-x-4 md:translate-x-12 group-hover:text-zinc-800/50 transition-colors duration-700">
                    0{index + 1}
                </span>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">

                    {/* Content */}
                    <div className="order-1 lg:order-1">


                        <div className="flex items-center gap-3 mb-5">
                            <span className="text-xs font-mono tracking-widest uppercase text-zinc-500 border border-zinc-800 px-3 py-1 rounded-full">
                                {project.category}
                            </span>
                            {project.comingSoon && (
                                <span className="flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-violet-400 border border-violet-500/30 bg-violet-500/10 px-3 py-1 rounded-full animate-pulse">
                                    <Sparkles className="w-3 h-3" />
                                    Coming Soon
                                </span>
                            )}
                        </div>

                        <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold text-zinc-100 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-500">
                            {project.title}
                        </h3>

                        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-8">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-10">
                            {project.tech.map((t, i) => (
                                <span key={i} className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg text-sm text-zinc-400 font-mono hover:text-zinc-200 hover:border-indigo-500/30 transition-colors duration-300">
                                    {t.icon}
                                    <span>{t.name}</span>
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            {project.links.demo && (
                                <a
                                    href={project.links.demo}
                                    target={project.links.demo === '#' ? '' : "_blank"}
                                    rel={project.links.demo === '#' ? '' : "noopener noreferrer"}
                                    onClick={(e) => project.links.demo === '#' && e.preventDefault()}
                                    className={`group/btn relative p-[1px] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)] ${project.links.demo === '#' ? 'cursor-default opacity-50 hover:scale-100 hover:shadow-none' : ''}`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 group-hover/btn:from-indigo-500 group-hover/btn:via-purple-500 group-hover/btn:to-pink-500 transition-all duration-500 opacity-70 group-hover/btn:opacity-100" />
                                    <div className="relative h-full w-full px-8 py-4 bg-zinc-950 rounded-full flex items-center justify-center transition-colors duration-300 group-hover/btn:bg-zinc-900">
                                        <span className="relative flex items-center gap-3 font-bold text-sm tracking-widest uppercase text-zinc-400 group-hover/btn:text-white transition-colors duration-300">
                                            Live Demo
                                            <Globe className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12 group-hover/btn:text-indigo-400" />
                                        </span>
                                    </div>
                                </a>
                            )}
                            <a
                                href={project.links.github}
                                target={project.links.github === '#' ? '' : "_blank"}
                                rel={project.links.github === '#' ? '' : "noopener noreferrer"}
                                onClick={(e) => project.links.github === '#' && e.preventDefault()}
                                className={`group/btn relative p-[1px] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)] ${project.links.github === '#' ? 'cursor-default opacity-50 hover:scale-100 hover:shadow-none' : ''}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 group-hover/btn:from-indigo-500 group-hover/btn:via-purple-500 group-hover/btn:to-pink-500 transition-all duration-500 opacity-70 group-hover/btn:opacity-100" />
                                <div className="relative h-full w-full px-8 py-4 bg-zinc-950 rounded-full flex items-center justify-center transition-colors duration-300 group-hover/btn:bg-zinc-900">
                                    <span className="relative flex items-center gap-3 font-bold text-sm tracking-widest uppercase text-zinc-400 group-hover/btn:text-white transition-colors duration-300">
                                        Source Code
                                        <Code2 className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12 group-hover/btn:text-indigo-400" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Visual / Screenshot */}
                    <div className="order-2 lg:order-2 relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-indigo-500/30 transition-all duration-500 group-hover:shadow-2xl hover:scale-[1.02]">
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-700`}></div>

                        {project.comingSoon ? (
                            /* Coming Soon Placeholder */
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-violet-950/40 via-zinc-900/60 to-purple-950/40">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-xl animate-pulse" />
                                    <Brain className="relative w-12 h-12 text-violet-400 opacity-80" />
                                </div>
                                <div className="text-center">
                                    <p className="text-zinc-300 font-semibold text-sm tracking-widest uppercase">Demo &amp; Screenshots</p>
                                    <p className="text-violet-400/80 font-mono text-xs tracking-wider mt-1">Coming Soon</p>
                                </div>
                                <div className="flex gap-1.5">
                                    {[0, 1, 2].map(i => (
                                        <span key={i} className="w-1.5 h-1.5 rounded-full bg-violet-500/60 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            /* Actual Screenshot Image */
                            <img
                                src={project.image}
                                alt={`${project.title} Interface`}
                                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                                    e.target.parentElement.innerHTML += `<div class="text-zinc-600 font-mono text-sm">Coming Soon....</div>`;
                                }}
                            />
                        )}

                        {/* Overlay Gradient for consistency */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60"></div>

                        {/* Shine Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                    </div>

                </div>
            </div>
        </Reveal>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-10 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
                <Reveal>
                    <h2 className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tighter">
                        Featured <span className="text-zinc-700">Projects</span>
                    </h2>
                </Reveal>
            </div>

            <div className="flex flex-col relative z-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
