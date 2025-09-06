"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { IALA_BUOY_DATA, LIGHT_CHARACTERISTIC_TERMS } from "@/lib/data/senales";
import { COLREG_RULES_DATA } from "@/lib/data/buques";
import { useEffect, useState, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, Moon, Sun } from "lucide-react";


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
    char: LightCharacteristic | null,
    prependInfo?: string
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
    simulationTimeout = window.setInterval(runSequence, char.period! * 1000);
    
    const esDesc = `${LIGHT_CHARACTERISTIC_TERMS[char.rhythm]?.es || char.rhythm} ${char.group ? `de grupo (${char.group})` : ''} ${char.colors.map(c => LIGHT_CHARACTERISTIC_TERMS[c]?.es).join(' y ')} con un período de ${char.period}s.`;
    const enDesc = `${LIGHT_CHARACTERISTIC_TERMS[char.rhythm]?.en || char.rhythm} ${char.group ? `group (${char.group})` : ''} ${char.colors.map(c => LIGHT_CHARACTERISTIC_TERMS[c]?.en).join(' & ')} with a period of ${char.period}s.`;

    const descriptionHtml = `<div class="text-sm"><p><strong>ES:</strong> ${esDesc}</p><p><strong>EN:</strong> ${enDesc}</p><p class="text-xs text-muted-foreground mt-2 font-mono">${char.original}</p></div>`;
    infoEl.innerHTML = prependInfo ? prependInfo + descriptionHtml : descriptionHtml;
}


// --- Lighthouse Simulator Component ---
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
        // Cleanup on component unmount
        return () => {
            if (simulationTimeout) {
                clearInterval(simulationTimeout);
                simulationTimeout = null;
            }
        }
    }, [manualChar, handleSimulate]);

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
                                    variant={section.selectedValue === opt ? 'default' : 'outline'}
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
                    <p className="text-muted-foreground">Introduzca una característica para iniciar la simulación.</p>
                </div>
            </div>
        </div>
    );
}

