"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { letterFlags } from "@/components/LetterFlags";
import { numberFlags } from "@/components/SignalFlags";
import { ALPHABET_DATA } from "@/lib/data/alphabet";

export default function AlfabetoPage() {
    const { letters, numbers } = ALPHABET_DATA.es;

    const combinedLetters = letters.map((item) => ({
        ...item,
        flag: letterFlags[item.letter],
    }));

    const combinedNumbers = numbers.map((item) => ({
        ...item,
        flag: numberFlags[item.digit],
    }));

    return (
        <div className="p-4 md:p-6 space-y-8">
            {/* Sección de Letras */}
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Letras y Banderas</CardTitle>
                    <CardDescription>Código Internacional de Señales: Alfabeto Fonético y Banderas de Letras.</CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Vista de Tabla para Escritorio */}
                    <div className="hidden md:block border rounded-lg overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/50 hover:bg-muted/50">
                                    <TableHead className="w-24 uppercase">Bandera</TableHead>
                                    <TableHead className="uppercase">Letra</TableHead>
                                    <TableHead className="uppercase">Palabra Clave</TableHead>
                                    <TableHead className="uppercase">Significado</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {combinedLetters.map((item, index) => (
                                    <TableRow key={item.letter} className={index % 2 !== 0 ? "bg-muted/25" : ""}>
                                        <TableCell><div className="w-20 h-12 flex items-center justify-center">{item.flag}</div></TableCell>
                                        <TableCell className="font-bold text-lg">{item.letter}</TableCell>
                                        <TableCell className="font-mono">{item.word}</TableCell>
                                        <TableCell>{item.meaning}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Vista de Tarjetas para Móvil */}
                    <div className="block md:hidden space-y-4">
                        {combinedLetters.map((item) => (
                            <Card key={item.letter} className="overflow-hidden">
                                <div className="flex items-center p-4 bg-muted/30">
                                    <div className="w-20 h-12 flex items-center justify-center mr-4">{item.flag}</div>
                                    <div>
                                        <p className="font-bold text-2xl">{item.letter}</p>
                                        <p className="font-mono text-lg text-muted-foreground">{item.word}</p>
                                    </div>
                                </div>
                                <div className="p-4 border-t">
                                    <p className="text-sm text-foreground">{item.meaning}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Sección de Números */}
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Números y Gallardetes</CardTitle>
                    <CardDescription>Gallardetes numéricos y su pronunciación estándar.</CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Vista de Tabla para Escritorio */}
                    <div className="hidden md:block border rounded-lg overflow-hidden">
                        <Table>
                           <TableHeader>
                                <TableRow className="bg-muted/50 hover:bg-muted/50">
                                    <TableHead className="w-24 uppercase">Gallardete</TableHead>
                                    <TableHead className="uppercase">Número</TableHead>
                                    <TableHead className="uppercase">Pronunciación</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {combinedNumbers.map((item, index) => (
                                    <TableRow key={item.digit} className={index % 2 !== 0 ? "bg-muted/25" : ""}>
                                        <TableCell><div className="w-20 h-12 flex items-center justify-center">{item.flag}</div></TableCell>
                                        <TableCell className="font-bold text-lg">{item.digit}</TableCell>
                                        <TableCell className="font-mono">{item.pronunciation}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                     {/* Vista de Tarjetas para Móvil */}
                    <div className="block md:hidden space-y-4">
                        {combinedNumbers.map((item) => (
                             <Card key={item.digit} className="overflow-hidden">
                                <div className="flex items-center p-4 bg-muted/30">
                                    <div className="w-20 h-12 flex items-center justify-center mr-4">{item.flag}</div>
                                    <div>
                                        <p className="font-bold text-2xl">{item.digit}</p>
                                        <p className="font-mono text-lg text-muted-foreground">{item.pronunciation}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
