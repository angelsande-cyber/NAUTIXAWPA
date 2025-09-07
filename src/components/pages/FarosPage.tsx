
"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useEffect, useState, useCallback } from "react";
import { LIGHT_TERMS } from "@/lib/data/signals";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";


let simulationTimeout: NodeJS.Timeout | null = null;

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

    if (charStr.toUpperCase().includes(' OR ')) {
        charStr = charStr.toUpperCase().split(' OR ')[0];
    }

    charStr = charStr.trim().toUpperCase().replace(/,/g, '.');

    const result: LightCharacteristic = {
        original: charStr, rhythm: null, group: null, colors: [], period: null, error: null,
    };
    
    const isQuickFlash = charStr.includes('Q') || charStr.includes('VQ');

    const periodMatch = charStr.match(/(\d+(\.\d+)?)\s*S?$/i);
    if (periodMatch) {
        result.period = parseFloat(periodMatch[1]);
        charStr = charStr.slice(0, periodMatch.index).trim();
    } else if (isQuickFlash) {
        result.period = 1;
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
    char: LightCharacteristic | null,
    prependInfo?: string
) {
    if (simulationTimeout) clearInterval(simulationTimeout);
    if (!lightEl || !infoEl || !char) return;

    lightEl.setAttribute('class', 'light-element');

    if (char.error) {
        infoEl.innerHTML = `<p class="text-destructive">${char.error}</p>`;
        return;
    }
    
    if (!char.rhythm || !char.period) {
         infoEl.innerHTML = `<p class="text-destructive">Característica no válida.</p>`;
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
    simulationTimeout = setInterval(runSequence, char.period! * 1000);
    
    const rhythmText = LIGHT_TERMS[char.rhythm as keyof typeof LIGHT_TERMS] || char.rhythm;
    const groupText = char.group ? ` en grupos de ${char.group}` : '';
    const colorsText = char.colors.map(c => LIGHT_TERMS[c as keyof typeof LIGHT_TERMS] || c).join(' ');
    const periodText = ` cada ${char.period}s`;
    
    const desc = `${rhythmText} ${colorsText}${groupText}${periodText}`;

    const descriptionHtml = `<div class="text-sm"><p>${desc}</p><p class="text-xs text-muted-foreground mt-2 font-mono">${char.original}</p></div>`;
    infoEl.innerHTML = prependInfo ? prependInfo + descriptionHtml : descriptionHtml;
}


const LighthouseSimulator = () => {
    const [rhythm, setRhythm] = useState('FL');
    const [color, setColor] = useState('W');
    const [group, setGroup] = useState('1');
    const [period, setPeriod] = useState('10');
    const [manualChar, setManualChar] = useState('');

    const handleSimulate = useCallback(() => {
        const lightEl = document.getElementById('lighthouse-svg-light') as SVGElement | null;
        const infoEl = document.getElementById('lighthouse-simulation-info') as HTMLElement | null;
        const char = parseLighthouseCharacteristic(manualChar);
        runSimulation(lightEl, infoEl, char);
    }, [manualChar]);

    useEffect(() => {
        let groupStr = '';
        if (rhythm !== 'F' && rhythm !== 'ISO' && group) {
            const numericGroup = group.replace(/[^0-9+]/g, '');
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


    useEffect(() => {
        if(manualChar){
            handleSimulate();
        }
        return () => {
            if (simulationTimeout) {
                clearInterval(simulationTimeout);
                simulationTimeout = null;
            }
        }
    }, [manualChar, handleSimulate]);

    const controlSections = [
        { label: "RITMO", stateSetter: setRhythm, selectedValue: rhythm, options: ['F', 'FL', 'LFL', 'OC', 'ISO', 'Q', 'VQ', 'MO'] },
        { label: "COLOR", stateSetter: setColor, selectedValue: color, options: ['W', 'R', 'G', 'Y', 'BU'] }
    ];

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-4">
                {controlSections.map(section => (
                    <div key={section.label}>
                        <Label className="text-xs uppercase text-muted-foreground tracking-wider">{section.label}</Label>
                        <div className="grid grid-cols-4 gap-2 mt-2">
                            {section.options.map(opt => (
                                <Button
                                    key={opt}
                                    variant={section.selectedValue === opt ? 'default' : 'outline'}
                                    onClick={() => section.stateSetter(opt)}
                                >
                                    {LIGHT_TERMS[opt as keyof typeof LIGHT_TERMS] || opt}
                                </Button>
                            ))}
                        </div>
                    </div>
                ))}
                 <div>
                    <Label htmlFor="group-input" className="text-xs uppercase text-muted-foreground tracking-wider">GRUPO</Label>
                    <Input id="group-input" value={group} onChange={e => setGroup(e.target.value)} className="mt-2" placeholder="Ej: 2 o 2+1"/>
                </div>
                 <div>
                    <Label htmlFor="period-input" className="text-xs uppercase text-muted-foreground tracking-wider">PERIODO (s)</Label>
                    <Input id="period-input" type="number" value={period} onChange={e => setPeriod(e.target.value)} className="mt-2" placeholder="Ej: 10"/>
                </div>
            </div>

            <div className="relative my-6 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative bg-card px-4 text-sm text-muted-foreground">
                    O introduce manualmente
                </div>
            </div>

            <div className="flex w-full items-center space-x-2">
                <Input
                    id="lighthouse-char-input"
                    placeholder="Ej: Gp Oc(2+1) W 15s"
                    value={manualChar}
                    onChange={e => setManualChar(e.target.value)}
                />
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
                    <p className="text-muted-foreground">Define una característica para iniciar la simulación.</p>
                </div>
            </div>
        </div>
    );
}

export default function FarosPage() {
    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Simulador de Faros y Luces</CardTitle>
                    <CardDescription>Introduce la característica de una luz de un faro, baliza o boya para ver una simulación de su ritmo y color.</CardDescription>
                </CardHeader>
                <CardContent>
                    <LighthouseSimulator />
                </CardContent>
            </Card>
        </div>
    );
}
