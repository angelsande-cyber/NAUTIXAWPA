"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Calculator } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// --- Conversion Logic ---

interface CoordinatesDD {
    lat: number;
    lon: number;
}

function parseCoordinates(input: string): CoordinatesDD | null {
    input = input.trim().toUpperCase();

    // Regex for DDM (Degrees Decimal Minutes) or DMS (Degrees Minutes Seconds)
    // 40 20.5 N 003 30.1 W  |  40° 20' 25" N 003° 30' 05" W
    const dmsRegex = /(-?\d{1,2})[°\s]+(\d{1,2}(?:\.\d+)?)[´'`\s]*(\d{1,2}(?:\.\d+)?)?[´'`\s]*([NS])\s*,?\s*(-?\d{1,3})[°\s]+(\d{1,2}(?:\.\d+)?)[´'`\s]*(\d{1,2}(?:\.\d+)?)?[´'`\s]*([WE])/;
    const dmsMatch = input.match(dmsRegex);
    if (dmsMatch) {
        const [, latDeg, latMin, latSec, latDir, lonDeg, lonMin, lonSec, lonDir] = dmsMatch;
        let lat = parseFloat(latDeg) + (parseFloat(latMin) / 60) + ((latSec ? parseFloat(latSec) : 0) / 3600);
        let lon = parseFloat(lonDeg) + (parseFloat(lonMin) / 60) + ((lonSec ? parseFloat(lonSec) : 0) / 3600);
        if (latDir === 'S') lat *= -1;
        if (lonDir === 'W') lon *= -1;
        return { lat, lon };
    }

    // Regex for DD (Decimal Degrees)
    // 40.7128, -74.0060 | 40.7128N, 74.0060W
    const ddRegex = /(-?\d{1,2}(?:\.\d+)?)\s*([NS])?,?\s*(-?\d{1,3}(?:\.\d+)?)\s*([WE])?/;
    const ddMatch = input.match(ddRegex);
    if (ddMatch) {
        let [, latStr, latDir, lonStr, lonDir] = ddMatch;
        if (!latStr || !lonStr) return null;
        
        let lat = parseFloat(latStr);
        let lon = parseFloat(lonStr);
        
        // If directions are provided, they override the sign
        if (latDir && lat < 0) lat *= -1;
        if (lonDir && lon < 0) lon *= -1;
        
        if (latDir === 'S') lat *= -1;
        if (lonDir === 'W') lon *= -1;
        
        return { lat, lon };
    }

    return null;
}

function toDDM(dd: number, isLat: boolean): string {
    const dir = dd >= 0 ? (isLat ? 'N' : 'E') : (isLat ? 'S' : 'W');
    const absDD = Math.abs(dd);
    const deg = Math.floor(absDD);
    const min = (absDD - deg) * 60;
    const degPad = isLat ? 2 : 3;
    return `${String(deg).padStart(degPad, '0')}° ${min.toFixed(3)}' ${dir}`;
}

function toDMS(dd: number, isLat: boolean): string {
    const dir = dd >= 0 ? (isLat ? 'N' : 'E') : (isLat ? 'S' : 'W');
    const absDD = Math.abs(dd);
    const deg = Math.floor(absDD);
    const minFloat = (absDD - deg) * 60;
    const min = Math.floor(minFloat);
    const sec = ((minFloat - min) * 60).toFixed(2);
    const degPad = isLat ? 2 : 3;
    return `${String(deg).padStart(degPad, '0')}° ${String(min).padStart(2, '0')}' ${sec}" ${dir}`;
}


// --- Component ---

export default function CalculadoraPage() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState<{ddm: string, dms: string} | null>(null);
    const { toast } = useToast();

    const handleConvert = () => {
        const rawInput = input.trim();
        if (!rawInput) {
            toast({ title: "Error", description: "Por favor, introduzca coordenadas.", variant: "destructive" });
            return;
        }

        const coords = parseCoordinates(rawInput);
        
        if (!coords) {
            toast({ title: "Formato no reconocido", description: "Use DD, DDM o DMS. Ej: 40.5 N, 8.5 W", variant: "destructive" });
            setResult(null);
            return;
        }
        
        setResult({
            ddm: `${toDDM(coords.lat, true)}, ${toDDM(coords.lon, false)}`,
            dms: `${toDMS(coords.lat, true)}, ${toDMS(coords.lon, false)}`
        });
    }

    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Calculadora de Coordenadas</CardTitle>
                     <CardDescription>
                        Convierte coordenadas geográficas a los formatos estándar de navegación (DDM y DMS).
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex w-full items-center space-x-2">
                        <Input
                            placeholder="Ej: 43 21.5 N, 8 25.2 W  o  40.123, -8.456"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleConvert()}
                        />
                        <Button onClick={handleConvert}>Convertir</Button>
                    </div>

                    {result && (
                        <div className="mt-6 space-y-4">
                            <Alert>
                                <Calculator className="h-4 w-4" />
                                <AlertTitle>Grados, Minutos Decimales (DDM)</AlertTitle>
                                <AlertDescription className="font-mono">{result.ddm}</AlertDescription>
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
