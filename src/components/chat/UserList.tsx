
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Volume2, VolumeX } from "lucide-react";

// Mock data - replace with real data later
const users = [
  { id: 1, name: "Ana García", avatar: "", online: true, speaking: false },
  { id: 2, name: "Carlos López", avatar: "", online: true, speaking: true },
  { id: 3, name: "María Sánchez", avatar: "", online: false, speaking: false },
];

export const UserList: FC = () => {
  return (
    <div className="p-4 space-y-2">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar>
                {user.avatar ? (
                  <AvatarImage src={user.avatar} alt={user.name} />
                ) : (
                  <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                )}
              </Avatar>
              {user.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
              )}
            </div>
            <span className="text-sm font-medium">{user.name}</span>
          </div>
          {user.online && (
            <div className="text-muted-foreground">
              {user.speaking ? (
                <Volume2 className="h-4 w-4 text-green-500" />
              ) : (
                <VolumeX className="h-4 w-4" />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
