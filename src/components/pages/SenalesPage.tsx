"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { IALA_BUOY_DATA, LIGHT_CHARACTERISTIC_TERMS } from "@/lib/data/senales";
import { useEffect, useState } from "react";
import { Switch } from "../ui/switch";

// --- Helper Functions (moved from simulation.ts) ---

let simulationTimeout: number | null = null;

interface LightCharacteristic {
    original: string;
    rhythm: string | null;
    group: string | null;
    colors: string[];
    period: number | null;
    error: string | null;
}

function parseLighthouseCharacteristic(charStr: string): LightCharacteristic | null {
    if (!charStr) return null;

    charStr = charStr.trim().toUpperCase().replace(/,/g, '.');

    const result: LightCharacteristic = {
        original: charStr, rhythm: null, group: null, colors: [], period: null, error: null,
    };

    const periodMatch = charStr.match(/(\d+(\.\d+)?)\s*S?$/i);
    if (periodMatch) {
        result.period = parseFloat(periodMatch[1]);
        charStr = charStr.slice(0, periodMatch.index).trim();
    } else {
        result.error = "No se pudo determinar el período. Ejemplo: 'Fl R 5s'";
        return result;
    }

    const colorMatches = charStr.match(/\b(W|R|G|Y|BU|VI)\b/g);
    if (colorMatches) {
        result.colors = colorMatches;
        colorMatches.forEach(c => { charStr = charStr.replace(new RegExp(`\\b${c}\\b`), '').trim(); });
    } else {
        result.colors = ['W'];
    }

    const groupMatch = charStr.match(/\((\d+(\s*\+\s*\d+)*)\)/);
    if (groupMatch) {
        result.group = groupMatch[1].replace(/\s/g, '');
        charStr = charStr.slice(0, groupMatch.index).trim();
    }
    
    charStr = charStr.replace(/\b(GP|GRP)\b/g, '').trim();
    result.rhythm = charStr.split(' ')[0] || 'FL';

    return result;
}

function runSimulation(
    lightEl: SVGElement | null, 
    infoEl: HTMLElement | null, 
    char: LightCharacteristic | null
) {
    if (simulationTimeout) clearInterval(simulationTimeout);
    if (!lightEl || !infoEl || !char) return;

    lightEl.setAttribute('class', 'light-element'); // Reset classes

    if (char.error) {
        infoEl.innerHTML = `<p class="text-destructive">${char.error}</p>`;
        return;
    }
    
    if (!char.rhythm || !char.period) {
         infoEl.innerHTML = `<p class="text-destructive">Característica inválida.</p>`;
         return;
    }

    const getOnDuration = (rhythm: string) => {
        if (rhythm.startsWith('LFL')) return 2000;
        if (rhythm.startsWith('VQ')) return 250;
        if (rhythm.startsWith('Q')) return 500;
        if (rhythm.startsWith('U')) return 125;
        if (rhythm === 'F') return char.period! * 1000;
        if (rhythm === 'ISO') return (char.period! / 2) * 1000;
        return 1000;
    };
    
    const getOffDuration = (rhythm: string, onDuration: number) => {
        if (['Q', 'VQ', 'U'].includes(rhythm)) return onDuration;
        if (rhythm === 'ISO') return onDuration;
        return 1000;
    };

    const getFlashes = (group: string | null): number[] => {
        if (!group) return [1];
        if (group.includes('+')) return group.split('+').map(Number);
        const num = parseInt(group, 10);
        return isNaN(num) ? [1] : Array(num).fill(1);
    };

    const flashes = getFlashes(char.group);
    const onDuration = getOnDuration(char.rhythm);
    const offDuration = getOffDuration(char.rhythm, onDuration);
    
    let colorIndex = 0;
    let cumulativeDelay = 0;
    const sequence: { delay: number; action: () => void }[] = [];

    const longFlashPause = char.rhythm.includes('LFL') ? 4000 : 2000;

    for (let i = 0; i < flashes.length; i++) {
        const numFlashes = flashes[i];
        for (let j = 0; j < numFlashes; j++) {
            const color = char.colors[colorIndex % char.colors.length].toLowerCase();
            
            sequence.push({
                delay: cumulativeDelay,
                action: () => {
                    if (!lightEl) return;
                    // Clean previous color classes
                    const lightClasses = lightEl.getAttribute('class')?.split(' ') || [];
                    lightClasses.forEach(c => { if (c.endsWith('-on')) lightEl.classList.remove(c); });
                    lightEl.classList.add('on', `${color}-on`);
                }
            });
            cumulativeDelay += onDuration;
            sequence.push({
                delay: cumulativeDelay,
                action: () => { if(lightEl) lightEl.classList.remove('on'); }
            });

            if (j < numFlashes - 1) cumulativeDelay += offDuration;
            if (char.rhythm !== 'AL') colorIndex++;
        }
        if (char.rhythm === 'AL') colorIndex++;
        if (i < flashes.length - 1) cumulativeDelay += longFlashPause;
    }

    const runSequence = () => {
        sequence.forEach(step => setTimeout(step.action, step.delay));
    };

    runSequence();
    simulationTimeout = window.setInterval(runSequence, char.period * 1000);
    
    const esDesc = `${LIGHT_CHARACTERISTIC_TERMS[char.rhythm]?.es || char.rhythm} ${char.group ? `de grupo (${char.group})` : ''} ${char.colors.map(c => LIGHT_CHARACTERISTIC_TERMS[c]?.es).join(' y ')} cada ${char.period}s.`;
    infoEl.innerHTML = `<p>${esDesc}</p><p class="text-sm text-muted-foreground">${char.original}</p>`;
}