// --- Buoy Simulator Component ---
const BuoySimulator = () => {
    const [region, setRegion] = useState('A');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [activeType, setActiveType] = useState<string | null>(null);

    const categories = Array.from(new Set(IALA_BUOY_DATA.map(b => b.category)));

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        setActiveType(null);
        if (simulationTimeout) clearInterval(simulationTimeout);
        const buoyInfoEl = document.getElementById('buoy-info-panel');
        const buoySchematicEl = document.getElementById('buoy-schematic-container');
        if(buoyInfoEl) buoyInfoEl.innerHTML = '<p class="text-muted-foreground">Seleccione un tipo de señal para comenzar.</p>';
        if(buoySchematicEl) buoySchematicEl.innerHTML = '';

    };

    const handleTypeClick = (buoy: any) => {
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
    };
    
    useEffect(() => {
        handleCategoryClick(categories[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

     useEffect(() => {
        // When region changes, if the current category is lateral marks, reset it.
        if (activeCategory === 'Marcas Laterales') {
            setActiveType(null);
            const buoyInfoEl = document.getElementById('buoy-info-panel');
            const buoySchematicEl = document.getElementById('buoy-schematic-container');
            if(buoyInfoEl) buoyInfoEl.innerHTML = '<p class="text-muted-foreground">Seleccione un tipo de señal para comenzar.</p>';
            if(buoySchematicEl) buoySchematicEl.innerHTML = '';
        }
    }, [region, activeCategory]);
    
     useEffect(() => {
        // Cleanup on component unmount
        return () => {
            if (simulationTimeout) {
                clearInterval(simulationTimeout);
                simulationTimeout = null;
            }
        }
    }, []);

    const buoyTypesForCategory = IALA_BUOY_DATA.filter(b => {
        if (b.category !== activeCategory) return false;
        if (activeCategory === 'Marcas Laterales') return b.region === region;
        return true;
    });

    return (
        <div>
            <div className="space-y-4">
                {activeCategory === 'Marcas Laterales' && (
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
                        {categories.map(cat => (
                            <Button key={cat} variant={activeCategory === cat ? 'default' : 'outline'} onClick={() => handleCategoryClick(cat)}>
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>
                {buoyTypesForCategory.length > 0 && (
                    <div>
                        <Label className="text-xs uppercase text-muted-foreground tracking-wider">Tipo</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {buoyTypesForCategory.map(buoy => (
                                <Button key={`${buoy.type}-${buoy.region || ''}`} variant={activeType === buoy.type ? 'default' : 'outline'} onClick={() => handleTypeClick(buoy)}>
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
                    <p className="text-muted-foreground">Seleccione una categoría y tipo de señal para comenzar.</p>
                </div>
            </div>
        </div>
    );
};

const renderBuoySchematic = (container: HTMLElement, buoy: any) => {
    const colorMap: { [key: string]: string } = { 'red': '#EF4444', 'green': '#22C55E', 'yellow': '#EAB308', 'black': 'hsl(var(--foreground))', 'white': '#F0F2F5' };
    const stroke = 'hsl(var(--foreground))';

    let defs = '';
    let fill = `fill="${colorMap[buoy.colors[0]]}"`;
    if (buoy.colors.length > 1) {
        const gradientId = `grad-${buoy.colors.join('-').replace(/\s/g, '')}`;
        const isVertical = buoy.shape === 'spherical'; // Vertical stripes for Safe Water
        const stops = buoy.colors.map((color:string, index:number) => {
            const step = 100 / buoy.colors.length;
            return `<stop offset="${index * step}%" stop-color="${colorMap[color]}" /><stop offset="${(index + 1) * step}%" stop-color="${colorMap[color]}" />`;
        }).join('');
        
        defs = `<defs><linearGradient id="${gradientId}" x1="0%" y1="0%" x2="${isVertical ? '100%' : '0%'}" y2="${isVertical ? '0%' : '100%'}">${stops}</linearGradient></defs>`;
        fill = `fill="url(#${gradientId})"`;
    }

    let shapeSvg = '';
    switch (buoy.shape) {
        case 'can': shapeSvg = `<rect x="35" y="100" width="30" height="60" ${fill} stroke="${stroke}" stroke-width="1.5"/>`; break;
        case 'conical': shapeSvg = `<polygon points="30,160 70,160 50,100" ${fill} stroke="${stroke}" stroke-width="1.5"/>`; break;
        case 'spherical': shapeSvg = `<circle cx="50" cy="130" r="30" ${fill} stroke="${stroke}" stroke-width="1.5"/>`; break;
        default: shapeSvg = `<rect x="40" y="100" width="20" height="60" ${fill} stroke="${stroke}" stroke-width="1.5"/>`; break; // Pillar
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
            case 'cones-base-base': topmarkSvg = `<polygon points="40,96 60,96 50,80" ${tmFill}/><polygon points="40,64 60,64 50,80" ${tmFill}/>`; break;
            case 'cones-point-point': topmarkSvg = `<polygon points="2,12 12,2 22,12" fill="${colorMap[tm.color]}" stroke="${stroke}" stroke-width="1.5"/><polygon points="2,12 12,22 22,12" fill="${colorMap[tm.color]}" stroke="${stroke}" stroke-width="1.5"/>`; break;
            case 'cones-vertex-together': topmarkSvg = `<polygon points="40,80 60,80 50,96" ${tmFill}/><polygon points="40,80 60,80 50,64" ${tmFill}/>`; break;
        }
    }
    const lightY = buoy.topmark ? 60 : 88;
    const lightSvg = `<circle id="buoy-svg-light" cx="50" cy="${lightY}" r="6" class="light-element" fill="hsl(var(--border))" />`;
    const waterSvg = `<path d="M0 160 Q 50 150, 100 160 T 200 160" stroke-width="2" stroke="hsl(var(--primary))" fill="hsl(var(--primary)/.2)"/>`;

    container.innerHTML = `<svg viewBox="0 0 100 180" style="overflow: visible;">${defs}${waterSvg}${shapeSvg}${topmarkSvg}${lightSvg}</svg>`;
};


// --- Buques Simulator Component ---

const BuquesSimulator = () => {
    const [selectedRuleId, setSelectedRuleId] = useState(COLREG_RULES_DATA[0].id);
    const [selectedStateId, setSelectedStateId] = useState(0);
    const [isNight, setIsNight] = useState(true);
    const [view, setView] = useState<'bow' | 'starboard' | 'stern'>('bow');

    const ruleData = useMemo(() => {
        return COLREG_RULES_DATA.find(r => r.id === selectedRuleId) || null;
    }, [selectedRuleId]);

    const stateData = useMemo(() => {
        if (!ruleData) return null;
        return ruleData.states?.[selectedStateId] || ruleData;
    }, [ruleData, selectedStateId]);
    
    // Reset state index when rule changes
    useEffect(() => {
        setSelectedStateId(0);
    }, [selectedRuleId]);


    const colorMap: { [key: string]: string } = {
        white: '#FFFFFF',
        red: '#EF4444',
        green: '#22C55E',
        yellow: '#EAB308',
        blue: '#3B82F6',
    };
    
    const lightColor = (color: string) => isNight ? colorMap[color] : 'transparent';
    const lightEffect = (color: string) => {
        if (!isNight) return '';
        switch(color) {
            case 'white': return 'w-on';
            case 'red': return 'r-on';
            case 'green': return 'g-on';
            case 'yellow': return 'y-on';
            case 'blue': return 'bu-on';
            default: return '';
        }
    }

    const renderLights = () => {
        if (!stateData || !stateData.lights) return null;
        
        return stateData.lights.map(light => {
            const isVisible = light.arc[view];
            if (!isVisible) return null;
            
            const isFlashing = light.flash;
            const baseClasses = "light-element absolute rounded-full";
            const onClasses = isVisible ? lightEffect(light.color) : '';
            const flashingClass = isFlashing ? 'animate-pulse' : '';
            const style = { 
                left: `${light.position[view].x}%`, 
                top: `${light.position[view].y}%`,
                width: '8px', height: '8px',
                transform: 'translate(-50%, -50%)',
                backgroundColor: lightColor(light.color),
                animationDuration: isFlashing ? '1s' : undefined,
            };

            return <div key={light.id} className={cn(baseClasses, isVisible && 'on', onClasses, flashingClass)} style={style} />;
        })
    }
    
    const renderMarks = () => {
        if (!stateData || !stateData.marks) return null;

        return stateData.marks.map(mark => {
            const style = { 
                left: `${mark.position[view].x}%`, 
                top: `${mark.position[view].y}%`,
                transform: 'translate(-50%, -50%)',
            };
            const C = 'hsl(var(--foreground))';
            let markSvg;
            switch(mark.shape) {
                case 'ball': markSvg = <circle cx="12" cy="12" r="10" fill={C} />; break;
                case 'cone-up': markSvg = <polygon points="2,22 22,22 12,2" fill={C}/>; break;
                case 'cone-down': markSvg = <polygon points="2,2 22,2 12,22" fill={C}/>; break;
                case 'diamond': markSvg = <><polygon points="2,12 12,2 22,12" fill={C}/><polygon points="2,12 12,22 22,12" fill={C}/></>; break;
                case 'cylinder': markSvg = <rect x="4" y="2" width="16" height="20" fill={C}/>; break;
                case 'basket': markSvg = <rect x="4" y="2" width="16" height="16" stroke={C} strokeWidth="2" fill="transparent"/>; break;
                case 'cones-vertex-together': markSvg = <><polygon points="2,11 12,2 22,11" fill={C}/><polygon points="2,13 12,22 22,13" fill={C} /></>; break;
            }
            return (
                 <div key={mark.id} className="absolute w-6 h-6" style={style}>
                    <svg viewBox="0 0 24 24">{markSvg}</svg>
                 </div>
            )
        })
    }

    const hasStates = ruleData?.states && ruleData.states.length > 1;

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                 <div className="md:col-span-3">
                    <Label>Situación / Tipo de Buque</Label>
                    <Select value={selectedRuleId} onValueChange={setSelectedRuleId}>
                        <SelectTrigger className="w-full mt-2">
                            <SelectValue placeholder="Selecciona una regla..." />
                        </SelectTrigger>
                        <SelectContent>
                             {COLREG_RULES_DATA.map(rule => (
                                <SelectItem key={rule.id} value={rule.id}>{rule.title}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                 </div>
                 
                 <div className={cn(hasStates ? 'md:col-span-1' : 'md:col-span-2')}>
                    <Label>Vista</Label>
                     <div className="flex flex-wrap gap-2 mt-2">
                        {(['bow', 'starboard', 'stern'] as const).map(v => (
                            <Button key={v} variant={view === v ? 'default' : 'outline'} className="flex-1" onClick={() => setView(v)}>
                                {v === 'bow' ? 'Proa' : v === 'starboard' ? 'Estribor' : 'Popa'}
                            </Button>
                        ))}
                    </div>
                 </div>

                 {hasStates && (
                     <div className="md:col-span-2">
                        <Label>Caso Específico</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {ruleData.states.map((state, index) => (
                                <Button key={index} variant={selectedStateId === index ? 'default' : 'outline'} className="flex-1" onClick={() => setSelectedStateId(index)}>
                                    {state.title}
                                </Button>
                            ))}
                        </div>
                     </div>
                 )}

                 <div className="md:col-span-3">
                    <Label>Condición</Label>
                    <div className="flex flex-wrap gap-2 mt-2 h-10">
                        <Button variant={!isNight ? 'default' : 'outline'} className="flex-1" onClick={() => setIsNight(false)}><Sun className="mr-2 h-4 w-4"/> Día</Button>
                        <Button variant={isNight ? 'default' : 'outline'} className="flex-1" onClick={() => setIsNight(true)}><Moon className="mr-2 h-4 w-4"/> Noche</Button>
                    </div>
                 </div>
            </div>

            <div className="mt-6 flex flex-col items-center">
                 <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden">
                    {/* Background */}
                    <div className={cn("absolute inset-0 transition-colors duration-500", isNight ? 'bg-indigo-950' : 'bg-blue-200')}>
                        {isNight && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700/20 via-transparent to-black" />}
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    
                    {/* Water */}
                    <div className="absolute bottom-[30%] left-0 right-0 h-[33%]">
                        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 120">
                            <path d="M0,48L48,53.3C96,59,192,75,288,80C384,85,480,80,576,69.3C672,59,768,43,864,42.7C960,43,1056,59,1152,64C1248,69,1344,64,1392,61.3L1440,59L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
                            fill={isNight ? 'hsl(var(--primary)/0.3)' : 'hsl(var(--primary)/0.5)'}
                            className="opacity-50"
                            ></path>
                        </svg>
                    </div>

                    {/* Ship Schematic */}
                    <div className={cn("absolute w-[80%] h-[40%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] transition-opacity duration-300", view === 'starboard' ? 'opacity-100' : 'opacity-0')}>
                        {stateData?.svg?.side}
                    </div>
                    <div className={cn("absolute w-[80%] h-[40%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] transition-opacity duration-300", view === 'bow' ? 'opacity-100' : 'opacity-0')}>
                        {stateData?.svg?.front}
                    </div>
                    <div className={cn("absolute w-[80%] h-[40%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] transition-opacity duration-300", view === 'stern' ? 'opacity-100' : 'opacity-0')}>
                        {stateData?.svg?.back}
                    </div>

                    {/* Lights & Marks */}
                    <div className="absolute inset-0">
                        {isNight && renderLights()}
                        {!isNight && renderMarks()}
                    </div>
                 </div>

                 <div className="text-left mt-4 p-4 bg-muted rounded-lg w-full min-h-[110px]">
                    <h4 className="font-bold">{ruleData?.title}: {stateData?.title}</h4>
                    <p className="text-sm text-muted-foreground italic mb-2">{stateData?.description}</p>
                    <div className="text-sm border-t pt-2 space-y-3">
                        <div>
                            <strong className="block mb-1">{isNight ? "Luces Requeridas:" : "Marcas Requeridas:"}</strong>
                            {isNight ? (
                                <ul className="list-disc list-inside space-y-1">
                                    {stateData?.lights?.map(l => l.desc && <li key={l.id}>{l.desc}</li>)}
                                </ul>
                            ) : (
                                <ul className="list-disc list-inside space-y-1">
                                    {stateData?.marks && stateData.marks.length > 0 ? 
                                        stateData.marks.map(m => m.desc && <li key={m.id}>{m.desc}</li>) :
                                        <li>Ninguna marca requerida.</li>
                                    }
                                </ul>
                            )}
                        </div>
                        {stateData?.explanation && (
                            <div className="border-t pt-2">
                                <strong className="block mb-1">Explicación y Excepciones:</strong>
                                <p className="text-xs text-muted-foreground whitespace-pre-line">{stateData.explanation}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

}

// --- Main Page Component ---
export default function SenalesPage() {
    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Simulador de Señales Marítimas</CardTitle>
                    <CardDescription>
                        Herramienta interactiva para aprender a identificar las características de luces y marcas de faros, boyas y buques.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="buques" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 gap-2 h-auto bg-transparent p-0">
                            <TabsTrigger value="buques" className="h-12 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">Luces y Marcas</TabsTrigger>
                            <TabsTrigger value="balizamiento" className="h-12 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">Balizamiento</TabsTrigger>
                            <TabsTrigger value="faros" className="h-12 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">Faros y Boyas</TabsTrigger>
                        </TabsList>
                        <TabsContent value="buques" className="pt-6">
                           <BuquesSimulator />
                        </TabsContent>
                        <TabsContent value="balizamiento" className="pt-6">
                            <BuoySimulator />
                        </TabsContent>
                        <TabsContent value="faros" className="pt-6">
                            <LighthouseSimulator />
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}

    

    
