import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const vhfChannels = [
    { channel: '06', usage: 'Seguridad entre buques y aeronaves SAR' },
    { channel: '08', usage: 'Comunicaciones entre buques' },
    { channel: '09', usage: 'Comunicaciones entre buques, puertos y embarcaciones de recreo' },
    { channel: '10', usage: 'Comunicaciones entre buques y control de contaminación' },
    { channel: '13', usage: 'Seguridad en la navegación (puentes, esclusas)' },
    { channel: '15', usage: 'Comunicaciones internas a bordo (1W max)' },
    { channel: '16', usage: 'Socorro, Urgencia, Seguridad y Llamada (Canal principal)' },
    { channel: '17', usage: 'Comunicaciones internas a bordo (1W max)' },
    { channel: '67', usage: 'Canal de seguridad SMSSM en el área de Francia y alternativo al 16' },
    { channel: '69', usage: 'Comunicaciones entre buques, puertos y embarcaciones de recreo' },
    { channel: '70', usage: 'Llamada Selectiva Digital (LSD/DSC)' },
    { channel: '72', usage: 'Comunicaciones entre buques (No pública)' },
    { channel: '73', usage: 'Comunicaciones entre buques y control de contaminación' },
    { channel: '77', usage: 'Comunicaciones entre buques (No pública)' },
    { channel: '87', usage: 'Tráfico portuario y VTS (AIS 1)' },
    { channel: '88', usage: 'Tráfico portuario y VTS (AIS 2)' },
];

export default function CanalesPage() {
    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Canales VHF Marinos Comunes</CardTitle>
                    <CardDescription>Listado de canales VHF marinos y sus usos principales en España y aguas internacionales.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Canal</TableHead>
                                <TableHead>Uso Principal</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {vhfChannels.map((item) => (
                                <TableRow key={item.channel}>
                                    <TableCell className="font-bold">{item.channel}</TableCell>
                                    <TableCell>{item.usage}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
