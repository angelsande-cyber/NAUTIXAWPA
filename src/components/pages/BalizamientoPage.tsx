
"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";
import { LIGHT_TERMS, IALA_BUOY_DATA } from "@/lib/data/signals";
import type { BuoyData } from "@/lib/data/signals";
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

    // Handle "or" cases by taking the first part
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


const renderBuoySchematic = (container: HTMLElement, buoy: BuoyData) => {
    const colorMap: { [key: string]: string } = { 'red': '#EF4444', 'green': '#22C55E', 'yellow': '#EAB308', 'black': '#111827', 'white': '#F0F2F5' };
    const stroke = 'rgba(200, 200, 220, 0.5)'; 

    let defs = '';
    let fill = `fill="${colorMap[buoy.colors[0]]}"`;
    if (buoy.colors.length > 1) {
        const gradientId = `grad-${buoy.colors.join('-').replace(/\s/g, '')}`;
        const isVertical = buoy.shape === 'spherical'; 
        const stops = buoy.colors.map((color:string, index:number) => {
            const step = 100 / buoy.colors.length;
            return `<stop offset="${index * step}%" stop-color="${colorMap[color]}" /><stop offset="${(index + 1) * step}%" stop-color="${colorMap[color]}" />`;
        }).join('');
        
        defs = `<defs><linearGradient id="${gradientId}" x1="0%" y1="0%" x2="${isVertical ? '0%' : '100%'}" y2="${isVertical ? '100%' : '0%'}">${stops}</linearGradient></defs>`;
        fill = `fill="url(#${gradientId})"`;
    }

    let shapeSvg = '';
    switch (buoy.shape) {
        case 'can': shapeSvg = `<rect x="35" y="100" width="30" height="60" ${fill} stroke="${stroke}" stroke-width="1.5"/>`; break;
        case 'conical': shapeSvg = `<polygon points="30,160 70,160 50,100" ${fill} stroke="${stroke}" stroke-width="1.5"/>`; break;
        case 'spherical': shapeSvg = `<circle cx="50" cy="130" r="30" ${fill} stroke="${stroke}" stroke-width="1.5"/>`; break;
        default: shapeSvg = `<rect x="40" y="100" width="20" height="60" ${fill} stroke="${stroke}" stroke-width="1.5"/>`; break; 
    }

    let topmarkSvg = '';
    const tm = buoy.topmark;
    if (tm) {
        const tmFill = `fill="${colorMap[tm.color]}" stroke="${stroke}" stroke-width="1.5"`;
        switch (tm.shape) {
            case 'can': topmarkSvg = `<rect x="42" y="80" width="16" height="16" ${tmFill}/>`; break;
            case 'cone-up': topmarkSvg = `<polygon points="40,96 60,96 50,80" ${tmFill}/>`; break;
            case 'spheres-2': topmarkSvg = `<circle cx="50" cy="75" r="8" ${tmFill}/><circle cx="50" cy="95" r="8" ${tmFill}/>`; break;
            case 'sphere': topmarkSvg = `<circle cx="50" cy="88" r="8" ${tmFill}/>`; break;
            case 'cross': topmarkSvg = `<path d="M45 80 L55 90 M55 80 L45 90" stroke="${colorMap[tm.color]}" stroke-width="3"/>`; break;
            case 'cones-up': topmarkSvg = `<polygon points="40,80 60,80 50,64" ${tmFill}/><polygon points="40,96 60,96 50,80" ${tmFill}/>`; break;
            case 'cones-down': topmarkSvg = `<polygon points="40,64 60,64 50,80" ${tmFill}/><polygon points="40,80 60,80 50,96" ${tmFill}/>`; break;
            case 'cones-base-base': topmarkSvg = `<polygon points="40,80 60,80 50,64" ${tmFill}/><polygon points="40,80 60,80 50,96" ${tmFill}/>`; break;
            case 'cones-vertex-together': topmarkSvg = `<polygon points="40,64 60,64 50,80" ${tmFill} /><polygon points="40,96 60,96 50,80" ${tmFill} />`; break;
        }
    }
    const lightY = buoy.topmark ? 60 : 88;
    const lightSvg = `<circle id="buoy-svg-light" cx="50" cy="${lightY}" r="6" class="light-element" fill="hsl(var(--border))" />`;
    const waterSvg = `<path d="M0 160 Q 50 150, 100 160 T 200 160" stroke-width="2" stroke="hsl(var(--primary))" fill="hsl(var(--primary)/.2)"/>`;

    container.innerHTML = `<svg viewBox="0 0 100 180" style="overflow: visible;">${defs}${waterSvg}${shapeSvg}${topmarkSvg}${lightSvg}</svg>`;
};


