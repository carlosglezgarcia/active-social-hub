
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data - replace with real data later
const users = [
  { id: 1, name: "Ana García", avatar: "", online: true },
  { id: 2, name: "Carlos López", avatar: "", online: true },
  { id: 3, name: "María Sánchez", avatar: "", online: false },
];

export const UserList: FC = () => {
  return (
    <div className="p-4 space-y-2">
      <h2 className="text-lg font-semibold mb-4">Personas conectadas</h2>
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/50 transition-colors"
        >
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
      ))}
    </div>
  );
};
