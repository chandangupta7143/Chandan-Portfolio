import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CHARS = "-_~=+*&^%$#@!/\\|";

const GlitchText = ({ text, className }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval;
        if (isHovered) {
            let iteration = 0;
            interval = setInterval(() => {
                setDisplayText(
                    text
                        .split("")
                        .map((char, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        } else {
            setDisplayText(text);
        }

        return () => clearInterval(interval);
    }, [isHovered, text]);

    return (
        <motion.h2
            className={className}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {displayText}
        </motion.h2>
    );
};

export default GlitchText;
