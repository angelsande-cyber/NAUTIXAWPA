"use client";
import { useState } from 'react';
import { generateDrill } from '@/ai/flows/simulacro';
import type { DrillOutput } from '@/ai/schemas/simulacro-schema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '../ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Info } from 'lucide-react';

export default function SimulacroPage() {
    const [drill, setDrill] = useState<DrillOutput | null>(null);
    const [loading, setLoading] = useState(false);
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
        if (index === drill?.correctAnswerIndex) return 'text-green-600 border-green-500 bg-green-50';
        if (index === selectedAnswer) return 'text-red-600 border-red-500 bg-red-50';
        return '';
    };

    return (
        <div className="p-8">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Simulacro de Llamada de Socorro</CardTitle>
                    <p className="text-muted-foreground pt-2">
                        Pon a prueba tus conocimientos de GMDSS. La IA generará un escenario de emergencia.
                    </p>
                </CardHeader>
                <CardContent>
                    <Button onClick={handleGenerateDrill} disabled={loading} className="w-full mb-6">
                        {loading ? "Generando Escenario..." : "Iniciar Nuevo Simulacro"}
                    </Button>
                    
                    {loading && <Skeleton className="h-48 w-full" />}

                    {drill && (
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
                            >
                                {drill.options.map((option, index) => (
                                    <div key={index} className={`flex items-center space-x-2 p-3 border rounded-md ${getOptionClass(index)}`}>
                                        <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                                        <Label htmlFor={`option-${index}`} className="flex-1">{option}</Label>
                                    </div>
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
