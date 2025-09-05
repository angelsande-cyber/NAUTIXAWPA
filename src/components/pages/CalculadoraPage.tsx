"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Calculator } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


export default function CalculadoraPage() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState<{dd: string, dms: string} | null>(null);
    const { toast } = useToast();

    const handleConvert = () => {
        const rawInput = input.trim();
        if (!rawInput) {
            toast({ title: "Error", description: "Por favor, introduzca coordenadas.", variant: "destructive" });
            return;
        }

        const regex = /(\d{1,2})[°\s]+(\d{1,2}(?:\.\d+)?)[´'`\s]*(\d{1,2}(?:\.\d+)?)?[´'`\s]*([NS])\s*,?\s*(\d{1,3})[°\s]+(\d{1,2}(?:\.\d+)?)[´'`\s]*(\d{1,2}(?:\.\d+)?)?[´'`\s]*([WE])/i;
        const match = rawInput.match(regex);

        if (!match) {
            toast({ title: "Formato no reconocido", description: `Use DDM (ej: 40 20.5 N 003 30.1 W) o DMS.`, variant: "destructive" });
            setResult(null);
            return;
        }

        try {
            const latDeg = parseFloat(match[1]);
            const latMin = parseFloat(match[2]);
            const latSec = match[3] ? parseFloat(match[3]) : 0;
            const latDir = match[4].toUpperCase();

            const lonDeg = parseFloat(match[5]);
            const lonMin = parseFloat(match[6]);
            const lonSec = match[7] ? parseFloat(match[7]) : 0;
            const lonDir = match[8].toUpperCase();
            
            let latDD = latDeg + (latMin / 60) + (latSec / 3600);
            if (latDir === 'S') latDD *= -1;

            let lonDD = lonDeg + (lonMin / 60) + (lonSec / 3600);
            if (lonDir === 'W') lonDD *= -1;

            const toDMS = (dd: number, isLat: boolean) => {
                const dir = dd >= 0 ? (isLat ? 'N' : 'E') : (isLat ? 'S' : 'W');
                const absDD = Math.abs(dd);
                const deg = Math.floor(absDD);
                const minFloat = (absDD - deg) * 60;
                const min = Math.floor(minFloat);
                const sec = ((minFloat - min) * 60).toFixed(2);
                return `${String(deg).padStart(isLat ? 2 : 3, '0')}° ${String(min).padStart(2, '0')}' ${sec}" ${dir}`;
            };

            setResult({
                dd: `${latDD.toFixed(5)}, ${lonDD.toFixed(5)}`,
                dms: `${toDMS(latDD, true)}, ${toDMS(lonDD, false)}`
            });

        } catch (e) {
            toast({ title: "Error de Cálculo", description: "No se pudieron procesar las coordenadas.", variant: "destructive" });
            setResult(null);
        }
    }

    return (
        <div className="p-8">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Calculadora de Coordenadas</CardTitle>
                     <p className="text-muted-foreground pt-2">
                        Convierte coordenadas geográficas entre diferentes formatos.
                    </p>
                </CardHeader>
                <CardContent>
                    <div className="flex w-full items-center space-x-2">
                        <Input
                            placeholder="Ej: 43 21.5 N 008 25.2 W"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Button onClick={handleConvert}>Convertir</Button>
                    </div>

                    {result && (
                        <div className="mt-6 space-y-4">
                            <Alert>
                                <Calculator className="h-4 w-4" />
                                <AlertTitle>Grados Decimales (DD)</AlertTitle>
                                <AlertDescription className="font-mono">{result.dd}</AlertDescription>
                            </Alert>
                             <Alert>
                                <Calculator className="h-4 w-4" />
                                <AlertTitle>Grados, Minutos, Segundos (DMS)</AlertTitle>
                                <AlertDescription className="font-mono">{result.dms}</AlertDescription>
                            </Alert>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
