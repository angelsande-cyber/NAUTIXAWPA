"use client";
import { useState, useEffect } from 'react';
import { generateDrill } from '@/ai/flows/simulacro';
import type { DrillOutput } from '@/ai/schemas/simulacro-schema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '../ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Info, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SimulacroPage() {
    const [drill, setDrill] = useState<DrillOutput | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const { toast } = useToast();

    const handleGenerateDrill = async () => {
        setLoading(true);
        setDrill(null);
        setSelectedAnswer(null);
        setShowResult(false);
        try {
            const drillData = await generateDrill();
            setDrill(drillData);
        } catch (error) {
            console.error(error);
            toast({
                title: "Error de IA",
                description: "No se pudo generar el simulacro.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        handleGenerateDrill();
    }, []);

    const handleCheckAnswer = () => {
        if (selectedAnswer === null) {
            toast({
                title: "Error",
                description: "Por favor, seleccione una respuesta.",
                variant: "destructive",
            });
            return;
        }
        setShowResult(true);
    };

    const getOptionClass = (index: number) => {
        if (!showResult) return '';
        if (index === drill?.correctAnswerIndex) return 'bg-green-100/80 dark:bg-green-900/40 border-green-500/50';
        if (index === selectedAnswer) return 'bg-red-100/80 dark:bg-red-900/40 border-destructive/50';
        return '';
    };

    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <div className='flex justify-between items-start'>
                        <div>
                            <CardTitle>Simulacro de Llamada</CardTitle>
                            <CardDescription className="pt-1">
                                Pon a prueba tus conocimientos de GMDSS con un escenario de la IA.
                            </CardDescription>
                        </div>
                        <Button onClick={handleGenerateDrill} disabled={loading} size="icon" variant="ghost">
                            <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    {loading && (
                        <div className='space-y-4'>
                            <Skeleton className="h-24 w-full" />
                            <Skeleton className="h-8 w-3/4" />
                            <Skeleton className="h-12 w-full" />
                            <Skeleton className="h-12 w-full" />
                            <Skeleton className="h-12 w-full" />
                        </div>
                    )}

                    {drill && !loading && (
                        <div>
                            <Alert className="mb-4">
                                <Info className="h-4 w-4"/>
                                <AlertTitle>Escenario</AlertTitle>
                                <AlertDescription>{drill.scenario}</AlertDescription>
                            </Alert>
                            
                            <h3 className="font-semibold mt-6 mb-2">{drill.question}</h3>
                            <RadioGroup 
                                value={selectedAnswer?.toString()}
                                onValueChange={(value) => setSelectedAnswer(Number(value))}
                                disabled={showResult}
                                className="gap-3"
                            >
                                {drill.options.map((option, index) => (
                                    <Label key={index} htmlFor={`option-${index}`} className={cn("flex items-start space-x-3 p-3 border rounded-lg transition-colors cursor-pointer hover:bg-accent/50", getOptionClass(index))}>
                                        <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1"/>
                                        <span className="flex-1">{option}</span>
                                    </Label>
                                ))}
                            </RadioGroup>

                            {!showResult && (
                                <Button onClick={handleCheckAnswer} className="w-full mt-4">
                                    Verificar Respuesta
                                </Button>
                            )}
                            
                            {showResult && (
                                <Alert className="mt-4" variant={selectedAnswer === drill.correctAnswerIndex ? "default" : "destructive"}>
                                    <Info className="h-4 w-4" />
                                    <AlertTitle>{selectedAnswer === drill.correctAnswerIndex ? "¡Correcto!" : "Respuesta Incorrecta"}</AlertTitle>
                                    <AlertDescription>{drill.feedback}</AlertDescription>
                                </Alert>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
