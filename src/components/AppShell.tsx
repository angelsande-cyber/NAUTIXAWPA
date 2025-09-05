"use client";

import { useState } from "react";
import type { User } from "firebase/auth";
import {
  LifeBuoy,
  Target,
  Search,
  Book,
  Calculator,
  Languages,
  PanelLeft,
  LogOut,
  Home,
  Lightbulb,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import SosgenPage from "./pages/SosgenPage";
import SimulacroPage from "./pages/SimulacroPage";
import DiccionarioPage from "./pages/DiccionarioPage";
import DirectorioPage from "./pages/DirectorioPage";
import SenalesPage from "./pages/SenalesPage";
import MmsiPage from "./pages/MmsiPage";
import ReferenciasPage from "./pages/ReferenciasPage";
import CalculadoraPage from "./pages/CalculadoraPage";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "sosgen", label: "SOSGEN", icon: LifeBuoy },
  { id: "simulacro", label: "Simulacro", icon: Target },
  { id: "senales", label: "Señales", icon: Lightbulb },
  { id: "mmsi", label: "MMSI", icon: Search },
  { id: "directorio", label: "Directorio", icon: Book },
  { id: "referencias", label: "Referencias", icon: Book },
  { id: "calculadora", label: "Calculadora", icon: Calculator },
  { id: "diccionario", label: "Diccionario", icon: Languages },
];

function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Oscuro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function AppShell({ user }: { user: User }) {
  const [activePage, setActivePage] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { signOut } = useAuth();
  
  const renderContent = () => {
    switch(activePage) {
      case 'sosgen':
        return <SosgenPage />;
      case 'simulacro':
        return <SimulacroPage />;
      case 'directorio':
        return <DirectorioPage />;
      case 'diccionario':
        return <DiccionarioPage />;
      case 'senales':
        return <SenalesPage />;
      case 'mmsi':
        return <MmsiPage />;
      case 'referencias':
        return <ReferenciasPage />;
      case 'calculadora':
        return <CalculadoraPage />;
      default:
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
             <p className="text-muted-foreground">Bienvenido a NAUTIXA, {user.displayName}.</p>
          </div>
        )
    }
  }

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full bg-background">
        <aside
          className={`
          flex h-screen flex-col border-r bg-muted/20 transition-all 
          ${isSidebarOpen ? "w-64 p-4" : "w-16 items-center p-2"}
        `}
        >
          <div className="flex-1 overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>
                    <Button
                      variant={activePage === item.id ? "secondary" : "ghost"}
                      size={isSidebarOpen ? "default" : "icon"}
                      className={`
                      flex justify-start gap-3 
                      ${!isSidebarOpen && "justify-center"}
                    `}
                      onClick={() => setActivePage(item.id)}
                    >
                      <item.icon className="h-5 w-5" />
                      {isSidebarOpen && <span>{item.label}</span>}
                    </Button>
                  </TooltipTrigger>
                  {!isSidebarOpen && (
                    <TooltipContent side="right">
                      {item.label}
                    </TooltipContent>
                  )}
                </Tooltip>
              ))}
            </nav>
          </div>
          <div className="mt-auto flex flex-col gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                    onClick={signOut}
                    variant="ghost"
                    size={isSidebarOpen ? "default" : "icon"}
                    className={`flex justify-start gap-3 ${!isSidebarOpen && "justify-center"}`}>
                    <LogOut className="h-5 w-5" />
                    {isSidebarOpen && <span>Cerrar Sesión</span>}
                </Button>
              </TooltipTrigger>
               {!isSidebarOpen && <TooltipContent side="right">Cerrar Sesión</TooltipContent>}
            </Tooltip>
             <div className={`flex items-center gap-3 p-2 ${!isSidebarOpen && "justify-center"}`}>
                <Avatar className="h-8 w-8">
                    <AvatarImage src={user.photoURL ?? ""} alt={user.displayName ?? ""} />
                    <AvatarFallback>{user.displayName?.charAt(0)}</AvatarFallback>
                </Avatar>
                {isSidebarOpen && (
                    <div className="flex flex-col overflow-hidden">
                        <span className="text-sm font-medium truncate">{user.displayName}</span>
                        <span className="text-xs text-muted-foreground truncate">{user.email}</span>
                    </div>
                )}
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur-sm px-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
            <h1 className="text-xl font-semibold uppercase tracking-wider">{activePage}</h1>
            <div className="ml-auto">
              <ThemeToggle />
            </div>
          </header>
          <main className="flex-1 overflow-y-auto bg-muted/40">
            {renderContent()}
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
