
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SOUND_SIGNALS_DATA } from "@/lib/data/signals";
import SonidosSimulator from "./SonidosSimulator";

export default function SonidosPage() {
    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Simulador de Señales Acústicas</CardTitle>
                    <CardDescription>Aprende a reconocer las señales acústicas de maniobra y advertencia, y las señales en visibilidad reducida.</CardDescription>
                </CardHeader>
                <CardContent>
                   <SonidosSimulator sonidosData={SOUND_SIGNALS_DATA} />
                </CardContent>
            </Card>
        </div>
    );
}
