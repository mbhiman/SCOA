"use client";

import { motion } from "framer-motion";
import { buttonHover, buttonTap } from "@/src/lib/animations";
import { cn } from "@/src/lib/utils";
import { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    children: ReactNode;
    fullWidth?: boolean;
    loading?: boolean;
}

const variantClasses: Record<Variant, string> = {
    primary: "btn-primary",
    ghost: "btn-ghost",
    outline:
        "btn border border-[#2874F0] text-[#2874F0] hover:bg-[#2874F0] hover:text-white px-6 py-3",
};

const sizeClasses: Record<Size, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
};

export default function Button({
    variant = "primary",
    size = "md",
    children,
    fullWidth = false,
    loading = false,
    className,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <motion.button
            whileHover={!disabled && !loading ? buttonHover : undefined}
            whileTap={!disabled && !loading ? buttonTap : undefined}
            className={cn(
                "btn",
                variantClasses[variant],
                variant !== "outline" && sizeClasses[size],
                fullWidth && "w-full",
                (disabled || loading) && "opacity-60 cursor-not-allowed",
                className
            )}
            disabled={disabled || loading}
            {...(props as any)}
        >
            {loading ? (
                <span className="flex items-center gap-2">
                    <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                    </svg>
                    {children}
                </span>
            ) : (
                children
            )}
        </motion.button>
    );
}
