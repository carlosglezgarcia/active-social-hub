
import { FC, useState } from "react";
import { UserList } from "@/components/chat/UserList";
import { MessageList } from "@/components/chat/MessageList";
import { MessageInput } from "@/components/chat/MessageInput";
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Chat: FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isUserListOpen, setIsUserListOpen] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Here we would handle the actual audio stream muting
  };

  return (
    <div className="h-screen bg-background flex">
      {/* Left sidebar - Collapsible User list */}
      <Collapsible
        open={isUserListOpen}
        onOpenChange={setIsUserListOpen}
        className="min-w-[16rem]"
      >
        <CollapsibleTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full flex items-center justify-between p-4 hover:bg-accent/50"
          >
            <span>Personas conectadas</span>
            <span className="text-xs">
              {isUserListOpen ? "← Ocultar" : "→ Mostrar"}
            </span>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="border-r bg-card">
          <UserList />
        </CollapsibleContent>
      </Collapsible>
      
      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Voice chat controls */}
        <div className="bg-card border-b p-2 flex items-center justify-center space-x-2">
          <Button
            variant={isMuted ? "ghost" : "default"}
            size="icon"
            onClick={toggleMute}
            className="w-10 h-10 rounded-full"
          >
            {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </Button>
        </div>

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
