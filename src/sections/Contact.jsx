import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2, Terminal, Github, Linkedin, Mail, MapPin, Sparkles, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        setStatus('sending');

        try {
            const response = await fetch("https://formsubmit.co/ajax/Chandangupta21092005@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    message: message,
                    _subject: "New Portfolio Transmission from " + new Date().toLocaleString()
                })
            });

            if (response.ok) {
                setStatus('success');
                setMessage('');
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <section id="contact" className="pt-8 pb-12 relative overflow-hidden flex flex-col justify-center items-center">
            <div className="max-w-6xl mx-auto px-4 md:px-8 text-center relative z-10 w-full flex flex-col items-center gap-6 md:gap-8">

                {/* Header */}
                <Reveal>
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none select-none text-white">
                            LET'S WORK <br />
                            <motion.span
                                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-400 bg-[length:200%_auto] inline-block"
                            >
                                TOGETHER
                            </motion.span>
                        </h2>

                        <p className="text-zinc-400 text-sm md:text-base font-light max-w-xl mt-1 leading-relaxed">
                            Have an exciting project, full-stack role, or architectural challenge? Drop a direct message below.
                        </p>
                    </div>
                </Reveal>

                {/* Message Capsule Form */}
                <Reveal width="100%">
                    <div className="w-full max-w-3xl mx-auto relative group">
                        {/* Glow Effect behind form */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-3xl md:rounded-full opacity-25 group-hover:opacity-50 blur-xl transition-opacity duration-700 pointer-events-none" />

                        <form onSubmit={handleSubmit} className="relative z-10">
                            <div className={`
                                relative flex flex-col md:flex-row items-center p-2.5 md:p-3
                                bg-zinc-900/80 backdrop-blur-2xl 
                                border ${status === 'error' ? 'border-red-500/60' : status === 'success' ? 'border-emerald-500/60' : 'border-white/10 group-hover:border-cyan-500/50'} 
                                rounded-3xl md:rounded-full transition-all duration-500 shadow-2xl gap-3 md:gap-0
                            `}>
                                <div className="hidden md:flex pl-6 text-cyan-400">
                                    <Terminal className="w-6 h-6" />
                                </div>

                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder={status === 'success' ? "Message Transmitted Successfully." : "Type your message or project inquiry..."}
                                    disabled={status === 'sending' || status === 'success'}
                                    className="w-full bg-transparent px-4 md:px-6 py-3 md:py-4 text-zinc-100 placeholder-zinc-500 outline-none text-base md:text-lg font-mono disabled:opacity-50 text-left flex-1 min-w-0 tracking-tight"
                                />

                                <button
                                    type="submit"
                                    disabled={status === 'sending' || status === 'success' || !message.trim()}
                                    className={`
                                        w-full md:w-auto h-12 md:h-14 px-8 md:px-10 rounded-2xl md:rounded-full flex items-center justify-center gap-3 
                                        uppercase font-bold tracking-wider text-xs md:text-sm transition-all duration-500 flex-shrink-0
                                        ${status === 'success'
                                            ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                                            : status === 'sending'
                                                ? 'bg-zinc-800 text-zinc-400'
                                                : message.trim()
                                                    ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-white hover:scale-105 shadow-[0_0_25px_rgba(6,182,212,0.4)]'
                                                    : 'bg-zinc-950 text-zinc-600 border border-white/5 cursor-not-allowed'
                                        }
                                    `}
                                >
                                    {status === 'sending' ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : status === 'success' ? (
                                        <CheckCircle2 className="w-4 h-4" />
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </div>

                            {status === 'error' && (
                                <div className="mt-3 text-red-400 text-xs font-mono tracking-widest uppercase">
                                    Transmission Failed. Please try again or email directly.
                                </div>
                            )}
                        </form>
                    </div>
                </Reveal>

                {/* HIGH-TECH CIRCULAR SYMBOL ICON DOCK */}
                <Reveal>
                    <div className="flex justify-center items-center gap-5 md:gap-8 pt-4">
                        {[
                            { 
                                Icon: Mail, 
                                href: "mailto:Chandangupta21092005@gmail.com", 
                                title: "Email: Chandangupta21092005@gmail.com", 
                                color: "text-rose-400",
                                glow: "hover:shadow-[0_0_35px_rgba(244,63,94,0.4)]",
                                border: "group-hover:border-rose-500/60"
                            },
                            { 
                                Icon: Linkedin, 
                                href: "https://www.linkedin.com/in/chandan-gupta7143", 
                                title: "LinkedIn: chandan-gupta7143", 
                                color: "text-sky-400",
                                glow: "hover:shadow-[0_0_35px_rgba(56,189,248,0.4)]",
                                border: "group-hover:border-sky-500/60"
                            },
                            { 
                                Icon: Github, 
                                href: "https://github.com/chandangupta7143", 
                                title: "GitHub: chandangupta7143", 
                                color: "text-white",
                                glow: "hover:shadow-[0_0_35px_rgba(255,255,255,0.3)]",
                                border: "group-hover:border-white/40"
                            }
                        ].map(({ Icon, href, title, color, glow, border }, index) => (
                            <motion.a
                                key={index}
                                whileHover={{ y: -6, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                title={title}
                                className={`
                                    group relative flex items-center justify-center 
                                    w-14 h-14 md:w-16 md:h-16 rounded-full
                                    bg-zinc-950/80 border border-white/10 ${border}
                                    backdrop-blur-xl transition-all duration-300 ${glow}
                                `}
                            >
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-full transition-opacity pointer-events-none" />
                                <Icon className={`w-6 h-6 md:w-7 md:h-7 ${color} transition-all duration-300 drop-shadow-md group-hover:scale-110`} />
                            </motion.a>
                        ))}
                    </div>
                </Reveal>

            </div>
        </section>
    );
};

export default Contact;
