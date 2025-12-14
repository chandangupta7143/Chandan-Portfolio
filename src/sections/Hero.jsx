import React, { useEffect, useState } from "react";
import { Reveal } from "../components/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 50]);

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-24 pb-12">
            {/* Background Gradient elements (Animated Aurora) */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 90, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen"
            />
            <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, -45, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] -z-10 mix-blend-screen"
            />

            <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left: Text Content - Premium Identity */}
                <div className="order-2 lg:order-1 flex flex-col justify-center items-start">
                    <Reveal>
                        <div className="inline-flex items-center gap-3 mb-8">
                            <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white font-mono tracking-widest uppercase">
                                Hello world!<span className="text-white"> i Am</span>
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mb-6 font-sans leading-none select-none">
                            CHANDAN <br />
                            <motion.span
                                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-600 bg-[length:200%_auto]"
                            >
                                GUPTA
                            </motion.span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="text-lg md:text-2xl text-zinc-400 max-w-lg leading-relaxed mb-10 font-light">
                            Crafting <span className="text-cyan-400 font-medium">high-performance</span> digital ecosystems where scalable engineering meets interactive design.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://drive.google.com/file/d/1sCFJbF46a2me6U7YjCAAEi87xiIB8y3U/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-8 py-4 flex items-center gap-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] overflow-hidden"
                            >
                                {/* Top Reflection/Highlight */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <span className="relative z-10 text-lg font-bold tracking-widest uppercase text-zinc-200 group-hover:text-white transition-colors duration-300 drop-shadow-md">Get CV</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 text-zinc-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>

                                {/* Aggressive Shine Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-20"></div>
                            </a>
                        </div>
                    </Reveal>
                </div>

                {/* Right: The Image (Premium Motion & Scale) */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full items-center">
                    <Reveal delay={0.3} width="100%">
                        <motion.div
                            className="relative w-full group overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl scale-[1.02] hover:scale-[1.05] transition-transform duration-700 ease-out"
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <img
                                src="/hero_profile.jpg"
                                alt="Chandan Gupta Profile"
                                className="w-full h-auto object-cover"
                            />
                            {/* Subtle Logic Overlay to hint at "System" theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </motion.div>
                    </Reveal>
                </div>
            </div>


        </section>
    );
};

export default Hero;
