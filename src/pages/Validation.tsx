import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Validation = () => {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (!token) {
      setStatus("error");
      setMessage("Token tidak ditemukan.");
      return;
    }
    fetch(`/api/v1/auth/verify-email?token=${token}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus("success");
          setMessage(data.message || "Email berhasil diverifikasi!");
        } else {
          setStatus("error");
          setMessage(data.message || "Verifikasi gagal.");
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage("Terjadi kesalahan saat verifikasi.");
      });
  }, []);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="bg-background p-10 rounded-2xl shadow-2xl text-center border border-border max-w-md w-full animate-fadeIn">
          {status === "loading" && (
            <>
              <div className="flex justify-center mb-4 animate-spin-slow">
                <svg className="w-14 h-14 text-primary" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-2">Memverifikasi email...</h2>
              <p className="text-base text-muted-foreground">Mohon tunggu sebentar.</p>
            </>
          )}
          {status === "success" && (
            <>
              <div className="flex justify-center mb-4 animate-pop">
                <svg className="w-16 h-16 text-green-500" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1" />
                  <path d="M8 12.5l2.5 2.5L16 9.5" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold text-green-600 mb-2">Verifikasi Berhasil!</h2>
              <p className="text-base text-green-700 mb-4">{message}</p>
              <a href="/login">
                <Button variant="hero" className="w-full">Login</Button>
              </a>
            </>
          )}
          {status === "error" && (
            <>
              <div className="flex justify-center mb-4 animate-pop">
                <svg className="w-16 h-16 text-red-500" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1" />
                  <path d="M15 9l-6 6M9 9l6 6" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold text-red-600 mb-2">Verifikasi Gagal</h2>
              <p className="text-base text-red-700">{message}</p>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Validation;
