import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code2, Coffee, Database, Atom, Wind, Layers, GitBranch, Terminal,
    Github, Cpu, Braces, Leaf, Globe, Table, ShieldCheck,
    Webhook, Workflow, Activity, FileJson, Server, Layout, 
    MonitorSmartphone, MousePointerClick, Zap, Box, Blocks, Key, 
    Lock, Package, Cloud, HardDrive, LayoutDashboard, Binary, Network, Brain, Puzzle,
    Radio, Route, Sliders, Share2, Search, Sparkles, CheckCircle2
} from 'lucide-react';

const skillsData = [
    {
        id: "languages",
        category: "Programming Languages",
        description: "Core languages for building robust, scalable, and high-performance applications.",
        items: [
            { name: "Java", icon: <Coffee strokeWidth={1.5} />, color: "#F89820", core: true, tag: "Primary Language" },
            { name: "C++", icon: <Code2 strokeWidth={1.5} />, color: "#00599C", core: true, tag: "System & Algorithms" },
            { name: "JavaScript", icon: <Braces strokeWidth={1.5} />, color: "#F7DF1E", tag: "Web & Scripting" },
            { name: "SQL", icon: <Database strokeWidth={1.5} />, color: "#336791", tag: "Data Queries" }
        ]
    },
    {
        id: "dsa",
        category: "Data Structures & Algorithms",
        description: "Mastery in computational complexity, optimization, memory efficiency, and algorithmic problem solving.",
        items: [
            { name: "Data Structures", icon: <Network strokeWidth={1.5} />, color: "#8B5CF6", core: true, tag: "Arrays, Trees, Graphs" },
            { name: "Algorithms", icon: <Workflow strokeWidth={1.5} />, color: "#10B981", core: true, tag: "Sorting, Recursion, DP" },
            { name: "Problem Solving", icon: <Brain strokeWidth={1.5} />, color: "#F59E0B", tag: "Algorithmic Efficiency" },
            { name: "Complexity", icon: <Activity strokeWidth={1.5} />, color: "#EF4444", tag: "Big-O Notation" },
            { name: "Optimization", icon: <Zap strokeWidth={1.5} />, color: "#0ea5e9", tag: "Memory & Execution" }
        ]
    },
    {
        id: "frontend",
        category: "Frontend Development",
        description: "Engineering responsive, pixel-perfect interfaces with modern reactive state management.",
        items: [
            { name: "React.js", icon: <Atom strokeWidth={1.5} />, color: "#61DAFB", core: true, tag: "UI Library" },
            { name: "Tailwind CSS", icon: <Wind strokeWidth={1.5} />, color: "#38B2AC", tag: "Utility-First Styling" },
            { name: "Framer Motion", icon: <Layers strokeWidth={1.5} />, color: "#E902B5", tag: "Animations & Motion" },
            { name: "Responsive Web", icon: <MonitorSmartphone strokeWidth={1.5} />, color: "#4B5563", tag: "Cross-Device Layouts" },
            { name: "DOM Manipulation", icon: <FileJson strokeWidth={1.5} />, color: "#F7DF1E", tag: "Dynamic Rendering" },
            { name: "Event Handling", icon: <MousePointerClick strokeWidth={1.5} />, color: "#A855F7", tag: "Interactive UI" },
            { name: "Modern UI", icon: <Layout strokeWidth={1.5} />, color: "#EC4899", tag: "Design Systems" }
        ]
    },
    {
        id: "backend",
        category: "Backend & Microservices",
        description: "Designing scalable, fault-tolerant Java Microservices architecture and enterprise backend systems step-by-step.",
        items: [
            { name: "Core Java", icon: <Coffee strokeWidth={1.5} />, color: "#F89820", core: true, tag: "OOP & Fundamentals" },
            { name: "OOPs", icon: <Blocks strokeWidth={1.5} />, color: "#3B82F6", tag: "Object Design Patterns" },
            { name: "Collections", icon: <Box strokeWidth={1.5} />, color: "#8B5CF6", tag: "Data Structures API" },
            { name: "Exception Handling", icon: <Zap strokeWidth={1.5} />, color: "#EF4444", tag: "Fault Tolerance" },
            { name: "Multithreading", icon: <Workflow strokeWidth={1.5} />, color: "#10B981", tag: "Concurrency & Parallelism" },
            { name: "Advanced Java", icon: <Coffee strokeWidth={1.5} />, color: "#E76F00", tag: "Enterprise Core" },
            { name: "JDBC", icon: <Database strokeWidth={1.5} />, color: "#336791", tag: "Database Connectivity" },
            { name: "Servlets & JSP", icon: <Server strokeWidth={1.5} />, color: "#0ea5e9", tag: "Java Web Engine" },
            { name: "Spring", icon: <Leaf strokeWidth={1.5} />, color: "#6DB33F", core: true, tag: "IoC & Dependency Injection" },
            { name: "Spring Boot", icon: <Leaf strokeWidth={1.5} />, color: "#6DB33F", core: true, tag: "Micro-framework" },
            { name: "REST APIs", icon: <Globe strokeWidth={1.5} />, color: "#563d7c", tag: "Web Endpoints" },
            { name: "Hibernate / JPA", icon: <Table strokeWidth={1.5} />, color: "#59666C", tag: "ORM Persistence" },
            { name: "Auth & Authz", icon: <Lock strokeWidth={1.5} />, color: "#F59E0B", tag: "Security Architecture" },
            { name: "Spring Security", icon: <ShieldCheck strokeWidth={1.5} />, color: "#6DB33F", tag: "Role-Based Access" },
            { name: "JWT", icon: <Key strokeWidth={1.5} />, color: "#ec4899", tag: "Stateless Tokens" },
            { name: "API Security", icon: <ShieldCheck strokeWidth={1.5} />, color: "#4B5563", tag: "Encryption & Policies" },
            { name: "Microservices", icon: <Network strokeWidth={1.5} />, color: "#3B82F6", core: true, tag: "Distributed Architecture" },
            { name: "Spring Cloud", icon: <Cloud strokeWidth={1.5} />, color: "#0ea5e9", core: true, tag: "Cloud Infrastructure" },
            { name: "Docker Containerization", icon: <Package strokeWidth={1.5} />, color: "#2496ED", tag: "Container Deployments" },
            { name: "Backend Dev", icon: <Server strokeWidth={1.5} />, color: "#64748b", tag: "System Engineering" }
        ]
    },
    {
        id: "database",
        category: "Database Systems",
        description: "Managing relational & NoSQL data structures for high-performance enterprise applications.",
        items: [
            { name: "MySQL", icon: <Database strokeWidth={1.5} />, color: "#4479A1", core: true, tag: "Relational DB" },
            { name: "PostgreSQL", icon: <Database strokeWidth={1.5} />, color: "#336791", tag: "Advanced RDBMS" },
            { name: "MongoDB", icon: <Database strokeWidth={1.5} />, color: "#47A248", core: true, tag: "NoSQL Document DB" },
            { name: "RDBMS", icon: <Table strokeWidth={1.5} />, color: "#3b82f6", tag: "Relational Schema" }
        ]
    },
    {
        id: "tools",
        category: "Tools & Cloud Platforms",
        description: "Streamlining development workflows, containerization, and automated cloud deployment pipelines.",
        items: [
            { name: "IntelliJ IDEA", icon: <Code2 strokeWidth={1.5} />, color: "#FE315D", core: true, tag: "Primary Java IDE" },
            { name: "VS Code", icon: <Cpu strokeWidth={1.5} />, color: "#007ACC", tag: "Code Editor" },
            { name: "Git", icon: <GitBranch strokeWidth={1.5} />, color: "#F05032", core: true, tag: "Version Control" },
            { name: "GitHub", icon: <Github strokeWidth={1.5} />, color: "#ffffff", tag: "Code Collaboration" },
            { name: "Maven", icon: <Package strokeWidth={1.5} />, color: "#C71A22", tag: "Build Tool" },
            { name: "Postman", icon: <Webhook strokeWidth={1.5} />, color: "#FF6C37", tag: "API Testing" },
            { name: "Docker", icon: <Package strokeWidth={1.5} />, color: "#2496ED", core: true, tag: "Containerization" },
            { name: "Docker Compose", icon: <Blocks strokeWidth={1.5} />, color: "#2496ED", tag: "Orchestration" },
            { name: "AWS", icon: <Cloud strokeWidth={1.5} />, color: "#FF9900", tag: "Cloud Infrastructure" },
            { name: "Render", icon: <Cloud strokeWidth={1.5} />, color: "#ffffff", tag: "Cloud Deployment" },
            { name: "Vercel", icon: <Cloud strokeWidth={1.5} />, color: "#ffffff", tag: "Frontend Hosting" },
            { name: "Netlify", icon: <Cloud strokeWidth={1.5} />, color: "#00C7B7", tag: "Static Web Hosting" }
        ]
    }
];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        { id: "all", label: "All Capabilities" },
        { id: "backend", label: "Backend & Microservices" },
        { id: "languages", label: "Languages" },
        { id: "dsa", label: "DSA & Problem Solving" },
        { id: "frontend", label: "Frontend" },
        { id: "database", label: "Databases" },
        { id: "tools", label: "Tools & Cloud" }
    ];

    const filteredCategories = skillsData.map(cat => {
        const matchingItems = cat.items.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        return { ...cat, items: matchingItems };
    }).filter(cat => {
        if (searchQuery.trim() !== "") return cat.items.length > 0;
        if (activeCategory === "all") return true;
        return cat.id === activeCategory;
    });

    return (
        <section id="skills" className="py-12 md:py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

                {/* Section Header */}
                <Reveal>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
                                <Sparkles className="w-3.5 h-3.5" />
                                Engineering Stack &amp; Competencies
                            </div>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter">
                                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-200 to-purple-400">Capabilities</span>
                            </h2>
                        </div>

                        <p className="text-zinc-400 font-light text-base md:text-lg max-w-md leading-relaxed">
                            Architected with modern Java Full Stack practices, high-availability micro-components, and scalable enterprise design patterns.
                        </p>
                    </div>
                </Reveal>

                {/* Search & Category Filter Navigation */}
                <Reveal delay={0.1}>
                    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-12">
                        {/* Category Filter Pills */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                                        activeCategory === cat.id
                                            ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] font-semibold scale-105"
                                            : "bg-zinc-900/60 border border-white/5 text-zinc-400 hover:text-white hover:border-white/10 hover:bg-zinc-900"
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <div className="relative shrink-0 w-full lg:w-72">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Filter technology..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-zinc-900/80 border border-white/10 rounded-xl text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                            />
                        </div>
                    </div>
                </Reveal>

                {/* Skills Grid Categories */}
                <div className="space-y-16">
                    <AnimatePresence mode="wait">
                        {filteredCategories.map((category) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-6"
                            >
                                <div className="pl-4 border-l-2 border-cyan-500/50 flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <h3 className="text-2xl font-bold text-white tracking-tight">
                                        {category.category}
                                    </h3>
                                    <p className="text-zinc-400 font-light text-sm max-w-xl">
                                        {category.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {category.items.map((skill, j) => (
                                        <motion.div
                                            key={j}
                                            whileHover={{ y: -6, scale: 1.02 }}
                                            transition={{ duration: 0.25, ease: "easeOut" }}
                                            className="group relative flex flex-col justify-between p-5 bg-zinc-900/50 border border-white/5 hover:border-cyan-500/40 rounded-2xl transition-all duration-300 backdrop-blur-md overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                                            onMouseMove={(e) => {
                                                const { currentTarget, clientX, clientY } = e;
                                                const { left, top } = currentTarget.getBoundingClientRect();
                                                const x = clientX - left;
                                                const y = clientY - top;
                                                currentTarget.style.setProperty("--x", `${x}px`);
                                                currentTarget.style.setProperty("--y", `${y}px`);
                                            }}
                                        >
                                            {/* Spotlight Reflection */}
                                            <div
                                                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                style={{
                                                    background: `radial-gradient(300px circle at var(--x) var(--y), ${skill.color}20, transparent 60%)`
                                                }}
                                            />

                                            {/* Header Row: Icon & Tag */}
                                            <div className="flex items-center justify-between mb-4 relative z-10">
                                                <div
                                                    className="p-3 rounded-xl bg-zinc-950/80 border border-white/5 shadow-inner transition-all duration-300 group-hover:scale-110"
                                                    style={{ color: skill.color }}
                                                >
                                                    <div className="[&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7 drop-shadow-md">
                                                        {skill.icon}
                                                    </div>
                                                </div>

                                                {skill.core ? (
                                                    <span className="flex items-center gap-1 text-[10px] font-mono text-cyan-400 uppercase tracking-wider border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 rounded-full font-bold">
                                                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                                                        Core
                                                    </span>
                                                ) : (
                                                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider bg-zinc-950/50 px-2 py-0.5 rounded-md border border-white/5">
                                                        Tech
                                                    </span>
                                                )}
                                            </div>

                                            {/* Footer Row: Name & Skill Description */}
                                            <div className="relative z-10 flex flex-col gap-1">
                                                <h4 className="text-zinc-100 group-hover:text-white font-bold text-base tracking-tight transition-colors">
                                                    {skill.name}
                                                </h4>
                                                <span className="text-xs text-zinc-500 font-mono line-clamp-1 group-hover:text-zinc-400 transition-colors">
                                                    {skill.tag || "Enterprise Tech"}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default Skills;
