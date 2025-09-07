"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Q_CODES_DATA } from "@/lib/data/qcodes";

export default function CodigosQPage() {
    const qCodes = Q_CODES_DATA.es;

    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle>Códigos Q</CardTitle>
                    <CardDescription>Referencia rápida de los códigos "Q" más comunes en radiocomunicaciones marítimas.</CardDescription>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Código</TableHead>
                                <TableHead>Pregunta</TableHead>
                                <TableHead>Respuesta / Significado</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {qCodes.map((item) => (
                                <TableRow key={item.code}>
                                    <TableCell className="font-bold">{item.code}</TableCell>
                                    <TableCell>{item.question}</TableCell>
                                    <TableCell>{item.answer}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
