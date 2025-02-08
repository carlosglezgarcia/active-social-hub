
import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Image, Video, Send } from "lucide-react";

export const MessageInput: FC = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <div className="flex space-x-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="hover:bg-accent"
        >
          <Image className="h-5 w-5" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="hover:bg-accent"
        >
          <Video className="h-5 w-5" />
        </Button>
      </div>
      
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe un mensaje..."
        className="flex-1"
      />
      
      <Button type="submit" size="icon" disabled={!message.trim()}>
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
};
