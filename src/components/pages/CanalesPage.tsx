"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { VHF_CHANNELS_DATA } from "@/lib/data/vhfchannels";

export default function CanalesPage() {
    const vhfChannels = VHF_CHANNELS_DATA.es;

    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Canales VHF Marinos</CardTitle>
                    <CardDescription>Listado de los principales canales de VHF marino y sus usos asignados en España.</CardDescription>
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
