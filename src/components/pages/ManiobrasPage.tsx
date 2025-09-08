
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';
import { MANEUVER_DATA } from '@/lib/data/maniobras';
import type { ManeuverScenario } from '@/lib/data/maniobras/types';
import { cn } from '@/lib/utils';

const BoatIcon = () => (
    <g>
        <path d="M 0 0 L -2 -5 L 5 0 L -2 5 Z" />
    </g>
);


const WindArrow = () => (
    <g className="text-sky-400" stroke="currentColor" strokeWidth="1.5">
        <path d="M 0 -12 L 0 12" />
        <path d="M 0 -12 L -5 -7 M 0 -12 L 5 -7" />
        <path d="M -8 0 L 8 0" />
    </g>
)

const ManeuverSimulator = () => {
    const [selectedScenario, setSelectedScenario] = useState<ManeuverScenario>(MANEUVER_DATA[0]);
    const [isPlaying, setIsPlaying] = useState(true);

    const handleScenarioChange = (id: string) => {
        const scenario = MANEUVER_DATA.find(s => s.id === id);
        if (scenario) {
            setSelectedScenario(scenario);
            setIsPlaying(true); // Autoplay on new scenario
        }
    };

    const togglePlay = () => {
        setIsPlaying(prev => !prev);
    };
    
    useEffect(() => {
        setIsPlaying(true);
    }, [selectedScenario]);

    return (
        <div className='space-y-4'>
            <Select
                value={selectedScenario.id}
                onValueChange={handleScenarioChange}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona una situación de maniobra" />
                </SelectTrigger>
                <SelectContent>
                    {MANEUVER_DATA.map(scenario => (
                        <SelectItem key={scenario.id} value={scenario.id}>
                            {scenario.title} - {scenario.description}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <div className="relative w-full aspect-square bg-muted rounded-lg overflow-hidden border">
                <svg viewBox="-50 -50 100 100" className="w-full h-full">
                    {/* Grid */}
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5"/>
                        </pattern>
                    </defs>
                    <rect x="-50" y="-50" width="100" height="100" fill="url(#grid)" />
                    
                    {/* Coordinates */}
                    <g className="text-[5px] fill-muted-foreground font-mono">
                        {[-40, -20, 20, 40].map(n => (
                            <text key={`x-${n}`} x={n} y="-46" textAnchor="middle">{n}</text>
                        ))}
                        {[-40, -20, 20, 40].map(n => (
                            <text key={`y-${n}`} x="-48" y={n} dy="2" textAnchor="start">{n}</text>
                        ))}
                    </g>
                    
                    {/* Wind Arrow */}
                    {selectedScenario.windDirection && (
                        <g transform={`translate(${
                            selectedScenario.windDirection === 'W' ? -35 : (selectedScenario.windDirection === 'E' ? 35 : 0)
                        }, ${
                            selectedScenario.windDirection === 'N' ? -35 : (selectedScenario.windDirection === 'S' ? 35 : 0)
                        })`}>
                            <WindArrow />
                            <text x="0" y="-18" textAnchor="middle" className="text-xs fill-sky-500">Viento</text>
                        </g>
                    )}

                    {/* Paths and Boats */}
                    {[selectedScenario.vesselA, selectedScenario.vesselB].map((vessel, index) => {
                        const isVesselA = vessel.label.includes('Alcanzador');
                        const animationClass = isVesselA && selectedScenario.id === 'overtaking' ? 'animate-draw-fast' : 'animate-draw-slow';
                        const motionDur = isVesselA && selectedScenario.id === 'overtaking' ? '6s' : '10s';

                        return (
                        <g key={index}>
                            {/* Dotted line for original path */}
                            <path d={vessel.path} strokeDasharray="2 2" className={cn(vessel.colorClass, "opacity-40")} strokeWidth="0.5" fill="none" />

                            <g className={cn(!isPlaying && "paused")}>
                                {/* Solid line for animated path */}
                                <path
                                    d={vessel.path}
                                    className={cn(vessel.colorClass, animationClass)}
                                    strokeWidth="1"
                                    fill="none"
                                    style={{ strokeDasharray: 300, strokeDashoffset: 300 }}
                                />
                                
                                {/* Boat icon */}
                                <g className={vessel.colorClass?.replace('stroke', 'fill')}>
                                    <animateMotion dur={motionDur} begin="0s" fill="freeze" repeatCount="indefinite" path={vessel.path} rotate="auto" />
                                    <BoatIcon />
                                </g>
                            </g>
                            
                        </g>
                    )})}
                    
                     <style>{`
                        @keyframes draw { to { stroke-dashoffset: 0; } }
                        .animate-draw-slow { animation: draw 10s linear infinite; }
                        .animate-draw-fast { animation: draw 6s linear infinite; }
                        .paused * {
                           animation-play-state: paused !important;
                        }
                    `}</style>
                </svg>
            </div>
            
            <Card className="bg-background/70">
                <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{selectedScenario.title} ({selectedScenario.rule})</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{selectedScenario.explanation}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                       <div className="flex items-center gap-2">
                            <div className={cn("w-3 h-3 rounded-full border", selectedScenario.vesselA.colorClass.replace('stroke', 'bg'), selectedScenario.vesselA.colorClass.replace('stroke', 'border'))}/>
                            <span className="text-xs font-semibold">{selectedScenario.vesselA.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                             <div className={cn("w-3 h-3 rounded-full border", selectedScenario.vesselB.colorClass.replace('stroke', 'bg'), selectedScenario.vesselB.colorClass.replace('stroke', 'border'))}/>
                            <span className="text-xs font-semibold">{selectedScenario.vesselB.label}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="text-center">
                 <Button onClick={togglePlay}>
                    {isPlaying ? <Pause className="mr-2" /> : <Play className="mr-2"/>}
                    {isPlaying ? "Pausa" : "Reanudar"}
                 </Button>
            </div>
        </div>
    )
};


export default function ManiobrasPage() {
    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Simulador de Maniobras (COLREG)</CardTitle>
                    <CardDescription>
                        Visualiza las principales reglas de paso entre buques para prevenir abordajes en el mar.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ManeuverSimulator />
                </CardContent>
            </Card>
        </div>
    );
}
