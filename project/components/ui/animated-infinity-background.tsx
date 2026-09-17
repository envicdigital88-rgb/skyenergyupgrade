"use client";

import React from 'react';
import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    // Generate infinity-shaped paths
    const paths = Array.from({ length: 36 }, (_, i) => {
        // Parameters for the infinity shape
        const scale = 200 + i * 10; // Base scale that increases with each path
        const offsetX = 348; // Center X position (half of viewBox width)
        const offsetY = 158; // Center Y position (half of viewBox height)
        
        // Create a figure-8 / infinity path using cubic bezier curves
        // The infinity shape consists of two loops connected at the center
        const d = `
            M ${offsetX - scale} ${offsetY}
            C ${offsetX - scale} ${offsetY - scale * 0.5}, 
              ${offsetX - scale * 0.5} ${offsetY - scale * 0.5}, 
              ${offsetX} ${offsetY}
            C ${offsetX + scale * 0.5} ${offsetY + scale * 0.5}, 
              ${offsetX + scale} ${offsetY + scale * 0.5}, 
              ${offsetX + scale} ${offsetY}
            C ${offsetX + scale} ${offsetY - scale * 0.5}, 
              ${offsetX + scale * 0.5} ${offsetY - scale * 0.5}, 
              ${offsetX} ${offsetY}
            C ${offsetX - scale * 0.5} ${offsetY + scale * 0.5}, 
              ${offsetX - scale} ${offsetY + scale * 0.5}, 
              ${offsetX - scale} ${offsetY}
        `.replace(/\s+/g, ' ').trim();
        
        return {
            id: i,
            d,
            color: `rgba(255,255,255,${0.05 + i * 0.02})`,
            width: 0.5 + i * 0.03,
        };
    });

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path, index) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.05 + path.id * 0.02}
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 1, 0],
                            opacity: [0, 0.4, 0.4, 0],
                        }}
                        transition={{
                            duration: 15 + index * 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Infinity Background",
    titleBackground = false,
    backgroundStyle = "glass", // "glass", "gradient", "solid", "glow"
    subtitle = "",
    showGradientOrb = true,
    children
}: {
    title?: string;
    titleBackground?: boolean;
    backgroundStyle?: "glass" | "gradient" | "solid" | "glow";
    subtitle?: React.ReactNode;
    showGradientOrb?: boolean;
    children?: React.ReactNode;
}) {
    const words = title.split(" ");

    // Different background styles
    const getBackgroundClasses = () => {
        switch (backgroundStyle) {
            case "glass":
                return "bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 shadow-2xl";
            case "gradient":
                return "bg-gradient-to-br from-white/20 via-white/10 to-transparent dark:from-black/40 dark:via-black/20 dark:to-transparent backdrop-blur-md border border-white/30 dark:border-white/10 shadow-2xl";
            case "solid":
                return "bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-2xl";
            case "glow":
                return "bg-white/5 dark:bg-black/10 backdrop-blur-2xl border border-white/30 dark:border-white/20 shadow-2xl shadow-white/20 dark:shadow-white/10";
            default:
                return "";
        }
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#081719]">
            {/* Animated gradient orb */}
            {showGradientOrb && (
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/10 via-lime-500/10 to-teal-500/10 blur-3xl" />
                </motion.div>
            )}

            <div className="absolute inset-0">
                <FloatingPaths position={1} />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left pt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    {/* Title container with background */}
                    <motion.div
                        className={`
                            inline-block 
                            ${titleBackground ? `p-8 sm:p-12 md:p-16 rounded-3xl ${getBackgroundClasses()}` : ''}
                            relative
                        `}
                        whileHover={titleBackground ? { scale: 1.02 } : {}}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {/* Main title */}
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-white">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className="inline-block mr-4 last:mr-0"
                                >
                                    {word.split("").map((letter, letterIndex) => (
                                        <motion.span
                                            key={`${wordIndex}-${letterIndex}`}
                                            initial={{ y: 100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay:
                                                    wordIndex * 0.1 +
                                                    letterIndex * 0.03,
                                                type: "spring",
                                                stiffness: 150,
                                                damping: 25,
                                            }}
                                            className="inline-block text-transparent bg-clip-text 
                                                bg-gradient-to-br from-white via-neutral-100 to-neutral-400
                                                drop-shadow-2xl"
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </h1>

                        {/* Subtitle if provided */}
                        {subtitle && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="mt-8 text-lg sm:text-xl md:text-2xl text-neutral-300 font-light"
                            >
                                {subtitle}
                            </motion.div>
                        )}

                        {children && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="mt-8"
                            >
                                {children}
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
