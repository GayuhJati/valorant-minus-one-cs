import Layout from '@/components/Layout'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
    const response = await fetch('/api/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    const data = await response.json();
    if (data.success) {
      localStorage.setItem('accessToken', data.data.accessToken);
      localStorage.setItem('refreshToken', data.data.refreshToken);
      localStorage.setItem('user', JSON.stringify(data.data.user));
      alert(data.message || 'Login berhasil!');
      window.location.href = '/';
    } else {
      console.error('Login failed:', data);
      alert(data.message || 'Login gagal!');
    }
  } catch (error) {
    alert('Error during login: ' + error.message);
  }
  }

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
          className="bg-background/80 backdrop-blur-xl shadow-lg rounded-xl p-0 w-full max-w-2xl border border-border relative z-10 flex flex-col md:flex-row overflow-hidden"
        >
          <div className="flex-1 p-10 space-y-8">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Login</h2>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-base">Email</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="text-base py-2"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 font-medium text-base">Password</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="text-base py-2"
              />
              <div className="mt-1 text-right">
                <a href="/forgot-password" className="text-xs text-primary font-semibold hover:underline">Forgot password?</a>
              </div>
            </div>
            <Button type="submit" variant="hero" className="w-full mt-6 text-base py-2">
              Login
            </Button>
            <div className="mt-6 text-center">
              <span className="text-sm text-foreground/70">Don't have an account? </span>
              <a href="/signup" className="text-sm text-primary font-semibold hover:underline">Sign Up</a>
            </div>
          </div>
          <div className="hidden md:flex flex-col justify-center items-center w-80 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-800 to-neutral-900 opacity-80 z-0" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-10">
              <h3 className="text-2xl font-extrabold mb-2 text-white drop-shadow">Welcome Back!</h3>
              <p className="text-base text-white/90 text-center font-medium drop-shadow">Login to your account to play with your friends and enjoy the game together.</p>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login