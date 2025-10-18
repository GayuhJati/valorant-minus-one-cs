import ChatList from '@/components/ChatList'
import ChatRoom from '@/components/ChatRoom'
import Layout  from '@/components/Layout'
import NavigationSidebar from '@/components/NavigationSidebar'
import RequireGroupAccess from '@/components/RequireGroupAccess'
import React from 'react'

const Chat = () => {
  return (
    <RequireGroupAccess>
      <div className="flex h-screen w-full overflow-hidden">
        <NavigationSidebar />
        <ChatList />
        <ChatRoom />
      </div>
    </RequireGroupAccess>
  )
}

export default Chat