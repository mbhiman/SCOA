"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, slideUp } from "@/src/lib/animations";
import Input from "@/src/components/ui/input";
import Button from "@/src/components/ui/button";

/*
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.2 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

*/


/**
 * LoginForm — handles mobile, password, OTP inputs with validation-ready structure.
 */
export default function LoginForm() {
    const [form, setForm] = useState({ mobile: "", password: "", otp: "" });
    const [errors, setErrors] = useState<Partial<typeof form>>({});
    const [loading, setLoading] = useState(false);
    const [otpSent, setOtpSent] = useState(false);

    const validate = () => {
        const e: Partial<typeof form> = {};
        if (!form.mobile || !/^[6-9]\d{9}$/.test(form.mobile))
            e.mobile = "Enter a valid 10-digit mobile number";
        if (!form.password || form.password.length < 6)
            e.password = "Password must be at least 6 characters";
        if (otpSent && !form.otp)
            e.otp = "Please enter the OTP sent to your mobile";
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

    const handleSendOtp = () => {
        if (!/^[6-9]\d{9}$/.test(form.mobile)) {
            setErrors({ mobile: "Enter a valid mobile number first" });
            return;
        }
        setOtpSent(true);
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
                    label="Mobile Number"
                    placeholder="10-digit mobile number"
                    type="tel"
                    maxLength={10}
                    // icon={<PhoneIcon />}
                    value={form.mobile}
                    onChange={(e) => {
                        setForm({ ...form, mobile: e.target.value });
                        setErrors({ ...errors, mobile: "" });
                    }}
                    error={errors.mobile}
                />
            </motion.div>

            <motion.div variants={slideUp}>
                <Input
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    // icon={<LockIcon />}
                    value={form.password}
                    onChange={(e) => {
                        setForm({ ...form, password: e.target.value });
                        setErrors({ ...errors, password: "" });
                    }}
                    error={errors.password}
                />
            </motion.div>

            <motion.div variants={slideUp} className="flex flex-col gap-1.5">
                <div className="flex items-end gap-2">
                    <div className="flex-1">
                        <Input
                            label="OTP"
                            placeholder="6-digit OTP"
                            type="text"
                            maxLength={6}
                            // icon={<KeyIcon />}
                            value={form.otp}
                            onChange={(e) => {
                                setForm({ ...form, otp: e.target.value });
                                setErrors({ ...errors, otp: "" });
                            }}
                            error={errors.otp}
                        />
                    </div>
                    <button
                        onClick={handleSendOtp}
                        className="mb-0.5 text-xs font-semibold text-primary whitespace-nowrap hover:underline px-1 py-3 transition-colors"
                        type="button"
                    >
                        {otpSent ? "Resend OTP" : "Send OTP"}
                    </button>
                </div>
                {otpSent && (
                    <p className="text-xs text-green-600 dark:text-green-400">
                        ✓ OTP sent to +91 {form.mobile}
                    </p>
                )}
            </motion.div>

            <motion.div variants={slideUp} className="pt-1">
                <Button fullWidth loading={loading} onClick={handleSubmit}>
                    Sign In
                </Button>
            </motion.div>

            <motion.div variants={slideUp} className="text-center">
                <a
                    href="#"
                    className="text-sm font-medium text-primary hover:underline"
                >
                    Forgot password?
                </a>
            </motion.div>
        </motion.div>
    );
}
