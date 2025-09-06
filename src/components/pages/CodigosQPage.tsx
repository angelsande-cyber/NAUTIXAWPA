import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const qCodes = [
    { code: 'QTH', question: '¿Cuál es su posición?', answer: 'Mi posición es...' },
    { code: 'QRM', question: '¿Está interferida mi transmisión?', answer: 'Su transmisión está interferida.' },
    { code: 'QRN', question: '¿Le molestan los atmosféricos?', answer: 'Me molestan los atmosféricos.' },
    { code: 'QRT', question: '¿Debo cesar la transmisión?', answer: 'Cese la transmisión.' },
    { code: 'QRZ', question: '¿Quién me llama?', answer: 'Le llama...' },
    { code: 'QSB', question: '¿Varía la intensidad de mi señal?', answer: 'La intensidad de su señal varía.' },
    { code: 'QSO', question: '¿Puede comunicar con...?', answer: 'Puedo comunicar con...' },
    { code: 'QSY', question: '¿Debo cambiar a otra frecuencia?', answer: 'Cambie a la frecuencia...' },
    { code: 'QTC', question: '¿Tiene mensajes para mí?', answer: 'Tengo mensajes para usted.' },
];

export default function CodigosQPage() {
    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle>Códigos Q de Consulta</CardTitle>
                    <CardDescription>Selección de códigos del servicio de aficionados y de aficionados por satélite más comunes.</CardDescription>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Código</TableHead>
                                <TableHead>Pregunta</TableHead>
                                <TableHead>Respuesta o Notificación</TableHead>
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
