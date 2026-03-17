"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    fadeIn,
    slideUp,
    scaleIn,
    staggerContainer,
    floatAnimation,
    floatAnimationDelayed,
    floatAnimationSlow,
} from "@/src/lib/animations";
import { cn } from "@/src/lib/utils";
import Navbar from "@/src/components/ui/navbar";
import LoginForm from "@/src/components/auth/login-form";
import RegisterForm from "@/src/components/auth/register-form";

type Tab = "login" | "register";

export default function LoginPage() {
    const [activeTab, setActiveTab] = useState<Tab>("login");

    return (
        <div className="min-h-screen relative overflow-hidden bg-base">
            <Navbar />

            {/* Background decorative blobs — radial-gradient is a one-off value, inline is acceptable */}
            <div
                className="absolute top-0 right-0 w-150 h-150 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, #2874F0 0%, transparent 70%)" }}
            />
            <div
                className="absolute bottom-0 left-0 w-100 h-100 rounded-full opacity-10 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, #FF6B35 0%, transparent 70%)" }}
            />

            <div className="relative z-10 min-h-screen flex items-center pt-16">
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* ── LEFT COLUMN — Floating Images ───────────────────────────── */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="hidden lg:flex flex-col gap-0 relative"
                        >
                            {/* Heading copy */}
                            <motion.div variants={slideUp} className="mb-8">
                                <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary font-body">
                                    🎓 Free Certification Program
                                </span>
                                <h1 className="font-display text-ink text-4xl xl:text-5xl font-bold leading-tight mb-3">
                                    Build Your Career in{" "}
                                    <span className="text-primary">Supply Chain</span>
                                </h1>
                                <p className="text-muted text-base leading-relaxed">
                                    6 days classroom training + 45 days paid on-the-job training with India's leading e-commerce company.
                                </p>
                            </motion.div>

                            {/* Image grid — floating layout */}
                            <div className="relative h-105">
                                {/* Image 1 — large, left. boxShadow with primary-tinted rgba is a one-off, kept inline */}
                                <motion.div
                                    variants={scaleIn}
                                    animate={floatAnimation}
                                    className="absolute left-0 top-0 w-[55%] rounded-2xl overflow-hidden shadow-2xl"
                                    style={{ boxShadow: "0 20px 60px rgba(40,116,240,0.2)" }}
                                >
                                    <Image
                                        src="/images/hero-1.jpg"
                                        alt="Warehouse worker checking inventory"
                                        width={400}
                                        height={280}
                                        className="w-full h-65 object-cover"
                                        priority
                                    />
                                </motion.div>

                                {/* Image 2 — top right. Custom shadow tint kept inline */}
                                <motion.div
                                    variants={scaleIn}
                                    animate={floatAnimationDelayed}
                                    className="absolute right-0 top-4 w-[42%] rounded-2xl overflow-hidden shadow-xl"
                                    style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.15)" }}
                                >
                                    <Image
                                        src="/images/hero-4.jpg"
                                        alt="Warehouse worker inspecting documents"
                                        width={300}
                                        height={200}
                                        className="w-full h-47 object-cover"
                                    />
                                </motion.div>

                                {/* Image 3 — bottom right */}
                                <motion.div
                                    variants={scaleIn}
                                    animate={floatAnimationSlow}
                                    className="absolute right-4 bottom-0 w-[52%] rounded-2xl overflow-hidden shadow-xl"
                                    style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.15)" }}
                                >
                                    <Image
                                        src="/images/hero-3.jpg"
                                        alt="Diverse warehouse employees working"
                                        width={350}
                                        height={220}
                                        className="w-full h-52 object-cover"
                                    />
                                </motion.div>

                                {/* Image 4 — bottom left overlap. Accent-tinted shadow kept inline */}
                                <motion.div
                                    variants={scaleIn}
                                    animate={{
                                        y: [0, -6, 0],
                                        transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 },
                                    }}
                                    className="absolute left-8 bottom-2 w-[36%] rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-800"
                                    style={{ boxShadow: "0 12px 32px rgba(255,107,53,0.2)" }}
                                >
                                    <Image
                                        src="/images/hero-2.jpg"
                                        alt="Businesswoman using laptop"
                                        width={240}
                                        height={160}
                                        className="w-full h-37 object-cover"
                                    />
                                </motion.div>
                            </div>

                            {/* Stats strip */}
                            <motion.div variants={slideUp} className="mt-6 flex items-center gap-6">
                                {[
                                    { value: "10,000+", label: "Trained Students" },
                                    { value: "51", label: "Cities Covered" },
                                    { value: "Free", label: "Certification" },
                                ].map((stat) => (
                                    <div key={stat.label} className="flex flex-col">
                                        <span className="font-display text-primary text-2xl font-bold">
                                            {stat.value}
                                        </span>
                                        <span className="text-muted text-xs font-medium">
                                            {stat.label}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* ── RIGHT COLUMN — Auth Card ─────────────────────────────────── */}
                        <motion.div
                            variants={scaleIn}
                            initial="hidden"
                            animate="visible"
                            className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
                        >
                            <div className="card p-8">
                                {/* Card header */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                                                <path d="M20 7H4C2.9 7 2 7.9 2 9v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z" />
                                                <path d="M16 7V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2" />
                                            </svg>
                                        </div>
                                        <span className="font-body text-primary text-xs font-bold tracking-widest uppercase">
                                            Flipkart SCOA
                                        </span>
                                    </div>
                                    <h2 className="font-display text-ink text-2xl font-bold">
                                        {activeTab === "login" ? "Welcome back" : "Join the program"}
                                    </h2>
                                    <p className="text-muted text-sm mt-1">
                                        {activeTab === "login"
                                            ? "Sign in to your SCOA portal"
                                            : "Create your free account today"}
                                    </p>
                                </div>

                                {/* Tab switcher */}
                                <div className="flex rounded-xl p-1 mb-6 bg-base">
                                    {(["login", "register"] as Tab[]).map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={cn(
                                                "relative flex-1 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 capitalize",
                                                activeTab === tab ? "text-primary" : "text-muted"
                                            )}
                                        >
                                            {activeTab === tab && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 rounded-lg bg-card"
                                                    style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
                                                    transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                                                />
                                            )}
                                            <span className="relative z-10">
                                                {tab === "login" ? "Sign In" : "Register"}
                                            </span>
                                        </button>
                                    ))}
                                </div>

                                {/* Forms */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: activeTab === "login" ? -16 : 16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: activeTab === "login" ? 16 : -16 }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                    >
                                        {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Mobile images — */}
                                <div className="lg:hidden mt-8 pt-6 border-t border-soft">
                                    <p className="text-muted text-xs text-center font-medium mb-3">
                                        Trusted by 10,000+ students across 51 cities
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="rounded-xl overflow-hidden">
                                            <Image
                                                src="/images/hero-1.jpg"
                                                alt="Warehouse training"
                                                width={200}
                                                height={120}
                                                className="w-full h-24 object-cover"
                                            />
                                        </div>
                                        <div className="rounded-xl overflow-hidden">
                                            <Image
                                                src="/images/hero-3.jpg"
                                                alt="Supply chain training"
                                                width={200}
                                                height={120}
                                                className="w-full h-24 object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer note */}
                            <motion.p
                                variants={fadeIn}
                                initial="hidden"
                                animate="visible"
                                className="text-muted text-center text-xs mt-4"
                            >
                                A Flipkart Initiative · Supported by{" "}
                                <span className="font-semibold">Skill India</span>
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
