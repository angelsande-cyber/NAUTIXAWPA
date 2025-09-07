"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Q_CODES_DATA } from "@/lib/data/qcodes";

export default function CodigosQPage() {
    const qCodes = Q_CODES_DATA;

    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle>Códigos Q</CardTitle>
                    <CardDescription>Referencia rápida de los códigos "Q" más comunes en radiocomunicaciones marítimas.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-hidden rounded-lg border">
                         <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/50 hover:bg-muted/50">
                                    <TableHead className="uppercase">Código</TableHead>
                                    <TableHead className="uppercase">Pregunta</TableHead>
                                    <TableHead className="uppercase">Respuesta / Significado</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {qCodes.map((item, index) => (
                                    <TableRow key={item.code} className={index % 2 !== 0 ? "bg-muted/25" : ""}>
                                        <TableCell className="font-bold text-lg">{item.code}</TableCell>
                                        <TableCell className="italic">"{item.question}"</TableCell>
                                        <TableCell>{item.answer}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
