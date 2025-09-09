
"use client";

import { useState, useEffect } from "react";
import type { User } from "firebase/auth";
import {
  LifeBuoy,
  LogOut,
  Home,
  Moon,
  Sun,
  ChevronLeft,
  Calculator,
  Radio,
  Text,
  RadioTower,
  MessageSquareQuote,
  Cloud,
  FileText,
  Ship,
  AudioLines,
  Navigation,
  TowerControl,
  GitCompareArrows,
  Calendar,
  Anchor,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import SosgenPage from "./pages/SosgenPage";
import DirectorioPage from "./pages/DirectorioPage";
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
import BuquesPage from "./pages/BuquesPage";
import SonidosPage from "./pages/SonidosPage";
import BalizamientoPage from "./pages/BalizamientoPage";
import FarosPage from "./pages/FarosPage";
import ManiobrasPage from "./pages/ManiobrasPage";
import AlmanaquePage from "./pages/AlmanaquePage";

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
    { id: "sosgen", label: "Llamadas SOS", icon: Radio, description: "Crea y practica llamadas de socorro MAYDAY." },
    { id: "buques", label: "Buques", icon: Ship, description: "Simulador de luces y marcas de buques (COLREG)." },
    { id: "maniobras", label: "Maniobras", icon: GitCompareArrows, description: "Reglas de paso y maniobras para evitar abordajes." },
    { id: "sonidos", label: "Sonidos", icon: AudioLines, description: "Señales acústicas de maniobra y visibilidad reducida." },
    { id: "balizamiento", label: "Balizas", icon: Navigation, description: "Sistema de balizamiento marítimo IALA A y B." },
    { id: "faros", label: "Faros", icon: TowerControl, description: "Identifica y simula las características de las luces." },
    { id: "almanaque", label: "Almanaque", icon: Calendar, description: "Calculadora astronómica para navegación." },
    { id: "examen", label: "Examen PER", icon: FileText, description: "Genera un examen tipo test para el PER." },
    { id: "colreg", label: "Reglamento", icon: FileText, description: "Consulta y estudia el reglamento de abordajes." },
    { id: "directorio", label: "Directorio", icon: LifeBuoy, description: "Contactos de emergencia y servicios marítimos." },
    { id: "calculadora", label: "Calculadora", icon: Calculator, description: "Convierte entre formatos de coordenadas." },
    { id: "alfabeto", label: "Alfabeto", icon: Text, description: "Consulta el código internacional de señales." },
    { id: "canales", label: "Canales VHF", icon: RadioTower, description: "Listado de canales VHF y sus usos." },
    { id: "codigosq", label: "Códigos Q", icon: MessageSquareQuote, description: "Referencia de los códigos Q más comunes." },
    { id: "meteorologia", label: "Meteorología", icon: Cloud, description: "Escalas Beaufort, Douglas y tipos de nubes." },
  ];
  
  const iconColorStyles: { [key: string]: { bg: string, text: string, hoverBg: string } } = {
    sosgen: { bg: 'bg-rose-500/10', text: 'text-rose-500', hoverBg: 'group-hover:bg-rose-500/20' },
    buques: { bg: 'bg-teal-500/10', text: 'text-teal-500', hoverBg: 'group-hover:bg-teal-500/20' },
    maniobras: { bg: 'bg-blue-500/10', text: 'text-blue-500', hoverBg: 'group-hover:bg-blue-500/20' },
    sonidos: { bg: 'bg-sky-500/10', text: 'text-sky-500', hoverBg: 'group-hover:bg-sky-500/20' },
    balizamiento: { bg: 'bg-amber-500/10', text: 'text-amber-500', hoverBg: 'group-hover:bg-amber-500/20' },
    faros: { bg: 'bg-violet-500/10', text: 'text-violet-500', hoverBg: 'group-hover:bg-violet-500/20' },
    almanaque: { bg: 'bg-purple-500/10', text: 'text-purple-500', hoverBg: 'group-hover:bg-purple-500/20' },
    examen: { bg: 'bg-indigo-500/10', text: 'text-indigo-500', hoverBg: 'group-hover:bg-indigo-500/20' },
    colreg: { bg: 'bg-slate-500/10', text: 'text-slate-500', hoverBg: 'group-hover:bg-slate-500/20' },
    directorio: { bg: 'bg-red-500/10', text: 'text-red-500', hoverBg: 'group-hover:bg-red-500/20' },
    calculadora: { bg: 'bg-gray-500/10', text: 'text-gray-500', hoverBg: 'group-hover:bg-gray-500/20' },
    alfabeto: { bg: 'bg-fuchsia-500/10', text: 'text-fuchsia-500', hoverBg: 'group-hover:bg-fuchsia-500/20' },
    canales: { bg: 'bg-cyan-500/10', text: 'text-cyan-500', hoverBg: 'group-hover:bg-cyan-500/20' },
    codigosq: { bg: 'bg-lime-500/10', text: 'text-lime-500', hoverBg: 'group-hover:bg-lime-500/20' },
    meteorologia: { bg: 'bg-emerald-500/10', text: 'text-emerald-500', hoverBg: 'group-hover:bg-emerald-500/20' },
  };

  const pageTitleMap: { [key: string]: string } = {
    dashboard: "Panel de Navegación",
    sosgen: "Llamada de Socorro",
    buques: "Luces y Marcas de Buques",
    maniobras: "Reglas de Paso (COLREG)",
    sonidos: "Señales Acústicas",
    balizamiento: "Balizamiento Marítimo (IALA)",
    faros: "Faros y Luces",
    almanaque: "Almanaque Náutico Perpetuo",
    examen: "Examen de Práctica",
    directorio: "Directorio",
    calculadora: "Calculadora de Coordenadas",
    colreg: "Reglamento (COLREG)",
    alfabeto: "Alfabeto y Banderas",
    canales: "Canales VHF",
    codigosq: "Códigos Q",
    meteorologia: "Meteorología",
  };

  const renderContent = () => {
    switch (activePage) {
      case 'sosgen': return <SosgenPage />;
      case 'buques': return <BuquesPage />;
      case 'maniobras': return <ManiobrasPage />;
      case 'sonidos': return <SonidosPage />;
      case 'balizamiento': return <BalizamientoPage />;
      case 'faros': return <FarosPage />;
      case 'almanaque': return <AlmanaquePage />;
      case 'directorio': return <DirectorioPage />;
      case 'colreg': return <ColregPage />;
      case 'calculadora': return <CalculadoraPage />;
      case 'alfabeto': return <AlfabetoPage />;
      case 'canales': return <CanalesPage />;
      case 'codigosq': return <CodigosQPage />;
      case 'meteorologia': return <MeteorologiaPage />;
      case 'examen': return <ExamenPage />;
      default:
        return (
          <div className="p-4 md:p-6 lg:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {dashboardItems.map((item) => {
                  const colors = iconColorStyles[item.id] || { bg: 'bg-primary/10', text: 'text-primary', hoverBg: 'group-hover:bg-primary/20' };
                  return (
                  <button
                    key={item.id}
                    onClick={() => setActivePage(item.id)}
                    className="group flex flex-col items-center justify-start text-center p-3 bg-card border rounded-xl hover:bg-card/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                    >
                    <div className={cn("flex items-center justify-center w-16 h-16 rounded-2xl transition-colors duration-200", colors.bg, colors.text, colors.hoverBg)}>
                        <item.icon className="h-8 w-8"/>
                    </div>
                    <div className="mt-3">
                        <p className="font-semibold text-sm text-card-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground mt-1 px-1">{item.description}</p>
                    </div>
                  </button>
              )})}
            </div>
          </div>
        );
    }
  };
  
  const showBackButton = activePage !== 'dashboard';

  return (
      <div className="flex h-screen w-full flex-col bg-background">
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-lg">
            <div className="flex items-center gap-3">
                {showBackButton ? (
                    <Button variant="outline" size="icon" className="rounded-full h-8 w-8" onClick={() => setActivePage('dashboard')}>
                        <ChevronLeft className="h-4 w-4"/>
                        <span className="sr-only">Volver a Inicio</span>
                    </Button>
                ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Anchor className="h-5 w-5" />
                    </div>
                )}
                 <h1 className="text-lg font-semibold uppercase tracking-wider">{pageTitleMap[activePage] || 'NAUTIXA'}</h1>
            </div>
            <div className="flex items-center gap-4">
                <ThemeToggle />
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                             <Avatar className="h-9 w-9 border">
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
        
        <nav className="fixed bottom-0 left-0 right-0 z-10 border-t bg-background/80 backdrop-blur-lg shadow-[0_-2px_10px_-5px_rgba(0,0,0,0.1)]">
            <div className="flex justify-center items-center h-16">
                 
                    <button
                      key="dashboard"
                      onClick={() => setActivePage("dashboard")}
                      className={cn(
                          "flex flex-col items-center justify-center gap-1 pt-1 text-xs transition-colors h-full w-24",
                          activePage === "dashboard" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
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

    