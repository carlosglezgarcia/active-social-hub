
import { FC, useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ArrowUp, ArrowDown, RotateCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type Instruction = {
  text: string;
  icon: JSX.Element;
  action: string;
};

const Exercise: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

  useEffect(() => {
    if (!canvasRef.current || !currentInstruction) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Configuración del estilo
    ctx.strokeStyle = '#8E9196';
    ctx.lineWidth = 4;

    // Cabeza
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 150, 30, 0, Math.PI * 2);
    ctx.stroke();

    // Cuello
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 180);
    ctx.lineTo(canvas.width / 2, 200);
    ctx.stroke();

    // Cuerpo
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 200);
    ctx.lineTo(canvas.width / 2, 350);
    ctx.stroke();

    // Brazos (con codos)
    // Brazo izquierdo
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 220); // Hombro
    ctx.lineTo(canvas.width / 2 - 40, 250); // Codo
    ctx.lineTo(canvas.width / 2 - 80, 280); // Mano
    ctx.stroke();

    // Brazo derecho
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 220); // Hombro
    ctx.lineTo(canvas.width / 2 + 40, 250); // Codo
    ctx.lineTo(canvas.width / 2 + 80, 280); // Mano
    ctx.stroke();

    // Piernas (con rodillas)
    // Pierna izquierda
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 350); // Cadera
    ctx.lineTo(canvas.width / 2 - 30, 400); // Rodilla
    ctx.lineTo(canvas.width / 2 - 60, 450); // Pie
    ctx.stroke();

    // Pierna derecha
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 350); // Cadera
    ctx.lineTo(canvas.width / 2 + 30, 400); // Rodilla
    ctx.lineTo(canvas.width / 2 + 60, 450); // Pie
    ctx.stroke();

    // Puntos de las articulaciones
    const joints = [
      [canvas.width / 2, 150], // Cabeza
      [canvas.width / 2, 220], // Hombros
      [canvas.width / 2 - 40, 250], // Codo izquierdo
      [canvas.width / 2 + 40, 250], // Codo derecho
      [canvas.width / 2 - 80, 280], // Muñeca izquierda
      [canvas.width / 2 + 80, 280], // Muñeca derecha
      [canvas.width / 2, 350], // Cadera
      [canvas.width / 2 - 30, 400], // Rodilla izquierda
      [canvas.width / 2 + 30, 400], // Rodilla derecha
      [canvas.width / 2 - 60, 450], // Tobillo izquierdo
      [canvas.width / 2 + 60, 450], // Tobillo derecho
    ];

    // Dibujar los puntos de las articulaciones
    joints.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#8B5CF6';
      ctx.fill();
    });

  }, [currentInstruction]);

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
      <div className="max-w-[1600px] mx-auto">
        {/* Cabecera */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Simón dice...</h1>
          <p className="text-2xl text-muted-foreground">
            Puntuación actual: {score}
          </p>
        </div>

        {/* Contenedor principal con grid */}
        <div className="grid grid-cols-4 gap-8">
          {/* Canvas - 3/4 del espacio */}
          <div className="col-span-3 bg-card rounded-2xl shadow-lg overflow-hidden">
            <canvas
              ref={canvasRef}
              width={1200}
              height={600}
              className="w-full h-full bg-black/5"
            />
          </div>

          {/* Panel de instrucciones - 1/4 del espacio */}
          <div className="col-span-1">
            {currentInstruction ? (
              <div className="space-y-8">
                <div className="bg-card p-6 rounded-2xl shadow-lg">
                  <div className="flex justify-center mb-4">
                    {currentInstruction.icon}
                  </div>
                  <h2 className="text-2xl font-semibold mb-4">
                    {currentInstruction.text}
                  </h2>
                  <Button 
                    size="lg"
                    className="w-full text-xl px-8 py-6 h-auto"
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
                  className="w-full text-xl px-8 py-6 h-auto animate-pulse"
                  onClick={startExercise}
                >
                  Comenzar ejercicio
                </Button>
              </div>
            )}

            {/* Instrucciones generales */}
            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-semibold mb-4">¿Cómo jugar?</h3>
              <ul className="space-y-4 text-base">
                <li>1. Pulsa "Comenzar ejercicio" para empezar</li>
                <li>2. Sigue las instrucciones que aparecen en pantalla</li>
                <li>3. Cuando hayas completado el movimiento, pulsa "¡Completado!"</li>
                <li>4. ¡Intenta conseguir la mayor puntuación posible!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
