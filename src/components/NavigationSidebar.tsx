import { MessageSquare, Briefcase, Users, Newspaper, Archive, User, Edit, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NavItem {
  icon: React.ElementType;
  label: string;
  badge?: number;
}

const navItems: NavItem[] = [
  { icon: MessageSquare, label: "All chats", badge: 38 },
  { icon: Briefcase, label: "Work", badge: 41 },
  { icon: Users, label: "Friends" },
  { icon: Newspaper, label: "News" },
  { icon: Archive, label: "Archive chats" },
];

const bottomItems: NavItem[] = [
  { icon: User, label: "Profile" },
  { icon: Edit, label: "Edit" },
  { icon: LogOut, label: "Log out" },
];

export default function NavigationSidebar() {
  return (
    <div className="w-20 bg-[hsl(var(--chat-nav-bg))] flex flex-col items-center py-6 space-y-6">
      {/* Logo */}
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
        <div className="text-black font-bold text-xl">△</div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 flex flex-col items-center space-y-4">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="relative w-12 h-12 text-gray-400 hover:text-white hover:bg-white/10"
          >
            <item.icon className="w-6 h-6" />
            {item.badge && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-orange-500 text-white text-xs">
                {item.badge}
              </Badge>
            )}
          </Button>
        ))}
      </div>

      {/* Bottom Items */}
      <div className="flex flex-col items-center space-y-4 border-t border-white/10 pt-4">
        {bottomItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="w-12 h-12 text-gray-400 hover:text-white hover:bg-white/10"
          >
            <item.icon className="w-6 h-6" />
          </Button>
        ))}
      </div>
    </div>
  );
}
