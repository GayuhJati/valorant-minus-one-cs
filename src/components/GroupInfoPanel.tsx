import { X, Image, Video, File, Music, Link, Mic, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

interface Member {
  id: string;
  name: string;
  avatar: string;
  role?: string;
}

const mockMembers: Member[] = [
  { id: "1", name: "Tanisha Combs", avatar: "/placeholder.svg", role: "admin" },
  { id: "2", name: "Alex Hunt", avatar: "/placeholder.svg" },
  { id: "3", name: "Jasmin Lowery", avatar: "/placeholder.svg" },
  { id: "4", name: "Max Padilla", avatar: "/placeholder.svg" },
  { id: "5", name: "Jessie Rollins", avatar: "/placeholder.svg" },
  { id: "6", name: "Lukas Mcgowan", avatar: "/placeholder.svg" },
];

interface FileCategory {
  icon: React.ElementType;
  label: string;
  count: number | string;
}

const fileCategories: FileCategory[] = [
  { icon: Image, label: "photos", count: 265 },
  { icon: Video, label: "videos", count: 13 },
  { icon: File, label: "files", count: 378 },
  { icon: Music, label: "audio files", count: 21 },
  { icon: Link, label: "shared links", count: 45 },
  { icon: Mic, label: "voice messages", count: "2,589" },
];

interface GroupInfoPanelProps {
  onClose?: () => void;
}

export default function GroupInfoPanel({ onClose }: GroupInfoPanelProps) {
  const [filesExpanded, setFilesExpanded] = useState(true);

  return (
    <div className="w-96 bg-background border-l flex flex-col">
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="font-semibold text-lg">Group Info</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      <ScrollArea className="flex-1">
        {/* Files Section */}
        <div className="p-4 border-b">
          <button
            onClick={() => setFilesExpanded(!filesExpanded)}
            className="w-full flex items-center justify-between mb-3 font-semibold"
          >
            <span>Files</span>
            {filesExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {filesExpanded && (
            <div className="space-y-2">
              {/* Photo thumbnails */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Image className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">265 photos</span>
                </div>
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="aspect-square bg-muted rounded-lg"></div>
                <div className="aspect-square bg-muted rounded-lg"></div>
              </div>

              {/* Other file types */}
              {fileCategories.slice(1).map((category, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 cursor-pointer hover:bg-muted/50 rounded px-2"
                >
                  <div className="flex items-center gap-3">
                    <category.icon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm">
                      {category.count} {category.label}
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Members Section */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">23 members</h3>
            <Button variant="ghost" size="icon">
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="space-y-3">
            {mockMembers.map((member) => (
              <div key={member.id} className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{member.name}</span>
                    {member.role && (
                      <span className="text-xs text-muted-foreground">
                        {member.role}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
