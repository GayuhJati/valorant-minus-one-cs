import Layout from "@/components/Layout";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gameName, setGameName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const username = gameName;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      const response = await fetch("/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username, gameName, tagLine }),
      });
      if (!response.ok) {
        throw new Error("Signup failed");
      }
      const data = await response.json();
      if (data.success) {
        alert(data.message || "Signup successful! Please log in.");
        window.location.href = "/login";
      } else {
        console.error("Signup failed:", data);
        alert(data.message || "Signup failed!");
      }
    } catch (error) {
      alert("Error during signup: " + error.message);
    }
  };

  return (
    <Layout>
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-background/80 backdrop-blur-xl shadow-lg rounded-xl p-0 w-full max-w-3xl border border-border relative z-10 flex flex-col md:flex-row overflow-hidden"
        >
          <div className="flex-1 p-10 space-y-8">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
              Sign Up
            </h2>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-base"
              >
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
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="id"
                  className="block mb-2 font-medium text-base"
                >
                  ID
                </label>
                <Input
                  id="id"
                  type="text"
                  value={gameName}
                  onChange={(e) => setGameName(e.target.value)}
                  required
                  placeholder="Enter your game ID"
                  className="text-base py-2"
                />
              </div>
              <div className="w-32">
                <label
                  htmlFor="tag"
                  className="block mb-2 font-medium text-base"
                >
                  Tag
                </label>
                <Input
                  id="tag"
                  type="text"
                  value={tagLine}
                  onChange={(e) => setTagLine(e.target.value)}
                  required
                  placeholder="#1234"
                  className="text-base py-2"
                />
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block mb-2 font-medium text-base"
              >
                Password
              </label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Create a password"
                className="text-base py-2 pr-16"
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-3 top-11 text-xs text-muted-foreground focus:outline-none underline"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="relative">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 font-medium text-base"
              >
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your password"
                className="text-base py-2 pr-16"
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-3 top-11 text-xs text-muted-foreground focus:outline-none underline"
                onClick={() => setShowConfirmPassword((v) => !v)}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            <Button
              type="submit"
              variant="hero"
              className="w-full mt-6 text-base py-2"
            >
              Sign Up
            </Button>
            <div className="mt-6 text-center">
              <span className="text-sm text-foreground/70">
                Sudah punya akun?{" "}
              </span>
              <a
                href="/login"
                className="text-sm text-primary font-semibold hover:underline"
              >
                Login
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-col justify-center items-center w-80 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-800 to-neutral-900 opacity-80 z-0" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-10">
              <h3 className="text-2xl font-extrabold mb-2 text-white drop-shadow">
                Join the Fun!
              </h3>
              <p className="text-base text-white/90 text-center font-medium drop-shadow">
                Create your account and start playing with friends. Experience
                the excitement together!
              </p>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
