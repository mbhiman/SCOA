"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/src/lib/animations";

function SunIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
    );
}

/**
 * Navbar — Logo left, Home button + dark mode toggle right.
 * Glassmorphism style with smooth scroll-aware shadow.
 */
export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <motion.nav
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "shadow-lg"
                : ""
                }`}
            style={{
                backgroundColor: scrolled ? "var(--bg-card)" : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled ? "1px solid var(--border)" : "none",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center mx-5">
                        <Image
                            src="/images/logo1.png"
                            alt="Flipkart SCOA Logo"
                            width={600}
                            height={600}
                            
                            className="h-9 w-auto sm:h-10 md:h-11"
                        />
                    </Link>

                    {/* Right actions */}
                    <div className="flex items-center gap-3">
                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="btn-ghost btn text-sm px-4 py-2 rounded-lg"
                            >
                                Home
                            </motion.button>
                        </Link>

                        {/* Dark mode toggle */}
                        {mounted && (
                            <motion.button
                                whileHover={{ scale: 1.08, rotate: 15 }}
                                whileTap={{ scale: 0.92 }}
                                onClick={toggleTheme}
                                className="w-9 h-9 flex items-center justify-center rounded-full border transition-colors duration-200"
                                style={{
                                    borderColor: "var(--border)",
                                    color: "var(--text-muted)",
                                    backgroundColor: "var(--bg-card)",
                                }}
                                aria-label="Toggle dark mode"
                            >
                                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                            </motion.button>
                        )}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
