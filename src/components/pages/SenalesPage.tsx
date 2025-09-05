"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { IALA_BUOY_DATA, LIGHT_CHARACTERISTIC_TERMS } from "@/lib/data/senales";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


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
    
    const esDesc = `${LIGHT_CHARACTERISTIC_TERMS[char.rhythm]?.es || char.rhythm} ${char.group ? `de grupo (${char.group})` : ''} ${char.colors.map(c => LIGHT_CHARACTERISTIC_TERMS[c]?.es).join(' y ')} con un período de ${char.period}s.`;
    const enDesc = `${LIGHT_CHARACTERISTIC_TERMS[char.rhythm]?.en || char.rhythm} ${char.group ? `group (${char.group})` : ''} ${char.colors.map(c => LIGHT_CHARACTERISTIC_TERMS[c]?.en).join(' & ')} with a period of ${char.period}s.`;

    infoEl.innerHTML = `<p><strong>ES:</strong> ${esDesc}</p><p><strong>EN:</strong> ${enDesc}</p><p class="text-sm text-muted-foreground mt-2">${char.original}</p>`;
}


// --- Lighthouse Simulator Component ---
const LighthouseSimulator = () => {
    const [rhythm, setRhythm] = useState('FL');
    const [color, setColor] = useState('W');
    const [group, setGroup] = useState('1');
    const [period, setPeriod] = useState('10');
    const [manualChar, setManualChar] = useState('');

    useEffect(() => {
        let groupStr = '';
        if (rhythm !== 'F' && rhythm !== 'ISO' && group) {
            const numericGroup = group.replace(/\D/g, '');
            if (numericGroup && numericGroup !== '1') {
                groupStr = `(${numericGroup}) `;
            }
        }
        
        let constructedString = `${rhythm} ${groupStr}${color} ${period}s`;
        if (rhythm === 'MO') {
            constructedString = `Mo(${group}) ${color} ${period}s`;
        }
        
        setManualChar(constructedString.replace(/\s+/g, ' ').trim());
    }, [rhythm, color, group, period]);


    const handleSimulate = () => {
        const lightEl = document.getElementById('lighthouse-svg-light') as SVGElement | null;
        const infoEl = document.getElementById('lighthouse-simulation-info') as HTMLElement | null;
        const char = parseLighthouseCharacteristic(manualChar);
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

    const controlSections = [
        { label: "RITMO / RHYTHM", stateSetter: setRhythm, selectedValue: rhythm, options: ['F', 'FL', 'LFL', 'OC', 'ISO', 'Q', 'VQ', 'MO'] },
        { label: "COLOR", stateSetter: setColor, selectedValue: color, options: ['W', 'R', 'G', 'Y', 'BU'] }
    ];

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-4">
                {controlSections.map(section => (
                    <div key={section.label}>
                        <Label className="text-xs uppercase text-muted-foreground tracking-wider">{section.label}</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {section.options.map(opt => (
                                <Button
                                    key={opt}
                                    variant={section.selectedValue === opt ? 'secondary' : 'outline'}
                                    className="flex-1"
                                    onClick={() => section.stateSetter(opt)}
                                >
                                    {opt}
                                </Button>
                            ))}
                        </div>
                    </div>
                ))}
                 <div>
                    <Label htmlFor="group-input" className="text-xs uppercase text-muted-foreground tracking-wider">GRUPO / GROUP</Label>
                    <Input id="group-input" value={group} onChange={e => setGroup(e.target.value)} className="mt-2" placeholder="Ej: 2 or 2+1"/>
                </div>
                 <div>
                    <Label htmlFor="period-input" className="text-xs uppercase text-muted-foreground tracking-wider">PERÍODO / PERIOD (S)</Label>
                    <Input id="period-input" type="number" value={period} onChange={e => setPeriod(e.target.value)} className="mt-2" placeholder="Ej: 15"/>
                </div>
            </div>

            <div className="relative my-6 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative bg-card px-4 text-sm text-muted-foreground">
                    O introducir manualmente
                </div>
            </div>

            <div className="flex w-full items-center space-x-2">
                <Input
                    id="lighthouse-char-input"
                    placeholder="Ej: Gp Oc(2+1) W 15s"
                    value={manualChar}
                    onChange={e => setManualChar(e.target.value)}
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
                <div id="lighthouse-simulation-info" className="text-center mt-4 p-4 bg-muted rounded-lg w-full min-h-[110px]">
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
