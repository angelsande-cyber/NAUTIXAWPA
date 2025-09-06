import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const qCodes = [
    { code: 'QRA', question: '¿Cuál es el nombre de su estación?', answer: 'El nombre de mi estación es...' },
    { code: 'QRG', question: '¿Quiere indicarme mi frecuencia exacta?', answer: 'Su frecuencia exacta es... KHz/MHz.' },
    { code: 'QRH', question: '¿Varía mi frecuencia?', answer: 'Su frecuencia varía.' },
    { code: 'QRI', question: '¿Cuál es el tono de mi transmisión?', answer: 'El tono de su transmisión es... (1-Bueno, 2-Variable, 3-Malo).' },
    { code: 'QRK', question: '¿Cuál es la inteligibilidad de mis señales?', answer: 'La inteligibilidad es... (1-Mala a 5-Excelente).' },
    { code: 'QRL', question: '¿Está usted ocupado?', answer: 'Estoy ocupado. Por favor, no interfiera.' },
    { code: 'QRM', question: '¿Está interferida mi transmisión?', answer: 'Su transmisión está interferida (1-Nula a 5-Gravísima).' },
    { code: 'QRN', question: '¿Le molestan los atmosféricos?', answer: 'Me molestan los atmosféricos (1-Nulos a 5-Gravísimos).' },
    { code: 'QRO', question: '¿Debo aumentar la potencia?', answer: 'Aumente la potencia de transmisión.' },
    { code: 'QRP', question: '¿Debo disminuir la potencia?', answer: 'Disminuya la potencia de transmisión.' },
    { code: 'QRQ', question: '¿Debo transmitir más deprisa?', answer: 'Transmita más deprisa (... palabras por minuto).' },
    { code: 'QRS', question: '¿Debo transmitir más despacio?', answer: 'Transmita más despacio (... palabras por minuto).' },
    { code: 'QRT', question: '¿Debo cesar la transmisión?', answer: 'Cese la transmisión.' },
    { code: 'QRU', question: '¿Tiene algo para mí?', answer: 'No tengo nada para usted.' },
    { code: 'QRV', question: '¿Está usted listo?', answer: 'Estoy listo.' },
    { code: 'QRX', question: '¿Cuándo volverá a llamarme?', answer: 'Le volveré a llamar a las... horas en... KHz/MHz.' },
    { code: 'QRZ', question: '¿Quién me llama?', answer: 'Le llama... en... KHz/MHz.' },
    { code: 'QSA', question: '¿Cuál es la intensidad de mis señales?', answer: 'La intensidad de sus señales es... (1-Apenas perceptible a 5-Muy buena).' },
    { code: 'QSB', question: '¿Varía la intensidad de mi señal?', answer: 'La intensidad de su señal varía (fading).' },
    { code: 'QSK', question: '¿Puede oírme entre sus señales?', answer: 'Puedo oírle entre mis señales.' },
    { code: 'QSL', question: '¿Puede acusar recibo?', answer: 'Acuso recibo.' },
    { code: 'QSO', question: '¿Puede comunicar con... directamente?', answer: 'Puedo comunicar con... directamente.' },
    { code: 'QSP', question: '¿Quiere retransmitir a... gratuitamente?', answer: 'Voy a retransmitir a... gratuitamente.' },
    { code: 'QSY', question: '¿Debo cambiar a otra frecuencia?', answer: 'Cambie a la frecuencia... KHz/MHz.' },
    { code: 'QTC', question: '¿Tiene mensajes para mí?', answer: 'Tengo... mensajes para usted.' },
    { code: 'QTH', question: '¿Cuál es su posición?', answer: 'Mi posición es... (latitud/longitud o referencia).' },
    { code: 'QTR', question: '¿Cuál es la hora exacta?', answer: 'La hora exacta es...' },
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