export default function BalizamientoPage() {
    const [region, setRegion] = useState('A');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [activeType, setActiveType] = useState<string | null>(null);

    const categories = useMemo(() => {
        return [...new Set(IALA_BUOY_DATA.map(b => b.category))];
    }, []);
    
    const handleCategoryClick = useCallback((category: string) => {
        setActiveCategory(category);
        setActiveType(null);
        if (simulationTimeout) clearInterval(simulationTimeout);
        const buoyInfoEl = document.getElementById('buoy-info-panel');
        const buoySchematicEl = document.getElementById('buoy-schematic-container');
        if(buoyInfoEl) buoyInfoEl.innerHTML = `<p class="text-muted-foreground">Selecciona una categoría y un tipo de boya para ver su esquema y la simulación de su luz.</p>`;
        if(buoySchematicEl) buoySchematicEl.innerHTML = '';
    }, []);
    
    const handleTypeClick = useCallback((buoy: BuoyData) => {
        setActiveType(buoy.type);
        const schematicContainer = document.getElementById('buoy-schematic-container');
        const infoPanel = document.getElementById('buoy-info-panel');
        
        if (schematicContainer && infoPanel) {
            renderBuoySchematic(schematicContainer, buoy);
            const lightEl = schematicContainer.querySelector<SVGElement>('#buoy-svg-light');
            
            if (lightEl) {
                const char = parseLighthouseCharacteristic(buoy.characteristic);
                const mnemonicHtml = buoy.mnemonic ? `<p class="mt-2 pt-2 border-t border-border/50 text-sm"><strong>Regla:</strong> ${buoy.mnemonic}</p>` : '';
                const infoTitle = `<h4 class="font-bold">${buoy.type}${buoy.region ? ` (Región ${buoy.region})` : ''}</h4><p class="text-muted-foreground text-sm">${buoy.purpose}</p>${mnemonicHtml}<hr class="my-2"/>`;
                runSimulation(lightEl, infoPanel, char, infoTitle);
            }
        }
    }, []);
    
    useEffect(() => {
        if(categories.length > 0 && !activeCategory) {
            handleCategoryClick(categories[0]);
        }
    }, [categories, activeCategory, handleCategoryClick]);

     useEffect(() => {
        if (activeCategory === 'Marcas Laterales') {
            setActiveType(null);
            const buoyInfoEl = document.getElementById('buoy-info-panel');
            const buoySchematicEl = document.getElementById('buoy-schematic-container');
            if(buoyInfoEl) buoyInfoEl.innerHTML = `<p class="text-muted-foreground">Selecciona una categoría y un tipo de boya para ver su esquema y la simulación de su luz.</p>`;
            if(buoySchematicEl) buoySchematicEl.innerHTML = '';
        }
    }, [region, activeCategory]);
    
     useEffect(() => {
        return () => {
            if (simulationTimeout) {
                clearInterval(simulationTimeout);
                simulationTimeout = null;
            }
        }
    }, []);

    const buoyTypesForCategory = useMemo(() => {
        return IALA_BUOY_DATA.filter(b => {
            if (b.category !== activeCategory) {
                return false;
            }
            if (b.category === "Marcas Laterales") {
                 return b.region === region;
            }
            return true;
        })
    }, [activeCategory, region]);


    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Simulador de Balizamiento (IALA)</CardTitle>
                    <CardDescription>Aprende a identificar las marcas laterales, cardinales y especiales del Sistema de Balizamiento Marítimo Internacional.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        { activeCategory === "Marcas Laterales" && (
                            <div className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
                                <Label htmlFor="iala-region" className="font-semibold">Región IALA</Label>
                                <span className={cn(region === 'A' ? '' : 'text-muted-foreground', "font-bold")}>A</span>
                                <Switch id="iala-region" checked={region === 'B'} onCheckedChange={(checked) => setRegion(checked ? 'B' : 'A')} />
                                <span className={cn(region === 'B' ? '' : 'text-muted-foreground', "font-bold")}>B</span>
                            </div>
                        )}
                        <div>
                            <Label className="text-xs uppercase text-muted-foreground tracking-wider">Categoría</Label>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {categories.map((category) => (
                                    <Button key={category} variant={activeCategory === category ? 'default' : 'outline'} onClick={() => handleCategoryClick(category)} className="flex-grow">
                                        {category}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        {buoyTypesForCategory.length > 0 && (
                            <div>
                                <Label className="text-xs uppercase text-muted-foreground tracking-wider">Tipo</Label>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {buoyTypesForCategory.map((buoy, index) => (
                                        <Button key={`${buoy.type}-${buoy.region || ''}-${index}`} variant={activeType === buoy.type ? 'default' : 'outline'} onClick={() => handleTypeClick(buoy)} className="flex-grow">
                                            {buoy.type}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-6 flex flex-col items-center">
                        <div id="buoy-schematic-container" className="w-32 h-48"></div>
                        <div id="buoy-info-panel" className="text-center mt-4 p-4 bg-muted rounded-lg w-full min-h-[140px]">
                            <p className="text-muted-foreground">Selecciona una categoría y un tipo de boya para ver su esquema y la simulación de su luz.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
