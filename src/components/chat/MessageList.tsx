
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data - replace with real data later
const messages = [
  {
    id: 1,
    user: { name: "Ana García", avatar: "" },
    message: "¡Hola a todos! ¿Qué tal el día?",
    timestamp: new Date().toISOString(),
  },
  {
    id: 2,
    user: { name: "Carlos López", avatar: "" },
    message: "¡Todo bien! ¿Y tú qué tal?",
    timestamp: new Date().toISOString(),
  },
];

export const MessageList: FC = () => {
  return (
    <div className="space-y-4">
      {messages.map((msg) => (
        <div key={msg.id} className="flex items-start space-x-3">
          <Avatar>
            {msg.user.avatar ? (
              <AvatarImage src={msg.user.avatar} alt={msg.user.name} />
            ) : (
              <AvatarFallback>{msg.user.name.substring(0, 2)}</AvatarFallback>
            )}
          </Avatar>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">{msg.user.name}</span>
              <span className="text-xs text-muted-foreground">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </span>
            </div>
            <p className="text-sm mt-1 text-foreground/90">{msg.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
