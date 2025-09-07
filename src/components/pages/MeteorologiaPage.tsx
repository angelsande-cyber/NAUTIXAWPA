"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { METEO_DATA } from "@/lib/data/meteorologia";
import { CLOUD_DATA } from "@/lib/data/clouds";


export default function MeteorologiaPage() {
    const { beaufortScale, douglasSeaScale, douglasSwellScale } = METEO_DATA;
    const cloudTypes = CLOUD_DATA;

    return (
        <div className="p-4 md:p-6 space-y-6">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Escala Beaufort</CardTitle>
                    <CardDescription>Mide la intensidad del viento, basándose principalmente en el estado del mar.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Fuerza</TableHead>
                                    <TableHead>Denominación</TableHead>
                                    <TableHead>Velocidad (Nudos)</TableHead>
                                    <TableHead>Altura Olas (m)</TableHead>
                                    <TableHead>Aspecto del Mar</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {beaufortScale.map((item) => (
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

            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Escala Douglas</CardTitle>
                    <CardDescription>Clasifica el estado del mar en dos escalas: mar de viento y mar de fondo.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold mb-2">Escala de Mar de Viento</h4>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Grado</TableHead>
                                    <TableHead>Denominación</TableHead>
                                    <TableHead>Altura (m)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {douglasSeaScale.map((item) => (
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
                        <h4 className="font-semibold mb-2">Escala de Mar de Fondo</h4>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Grado</TableHead>
                                    <TableHead>Denominación</TableHead>
                                    <TableHead>Altura (m)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {douglasSwellScale.map((item) => (
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

            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Tipos de Nubes</CardTitle>
                    <CardDescription>Identificación de nubes, su altitud y el tiempo que suelen indicar.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {cloudTypes.map((cloud) => (
                        <Card key={cloud.type} className="overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                <div className="md:col-span-1 relative h-48">
                                    <Image
                                        src={cloud.imageUrl}
                                        alt={`Imagen de nube tipo ${cloud.type}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
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
