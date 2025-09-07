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
import { useTranslation, LanguageToggle } from "@/context/LanguageContext";


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
  const { t } = useTranslation();

  const dashboardItems = [
    { id: "sosgen", label: t('dashboard.sos.label'), icon: Radio, description: t('dashboard.sos.description') },
    { id: "senales", label: t('dashboard.signals.label'), icon: Lightbulb, description: t('dashboard.signals.description') },
    { id: "colreg", label: t('dashboard.colreg.label'), icon: Sailboat, description: t('dashboard.colreg.description') },
    { id: "examen", label: t('dashboard.quiz.label'), icon: FileText, description: t('dashboard.quiz.description') },
    { id: "directorio", label: t('dashboard.directory.label'), icon: Book, description: t('dashboard.directory.description') },
    { id: "calculadora", label: t('dashboard.calculator.label'), icon: Calculator, description: t('dashboard.calculator.description') },
    { id: "alfabeto", label: t('dashboard.alphabet.label'), icon: Text, description: t('dashboard.alphabet.description') },
    { id: "canales", label: t('dashboard.channels.label'), icon: RadioTower, description: t('dashboard.channels.description') },
    { id: "codigosq", label: t('dashboard.qcodes.label'), icon: MessageSquareQuote, description: t('dashboard.qcodes.description') },
    { id: "meteorologia", label: t('dashboard.meteo.label'), icon: Cloud, description: t('dashboard.meteo.description') },
  ];

  const pageTitleMap: { [key: string]: string } = {
    dashboard: t('titles.home'),
    sosgen: t('titles.sos'),
    senales: t('titles.signals'),
    colreg: t('titles.colreg'),
    examen: t('titles.quiz'),
    directorio: t('titles.directory'),
    calculadora: t('titles.calculator'),
    alfabeto: t('titles.alphabet'),
    canales: t('titles.channels'),
    codigosq: t('titles.qcodes'),
    meteorologia: t('titles.meteo'),
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
                        <span className="sr-only">{t('backToHome')}</span>
                    </Button>
                )}
                 <h1 className="text-lg font-semibold uppercase tracking-wider">{pageTitleMap[activePage] || 'NAUTIXA'}</h1>
            </div>
            <div className="flex items-center gap-4">
                <LanguageToggle />
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
                            <span>{t('signOut')}</span>
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
                      <span>{t('titles.home')}</span>
                    </button>
                
            </div>
        </nav>
      </div>
  );
}
