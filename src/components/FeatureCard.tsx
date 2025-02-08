
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
  accentColor?: string;
}

const FeatureCard: FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  buttonText,
  onClick,
  accentColor = "bg-card",
}) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent to-transparent group-hover:from-primary/5 group-hover:to-primary/5 transition-all duration-500" />
      <div className={`relative p-6 rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:shadow-lg ${accentColor}`}>
        <div className="mb-4">
          <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <Button 
          onClick={onClick}
          className="w-full transition-all duration-300 hover:translate-y-[-2px]"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default FeatureCard;
