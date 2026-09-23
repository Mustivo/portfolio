"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please provide a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error on type
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      // Optional custom Formspree key via environment variable:
      const formspreeKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY;

      if (formspreeKey) {
        const response = await fetch(`https://formspree.io/f/${formspreeKey}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Unable to send message via form endpoint.");
        }
      } else {
        // Simulated responsive submission when no Formspree ID is injected in dev
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      const errorText =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or email directly.";
      setErrorMessage(errorText);
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 text-center space-y-4 backdrop-blur-md">
        <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Message Sent Successfully!
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
            Thank you for reaching out. I review all inquiries within 24 hours and will get back to you promptly.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 px-5 py-2.5 rounded-xl text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100/70 hover:bg-emerald-200/70 dark:bg-emerald-900/40 dark:hover:bg-emerald-900/70 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-sm space-y-5"
    >
      {status === "error" && (
        <div className="p-4 rounded-xl border border-red-500/30 bg-red-50/70 dark:bg-red-950/30 text-red-700 dark:text-red-400 flex items-start gap-3 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Failed to send message</p>
            <p className="text-xs mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Name & Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="contact-name"
            className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all duration-150 bg-white/80 dark:bg-slate-950/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-500 focus:ring-red-500/30"
                : "border-slate-200 dark:border-slate-800 focus:border-sky-500 focus:ring-sky-500/20"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-600 dark:text-red-400 font-medium">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label
            htmlFor="contact-email"
            className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all duration-150 bg-white/80 dark:bg-slate-950/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-500/30"
                : "border-slate-200 dark:border-slate-800 focus:border-sky-500 focus:ring-sky-500/20"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 dark:text-red-400 font-medium">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <label
          htmlFor="contact-subject"
          className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
        >
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="New Project Inquiry / Full-time Role"
          required
          aria-required="true"
          aria-invalid={!!errors.subject}
          className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all duration-150 bg-white/80 dark:bg-slate-950/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 ${
            errors.subject
              ? "border-red-500 focus:ring-red-500/30"
              : "border-slate-200 dark:border-slate-800 focus:border-sky-500 focus:ring-sky-500/20"
          }`}
        />
        {errors.subject && (
          <p className="text-xs text-red-600 dark:text-red-400 font-medium">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Hi Alex, I'd like to discuss our upcoming Next.js web application..."
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-150 bg-white/80 dark:bg-slate-950/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 resize-y ${
            errors.message
              ? "border-red-500 focus:ring-red-500/30"
              : "border-slate-200 dark:border-slate-800 focus:border-sky-500 focus:ring-sky-500/20"
          }`}
        />
        {errors.message && (
          <p className="text-xs text-red-600 dark:text-red-400 font-medium">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950 shadow-md shadow-sky-500/10 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all duration-200"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
