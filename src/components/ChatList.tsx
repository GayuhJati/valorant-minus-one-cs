import React, { useState } from "react";
import { Search, CheckCheck, Pin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatItem {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
  isRead?: boolean;
  isPinned?: boolean;
}

const mockChats: ChatItem[] = [
  {
    id: "1",
    name: "Design chat",
    avatar: "DC",
    lastMessage: "Jessie Rollins sent...",
    time: "4m",
    unread: 1,
    isPinned: true,
  },
  {
    id: "2",
    name: "Osman Campos",
    avatar: "OC",
    lastMessage: "You: Hey! We are read...",
    time: "20m",
    isRead: true,
    isPinned: true,
  },
  {
    id: "3",
    name: "Jayden Church",
    avatar: "JC",
    lastMessage: "I prepared some varia...",
    time: "1h",
    isPinned: true,
  },
  {
    id: "4",
    name: "Jacob Mcleod",
    avatar: "JM",
    lastMessage: "And send me the proto...",
    time: "10m",
    unread: 3,
  },
  {
    id: "5",
    name: "Jasmin Lowery",
    avatar: "JL",
    lastMessage: "You: Ok! Let's discuss it on th...",
    time: "20m",
    isRead: true,
  },
  {
    id: "6",
    name: "Zaid Myers",
    avatar: "ZM",
    lastMessage: "You: Hey! We are ready to in...",
    time: "45m",
    isRead: true,
  },
  {
    id: "7",
    name: "Anthony Cordanes",
    avatar: "AC",
    lastMessage: "What do you think?",
    time: "1d",
  },
  {
    id: "8",
    name: "Conner Garcia",
    avatar: "CG",
    lastMessage: "You: I think it would be perfe...",
    time: "2d",
    isRead: true,
  },
  {
    id: "9",
    name: "Vanessa Cox",
    avatar: "VC",
    lastMessage: "Voice message",
    time: "2d",
    isRead: true,
  },
];

export default function ChatList() {
  const [search, setSearch] = useState("");
  const filteredChats = mockChats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(search.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="w-96 bg-[hsl(var(--chat-list-bg))] dark:bg-card flex flex-col border-r">
      {/* Search */}
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="pl-10 bg-white dark:bg-background/50 border-none text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-3 p-4 hover:bg-[hsl(var(--chat-list-item-hover))] dark:hover:bg-muted/50 cursor-pointer transition-colors border-b border-border/50"
          >
            <Avatar className="w-12 h-12">
              <AvatarImage src={chat.avatar} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {chat.avatar}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-sm text-foreground truncate">
                  {chat.name}
                </h3>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  {chat.time}
                  {chat.isPinned && <Pin className="w-3 h-3 fill-current" />}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground truncate flex items-center gap-1">
                  {chat.isRead && <CheckCheck className="w-4 h-4 text-blue-500" />}
                  {chat.lastMessage}
                </p>
                {chat.unread && (
                  <Badge className="bg-orange-500 text-white text-xs h-5 min-w-[20px] flex items-center justify-center">
                    {chat.unread}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
