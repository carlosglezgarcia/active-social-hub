
import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  FileText, 
  ListChecks, 
  Heart, 
  Settings, 
  LogOut 
} from "lucide-react";

const UserMenu: FC = () => {
  const menuItems = [
    { icon: FileText, label: "Informes" },
    { icon: ListChecks, label: "Seguimiento" },
    { icon: Heart, label: "Fisioterapeuta" },
    { icon: Settings, label: "Ajustes" },
    { icon: LogOut, label: "Salir" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar className="h-10 w-10 transition-all hover:scale-105">
          <AvatarFallback className="bg-primary/10">US</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 mt-2">
        {menuItems.map(({ icon: Icon, label }) => (
          <DropdownMenuItem
            key={label}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
