import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token") || "";
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      setStatus("error");
      setMessage("Password minimal 8 karakter.");
      return;
    }
    if (password !== confirm) {
      setStatus("error");
      setMessage("Password tidak sama.");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/v1/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newPassword: password,
          confirmPassword: confirm,
          token
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setMessage(data.message || "Password berhasil direset. Silakan login dengan password baru.");
      } else {
        setStatus("error");
        setMessage(data.message || "Gagal reset password.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Terjadi kesalahan. Silakan coba lagi nanti.");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="bg-background/80 backdrop-blur-xl shadow-2xl rounded-2xl p-10 w-full max-w-md border border-border relative z-10 animate-fade-in"
        >
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" className="w-16 h-16 animate-fade-in">
              <rect width="48" height="48" rx="16" fill="url(#grad)" />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ef4444" />
                  <stop offset="1" stopColor="#b91c1c" />
                </linearGradient>
              </defs>
              <path d="M24 16v8m0 8h.01" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold mb-2 text-center tracking-tight">Reset Password</h2>
          <p className="text-center text-muted-foreground mb-7 text-base">Masukkan password baru untuk akun kamu.</p>
          {status !== "success" && (
            <>
              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 font-medium text-base">New Password</label>
                <div className="relative">
                  <Input
                    id="password"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    minLength={8}
                    placeholder="Password baru"
                    className="text-base py-2 pr-20"
                    disabled={status === "loading"}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-semibold"
                    onClick={() => setShow(v => !v)}
                    tabIndex={-1}
                  >
                    {show ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div className="mb-7">
                <label htmlFor="confirm" className="block mb-2 font-medium text-base">Confirm Password</label>
                <div className="relative">
                  <Input
                    id="confirm"
                    type={show2 ? "text" : "password"}
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)}
                    required
                    minLength={8}
                    placeholder="Ulangi password baru"
                    className="text-base py-2 pr-20"
                    disabled={status === "loading"}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-semibold"
                    onClick={() => setShow2(v => !v)}
                    tabIndex={-1}
                  >
                    {show2 ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <Button
                type="submit"
                variant="hero"
                className="w-full text-base py-2 font-semibold tracking-wide"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Menyimpan..." : "Reset Password"}
              </Button>
            </>
          )}
          {status === "success" && (
            <div className="mt-8 flex flex-col items-center animate-fade-in">
              <div className="rounded-xl p-6 flex flex-col items-center shadow ">
                <svg className="w-12 h-12 mb-2" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" fill="#22c55e" opacity="0.18" />
                  <path d="M16 25l6 6 10-14" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-[22px] font-bold text-center mb-1 text-green-700">Berhasil!</div>
                <div className="text-base text-center text-white">{message}</div>
              </div>
            </div>
          )}
          {status === "error" && (
            <div className="mt-8 flex flex-col items-center animate-fade-in">
              <div className="rounded-xl p-6 flex flex-col items-center shadow ">
                <svg className="w-12 h-12 mb-2" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" fill="#ef4444" opacity="0.18" />
                  <path d="M18 18l12 12M30 18l-12 12" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-[22px] font-bold text-center mb-1 text-red-700">Gagal!</div>
                <div className="text-base text-center text-red-600">{message}</div>
              </div>
            </div>
          )}
        </form>
      </div>
      <style>{`
        .animate-fade-in { animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(24px);} to { opacity: 1; transform: none; } }
      `}</style>
    </Layout>
  );
};

export default ResetPassword;
