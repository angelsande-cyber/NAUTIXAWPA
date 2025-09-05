"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '../ui/skeleton';
import { Search } from 'lucide-react';

export default function MmsiPage() {
    const [mmsi, setMmsi] = useState("");
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const handleSearch = () => {
        setLoading(true);
        // Implement search logic here in the future
        setTimeout(() => {
            setLoading(false);
            toast({
                title: "Función no implementada",
                description: "La búsqueda de MMSI se añadirá en una futura actualización.",
                variant: "destructive"
            });
        }, 1000);
    };

    return (
        <div className="p-8">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Buscador de MMSI</CardTitle>
                    <p className="text-muted-foreground pt-2">
                        Busca información pública de un buque a partir de su número MMSI.
                    </p>
                </CardHeader>
                <CardContent>
                    <div className="flex w-full items-center space-x-2">
                        <Input
                            type="text"
                            placeholder="Introduce 9 dígitos..."
                            value={mmsi}
                            onChange={(e) => setMmsi(e.target.value)}
                            pattern="\d{9}"
                            maxLength={9}
                        />
                        <Button onClick={handleSearch} disabled={loading}>
                             {loading ? "Buscando..." : <><Search className="h-4 w-4 mr-2" /> Buscar</>}
                        </Button>
                    </div>

                    {loading && (
                         <div className="mt-6">
                            <Skeleton className="h-8 w-1/3 mb-4" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-2/3" />
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
