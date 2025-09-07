
"use client";

import { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Moon, Sun } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { COLREG_RULES_DATA, VESSEL_SVGS } from "@/lib/data/signals";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Label } from "../ui/label";


const BuquesSimulator = () => {
    const [selectedRuleId, setSelectedRuleId] = useState<string | undefined>(undefined);
    const [selectedStateId, setSelectedStateId] = useState(0);
    const [isNight, setIsNight] = useState(true);
    const [view, setView] = useState<'bow' | 'starboard' | 'stern'>('bow');

    useEffect(() => {
      if (COLREG_RULES_DATA.length > 0 && !selectedRuleId) {
        setSelectedRuleId(COLREG_RULES_DATA[0].id);
      }
    }, [selectedRuleId]);

    const ruleData = useMemo(() => {
        return COLREG_RULES_DATA.find(r => r.id === selectedRuleId) || null;
    }, [selectedRuleId]);

    const stateData = useMemo(() => {
        if (!ruleData) return null;
        return ruleData.states?.[selectedStateId] || ruleData;
    }, [ruleData, selectedStateId]);
    
    useEffect(() => {
        setSelectedStateId(0);
    }, [selectedRuleId]);

    const lightColor = (color: string) => {
        const colorMap: { [key: string]: string } = { white: '#FFFFFF', red: '#EF4444', green: '#22C55E', yellow: '#EAB308', blue: '#3B82F6' };
        return isNight ? colorMap[color] : 'transparent';
    }
    const lightEffect = (color: string) => {
        if (!isNight) return '';
        const effectMap: { [key: string]: string } = { white: 'w-on', red: 'r-on', green: 'g-on', yellow: 'y-on', blue: 'bu-on' };
        return effectMap[color] || '';
    }

    const renderLights = () => {
        if (!stateData || !stateData.lights) return null;
        
        return stateData.lights.map((light: any) => {
            const isVisible = light.arc[view];
            if (!isVisible) return null;
            
            const isFlashing = light.flash;
            const baseClasses = "light-element absolute rounded-full";
            const onClasses = isVisible ? lightEffect(light.color) : '';
            const flashingClass = isFlashing ? 'animate-pulse' : '';
            const style = { 
                left: `${light.position[view]?.x}%`, 
                top: `${light.position[view]?.y}%`,
                width: '8px', height: '8px',
                transform: 'translate(-50%, -50%)',
                backgroundColor: lightColor(light.color),
                animationDuration: isFlashing ? '1s' : undefined,
            };

            return <div key={light.id} className={cn(baseClasses, isVisible && 'on', onClasses, flashingClass)} style={style as React.CSSProperties} />;
        })
    }
    
    const renderMarks = () => {
        if (!stateData || !stateData.marks) return null;

        return stateData.marks.map((mark: any) => {
             const isVisible = mark.position[view];
             if (!isVisible) return null;

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
                 <div key={mark.id} className="absolute w-6 h-6" style={style as React.CSSProperties}>
                    <svg viewBox="0 0 24 24">{markSvg}</svg>
                 </div>
            )
        })
    }

    const renderVesselSvg = (svgName: string, view: 'side' | 'front' | 'back') => {
        if (!VESSEL_SVGS[svgName] || !VESSEL_SVGS[svgName][view]) return null;
        return <div className={cn(isNight && "ship-outline")} dangerouslySetInnerHTML={{ __html: VESSEL_SVGS[svgName][view] }} />;
    }

    const hasStates = ruleData?.states && ruleData.states.length > 1;

    return (
        <div>
            <div className="space-y-4 mb-4">
                 <div>
                    <Label>Situación</Label>
                    <Select value={selectedRuleId} onValueChange={setSelectedRuleId}>
                        <SelectTrigger className="w-full mt-2">
                            <SelectValue placeholder="Selecciona una situación" />
                        </SelectTrigger>
                        <SelectContent>
                             {COLREG_RULES_DATA.map(rule => (
                                <SelectItem key={rule.id} value={rule.id}>{rule.title}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                 </div>

                 {hasStates && stateData && (
                     <div>
                        <Label>Caso específico</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                            {ruleData.states.map((state, index) => (
                                <Button key={index} variant={selectedStateId === index ? 'default' : 'outline'} onClick={() => setSelectedStateId(index)}>
                                    {state.title}
                                </Button>
                            ))}
                        </div>
                     </div>
                 )}

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label>Vista</Label>
                         <div className="grid grid-cols-3 gap-2 mt-2">
                            {(['bow', 'starboard', 'stern'] as const).map(v => (
                                <Button key={v} variant={view === v ? 'default' : 'outline'} onClick={() => setView(v)}>
                                    { {bow: 'Proa', starboard: 'Estribor', stern: 'Popa'}[v] }
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Label>Condición</Label>
                        <div className="grid grid-cols-2 gap-2 mt-2 h-10">
                            <Button variant={!isNight ? 'default' : 'outline'} className="flex-1" onClick={() => setIsNight(false)}><Sun className="mr-2 h-4 w-4"/>Día</Button>
                            <Button variant={isNight ? 'default' : 'outline'} className="flex-1" onClick={() => setIsNight(true)}><Moon className="mr-2 h-4 w-4"/>Noche</Button>
                        </div>
                    </div>
                 </div>
            </div>

            <div className="mt-6 flex flex-col items-center">
                 <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden">
                    <div className={cn("absolute inset-0 transition-colors duration-500", isNight ? 'bg-indigo-950' : 'bg-blue-200')}>
                        {isNight && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700/20 via-transparent to-black" />}
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    
                    <div className="absolute bottom-[30%] left-0 right-0 h-[33%]">
                        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 120">
                            <path d="M0,48L48,53.3C96,59,192,75,288,80C384,85,480,80,576,69.3C672,59,768,43,864,42.7C960,43,1056,59,1152,64C1248,69,1344,64,1392,61.3L1440,59L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
                            fill={isNight ? 'hsl(var(--primary)/0.3)' : 'hsl(var(--primary)/0.5)'}
                            className="opacity-50"
                            ></path>
                        </svg>
                    </div>

                    {stateData &&
                        <>
                        <div className={cn("absolute text-gray-800 dark:text-gray-900 w-[80%] h-[40%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] transition-opacity duration-300", view === 'starboard' ? 'opacity-100' : 'opacity-0')}>
                            {renderVesselSvg(stateData.svg, 'side')}
                        </div>
                        <div className={cn("absolute text-gray-800 dark:text-gray-900 w-[80%] h-[40%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] transition-opacity duration-300", view === 'bow' ? 'opacity-100' : 'opacity-0')}>
                            {renderVesselSvg(stateData.svg, 'front')}
                        </div>
                        <div className={cn("absolute text-gray-800 dark:text-gray-900 w-[80%] h-[40%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] transition-opacity duration-300", view === 'stern' ? 'opacity-100' : 'opacity-0')}>
                            {renderVesselSvg(stateData.svg, 'back')}
                        </div>
                        </>
                    }

                    <div className="absolute inset-0">
                        {isNight && renderLights()}
                        {!isNight && renderMarks()}
                    </div>
                 </div>

                 <div className="text-left mt-4 p-4 bg-muted rounded-lg w-full min-h-[110px]">
                    {stateData ? 
                        <>
                        <h4 className="font-bold">{stateData.title}</h4>
                        <p className="text-sm text-muted-foreground italic mb-2">{stateData.description}</p>
                        <div className="text-sm border-t pt-2 space-y-3">
                            <div>
                                <strong className="block mb-1">{isNight ? 'Luces requeridas' : 'Marcas requeridas'}</strong>
                                {isNight ? (
                                    <ul className="list-disc list-inside space-y-1">
                                        {stateData.lights?.map((l: any) => l.desc && <li key={l.id}>{l.desc}</li>)}
                                    </ul>
                                ) : (
                                    <ul className="list-disc list-inside space-y-1">
                                        {stateData.marks && stateData.marks.length > 0 ? 
                                            stateData.marks.map((m: any) => m.desc && <li key={m.id}>{m.desc}</li>) :
                                            <li>Ninguna marca requerida.</li>
                                        }
                                    </ul>
                                )}
                            </div>
                            {stateData.explanation && (
                                <div className="border-t pt-2">
                                    <strong className="block mb-1">Explicación</strong>
                                    <p className="text-xs text-muted-foreground whitespace-pre-line">{stateData.explanation}</p>
                                </div>
                            )}
                        </div>
                        </>
                    : <Skeleton className="h-24 w-full" />
                    }
                </div>
            </div>
        </div>
    )

}


export default function BuquesPage() {
    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Simulador de Luces y Marcas de Buques</CardTitle>
                    <CardDescription>Aprende a identificar los buques según el Reglamento Internacional para Prevenir Abordajes (COLREG) por sus luces de navegación nocturnas y sus marcas diurnas.</CardDescription>
                </CardHeader>
                <CardContent>
                    <BuquesSimulator />
                </CardContent>
            </Card>
        </div>
    );
}
