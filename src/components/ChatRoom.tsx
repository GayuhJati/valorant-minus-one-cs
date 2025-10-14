import { Send, Search, Phone, MoreVertical, Paperclip, Mic, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import GroupInfoPanel from "./GroupInfoPanel";

interface Message {
  id: number;
  sender: string;
  text?: string;
  isMine: boolean;
  avatar?: string;
  time: string;
  reactions?: { emoji: string; count: number }[];
  type?: "text" | "image" | "audio";
  imageUrl?: string;
}

// Mock data for display
const mockMessages: Message[] = [
  {
    id: 1,
    sender: "Jasmin Lowery",
    text: "I added new flows to our design system. Now you can use them for your projects!",
    isMine: false,
    avatar: "/placeholder.svg",
    time: "09:20",
    reactions: [{ emoji: "👍", count: 4 }],
  },
  {
    id: 2,
    sender: "Alex Hunt",
    text: "Hey guys! Important news!",
    isMine: false,
    avatar: "/placeholder.svg",
    time: "09:24",
    reactions: [{ emoji: "👀", count: 16 }],
  },
  {
    id: 3,
    sender: "Alex Hunt",
    text: "Our intern @jchurch has successfully completed his probationary period and is now part of our team!",
    isMine: false,
    avatar: "/placeholder.svg",
    time: "09:24",
    reactions: [{ emoji: "🔥", count: 5 }, { emoji: "🎉", count: 4 }],
  },
  {
    id: 4,
    sender: "You",
    text: "Jaden, my congratulations! I will be glad to work with you on a new project 🎉",
    isMine: true,
    time: "09:27",
    reactions: [{ emoji: "👍", count: 10 }],
  },
  {
    id: 5,
    sender: "Jessie Rollins",
    type: "image",
    imageUrl: "/placeholder.svg",
    isMine: false,
    avatar: "/placeholder.svg",
    time: "09:30",
    reactions: [{ emoji: "😍", count: 10 }],
  },
];

export default function ChatRoom() {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-foreground text-xl font-semibold">Design chat</h1>
          <p className="text-sm text-muted-foreground">23 members, 10 online</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Phone className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setShowInfo(!showInfo)}>
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Messages Area */}
        <ScrollArea className="flex-1 px-6 py-4">
          <div className="space-y-6 max-w-3xl">
            {mockMessages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isMine ? "flex-row-reverse" : "flex-row"}`}
              >
                {!message.isMine && (
                  <Avatar className="w-10 h-10 shrink-0">
                    <AvatarImage src={message.avatar} />
                    <AvatarFallback>{message.sender.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                )}

                <div className={`flex flex-col ${message.isMine ? "items-end" : "items-start"} max-w-md`}>
                  {!message.isMine && (
                    <span className="text-sm font-medium mb-1 px-1">
                      {message.sender}
                    </span>
                  )}

                  {message.type === "image" ? (
                    <div className="rounded-2xl overflow-hidden bg-muted">
                      <div className="w-64 h-48 bg-muted"></div>
                    </div>
                  ) : (
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.isMine
                          ? "bg-[hsl(var(--chat-bubble-mine))] text-[hsl(var(--chat-bubble-mine-foreground))]"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  )}

                  <div className="flex items-center gap-2 mt-1 px-1">
                    {message.reactions && message.reactions.length > 0 && (
                      <div className="flex items-center gap-1 text-xs bg-muted rounded-full px-2 py-0.5">
                        {message.reactions.map((reaction, idx) => (
                          <span key={idx}>
                            {reaction.emoji} {reaction.count}
                          </span>
                        ))}
                      </div>
                    )}
                    <span className="text-xs text-muted-foreground">{message.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Info Panel */}
        {showInfo && <GroupInfoPanel onClose={() => setShowInfo(false)} />}
      </div>

      {/* Input Form */}
      <footer className="bg-background border-t px-6 py-4">
        <form className="flex gap-3 max-w-4xl">
          <Button variant="ghost" size="icon" type="button">
            <Paperclip className="w-5 h-5" />
          </Button>
          <Input
            type="text"
            placeholder="Your message"
            className="flex-grow"
          />
          <Button variant="ghost" size="icon" type="button">
            <Mic className="w-5 h-5" />
          </Button>
          <Button
            type="submit"
            size="icon"
            className="rounded-full bg-[hsl(var(--chat-bubble-mine))] hover:bg-[hsl(var(--chat-bubble-mine))]/90 text-[hsl(var(--chat-bubble-mine-foreground))]"
          >
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </footer>
    </div>
  );
}
