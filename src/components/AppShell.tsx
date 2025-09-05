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
  Sun,
  Moon,
  Home,
  Lightbulb,
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

export function AppShell({ user }: { user: User }) {
  const [activePage, setActivePage] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { signOut } = useAuth();
  
  const renderContent = () => {
    switch(activePage) {
      case 'sosgen':
        return <SosgenPage />;
      // TODO: Add other pages here
      default:
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
             <p className="text-muted-foreground">Bienvenido a NAUTIXA, {user.displayName}.</p>
          </div>
        )
    }
  }

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full bg-muted/40">
        <aside
          className={`
          flex h-screen flex-col border-r bg-background transition-all 
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
             <div className="flex items-center gap-3 p-2">
                <Avatar className="h-8 w-8">
                    <AvatarImage src={user.photoURL ?? ""} alt={user.displayName ?? ""} />
                    <AvatarFallback>{user.displayName?.charAt(0)}</AvatarFallback>
                </Avatar>
                {isSidebarOpen && (
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">{user.displayName}</span>
                        <span className="text-xs text-muted-foreground">{user.email}</span>
                    </div>
                )}
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
            <h1 className="text-xl font-semibold uppercase">{activePage}</h1>
          </header>
          <main className="flex-1 overflow-y-auto">
            {renderContent()}
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
