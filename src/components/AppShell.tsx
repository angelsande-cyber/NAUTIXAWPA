"use client";

import { useState } from "react";
import type { User } from "firebase/auth";
import {
  LifeBuoy,
  Target,
  Search,
  Book,
  Languages,
  LogOut,
  Home,
  Lightbulb,
  Moon,
  Sun,
  Menu,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
import MenuPage from "./pages/MenuPage";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const mainNavItems = [
  { id: "dashboard", label: "Inicio", icon: Home },
  { id: "sosgen", label: "SOSGEN", icon: LifeBuoy },
  { id: "simulacro", label: "Simulacro", icon: Target },
  { id: "senales", label: "Señales", icon: Lightbulb },
  { id: "menu", label: "Menú", icon: Menu },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
  const { signOut } = useAuth();

  const pageTitleMap: { [key: string]: string } = {
    dashboard: "Dashboard",
    sosgen: "SOSGEN",
    simulacro: "Simulacro",
    senales: "Señales Marítimas",
    mmsi: "Buscador MMSI",
    directorio: "Directorio",
    referencias: "Referencias",
    calculadora: "Calculadora",
    diccionario: "Diccionario",
    menu: "Menú",
  };

  const renderContent = () => {
    switch (activePage) {
      case 'sosgen': return <SosgenPage />;
      case 'simulacro': return <SimulacroPage />;
      case 'directorio': return <DirectorioPage />;
      case 'diccionario': return <DiccionarioPage />;
      case 'senales': return <SenalesPage />;
      case 'mmsi': return <MmsiPage />;
      case 'referencias': return <ReferenciasPage />;
      case 'calculadora': return <CalculadoraPage />;
      case 'menu': return <MenuPage setActivePage={setActivePage} />;
      default:
        return (
          <div className="p-4 md:p-6">
             <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16 border-2 border-primary">
                    <AvatarImage src={user.photoURL ?? ""} alt={user.displayName ?? ""} />
                    <AvatarFallback>{user.displayName?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-muted-foreground text-sm">Bienvenido de nuevo,</p>
                    <h1 className="text-2xl font-bold tracking-tight">{user.displayName}</h1>
                </div>
            </div>
            
            <div className="bg-card border rounded-lg p-4 text-center">
              <h2 className="font-semibold text-lg">¿Listo para navegar?</h2>
              <p className="text-muted-foreground mt-1 text-sm">Selecciona una herramienta de la barra de navegación para empezar.</p>
            </div>

          </div>
        );
    }
  };
  
  const showBackButton = activePage !== 'dashboard' && mainNavItems.find(item => item.id === activePage) === undefined;

  return (
      <div className="flex h-screen w-full flex-col bg-background">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background/95 px-4 backdrop-blur-sm">
            <div className="flex items-center gap-2">
                {showBackButton && (
                    <Button variant="ghost" size="icon" className="-ml-2" onClick={() => setActivePage('menu')}>
                        <ChevronLeft className="h-5 w-5"/>
                    </Button>
                )}
                 <h1 className="text-lg font-semibold uppercase tracking-wider">{pageTitleMap[activePage]}</h1>
            </div>
            <div className="flex items-center gap-2">
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
            <div className="grid h-16 grid-cols-5 items-center justify-center gap-1">
                 {mainNavItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActivePage(item.id)}
                      className={cn(
                          "flex flex-col items-center justify-center gap-1 pt-1 text-xs transition-colors h-full",
                          activePage === item.id ? "text-primary font-semibold" : "text-muted-foreground"
                      )}
                    >
                      <item.icon className="h-6 w-6" />
                      <span>{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
      </div>
  );
}
