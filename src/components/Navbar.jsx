
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Active section detection
            const sections = navLinks.map(link => link.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(`#${current}`);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/5'
                    : 'bg-transparent border-b border-transparent'
                    }`}
            >
                <div className="w-full px-6 md:px-8 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-12 items-center h-20">
                    {/* Identity - Refined, Minimal, Professional (Col Span 3) */}
                    <div className="col-span-1 md:col-span-3 flex justify-start">
                        <a href="#" className="group flex items-center gap-3 md:gap-5">
                            <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                                {/* Outer Rotating Ring (Cosmic) */}
                                <div className="absolute inset-0 rounded-full border border-indigo-500/30 border-t-white/50 border-r-transparent border-l-transparent animate-[spin_3s_linear_infinite] group-hover:border-indigo-400/80 transition-colors" />

                                {/* Inner Rotating Ring (Reverse) */}
                                <div className="absolute inset-1 rounded-full border border-purple-500/30 border-b-white/50 border-l-transparent border-r-transparent animate-[spin_5s_linear_infinite_reverse] group-hover:border-purple-400/80 transition-colors" />

                                {/* Core Glow */}
                                <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full group-hover:bg-indigo-500/40 transition-colors duration-500" />

                                {/* Glass Core */}
                                <div className="relative flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-zinc-950 rounded-full border border-white/10 shadow-[inner_0_0_10px_rgba(255,255,255,0.1)] group-hover:scale-90 transition-transform duration-500">
                                    <span className="font-bold text-[8px] md:text-[10px] text-white tracking-tighter">CG<span className="text-indigo-500 animate-pulse">.</span></span>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-sm md:text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 group-hover:via-indigo-300 group-hover:to-white transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                                    CHANDAN GUPTA
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Navigation - Floating Capsule (Col Span 6) */}
                    <div className="hidden md:flex col-span-6 justify-center">
                        <nav className="flex items-center px-2 py-1.5 bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-full shadow-2xl shadow-black/20">
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.href;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className={`relative px-4 py-1.5 text-xs font-medium transition-all duration-300 ${isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                                            }`}
                                    >
                                        {/* Hover Highlight (Subtle Glass) */}
                                        {hoveredIndex === index && !isActive && (
                                            <motion.div
                                                layoutId="nav-hover"
                                                className="absolute inset-0 bg-white/5 rounded-full"
                                                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                                            />
                                        )}

                                        {/* Active Indicator (Glowing Dot) */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-active"
                                                className="absolute inset-0 bg-zinc-800 rounded-full border border-white/5 shadow-inner"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}

                                        <span className="relative z-10">{link.name}</span>
                                    </a>
                                )
                            })}
                        </nav>
                    </div>

                    {/* CTA - Primary Button (Ultra-Premium High-Shine Glass) */}
                    <div className="hidden md:flex col-span-3 justify-end items-center gap-6">
                        <a
                            href="#contact"
                            className="group relative px-6 py-2.5 flex items-center gap-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] overflow-hidden"
                        >
                            {/* Top Reflection/Highlight */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <span className="relative z-10 text-xs font-bold tracking-widest uppercase text-zinc-200 group-hover:text-white transition-colors duration-300 drop-shadow-md">Let's Talk</span>
                            <ArrowUpRight size={14} className="relative z-10 text-zinc-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />

                            {/* Aggressive Shine Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-20"></div>
                        </a>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <div className="col-span-1 md:hidden flex justify-end">
                        <button
                            className="p-2 text-zinc-400 hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Experience (Custom Sheet) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 md:hidden bg-zinc-950/95 backdrop-blur-2xl"
                    >
                        <div className="flex flex-col h-full p-8 pt-32">
                            <div className="flex flex-col space-y-4">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="group flex items-center justify-between p-4 border-b border-white/5 text-2xl font-light text-zinc-300 hover:text-white hover:pl-6 transition-all"
                                    >
                                        <span className="group-hover:text-indigo-400 transition-colors">{link.name}</span>
                                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" size={20} />
                                    </motion.a>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-auto"
                            >
                                <a
                                    href="#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex w-full items-center justify-center gap-3 bg-white text-zinc-950 py-4 rounded-xl font-bold text-sm tracking-wide uppercase mb-8"
                                >
                                    Start a Project <ArrowUpRight size={16} />
                                </a>

                                <div className="flex justify-center gap-8 pt-6 border-t border-white/5">
                                    <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
                                    <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
                                    <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Mail size={20} /></a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
