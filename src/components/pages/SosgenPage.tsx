"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Radio, Siren, HelpCircle, PhoneOutgoing, Satellite } from "lucide-react";


const MaydayProcedure = () => {
    return (
        <div className="sos-message p-4 rounded-lg bg-muted font-mono text-sm leading-relaxed space-y-1">
            <p className="font-bold text-destructive">MAYDAY, MAYDAY, MAYDAY</p>
            <p>AQUÍ <span className="placeholder">NOMBRE EMBARCACIÓN (x3)</span></p>
            <p>INDICATIVO <span className="placeholder">INDICATIVO</span> MMSI <span className="placeholder">MMSI</span></p>
            <p className="font-bold text-destructive pt-2">MAYDAY</p>
            <p>MI POSICIÓN ES <span className="placeholder">POSICIÓN</span></p>
            <p>ESTOY <span className="placeholder">NATURALEZA DEL PELIGRO</span></p>
            <p>NECESITO AYUDA INMEDIATA</p>
            <p>TENGO <span className="placeholder">Nº PERSONAS</span> PERSONAS A BORDO</p>
            <p><span className="placeholder">OTRA INFORMACIÓN</span></p>
            <p>TERMINADO</p>
        </div>
    );
};

export default function SosgenPage() {
    
    const distressSystems = [
        {
            icon: <Radio className="h-6 w-6 text-primary" />,
            title: "Radio VHF",
            description: "El método principal y más eficaz. Utilizar el canal 16 para emitir la llamada de socorro.",
            channel: "CANAL 16 (156.8 MHz)"
        },
        {
            icon: <Satellite className="h-6 w-6 text-primary" />,
            title: "Radiobaliza (EPIRB)",
            description: "Se activa automáticamente al contacto con el agua o manualmente. Envía una señal de socorro vía satélite.",
            channel: "SATÉLITE (406 MHz)"
        },
        {
            icon: <Siren className="h-6 w-6 text-primary" />,
            title: "Señales Visuales",
            description: "Utilizar bengalas rojas, cohetes con paracaídas o botes de humo naranja para señalar la posición.",
            channel: "BENGALAS, COHETES, HUMO"
        },
        {
            icon: <PhoneOutgoing className="h-6 w-6 text-primary" />,
            title: "Teléfono Móvil / Satelital",
            description: "Llamar al 112 (emergencias) o directamente a Salvamento Marítimo si hay cobertura.",
            channel: "112 / 900 202 202"
        },
    ];

    return (
        <div className="p-4 md:p-6 space-y-6">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Generador de Llamada de Socorro</CardTitle>
                    <CardDescription>Guía para estructurar correctamente una llamada de emergencia MAYDAY por radio.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Procedimiento MAYDAY</h3>
                        <Alert>
                            <Siren className="h-4 w-4" />
                            <AlertTitle>¡Solo para emergencias reales!</AlertTitle>
                            <AlertDescription>Este es un formato de práctica. Usa MAYDAY únicamente si existe un peligro grave e inminente.</AlertDescription>
                        </Alert>

                        <div className="mt-4">
                           <MaydayProcedure />
                        </div>
                        
                        <Card className="w-full mt-4">
                            <CardHeader>
                                <CardTitle className="text-lg">Explicación del Procedimiento</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-muted-foreground">
                                <p><strong>1. MAYDAY (x3):</strong> Declara la emergencia de forma clara e inequívoca.</p>
                                <p><strong>2. AQUÍ...:</strong> Identifica tu embarcación repitiendo su nombre tres veces.</p>
                                <p><strong>3. INDICATIVO / MMSI:</strong> Proporciona tu identificador único de radio.</p>
                                <p><strong>4. MAYDAY:</strong> Repite la palabra de socorro para reafirmar la emergencia.</p>
                                <p><strong>5. POSICIÓN:</strong> La información más crucial. Dala en coordenadas (Lat/Lon) o como demora y distancia a un punto conocido.</p>
                                <p><strong>6. NATURALEZA DEL PELIGRO:</strong> Describe brevemente el problema (ej: incendio, vía de agua, colisión, etc.).</p>
                                <p><strong>7. AYUDA REQUERIDA:</strong> Especifica qué tipo de asistencia necesitas (ej: remolque, evacuación médica).</p>
                                <p><strong>8. PERSONAS A BORDO:</strong> Indica el número total de personas en tu embarcación.</p>
                                <p><strong>9. OTRA INFORMACIÓN:</strong> Cualquier dato útil (ej: intención de abandonar el barco, si llevas balsa salvavidas, descripción del barco).</p>
                                <p><strong>10. TERMINADO:</strong> Indica que has finalizado tu transmisión y quedas a la escucha.</p>
                            </CardContent>
                        </Card>
                    </div>

                     <div className="pt-6 border-t">
                        <h3 className="text-xl font-semibold mb-4">Sistemas de Socorro</h3>
                        <div className="space-y-4">
                            {distressSystems.map((system) => (
                                <Card key={system.title} className="flex flex-col sm:flex-row items-start gap-4 p-4">
                                     <div className="bg-primary/10 text-primary p-3 rounded-md mt-1">
                                        {system.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold">{system.title}</h4>
                                        <p className="text-sm text-muted-foreground">{system.description}</p>
                                        <p className="text-xs font-mono mt-2 bg-muted px-2 py-1 rounded-md inline-block">{system.channel}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
