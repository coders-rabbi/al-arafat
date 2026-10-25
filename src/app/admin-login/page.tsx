"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { adminLogin } from "@/service/auth";
import { Hind_Siliguri } from "next/font/google";

const body = Hind_Siliguri({
  subsets: ["latin", "bengali"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const display = body; // heading এও একই font

type TLoginForm = {
  email: string;
  password: string;
  remember: boolean;
};

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="8" width="24" height="24" />
        <rect x="8" y="8" width="24" height="24" transform="rotate(45 20 20)" />
      </g>
      <circle cx="20" cy="20" r="3" fill="currentColor" />
    </svg>
  );
}

export default function AdminLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLoginForm>({
    defaultValues: { email: "", password: "", remember: false },
  });

  async function onSubmit({ email, password }: TLoginForm) {
    setServerError("");

    try {
      const res = await adminLogin({ email, password });

      if (!res?.success) {
        throw new Error(
          res?.message ||
            "Email or password is incorrect. Check both and try again.",
        );
      }

      router.push("/dashboard");
    } catch (err) {
      setServerError(
        err instanceof Error
          ? err.message
          : "Could not sign in. Check your connection and try again.",
      );
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full rounded-md border bg-white px-3.5 py-2.5 text-[15px] text-stone-900 placeholder:text-stone-400 outline-none transition focus:ring-2 ${
      hasError
        ? "border-red-400 focus:border-red-600 focus:ring-red-600/20"
        : "border-stone-300 focus:border-emerald-800 focus:ring-emerald-800/25"
    }`;

  return (
    <main
      className={`${body.className} grid min-h-screen bg-white lg:grid-cols-[1.05fr_1fr]`}
    >
      {/* Brand panel */}
      <section className="relative hidden overflow-hidden bg-[#0F2E2A] text-white lg:flex lg:flex-col lg:justify-between lg:p-14">
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <pattern
              id="star"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <g
                fill="none"
                stroke="#C9A24B"
                strokeOpacity="0.2"
                strokeWidth="1"
              >
                <rect x="14" y="14" width="36" height="36" />
                <rect
                  x="14"
                  y="14"
                  width="36"
                  height="36"
                  transform="rotate(45 32 32)"
                />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#star)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E2A] via-[#0F2E2A]/70 to-transparent" />

        <div className="relative flex items-center gap-3 text-[#D9B45E]">
          <BrandMark className="h-9 w-9" />
          <span
            className={`${display.className} text-xl font-semibold text-white`}
          >
            Al Arafat Foundation
          </span>
        </div>

        <div className="relative max-w-md">
          <h2
            className={`${display.className} text-4xl font-medium leading-tight`}
          >
            Every record, in one trusted place.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-emerald-50/75">
            Manage donors, programs and reports for the foundation. This area is
            for authorized administrators only.
          </p>
        </div>
      </section>

      {/* Form panel */}
      <section className="flex items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-sm">
          <div className="mb-10 flex items-center gap-2.5 text-[#0F2E2A] lg:hidden">
            <BrandMark className="h-8 w-8" />
            <span className={`${display.className} text-lg font-semibold`}>
              Al Arafat Foundation
            </span>
          </div>

          <h1
            className={`${display.className} text-3xl font-semibold text-stone-900`}
          >
            Admin sign in
          </h1>
          <p className="mt-2 text-[15px] text-stone-600">
            Use your admin account to continue.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-5"
            noValidate
          >
            {serverError && (
              <div
                role="alert"
                aria-live="polite"
                className="rounded-md border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-800"
              >
                {serverError}
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-stone-800"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="username"
                placeholder="admin@alarafat.org"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={inputClass(!!errors.email)}
                {...register("email", {
                  required: "Enter your email address.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address.",
                  },
                })}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-sm text-red-700">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-stone-800"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  aria-invalid={!!errors.password}
                  aria-describedby={
                    errors.password ? "password-error" : undefined
                  }
                  className={`${inputClass(!!errors.password)} pr-16`}
                  {...register("password", {
                    required: "Enter your password.",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters.",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-pressed={showPassword}
                  className="absolute inset-y-0 right-0 rounded-md px-3.5 text-sm font-medium text-emerald-900 outline-none hover:text-emerald-700 focus-visible:ring-2 focus-visible:ring-emerald-800/40"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p id="password-error" className="mt-1.5 text-sm text-red-700">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex cursor-pointer items-center gap-2 text-stone-700">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-stone-300 accent-emerald-900"
                  {...register("remember")}
                />
                Keep me signed in
              </label>
              <a
                href="/admin/forgot-password"
                className="font-medium text-emerald-900 underline-offset-4 hover:underline focus-visible:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[#0F2E2A] px-4 py-3 text-[15px] font-semibold text-white outline-none transition hover:bg-[#164540] focus-visible:ring-2 focus-visible:ring-[#C9A24B] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white motion-reduce:animate-none" />
              )}
              {isSubmitting ? "Signing in" : "Sign in"}
            </button>
          </form>

          <p className="mt-10 text-xs text-stone-500">
            © {new Date().getFullYear()} Al Arafat Foundation
          </p>
        </div>
      </section>
    </main>
  );
}
