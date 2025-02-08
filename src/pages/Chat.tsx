
import { FC } from "react";
import { UserList } from "@/components/chat/UserList";
import { MessageList } from "@/components/chat/MessageList";
import { MessageInput } from "@/components/chat/MessageInput";

const Chat: FC = () => {
  return (
    <div className="h-screen bg-background flex">
      {/* Left sidebar - User list */}
      <div className="w-64 border-r bg-card">
        <UserList />
      </div>
      
      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4">
          <MessageList />
        </div>
        
        {/* Input area */}
        <div className="border-t p-4 bg-card">
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default Chat;
