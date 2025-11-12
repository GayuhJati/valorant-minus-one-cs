import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type User = {
  id: number;
  email: string;
  username: string;
  riotId: string;
  role: string;
  provider: string;
  emailVerified: boolean;
  lastLogin: string;
  createdAt: string;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Chat", href: "/chat" },
    { name: "Board", href: "/board" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img src="/asset/logo2.png" className="h-8" alt="Logo" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium uppercase text-sm tracking-wider"
              >
                {link.name}
              </a>
            ))}
            {user ? (
              <div className="relative">
                <button
                  className="text-foreground font-semibold text-sm px-2 py-1 rounded hover:bg-accent transition focus:outline-none uppercase"
                  onClick={() => setShowDropdown((prev) => !prev)}
                >
                  {user.riotId.toUpperCase()}
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-32 bg-background border border-border rounded shadow-lg z-50 animate-fade-in">
                    <button
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-slate-950 rounded"
                      onClick={() => {
                        localStorage.removeItem("user");
                        window.location.href = "/login";
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <a href="/login">
                <Button variant="hero" size="sm">
                  Login
                </Button>
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border mt-2 pt-4 pb-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-foreground/80 hover:text-primary transition-colors duration-200 font-medium uppercase text-sm tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {user ? (
              <div className="relative w-full flex justify-center">
                <button
                  className="block text-foreground font-semibold text-sm w-full text-center px-2 py-1 rounded hover:bg-accent transition focus:outline-none uppercase"
                  onClick={() => setShowDropdown((prev) => !prev)}
                >
                  {user.riotId.toUpperCase()}
                </button>
                {showDropdown && (
                  <div className="absolute right-0 left-0 mx-auto mt-2 w-32 bg-background border border-border rounded shadow-lg z-50 animate-fade-in">
                    <button
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-slate-950 rounded"
                      onClick={() => {
                        localStorage.removeItem("user");
                        window.location.href = "/login";
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <a href="/login">
                <Button variant="hero" size="sm" className="w-full">
                  Login
                </Button>
              </a>
            )}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
