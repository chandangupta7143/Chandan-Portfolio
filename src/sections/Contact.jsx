import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { Send, Loader2, CheckCircle2, AlertCircle, ChevronRight, Terminal, Github, Linkedin, Mail } from 'lucide-react';

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
                    _subject: "New Portfolio Message from " + new Date().toLocaleString()
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
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-24">

            {/* Ultra Premium Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-600/20 blur-[150px] rounded-full opacity-20 pointer-events-none animate-pulse duration-[10000ms]"></div>

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10 w-full flex flex-col items-center gap-16">

                <Reveal>
                    <div className="space-y-6 md:space-y-8">

                        <h2 className="text-5xl md:text-9xl font-bold tracking-tighter leading-none select-none">
                            <span className="text-zinc-100 block">LET'S WORK</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-500 via-zinc-200 to-zinc-600" style={{ WebkitTextStroke: '0px' }}>
                                TOGETHER
                            </span>
                        </h2>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="w-full max-w-3xl mx-auto relative group">
                        {/* Glow Effect behind form */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-700"></div>

                        <form onSubmit={handleSubmit} className="relative">

                            {/* Input Container - Ultra Sleek Capsule */}
                            <div className={`
                                relative flex items-center p-2
                                bg-zinc-950/80 backdrop-blur-2xl 
                                border ${status === 'error' ? 'border-red-500/50' : status === 'success' ? 'border-green-500/50' : 'border-zinc-800 group-hover:border-zinc-700'} 
                                rounded-full transition-all duration-500 shadow-2xl
                            `}>
                                <div className="pl-6 md:pl-8 text-zinc-600">
                                    <Terminal className="w-5 h-5 md:w-6 md:h-6" />
                                </div>

                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder={status === 'success' ? "Message Transmitted." : "Enter Your Details..."}
                                    disabled={status === 'sending' || status === 'success'}
                                    className="w-full bg-transparent px-4 py-4 md:py-6 text-zinc-100 placeholder-zinc-600 outline-none text-lg md:text-xl font-mono disabled:opacity-50 text-left flex-1 min-w-0 tracking-tight"
                                />

                                <button
                                    type="submit"
                                    disabled={status === 'sending' || status === 'success' || !message.trim()}
                                    className={`
                                        h-14 md:h-16 px-8 md:px-10 rounded-full flex items-center justify-center gap-3 
                                        uppercase font-bold tracking-wider text-xs md:text-sm transition-all duration-500 flex-shrink-0
                                        ${status === 'success'
                                            ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                                            : status === 'sending'
                                                ? 'bg-zinc-800 text-zinc-400'
                                                : message.trim()
                                                    ? 'bg-white text-black hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                                    : 'bg-zinc-900 text-zinc-600 border border-zinc-800 cursor-not-allowed'
                                        }
                                    `}
                                >
                                    {status === 'sending' ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : status === 'success' ? (
                                        <CheckCircle2 className="w-4 h-4" />
                                    ) : (
                                        <>
                                            <span>Send</span>
                                            <Send className="w-3 h-3 md:w-4 md:h-4" />
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Status Message */}
                            <div className="absolute top-full left-0 w-full text-center mt-4">
                                {status === 'error' && (
                                    <span className="text-red-400 text-xs font-mono tracking-widest uppercase">
                                        Transmission Failed
                                    </span>
                                )}
                            </div>
                        </form>
                    </div>
                </Reveal>

                {/* PREMIUM DOCK ICONS */}
                <Reveal>
                    <div className="flex justify-center gap-6 md:gap-8">
                        {[
                            { Icon: Github, href: "https://github.com/chandangupta7143", label: "Github", color: "text-white", bg: "hover:bg-white/10" },
                            { Icon: Linkedin, href: "https://www.linkedin.com/in/chandan-gupta7143", label: "LinkedIn", color: "text-[#0077b5]", bg: "hover:bg-[#0077b5]/10" },
                            { Icon: Mail, href: "mailto:Chandangupta21092005@gmail.com", label: "Email", color: "text-[#EA4335]", bg: "hover:bg-[#EA4335]/10" }
                        ].map(({ Icon, href, label, color, bg }, index) => (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className={`
                                    group relative p-4 bg-zinc-900/50 border border-zinc-800 rounded-full 
                                    ${bg} hover:border-zinc-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                                `}
                                aria-label={label}
                            >
                                <Icon className={`w-6 h-6 md:w-7 md:h-7 ${color} transition-all duration-300`} />
                            </a>
                        ))}
                    </div>
                </Reveal>

            </div>

            {/* Minimal Footer with BOLD Text */}
            <div className="absolute bottom-6 w-full text-center">
                <p className="text-indigo-600 font-black text-xs md:text-sm font-mono tracking-[0.3em] uppercase hover:text-indigo-500 transition-colors duration-300 cursor-default">
                    Designed & Built by Chandan Gupta
                </p>

            </div>
        </section>
    );
};

export default Contact;