// --- Lighthouse Simulator Component ---
const LighthouseSimulator = () => {
    const [charStr, setCharStr] = useState("Gp Fl(2+1) W 15s");

    const handleSimulate = () => {
        const lightEl = document.getElementById('lighthouse-svg-light') as SVGElement | null;
        const infoEl = document.getElementById('lighthouse-simulation-info') as HTMLElement | null;
        const char = parseLighthouseCharacteristic(charStr);
        runSimulation(lightEl, infoEl, char);
    };
    
    useEffect(() => {
        // Stop simulation when component unmounts
        return () => {
            if (simulationTimeout) {
                clearInterval(simulationTimeout);
                simulationTimeout = null;
            }
        }
    }, []);

    return (
        <div>
            <div className="flex w-full items-center space-x-2">
                <Input
                    id="lighthouse-char-input"
                    placeholder="Ej: Gp Oc(2+1) W 15s"
                    value={charStr}
                    onChange={e => setCharStr(e.target.value)}
                />
                <Button id="lighthouse-simulate-btn" onClick={handleSimulate}>Simular</Button>
            </div>
            <div className="mt-6 flex flex-col items-center">
                 <div className="w-24 h-48">
                    <svg viewBox="0 0 100 200" className="w-full h-full">
                        <defs>
                            <linearGradient id="tower-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="hsl(var(--muted-foreground))" />
                                <stop offset="50%" stopColor="hsl(var(--muted))" />
                                <stop offset="100%" stopColor="hsl(var(--muted-foreground))" />
                            </linearGradient>
                        </defs>
                        <path d="M40 200 L40 60 L60 60 L60 200 Z" fill="url(#tower-gradient)" />
                        <rect x="35" y="40" width="30" height="20" fill="hsl(var(--foreground))" />
                        <circle id="lighthouse-svg-light" cx="50" cy="50" r="8" className="light-element" fill="hsl(var(--border))" />
                    </svg>
                </div>
                <div id="lighthouse-simulation-info" className="text-center mt-4 p-4 bg-muted rounded-lg w-full">
                    <p>Introduzca una característica para iniciar la simulación.</p>
                </div>
            </div>
        </div>
    );
}

// --- Main Page Component ---
export default function SenalesPage() {
    return (
        <div className="p-8">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Simulador de Señales Marítimas</CardTitle>
                     <p className="text-muted-foreground pt-2">
                        Herramienta interactiva para aprender a identificar las características de las luces de faros y las marcas de balizamiento IALA.
                    </p>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="lighthouse" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="lighthouse">Faros</TabsTrigger>
                            <TabsTrigger value="buoys">Boyas y Marcas</TabsTrigger>
                        </TabsList>
                        <TabsContent value="lighthouse" className="pt-4">
                            <LighthouseSimulator />
                        </TabsContent>
                        <TabsContent value="buoys" className="pt-4">
                             <p className="text-muted-foreground text-center p-8">El simulador de boyas se implementará en una futura actualización.</p>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}
