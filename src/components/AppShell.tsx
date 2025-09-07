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
  Text,
  RadioTower,
  MessageSquareQuote,
  Cloud,
  FileText,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import SosgenPage from "./pages/SosgenPage";
import DirectorioPage from "./pages/DirectorioPage";
import SenalesPage from "./pages/SenalesPage";
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
import AlfabetoPage from "./pages/AlfabetoPage";
import CanalesPage from "./pages/CanalesPage";
import CodigosQPage from "./pages/CodigosQPage";
import MeteorologiaPage from "./pages/MeteorologiaPage";
import ExamenPage from "./pages/ExamenPage";

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

  const dashboardItems = [
    { id: "sosgen", label: "Generador de Llamadas SOS", icon: Radio, description: "Crea y practica llamadas de socorro MAYDAY." },
    { id: "senales", label: "Señales Marítimas", icon: Lightbulb, description: "Simulador de luces, marcas y sonidos de buques." },
    { id: "colreg", label: "Reglamento (COLREG)", icon: Sailboat, description: "Consulta y estudia el reglamento de abordajes." },
    { id: "examen", label: "Examen de Práctica", icon: FileText, description: "Genera un examen tipo test para el PER." },
    { id: "directorio", label: "Directorio", icon: Book, description: "Contactos de emergencia y servicios marítimos." },
    { id: "calculadora", label: "Calculadora de Coordenadas", icon: Calculator, description: "Convierte entre formatos de coordenadas." },
    { id: "alfabeto", label: "Alfabeto Fonético y Banderas", icon: Text, description: "Consulta el código internacional de señales." },
    { id: "canales", label: "Canales VHF Marinos", icon: RadioTower, description: "Listado de canales VHF y sus usos." },
    { id: "codigosq", label: "Códigos Q", icon: MessageSquareQuote, description: "Referencia de los códigos Q más comunes." },
    { id: "meteorologia", label: "Meteorología", icon: Cloud, description: "Escalas Beaufort, Douglas y tipos de nubes." },
  ];

  const pageTitleMap: { [key: string]: string } = {
    dashboard: "Inicio",
    sosgen: "Llamada de Socorro",
    senales: "Señales Marítimas",
    colreg: "Reglamento (COLREG)",
    examen: "Examen de Práctica",
    directorio: "Directorio",
    calculadora: "Calculadora de Coordenadas",
    alfabeto: "Alfabeto y Banderas",
    canales: "Canales VHF",
    codigosq: "Códigos Q",
    meteorologia: "Meteorología",
  };

  const renderContent = () => {
    switch (activePage) {
      case 'sosgen': return <SosgenPage />;
      case 'directorio': return <DirectorioPage />;
      case 'senales': return <SenalesPage />;
      case 'colreg': return <ColregPage />;
      case 'calculadora': return <CalculadoraPage />;
      case 'alfabeto': return <AlfabetoPage />;
      case 'canales': return <CanalesPage />;
      case 'codigosq': return <CodigosQPage />;
      case 'meteorologia': return <MeteorologiaPage />;
      case 'examen': return <ExamenPage />;
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
                        <span className="sr-only">Volver a Inicio</span>
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
                            <span>Cerrar sesión</span>
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
