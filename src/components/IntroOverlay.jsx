import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroOverlay = ({ onComplete }) => {
    const [phase, setPhase] = useState('intro'); // 'intro' | 'reveal' | 'done'

    useEffect(() => {
        // Phase 1: Show name for 1.5 seconds (slightly longer to appreciate)
        const introTimer = setTimeout(() => {
            setPhase('reveal');
        }, 1500);

        // Phase 2: Reveal animation takes ~1s, then complete
        const completeTimer = setTimeout(() => {
            setPhase('done');
            onComplete?.();
        }, 2800);

        return () => {
            clearTimeout(introTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    if (phase === 'done') return null;

    return (
        <AnimatePresence>
            {phase !== 'done' && (
                <motion.div
                    className="fixed inset-0 z-[9999] pointer-events-auto"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Left Curtain Panel */}
                    <motion.div
                        className="absolute top-0 left-0 w-1/2 h-full bg-zinc-950"
                        initial={{ x: 0 }}
                        animate={phase === 'reveal' ? { x: '-100%' } : { x: 0 }}
                        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    >
                        {/* Gradient edge glow */}
                        <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent" />
                    </motion.div>

                    {/* Right Curtain Panel */}
                    <motion.div
                        className="absolute top-0 right-0 w-1/2 h-full bg-zinc-950"
                        initial={{ x: 0 }}
                        animate={phase === 'reveal' ? { x: '100%' } : { x: 0 }}
                        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    >
                        {/* Gradient edge glow */}
                        <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent" />
                    </motion.div>

                    {/* Centered Content */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={phase === 'intro'
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: -20, scale: 1.02 }
                        }
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        {/* Name with Shimmer Effect */}
                        <div className="relative overflow-hidden">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-center">
                                <span className="text-white">CHANDAN</span>{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-zinc-300 to-zinc-500">GUPTA</span>
                            </h1>

                            {/* Shimmer overlay */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                initial={{ x: '-200%' }}
                                animate={{ x: '200%' }}
                                transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
                            />
                        </div>

                        {/* Tagline */}
                        <motion.p
                            className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-zinc-500"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Full Stack Architect
                        </motion.p>

                        {/* Accent Line */}
                        <motion.div
                            className="h-px w-16 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        />
                    </motion.div>

                    {/* Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

                    {/* Secondary glow */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroOverlay;

