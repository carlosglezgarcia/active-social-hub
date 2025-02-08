
import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="text-center space-y-4 mb-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        Bienvenido
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground">
        Mantente activo, social y fuerte
      </p>
    </div>
  );
};

export default Header;
