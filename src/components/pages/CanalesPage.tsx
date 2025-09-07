
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTranslation } from "@/context/LanguageContext";
import { VHF_CHANNELS_DATA } from "@/lib/data/vhfchannels";

export default function CanalesPage() {
    const { t, language } = useTranslation();
    const vhfChannels = VHF_CHANNELS_DATA[language];

    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>{t('channels.title')}</CardTitle>
                    <CardDescription>{t('channels.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">{t('channels.columns.channel')}</TableHead>
                                <TableHead>{t('channels.columns.usage')}</TableHead>
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
