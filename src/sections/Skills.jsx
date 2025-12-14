import React from 'react';
import { Reveal } from '../components/Reveal';
import { motion } from 'framer-motion';
import {
    Code2,
    Coffee,
    Database,
    Atom,
    Wind,
    Layers,
    GitBranch,
    Terminal,
    Figma,
    Github,
    Cpu,
    Binary,
    Braces,
    Leaf,
    Globe, // For REST APIs
    Table, // For Hibernate/JPA
    ShieldCheck, // For Security
    Webhook, // For Postman
    Network, // For Data Structures
    Workflow, // For Algorithms
    Activity // For Complexity
} from 'lucide-react';

const skillsData = [
    {
        category: "Backend & Architecture",
        description: "Designing scalable, fault-tolerant systems with clean architecture and secure data patterns.",
        items: [
            { name: "Java", icon: <Coffee strokeWidth={1.5} />, color: "#F89820", core: true },
            { name: "Spring Boot", icon: <Leaf strokeWidth={1.5} />, color: "#6DB33F", core: true },
            { name: "REST APIs", icon: <Globe strokeWidth={1.5} />, color: "#563d7c", core: false }, // Using generic color/icon
            { name: "SQL", icon: <Database strokeWidth={1.5} />, color: "#336791", core: false },
            { name: "Security", icon: <ShieldCheck strokeWidth={1.5} />, color: "#4B5563", core: false }
        ]
    },
    {
        category: "Frontend & Design",
        description: "Engineering responsive, pixel-perfect interfaces with modern reactive state management.",
        items: [
            { name: "React.js", icon: <Atom strokeWidth={1.5} />, color: "#61DAFB", core: true },
            { name: "JavaScript", icon: <Braces strokeWidth={1.5} />, color: "#F7DF1E", core: true },
            { name: "Tailwind", icon: <Wind strokeWidth={1.5} />, color: "#38B2AC" },
            { name: "Motion", icon: <Layers strokeWidth={1.5} />, color: "#E902B5" },
            { name: "Figma", icon: <Figma strokeWidth={1.5} />, color: "#F24E1E" }
        ]
    },
    {
        category: "Algorithmic & Core",
        description: "Optimizing computational complexity and system performance through deep understanding.",
        items: [
            { name: "C++", icon: <Code2 strokeWidth={1.5} />, color: "#00599C", core: true },
            { name: "DSA", icon: <Binary strokeWidth={1.5} />, color: "#ffffff", core: true },
            { name: "Data Structures", icon: <Network strokeWidth={1.5} />, color: "#8B5CF6", core: false },
            { name: "Algorithms", icon: <Workflow strokeWidth={1.5} />, color: "#10B981", core: false },
            { name: "Complexity", icon: <Activity strokeWidth={1.5} />, color: "#EF4444", core: false }
        ]
    },
    {
        category: "Tools & Platforms",
        description: "Streamlining deployment pipelines and development workflows for maximum reliability.",
        items: [
            { name: "Git", icon: <GitBranch strokeWidth={1.5} />, color: "#F05032" },
            { name: "GitHub", icon: <Github strokeWidth={1.5} />, color: "#ffffff" },
            { name: "Linux", icon: <Terminal strokeWidth={1.5} />, color: "#FCC624" },
            { name: "VS Code", icon: <Cpu strokeWidth={1.5} />, color: "#007ACC" },
            { name: "Postman", icon: <Webhook strokeWidth={1.5} />, color: "#FF6C37" }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 md:py-32 relative overflow-hidden">

            <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                <Reveal>
                    <div className="mb-12 md:mb-24 text-center md:text-left">

                        <h2 className="text-4xl md:text-7xl font-bold text-zinc-100 tracking-tighter">
                            Technical <span className="text-zinc-700">Capabilities</span>
                        </h2>
                    </div>
                </Reveal>

                <div className="space-y-16 md:space-y-24">
                    {skillsData.map((category, i) => (
                        <div key={i} className="group/section">
                            <Reveal>
                                <div className="mb-6 md:mb-10 pl-4 border-l-2 border-indigo-500/50 group-hover/section:border-indigo-400 transition-colors">
                                    <h3 className="text-xl md:text-2xl font-bold text-zinc-100 mb-2">
                                        {category.category}
                                    </h3>
                                    <p className="text-zinc-400 font-light text-sm md:text-lg max-w-2xl leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>
                            </Reveal>

                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                                {category.items.map((skill, j) => (
                                    <Reveal key={j} delay={j * 0.05} width="100%" className="h-full">
                                        <div
                                            className="group relative flex flex-col items-center justify-center p-4 md:p-6 bg-zinc-900/40 border border-white/5 rounded-xl hover:border-white/10 transition-colors duration-300 h-full aspect-square overflow-hidden backdrop-blur-sm"
                                            onMouseMove={(e) => {
                                                const { currentTarget, clientX, clientY } = e;
                                                const { left, top } = currentTarget.getBoundingClientRect();
                                                const x = clientX - left;
                                                const y = clientY - top;
                                                currentTarget.style.setProperty("--x", `${x}px`);
                                                currentTarget.style.setProperty("--y", `${y}px`);
                                            }}
                                        >
                                            {/* Spotlight Overlay */}
                                            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                style={{
                                                    background: `radial-gradient(400px circle at var(--x) var(--y), ${skill.color}15, transparent 40%)`
                                                }}
                                            />

                                            {/* Border Spotlight */}
                                            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                                                style={{
                                                    background: `radial-gradient(250px circle at var(--x) var(--y), ${skill.color}50, transparent 40%)`,
                                                    maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
                                                    maskClip: 'content-box, border-box',
                                                    maskComposite: 'exclude',
                                                    padding: '1px',
                                                    borderRadius: 'inherit'
                                                }}
                                            />

                                            {/* Tech HUD Corners */}
                                            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/10 group-hover:border-white/30 transition-colors" />
                                            <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/10 group-hover:border-white/30 transition-colors" />
                                            <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/10 group-hover:border-white/30 transition-colors" />
                                            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/10 group-hover:border-white/30 transition-colors" />

                                            {/* Content */}
                                            <div className="relative z-20 flex flex-col items-center gap-3 md:gap-4">
                                                <div
                                                    className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                                                    style={{ color: skill.color }}
                                                >
                                                    <div className="[&>svg]:w-8 [&>svg]:h-8 md:[&>svg]:w-12 md:[&>svg]:h-12 transition-all duration-300 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                                        {skill.icon}
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-center gap-1">
                                                    <span className="text-zinc-400 group-hover:text-white transition-colors font-bold text-sm tracking-wide">
                                                        {skill.name}
                                                    </span>
                                                    {skill.core && (
                                                        <span className="text-[9px] font-mono text-indigo-400/80 uppercase tracking-widest border border-indigo-500/20 px-1.5 py-0.5 rounded bg-indigo-500/5">
                                                            Core
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
