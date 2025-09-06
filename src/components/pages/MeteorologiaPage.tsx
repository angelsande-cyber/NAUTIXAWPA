"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { useState, useEffect } from "react";

interface BeaufortScaleData {
    force: number;
    denomination: string;
    speedKnots: string;
    waveHeight: string;
    seaState: string;
}

interface DouglasScaleData {
    degree: number;
    denomination: string;
    waveHeight: string;
}

interface CloudTypeData {
    type: string;
    altitude: string;
    description: string;
    imageUrl: string;
    hint: string;
}

interface MeteorologiaData {
    beaufortScale: BeaufortScaleData[];
    douglasSeaScale: DouglasScaleData[];
    douglasSwellScale: DouglasScaleData[];
    cloudTypes: CloudTypeData[];
}


export default function MeteorologiaPage() {
    const [data, setData] = useState<MeteorologiaData | null>(null);

    useEffect(() => {
        fetch('/data/meteorologia.json')
            .then(res => res.json())
            .then(setData);
    }, []);

    if (!data) {
        return (
            <div className="p-4 md:p-6 space-y-6">
                <Card className="w-full max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle>Cargando...</CardTitle>
                    </CardHeader>
                </Card>
            </div>
        )
    }

    return (
        <div className="p-4 md:p-6 space-y-6">
            {/* Beaufort Scale Card */}
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Escala Beaufort</CardTitle>
                    <CardDescription>Mide la intensidad del viento, basándose principalmente en el estado del mar, su oleaje y la fuerza del viento.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Fuerza</TableHead>
                                    <TableHead>Denominación</TableHead>
                                    <TableHead>Velocidad (nudos)</TableHead>
                                    <TableHead>Altura de Olas</TableHead>
                                    <TableHead>Aspecto del Mar</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.beaufortScale.map((item) => (
                                    <TableRow key={item.force}>
                                        <TableCell className="font-bold text-center">{item.force}</TableCell>
                                        <TableCell>{item.denomination}</TableCell>
                                        <TableCell>{item.speedKnots}</TableCell>
                                        <TableCell>{item.waveHeight}</TableCell>
                                        <TableCell>{item.seaState}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            {/* Douglas Scale Card */}
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Escala Douglas</CardTitle>
                    <CardDescription>Clasifica el estado del mar en dos escalas separadas: una para el "mar de viento" (oleaje local) y otra para el "mar de fondo" (oleaje distante o swell).</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold mb-2">Mar de Viento (Sea)</h4>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Grado</TableHead>
                                    <TableHead>Denominación</TableHead>
                                    <TableHead>Altura</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.douglasSeaScale.map((item) => (
                                    <TableRow key={item.degree}>
                                        <TableCell className="font-bold text-center">{item.degree}</TableCell>
                                        <TableCell>{item.denomination}</TableCell>
                                        <TableCell>{item.waveHeight}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Mar de Fondo (Swell)</h4>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Grado</TableHead>
                                    <TableHead>Denominación</TableHead>
                                    <TableHead>Altura</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.douglasSwellScale.map((item) => (
                                    <TableRow key={item.degree}>
                                        <TableCell className="font-bold text-center">{item.degree}</TableCell>
                                        <TableCell>{item.denomination}</TableCell>
                                        <TableCell>{item.waveHeight}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            {/* Cloud Identification Card */}
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Identificación de Nubes</CardTitle>
                    <CardDescription>Guía visual para reconocer los géneros de nubes más comunes y su altitud típica.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {data.cloudTypes.map((cloud) => (
                        <Card key={cloud.type} className="overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                <div className="md:col-span-1">
                                    <Image
                                        src={cloud.imageUrl}
                                        alt={`Imagen de nubes tipo ${cloud.type}`}
                                        width={400}
                                        height={200}
                                        className="w-full h-full object-cover"
                                        data-ai-hint={cloud.hint}
                                    />
                                </div>
                                <div className="md:col-span-2 p-4">
                                    <h3 className="font-bold text-lg">{cloud.type}</h3>
                                    <p className="text-sm font-semibold text-primary">{cloud.altitude}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{cloud.description}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
