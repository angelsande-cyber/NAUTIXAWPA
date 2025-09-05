"use client";
import { useState } from 'react';
import { translateText } from '@/ai/flows/translator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '../ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Languages } from 'lucide-react';

export default function DiccionarioPage() {
    const [textToTranslate, setTextToTranslate] = useState("");
    const [translation, setTranslation] = useState("");
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const handleTranslate = async () => {
        if (!textToTranslate.trim()) {
            toast({
                title: "Error",
                description: "El campo de texto no puede estar vacío.",
                variant: "destructive",
            });
            return;
        }

        setLoading(true);
        setTranslation("");
        try {
            const data = await translateText({ textToTranslate });
            setTranslation(data.translation);
        } catch (error) {
            console.error(error);
            toast({
                title: "Error de IA",
                description: "No se pudo generar la traducción.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Diccionario Náutico (IA)</CardTitle>
                    <CardDescription>
                        Traduce términos y frases cortas entre español e inglés. La IA detectará el idioma de origen.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Textarea
                        value={textToTranslate}
                        onChange={(e) => setTextToTranslate(e.target.value)}
                        placeholder="Ej: Virar por avante"
                        rows={4}
                        className="mb-4 font-mono"
                    />
                    <Button onClick={handleTranslate} disabled={loading} className="w-full">
                        {loading ? "Traduciendo..." : "Traducir"}
                    </Button>

                    {loading && (
                         <div className="mt-6">
                            <Skeleton className="h-8 w-1/3 mb-4" />
                            <Skeleton className="h-4 w-full" />
                        </div>
                    )}

                    {translation && (
                        <div className="mt-6">
                             <Alert>
                                <Languages className="h-4 w-4" />
                                <AlertTitle>Traducción</AlertTitle>
                                <AlertDescription className="text-lg font-semibold">{translation}</AlertDescription>
                            </Alert>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
