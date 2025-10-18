import NavigationSidebar from "@/components/NavigationSidebar";
import ChatList from "@/components/ChatList";
import ChatRoom from "@/components/ChatRoom";

const Index = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <NavigationSidebar />
      <ChatList />
      <ChatRoom />
    </div>
  );
};

export default Index;
