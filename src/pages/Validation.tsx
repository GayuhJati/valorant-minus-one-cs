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
      setMessage("Token not found.");
      return;
    }
    fetch(`/api/v1/auth/verify-email?token=${token}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus("success");
          setMessage(data.message || "Email successfully verified!");
        } else {
          setStatus("error");
          setMessage(data.message || "Verification failed.");
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage("An error occurred during verification.");
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
              <h2 className="text-xl font-bold mb-2">Verifying email...</h2>
              <p className="text-base text-muted-foreground">Please wait a moment.</p>
            </>
          )}
          {status === "success" && (
            <div className="flex flex-col items-center animate-fade-in">
              <svg className="w-16 h-16 mb-4 text-green-500 animate-bounce" fill="none" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="22" fill="#22c55e" fillOpacity="0.18" />
                <path d="M16 25l6 6 10-14" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2 className="text-3xl font-bold text-green-700 mb-2 text-center">Email Verified!</h2>
              <p className="text-lg text-center text-green-700 mb-4">Your email has been successfully verified. You can now login.</p>
              <a href="/login">
                <Button variant="hero" className="w-full">Login</Button>
              </a>
            </div>
          )}
          {status === "error" && (
            <div className="flex flex-col items-center animate-fade-in">
              <svg className="w-16 h-16 mb-4 text-red-500 animate-shake" fill="none" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="22" fill="#ef4444" fillOpacity="0.18" />
                <path d="M18 18l12 12M30 18l-12 12" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2 className="text-3xl font-bold text-red-700 mb-2 text-center">Verification Failed</h2>
              <p className="text-lg text-center text-red-600 mb-4">The verification link is invalid or has expired.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Validation;
