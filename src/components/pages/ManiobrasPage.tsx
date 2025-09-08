
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Play, RefreshCw, Wind } from 'lucide-react';
import { MANEUVER_DATA } from '@/lib/data/maniobras';
import type { ManeuverScenario } from '@/lib/data/maniobras';
import { cn } from '@/lib/utils';

const BoatIcon = ({ colorClass }: { colorClass: string }) => (
    <g className={cn("fill-current", colorClass.replace('stroke', 'text'))}>
        <path d="M -6 -10 L 0 10 L 6 -10 L 0 -7 Z" />
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
    const [isAnimating, setIsAnimating] = useState(false);

    const handleScenarioChange = (id: string) => {
        const scenario = MANEUVER_DATA.find(s => s.id === id);
        if (scenario) {
            setSelectedScenario(scenario);
            setIsAnimating(false);
        }
    };

    const handleAnimate = () => {
        setIsAnimating(false);
        setTimeout(() => setIsAnimating(true), 50); // Restart animation
    };
    
    useEffect(() => {
        handleAnimate();
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
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Grid */}
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                    
                    {/* Wind Arrow */}
                    {selectedScenario.windDirection && (
                        <g transform={`translate(${
                            selectedScenario.windDirection === 'W' ? 15 : (selectedScenario.windDirection === 'E' ? 85 : 50)
                        }, ${
                            selectedScenario.windDirection === 'N' ? 15 : (selectedScenario.windDirection === 'S' ? 85 : 50)
                        })`}>
                            <WindArrow />
                            <text x="0" y="-18" textAnchor="middle" className="text-xs fill-sky-500">Viento</text>
                        </g>
                    )}

                    {/* Paths and Boats */}
                    {[selectedScenario.vesselA, selectedScenario.vesselB].map((vessel, index) => (
                        <g key={index}>
                            {/* Dotted line for original path */}
                            <path d={vessel.path} strokeDasharray="2 2" className={cn(vessel.colorClass, "opacity-40")} strokeWidth="1" fill="none" />

                            {/* Solid line for animated path */}
                            <path
                                d={vessel.path}
                                className={cn(vessel.colorClass, isAnimating ? "animate-draw" : "opacity-0")}
                                strokeWidth="2"
                                fill="none"
                                style={{ strokeDasharray: 300, strokeDashoffset: isAnimating ? 0 : 300, animationDuration: '4s' } as React.CSSProperties}
                            />
                            
                            {/* Boat icon */}
                            <g className={isAnimating ? 'animate-move' : ''} style={{ animationDuration: '4s', offsetPath: `path("${vessel.path}")` } as React.CSSProperties}>
                                <BoatIcon colorClass={vessel.colorClass} />
                            </g>
                        </g>
                    ))}
                    
                     <style>{`
                        @keyframes move { from { offset-distance: 0%; } to { offset-distance: 100%; } }
                        .animate-move { animation: move 4s linear forwards; }
                        @keyframes draw { to { stroke-dashoffset: 0; } }
                        .animate-draw { animation: draw 4s linear forwards; }
                    `}</style>
                </svg>
            </div>
            
            <Card className="bg-background/70">
                <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{selectedScenario.title} ({selectedScenario.rule})</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{selectedScenario.explanation}</p>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"/>
                            <span className="text-xs font-semibold">Buque que cede paso</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500"/>
                            <span className="text-xs font-semibold">Buque que sigue a rumbo</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="text-center">
                 <Button onClick={handleAnimate}>
                    {isAnimating ? <RefreshCw className="mr-2 animate-spin" /> : <Play className="mr-2"/>}
                    {isAnimating ? "Animando..." : "Repetir Animación"}
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

