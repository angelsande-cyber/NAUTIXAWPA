"use client";
import { useState } from 'react';
import { generateSos } from '@/ai/flows/sosgen';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Copy, Sparkles } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

export default function SosgenPage() {
    const [naturalInput, setNaturalInput] = useState("");
    const [sosMessage, setSosMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const handleGenerate = async () => {
        if (!naturalInput.trim()) {
            toast({
                title: "Error",
                description: "La descripción no puede estar vacía.",
                variant: "destructive",
            });
            return;
        }

        setLoading(true);
        setSosMessage("");
        try {
            const data = await generateSos({ naturalInput });
            const p = (text: string) => `<span class="placeholder">${text}</span>`;
            const message = `MAYDAY, MAYDAY, MAYDAY<br/>THIS IS ${p(data.vesselName)}, ${p(data.vesselName)}, ${p(data.vesselName)}<br/>${data.callSign ? `CALL SIGN ${p(data.callSign)}<br/>` : ''}MMSI ${p(data.mmsi)}<br/><br/>MAYDAY<br/>${p(data.vesselName)}<br/>POSITION ${p(data.position)}<br/>I AM ${p(data.natureOfDistress)}<br/>I HAVE ${p(data.pob)} PERSONS ON BOARD<br/>${p(data.assistanceRequired).toUpperCase()}<br/>OVER`;
            setSosMessage(message);
        } catch (error) {
            console.error(error);
            toast({
                title: "Error de IA",
                description: "No se pudo generar el mensaje de socorro.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };
    
    const handleCopy = () => {
        const textToCopy = sosMessage.replace(/<br\/>/g, '\n').replace(/<span class="placeholder">/g, '').replace(/<\/span>/g, '');
        navigator.clipboard.writeText(textToCopy);
        toast({
            title: "Copiado",
            description: "Mensaje de socorro copiado al portapapeles.",
        });
    };

    return (
        <div className="p-4 md:p-8">
            <Card className="w-full max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle>Generador de Mensajes de Socorro (SOSGEN)</CardTitle>
                    <CardDescription>
                        Describe la situación de emergencia con tus propias palabras. La IA extraerá la información clave para formatear el mensaje de socorro estándar.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Textarea
                        value={naturalInput}
                        onChange={(e) => setNaturalInput(e.target.value)}
                        placeholder="Ej: Fuego en la sala de máquinas del pesquero 'Siempre Airoso' (MMSI 224123456), somos 5 a bordo cerca de las Cíes. Necesitamos ayuda ya."
                        rows={4}
                        className="mb-4 font-mono text-base"
                    />
                    <Button onClick={handleGenerate} disabled={loading} className="w-full text-lg py-6">
                        {loading ? "Generando..." : <><Sparkles className="mr-2 h-5 w-5" /> Generar Mensaje MAYDAY</>}
                    </Button>

                    {loading && (
                         <div className="mt-6">
                            <Skeleton className="h-8 w-1/3 mb-4" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-2/3" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-1/2" />
                            </div>
                        </div>
                    )}

                    {sosMessage && (
                        <div className="mt-6">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-semibold">Mensaje de Socorro (VHF Ch.16)</h3>
                                <Button variant="ghost" size="icon" onClick={handleCopy}>
                                    <Copy className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="sos-message p-4 rounded-lg bg-muted font-mono text-sm leading-relaxed"
                                 dangerouslySetInnerHTML={{ __html: sosMessage }}
                            />
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
