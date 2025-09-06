"use client";

import { useState, useEffect } from "react";
import type { User } from "firebase/auth";
import {
  LifeBuoy,
  Target,
  Book,
  LogOut,
  Home,
  Lightbulb,
  Moon,
  Sun,
  ChevronLeft,
  Calculator,
  Radio,
  Sailboat,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import SosgenPage from "./pages/SosgenPage";
import SimulacroPage from "./pages/SimulacroPage";
import DirectorioPage from "./pages/DirectorioPage";
import SenalesPage from "./pages/SenalesPage";
import ReferenciasPage from "./pages/ReferenciasPage";
import CalculadoraPage from "./pages/CalculadoraPage";
import ColregPage from "./pages/ColregPage";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const dashboardItems = [
    { id: "sosgen", label: "Radio", icon: Radio, description: "Asistente para mensajes de socorro." },
    { id: "simulacro", label: "Simulacro", icon: Target, description: "Ponte a prueba con un caso práctico." },
    { id: "senales", label: "Señales", icon: Lightbulb, description: "Simulador de luces y marcas." },
    { id: "colreg", label: "COLREG", icon: Sailboat, description: "Consulta el reglamento de abordajes." },
    { id: "directorio", label: "Directorio", icon: Book, description: "Contactos de salvamento." },
    { id: "referencias", label: "Referencias", icon: Book, description: "Tablas y datos útiles." },
    { id: "calculadora", label: "Calculadora", icon: Calculator, description: "Conversor de coordenadas." },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  const handleThemeChange = (checked: boolean) => {
    const newTheme = checked ? 'dark' : 'light';
    setTheme(newTheme);
    setIsDark(checked);
  };

  return (
    <div className="flex items-center space-x-2">
        <Sun className={cn("h-5 w-5", !isDark && "text-primary")} />
        <Switch
            id="theme-switch"
            checked={isDark}
            onCheckedChange={handleThemeChange}
            aria-label="Toggle theme"
        />
        <Moon className={cn("h-5 w-5", isDark && "text-primary")} />
    </div>
  );
}

export function AppShell({ user }: { user: User }) {
  const [activePage, setActivePage] = useState("dashboard");
  const { signOut } = useAuth();

  const pageTitleMap: { [key: string]: string } = {
    dashboard: "Inicio",
    sosgen: "Radio",
    simulacro: "Simulacro",
    senales: "Señales Marítimas",
    colreg: "Reglamento (COLREG)",
    directorio: "Directorio",
    referencias: "Referencias",
    calculadora: "Calculadora de Coordenadas",
  };

  const renderContent = () => {
    switch (activePage) {
      case 'sosgen': return <SosgenPage />;
      case 'simulacro': return <SimulacroPage />;
      case 'directorio': return <DirectorioPage />;
      case 'senales': return <SenalesPage />;
      case 'colreg': return <ColregPage />;
      case 'referencias': return <ReferenciasPage />;
      case 'calculadora': return <CalculadoraPage />;
      default:
        return (
          <div className="p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dashboardItems.map((item) => (
                  <button
                      key={item.id}
                      onClick={() => setActivePage(item.id)}
                      className="text-left p-4 bg-card border rounded-lg hover:bg-muted transition-colors flex items-start gap-4"
                  >
                      <div className="bg-primary/10 text-primary p-3 rounded-md">
                          <item.icon className="h-6 w-6"/>
                      </div>
                      <div>
                          <p className="font-semibold">{item.label}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                  </button>
              ))}
            </div>

          </div>
        );
    }
  };
  
  const showBackButton = activePage !== 'dashboard';

  return (
      <div className="flex h-screen w-full flex-col bg-background">
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between gap-4 border-b bg-background/95 px-4 backdrop-blur-sm">
            <div className="flex items-center gap-2">
                {showBackButton && (
                    <Button variant="ghost" size="icon" className="-ml-2" onClick={() => setActivePage('dashboard')}>
                        <ChevronLeft className="h-5 w-5"/>
                        <span className="sr-only">Volver al Inicio</span>
                    </Button>
                )}
                 <h1 className="text-lg font-semibold uppercase tracking-wider">{pageTitleMap[activePage] || 'NAUTIXA'}</h1>
            </div>
            <div className="flex items-center gap-4">
                <ThemeToggle />
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                             <Avatar className="h-9 w-9">
                                <AvatarImage src={user.photoURL ?? ""} alt={user.displayName ?? ""} />
                                <AvatarFallback>{user.displayName?.charAt(0)}</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuItem disabled>
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">{user.displayName}</p>
                                <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={signOut}>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Cerrar Sesión</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>

        <main className="flex-1 overflow-y-auto pb-20">
          {renderContent()}
        </main>
        
        <nav className="fixed bottom-0 left-0 right-0 z-10 border-t bg-background/95 backdrop-blur-sm">
            <div className="grid h-16 grid-cols-1 items-center justify-center gap-1">
                 
                    <button
                      key="dashboard"
                      onClick={() => setActivePage("dashboard")}
                      className={cn(
                          "flex flex-col items-center justify-center gap-1 pt-1 text-xs transition-colors h-full",
                          activePage === "dashboard" ? "text-primary font-semibold" : "text-muted-foreground"
                      )}
                    >
                      <Home className="h-6 w-6" />
                      <span>Inicio</span>
                    </button>
                
            </div>
        </nav>
      </div>
  );
}
