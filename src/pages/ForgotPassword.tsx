import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EmailIcon = () => (
  <div className="flex justify-center mb-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      className="w-16 h-16 text-primary drop-shadow-lg animate-fade-in"
    >
      <rect width="48" height="48" rx="16" fill="url(#grad)" />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ef4444" />
          <stop offset="1" stopColor="#b91c1c" />
        </linearGradient>
      </defs>
      <path
        d="M12 18a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V18zm2.5-.5 9.5 7 9.5-7"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  </div>
);

const SuccessCard = ({ message }: { message: string }) => (
  <div className="mt-8 border-muted rounded-xl p-6 flex flex-col items-center shadow animate-fade-in">
    <svg className="w-10 h-10 text-green-500 mb-2 animate-bounce" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#22c55e" fillOpacity="0.15" />
      <path d="M7 13l3 3 7-7" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <div className="text-green-700 font-semibold text-lg text-center mb-1">Success!</div>
    <div className="text-white text-center text-base">{message}</div>
  </div>
);

const ErrorCard = ({ message }: { message: string }) => (
  <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6 flex flex-col items-center shadow animate-fade-in">
    <svg className="w-10 h-10 text-red-500 mb-2 animate-shake" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#ef4444" fillOpacity="0.15" />
      <path d="M15 9l-6 6M9 9l6 6" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <div className="text-red-700 font-semibold text-lg text-center mb-1">Failed!</div>
    <div className="text-red-600 text-center text-base">{message}</div>
  </div>
);

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/v1/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setMessage(data.message || "A password reset link has been sent to your email.");
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to send password reset email.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center duration-500">
        <form
          onSubmit={handleSubmit}
          className="bg-background/80 backdrop-blur-xl shadow-2xl rounded-2xl p-10 w-full max-w-md border border-border relative z-10 animate-fade-in"
        >
          <EmailIcon />
          <h2 className="text-3xl font-extrabold mb-2 text-center tracking-tight">Forgot Password</h2>
          <p className="text-center text-muted-foreground mb-7 text-base">
            Enter your account email and we will send you a password reset link.
          </p>
          {status !== "success" && (
            <>
              <div className="mb-7">
                <label htmlFor="email" className="block mb-2 font-medium text-base">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="text-base py-2"
                  disabled={status === "loading"}
                  autoFocus
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                className="w-full text-base py-2 font-semibold tracking-wide"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Reset Link"}
              </Button>
            </>
          )}
          {status === "success" && (
            <div className="mt-8 flex flex-col items-center animate-fade-in">
              <SuccessCard message={message} />
              <div className="mt-4 text-base text-center text-muted-foreground">
                Email sent to{" "}
                <span className="font-semibold text-primary break-all">{email}</span>
              </div>
            </div>
          )}
          {status === "error" && <ErrorCard message={message} />}
        </form>
      </div>
      <style>{`
        .animate-fade-in { animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(24px);} to { opacity: 1; transform: none; } }
        .animate-bounce { animation: bounce 1.2s infinite alternate; }
        @keyframes bounce { 0% { transform: translateY(0); } 100% { transform: translateY(-8px); } }
        .animate-shake { animation: shake 0.5s; }
        @keyframes shake { 0% { transform: translateX(0); } 20% { transform: translateX(-4px); } 40% { transform: translateX(4px); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } 100% { transform: translateX(0); } }
      `}</style>
    </Layout>
  );
};

export default ForgotPassword;
