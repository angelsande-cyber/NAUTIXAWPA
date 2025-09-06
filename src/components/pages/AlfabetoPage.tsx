import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LETTERS } from "@/components/LetterFlags";
import { NUMBERS } from "@/components/SignalFlags";

export default function AlfabetoPage() {
    return (
        <div className="p-4 md:p-6 space-y-6">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Letras y Banderas de Señales</CardTitle>
                    <CardDescription>Alfabeto fonético ICAO/OTAN, banderas del Código Internacional de Señales (CIS) y su significado individual.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-24">Bandera</TableHead>
                                    <TableHead>Letra</TableHead>
                                    <TableHead>Palabra Clave</TableHead>
                                    <TableHead>Significado (Bandera Aislada)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {LETTERS.map((item) => (
                                    <TableRow key={item.letter}>
                                        <TableCell>
                                            <div className="w-20 h-12 flex items-center justify-center">{item.flag}</div>
                                        </TableCell>
                                        <TableCell className="font-bold text-lg">{item.letter}</TableCell>
                                        <TableCell className="font-mono">{item.word}</TableCell>
                                        <TableCell>{item.meaning}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

             <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Números y Banderas Numerales</CardTitle>
                    <CardDescription>Pronunciación radiotelefónica para los números y sus gallardetes correspondientes del CIS.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-24">Gallardete</TableHead>
                                    <TableHead>Número</TableHead>
                                    <TableHead>Pronunciación</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {NUMBERS.map((item) => (
                                    <TableRow key={item.digit}>
                                        <TableCell>
                                             <div className="w-20 h-12 flex items-center justify-center">{item.flag}</div>
                                        </TableCell>
                                        <TableCell className="font-bold text-lg">{item.digit}</TableCell>
                                        <TableCell className="font-mono">{item.pronunciation}</TableCell>
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
