"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, slideUp } from "@/src/lib/animations";
import Input from "@/src/components/ui/input";
import Button from "@/src/components/ui/button";

/*
function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.2 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  );
}

*/


/**
 * RegisterForm — name, mobile, password with validation-ready structure.
 */
export default function RegisterForm() {
    const [form, setForm] = useState({ name: "", mobile: "", password: "", confirmPassword: "" });
    const [errors, setErrors] = useState<Partial<typeof form>>({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const e: Partial<typeof form> = {};
        if (!form.name || form.name.trim().length < 2)
            e.name = "Please enter your full name";
        if (!form.mobile || !/^[6-9]\d{9}$/.test(form.mobile))
            e.mobile = "Enter a valid 10-digit mobile number";
        if (!form.password || form.password.length < 8)
            e.password = "Password must be at least 8 characters";
        if (form.password !== form.confirmPassword)
            e.confirmPassword = "Passwords do not match";
        return e;
    };

    const handleSubmit = async () => {
        const e = validate();
        if (Object.keys(e).length) return setErrors(e);
        setLoading(true);
        // TODO: connect to API
        await new Promise((r) => setTimeout(r, 1500));
        setLoading(false);
    };

    const update = (field: keyof typeof form, value: string) => {
        setForm({ ...form, [field]: value });
        setErrors({ ...errors, [field]: "" });
    };

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4"
        >
            <motion.div variants={slideUp}>
                <Input
                    label="Full Name"
                    placeholder="Your full name"
                    type="text"
                    // icon={<UserIcon />}
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    error={errors.name}
                />
            </motion.div>

            <motion.div variants={slideUp}>
                <Input
                    label="Mobile Number"
                    placeholder="10-digit mobile number"
                    type="tel"
                    maxLength={10}
                    // icon={<PhoneIcon />}
                    value={form.mobile}
                    onChange={(e) => update("mobile", e.target.value)}
                    error={errors.mobile}
                />
            </motion.div>

            <motion.div variants={slideUp}>
                <Input
                    label="Password"
                    placeholder="Minimum 8 characters"
                    type="password"
                    // icon={<LockIcon />}
                    value={form.password}
                    onChange={(e) => update("password", e.target.value)}
                    error={errors.password}
                />
            </motion.div>

            <motion.div variants={slideUp}>
                <Input
                    label="Confirm Password"
                    placeholder="Re-enter your password"
                    type="password"
                    // icon={<LockIcon />}
                    value={form.confirmPassword}
                    onChange={(e) => update("confirmPassword", e.target.value)}
                    error={errors.confirmPassword}
                />
            </motion.div>

            <motion.div variants={slideUp} className="pt-1">
                <Button fullWidth loading={loading} onClick={handleSubmit}>
                    Create Account
                </Button>
            </motion.div>

            <motion.div variants={slideUp}>
                <p className="text-muted text-xs text-center">
                    By registering, you agree to our{" "}
                    <a href="#" className="text-primary hover:underline">Terms</a>{" "}
                    &{" "}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </p>
            </motion.div>
        </motion.div>
    );
}
