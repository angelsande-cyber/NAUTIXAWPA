"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { VHF_CHANNELS_DATA } from "@/lib/data/vhfchannels";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

export default function CanalesPage() {
    const vhfChannels = VHF_CHANNELS_DATA.es;

    const isPrimaryChannel = (channel: string) => ['16', '70'].includes(channel);

    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Canales VHF Marinos</CardTitle>
                    <CardDescription>Listado de los principales canales de VHF marino y sus usos asignados en España.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-hidden rounded-lg border">
                        <div className="relative w-full overflow-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                                        <TableHead className="w-[100px] uppercase">Canal</TableHead>
                                        <TableHead className="uppercase">Uso Principal</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {vhfChannels.map((item, index) => (
                                        <TableRow key={item.channel} className={cn(index % 2 !== 0 && "bg-muted/25", isPrimaryChannel(item.channel) && "bg-primary/10")}>
                                            <TableCell className="font-bold text-lg text-center">
                                                <div className="flex items-center justify-center gap-2">
                                                    <span>{item.channel}</span>
                                                    {isPrimaryChannel(item.channel) && <Badge variant="default" className="text-xs">SOS</Badge>}
                                                </div>
                                            </TableCell>
                                            <TableCell>{item.usage}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
