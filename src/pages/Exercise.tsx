
import { FC, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ArrowUp, ArrowDown, RotateCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type Instruction = {
  text: string;
  icon: JSX.Element;
  action: string;
};

const Exercise: FC = () => {
  const [currentInstruction, setCurrentInstruction] = useState<Instruction | null>(null);
  const [score, setScore] = useState(0);
  const { toast } = useToast();

  const instructions: Instruction[] = [
    { 
      text: "Muévete a la derecha", 
      icon: <ArrowRight className="h-24 w-24" />,
      action: "derecha"
    },
    { 
      text: "Muévete a la izquierda", 
      icon: <ArrowLeft className="h-24 w-24" />,
      action: "izquierda"
    },
    { 
      text: "Tócate el hombro izquierdo", 
      icon: <ArrowLeft className="h-24 w-24" />,
      action: "hombro-izquierdo"
    },
    { 
      text: "Tócate el hombro derecho", 
      icon: <ArrowRight className="h-24 w-24" />,
      action: "hombro-derecho"
    },
    { 
      text: "Da un giro", 
      icon: <RotateCw className="h-24 w-24" />,
      action: "giro"
    }
  ];

  const getRandomInstruction = () => {
    const randomIndex = Math.floor(Math.random() * instructions.length);
    return instructions[randomIndex];
  };

  const startExercise = () => {
    setScore(0);
    nextInstruction();
    toast({
      title: "¡Ejercicio iniciado!",
      description: "Sigue las instrucciones que aparecen en pantalla",
    });
  };

  const nextInstruction = () => {
    const instruction = getRandomInstruction();
    setCurrentInstruction(instruction);
  };

  const handleAction = () => {
    if (currentInstruction) {
      setScore(prev => prev + 1);
      toast({
        title: "¡Muy bien!",
        description: "Has completado el movimiento correctamente",
      });
      setTimeout(nextInstruction, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Cabecera */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Simón dice...</h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Puntuación actual: {score}
        </p>
      </div>

      {/* Área principal del ejercicio */}
      <div className="max-w-4xl mx-auto">
        {currentInstruction ? (
          <div className="space-y-8 text-center">
            {/* Instrucción visual */}
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-4">
                {currentInstruction.icon}
              </div>
              <h2 className="text-3xl font-semibold mb-4">
                {currentInstruction.text}
              </h2>
              <Button 
                size="lg"
                className="text-xl px-8 py-6 h-auto"
                onClick={handleAction}
              >
                ¡Completado!
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <Button
              size="lg"
              className="text-xl px-8 py-6 h-auto animate-pulse"
              onClick={startExercise}
            >
              Comenzar ejercicio
            </Button>
          </div>
        )}
      </div>

      {/* Instrucciones generales */}
      <div className="max-w-2xl mx-auto mt-12 p-6 bg-muted rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">¿Cómo jugar?</h3>
        <ul className="space-y-4 text-lg">
          <li>1. Pulsa "Comenzar ejercicio" para empezar</li>
          <li>2. Sigue las instrucciones que aparecen en pantalla</li>
          <li>3. Cuando hayas completado el movimiento, pulsa "¡Completado!"</li>
          <li>4. ¡Intenta conseguir la mayor puntuación posible!</li>
        </ul>
      </div>
    </div>
  );
};

export default Exercise;
