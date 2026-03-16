"use client";

import { motion, MotionProps } from "framer-motion";
import { fadeIn, slideUp, scaleIn } from "@/src/lib/animations";
import { ReactNode } from "react";

type AnimationType = "fadeIn" | "slideUp" | "scaleIn";

interface FadeInProps extends Omit<MotionProps, "variants"> {
    children: ReactNode;
    type?: AnimationType;
    delay?: number;
    className?: string;
}

const variantMap = {
    fadeIn,
    slideUp,
    scaleIn,
};

// Reusable animation wrapper component.
// Wraps children with framer-motion animation.

export default function FadeIn({
    children,
    type = "fadeIn",
    delay = 0,
    className,
    ...props
}: FadeInProps) {
    const variants = variantMap[type];

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
