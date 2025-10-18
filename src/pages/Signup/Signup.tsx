import Layout from '@/components/Layout'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: handle signup logic
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
          className="bg-background/80 backdrop-blur-xl shadow-lg rounded-xl p-0 w-full max-w-3xl border border-border relative z-10 flex flex-col md:flex-row overflow-hidden"
        >
          <div className="flex-1 p-10 space-y-8">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Sign Up</h2>
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
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="id" className="block mb-2 font-medium text-base">ID</label>
                <Input
                  id="id"
                  type="text"
                  required
                  placeholder="Enter your game ID"
                  className="text-base py-2"
                />
              </div>
              <div className="w-32">
                <label htmlFor="tag" className="block mb-2 font-medium text-base">Tag</label>
                <Input
                  id="tag"
                  type="text"
                  required
                  placeholder="#1234"
                  className="text-base py-2"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 font-medium text-base">Password</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="Create a password"
                className="text-base py-2"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block mb-2 font-medium text-base">Confirm Password</label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your password"
                className="text-base py-2"
              />
            </div>
            <Button type="submit" variant="hero" className="w-full mt-6 text-base py-2">
              Sign Up
            </Button>
            <div className="mt-6 text-center">
              <span className="text-sm text-foreground/70">Sudah punya akun? </span>
              <a href="/login" className="text-sm text-primary font-semibold hover:underline">Login</a>
            </div>
          </div>
          <div className="hidden md:flex flex-col justify-center items-center w-80 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-800 to-neutral-900 opacity-80 z-0" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-10">
              <h3 className="text-2xl font-extrabold mb-2 text-white drop-shadow">Join the Fun!</h3>
              <p className="text-base text-white/90 text-center font-medium drop-shadow">Create your account and start playing with friends. Experience the excitement together!</p>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Signup
