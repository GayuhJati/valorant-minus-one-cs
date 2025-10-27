import React, { useState } from 'react'
import ChatList from '@/components/ChatList'
import ChatRoom from '@/components/ChatRoom'
import Layout  from '@/components/Layout'
import NavigationSidebar from '@/components/NavigationSidebar'
import RequireGroupAccess from '@/components/RequireGroupAccess'
import ProfileModal from '@/components/ProfileModal'

const user = {
  name: "Valorant User",
  email: "user@email.com",
  avatar: undefined,
  bio: "Let's win together!"
};

const Chat = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    // <RequireGroupAccess>
      <div className="flex h-screen w-full overflow-hidden">
        <NavigationSidebar onProfileClick={() => setProfileOpen(true)} />
        <ChatList />
        <ChatRoom />
        <ProfileModal open={profileOpen} onClose={() => setProfileOpen(false)} user={user} />
      </div>
    // </RequireGroupAccess>
  )
}

export default Chat