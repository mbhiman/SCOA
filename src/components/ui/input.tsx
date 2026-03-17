"use client";

import { cn } from "@/src/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}


// Reusable input component with label, icon, and error state support.

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, icon, className, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1.5">
                {label && (
                    <label className="text-ink text-sm font-medium">
                        {label}
                    </label>
                )}
                <div className="relative">
                    {icon && (
                        <span className="text-muted absolute left-3.5 top-1/2 -translate-y-1/2">
                            {icon}
                        </span>
                    )}
                    <input
                        ref={ref}
                        className={cn(
                            "input-field",
                            icon && "pl-10",
                            error && "border-red-500 focus:ring-red-200",
                            className
                        )}
                        {...props}
                    />
                </div>
                {error && (
                    <p className="text-xs text-red-500 mt-0.5">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";
export default Input;
