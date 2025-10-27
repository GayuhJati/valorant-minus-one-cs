import React from "react";
import { MessageSquare, Briefcase, Users, Newspaper, Archive, User, Edit, LogOut, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
	{ name: "Home", href: "/", icon: Home },
	{ name: "Chat", href: "/chat", icon: MessageSquare },
	{ name: "Board", href: "/board", icon: Briefcase },
];

const navItems = [
	{ icon: Users, label: "Friends" },
];

const bottomItems = [
	{ icon: User, label: "Profile" },
	{ icon: LogOut, label: "Log out" },
];

interface NavigationSidebarProps {
  onProfileClick?: () => void;
}

export default function NavigationSidebar({ onProfileClick }: NavigationSidebarProps) {
  return (
    <aside className="hidden md:flex flex-col w-20 h-screen bg-background/80 border-r border-border shadow-lg backdrop-blur-xl items-center py-6 space-y-6">
      {/* Logo */}
      <img src="/asset/logo2.png" className="h-8" alt="Logo" />
      {/* Navigation Links */}
      <div className="flex flex-col items-center space-y-4 mb-6">
        {navLinks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="w-12 h-12 flex items-center justify-center rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-colors"
            title={item.name}
          >
            <item.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
      {/* Navigation Items */}
      <div className="flex-1 flex flex-col items-center space-y-4">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="relative w-12 h-12 text-foreground/70 hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/30"
            title={item.label}
          >
            <item.icon className="w-6 h-6" />
          </Button>
        ))}
      </div>
      {/* Bottom Items */}
      <div className="flex flex-col items-center space-y-4 border-t border-border pt-4">
        {bottomItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="w-12 h-12 text-foreground/70 hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/30"
            title={item.label}
            onClick={item.label === "Profile" && onProfileClick ? onProfileClick : undefined}
          >
            <item.icon className="w-6 h-6" />
          </Button>
        ))}
      </div>
    </aside>
  );
}
