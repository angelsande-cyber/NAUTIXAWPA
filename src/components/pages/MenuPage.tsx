"use client";

import { Button } from "@/components/ui/button";
import { Book, Calculator, Languages, Search } from "lucide-react";

interface MenuPageProps {
  setActivePage: (page: string) => void;
}

const menuItems = [
  { id: "directorio", label: "Directorio", icon: Book, description: "Contactos de salvamento." },
  { id: "mmsi", label: "Buscador MMSI", icon: Search, description: "Información de buques." },
  { id: "referencias", label: "Referencias", icon: Book, description: "Tablas y datos útiles." },
  { id: "calculadora", label: "Calculadora", icon: Calculator, description: "Conversor de coordenadas." },
  { id: "diccionario", label: "Diccionario", icon: Languages, description: "Traductor de términos." },
];

export default function MenuPage({ setActivePage }: MenuPageProps) {
  return (
    <div className="p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {menuItems.map((item) => (
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
