import React, { useState } from "react";
import ChatList from "@/components/ChatList";
import ChatRoom from "@/components/ChatRoom";
import Layout from "@/components/Layout";
import NavigationSidebar from "@/components/NavigationSidebar";
import RequireGroupAccess from "@/components/RequireGroupAccess";
import ProfileModal from "@/components/ProfileModal";


function getUserFromLocalStorage() {
  try {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
  } catch {
    console.error("Failed to parse user from localStorage");
  }
}

const Chat = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = React.useState(getUserFromLocalStorage());

  React.useEffect(() => {
    setUser(getUserFromLocalStorage());
  }, []);
  return (
    // <RequireGroupAccess>
    <div className="flex h-screen w-full overflow-hidden">
      <NavigationSidebar onProfileClick={() => setProfileOpen(true)} />
      <ChatList />
      <ChatRoom />
      <ProfileModal
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
        user={user}
      />
    </div>
    // </RequireGroupAccess>
  );
};

export default Chat;
