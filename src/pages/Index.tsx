
import { FC } from "react";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import UserMenu from "@/components/UserMenu";
import { Activity, Coffee, Brain } from "lucide-react";

const Index: FC = () => {
  const features = [
    {
      icon: Activity,
      title: "ActivePlay",
      description: "Ejercicios personalizados, rutinas de entrenamiento y seguimiento en tiempo real",
      buttonText: "Comienza el ejercicio",
      accentColor: "hover:bg-primary/5",
    },
    {
      icon: Coffee,
      title: "Café Virtual",
      description: "Conecta con amigos en el chat",
      buttonText: "Únete al Café",
      accentColor: "hover:bg-orange-500/5",
    },
    {
      icon: Brain,
      title: "Hora de jugar",
      description: "Escape room, juegos interactivos, juega y piensa con nosotros",
      buttonText: "Comienza tu aventura",
      accentColor: "hover:bg-purple-500/5",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex justify-end mb-8">
          <UserMenu />
        </div>
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              onClick={() => console.log(`Clicked: ${feature.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
