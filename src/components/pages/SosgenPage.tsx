"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Radio, Siren, HelpCircle, PhoneOutgoing, Satellite } from "lucide-react";

const MaydayProcedure = () => (
    <div className="sos-message p-4 rounded-lg bg-muted font-mono text-sm leading-relaxed space-y-1">
        <p className="font-bold text-destructive">MAYDAY, MAYDAY, MAYDAY</p>
        <p>THIS IS <span className="placeholder">NOMBRE DEL BARCO (x3)</span></p>
        <p>CALL SIGN <span className="placeholder">INDICATIVO</span> MMSI <span className="placeholder">MMSI</span></p>
        <p className="font-bold text-destructive pt-2">MAYDAY</p>
        <p>POSITION <span className="placeholder">POSICIÓN (LAT/LON O REFERENCIA)</span></p>
        <p>I AM <span className="placeholder">NATURALEZA DEL PELIGRO (HUNDIMIENTO, INCENDIO...)</span></p>
        <p>I REQUIRE IMMEDIATE ASSISTANCE</p>
        <p>I HAVE <span className="placeholder">NÚMERO DE PERSONAS</span> PERSONS ON BOARD</p>
        <p><span className="placeholder">CUALQUIER OTRA INFORMACIÓN (ABANDONO, BENGALAS...)</span></p>
        <p>OVER</p>
    </div>
);

const distressSystems = [
    {
        icon: <Radio className="h-6 w-6 text-primary" />,
        title: "VHF Marino con LSD (Llamada Selectiva Digital)",
        description: "El método más común y eficaz. El botón 'DISTRESS' (normalmente protegido por una tapa roja) envía una alerta automática con tu posición (si el GPS está conectado) y MMSI a todos los barcos y estaciones costeras en alcance. Tras la alerta LSD, se debe proceder con la llamada de voz MAYDAY en el Canal 16.",
        channel: "Canal 70 (LSD), luego Canal 16 (Voz)"
    },
    {
        icon: <Satellite className="h-6 w-6 text-primary" />,
        title: "Radiobaliza de Localización de Siniestros (EPIRB/RLS)",
        description: "Dispositivo que, al activarse (manual o automáticamente al contacto con el agua), transmite una señal de socorro a través del sistema de satélites Cospas-Sarsat. La señal, que contiene la identificación del buque y su posición, es recibida por los centros de coordinación de salvamento de todo el mundo.",
        channel: "Satélite (406 MHz)"
    },
    {
        icon: <Siren className="h-6 w-6 text-primary" />,
        title: "Señales Visuales de Socorro",
        description: "Cohetes o bengalas con paracaídas de luz roja, bengalas de mano de luz roja, y señales fumígenas de color naranja. Deben usarse cuando se tiene constancia de que hay barcos o aeronaves a la vista que puedan verlas.",
        channel: "Visual"
    },
    {
        icon: <PhoneOutgoing className="h-6 w-6 text-primary" />,
        title: "Telefonía Móvil",
        description: "En áreas con cobertura, se puede llamar directamente a los servicios de emergencia (112) o a un Centro de Coordinación de Salvamento (ej: 900 202 202 en España). Es un método útil pero limitado por el alcance de la cobertura.",
        channel: "Llamada directa"
    },
];

export default function SosgenPage() {
    return (
        <div className="p-4 md:p-6 space-y-6">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Comunicaciones de Socorro en el Mar</CardTitle>
                    <CardDescription>
                        Guía sobre cómo transmitir correctamente un mensaje de socorro y los medios disponibles en el Sistema Mundial de Socorro y Seguridad Marítima (SMSSM/GMDSS).
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Procedimiento de Llamada MAYDAY por Voz (VHF Canal 16)</h3>
                        <Alert>
                            <Siren className="h-4 w-4" />
                            <AlertTitle>¡Solo para Peligro Grave e Inminente!</AlertTitle>
                            <AlertDescription>
                                La señal de socorro MAYDAY solo debe usarse cuando existe un peligro grave e inminente para la vida o para la propia embarcación (ej: hundimiento, incendio incontrolable, abordaje grave).
                            </AlertDescription>
                        </Alert>

                        <div className="mt-4">
                            <MaydayProcedure />
                        </div>
                        
                        <Accordion type="single" collapsible className="w-full mt-4">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Explicación del Procedimiento</AccordionTrigger>
                                <AccordionContent className="space-y-2 text-muted-foreground">
                                    <p><strong>1. Sintoniza el Canal 16 de VHF.</strong> Asegúrate de que la potencia de transmisión esté al máximo (normalmente 25W).</p>
                                    <p><strong>2. Pulsa el botón de transmisión (PTT) y di claramente:</strong> "MAYDAY, MAYDAY, MAYDAY". Repetir tres veces da tiempo a que otros te escuchen y reconozcan la urgencia.</p>
                                    <p><strong>3. Identifícate:</strong> Di "AQUÍ (o THIS IS)", seguido del nombre de tu barco tres veces, y luego tu indicativo de llamada (Call Sign) y MMSI.</p>
                                    <p><strong>4. Repite "MAYDAY"</strong> una vez más, seguido de la información clave de la emergencia. Habla despacio y claro.</p>
                                    <p><strong>5. Posición:</strong> Dala en latitud y longitud si es posible. Si no, usa una referencia clara a un punto geográfico conocido (ej: "A 5 millas al este de la isla de Sálvora").</p>
                                    <p><strong>6. Naturaleza del Peligro:</strong> Sé conciso. "HUNDIMIENTO", "INCENDIO EN SALA DE MÁQUINAS", "NECESITO ASISTENCIA MÉDICA URGENTE".</p>
                                    <p><strong>7. Ayuda Requerida:</strong> Generalmente será "NECESITO ASISTENCIA INMEDIATA".</p>
                                    <p><strong>8. Personas a Bordo (POB):</strong> Indica el número total de personas, incluyéndote a ti.</p>
                                    <p><strong>9. Información Adicional:</strong> Menciona cualquier dato relevante. "ESTAMOS ABANDONANDO EL BARCO EN BALSA SALVAVIDAS", "EL BARCO ES UN VELERO AZUL DE 12 METROS".</p>
                                    <p><strong>10. Finaliza con "OVER" (o "CAMBIO")</strong> y suelta el PTT para escuchar. Espera una respuesta de una estación costera o de otro buque.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                     <div className="pt-6 border-t">
                        <h3 className="text-xl font-semibold mb-4">Principales Medios para Solicitar Socorro</h3>
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