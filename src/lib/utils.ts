import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merges Tailwind classes safely, resolving conflicts.
// Use this wherever conditional class logic is needed.

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}
