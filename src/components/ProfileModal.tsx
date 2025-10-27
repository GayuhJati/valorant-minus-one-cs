import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    bio?: string;
  };
}

const SectionTitle = ({ title, description }: { title: string; description: string }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold text-primary">{title}</h2>
    <p className="text-muted-foreground mt-1">{description}</p>
  </div>
);

const ProfileModal: React.FC<ProfileModalProps> = ({ open, onClose, user }) => {
  const [activeTab, setActiveTab] = useState("profile");

  if (!open) return null;

  const NavItem = ({ tabName, label, icon }: { tabName: string; label: string; icon: React.ReactNode }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        activeTab === tabName
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
      }`}
    >
      {icon}
      {label}
    </button>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div>
            <SectionTitle title="Profile Overview" description="A summary of your public profile." />
            <div className="flex flex-col items-center text-center">
              <Avatar className="w-28 h-28 mb-4">
                {user?.avatar ? (
                  <AvatarImage src={user.avatar} />
                ) : (
                  <AvatarFallback className="bg-primary text-primary-foreground text-4xl">
                    {user?.name?.[0] || "U"}
                  </AvatarFallback>
                )}
              </Avatar>
              <h1 className="text-3xl font-bold text-primary mb-1">{user?.name || "User Name"}</h1>
              <p className="text-muted-foreground mb-4">{user?.email || "user@email.com"}</p>
              <p className="text-foreground max-w-md">{user?.bio || "No bio has been set yet. You can add one in the 'Edit Profile' section."}</p>
            </div>
          </div>
        );
      case "edit":
        return (
          <div>
            <SectionTitle title="Edit Profile" description="Update your personal details here." />
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
                <Input defaultValue={user?.name} placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">Email Address</label>
                <Input type="email" defaultValue={user?.email} placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">Your Bio</label>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue={user?.bio}
                  placeholder="Tell us a little about yourself"
                ></textarea>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" type="button">Cancel</Button>
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          </div>
        );
      case "password":
        return (
          <div>
            <SectionTitle title="Change Password" description="For your security, we recommend using a strong password." />
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">Current Password</label>
                <Input type="password" placeholder="Enter your current password" />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">New Password</label>
                <Input type="password" placeholder="Enter a new password" />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">Confirm New Password</label>
                <Input type="password" placeholder="Confirm your new password" />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" type="button">Cancel</Button>
                <Button type="submit">Update Password</Button>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-card rounded-2xl border border-border shadow-2xl w-full max-w-4xl h-[600px] relative flex overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary text-2xl z-10"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Sidebar */}
        <aside className="w-1/4 bg-background/50 border-r border-border p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-6 text-primary">Settings</h2>
          <nav className="flex flex-col gap-2">
            <NavItem tabName="profile" label="Profile" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/></svg>} />
            <NavItem tabName="edit" label="Edit Profile" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/></svg>} />
            <NavItem tabName="password" label="Password" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/></svg>} />
          </nav>
        </aside>
        {/* Main Content */}
        <main className="w-3/4 p-8 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default ProfileModal;