
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTranslation } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

interface VhfChannel {
    channel: string;
    usage: string;
}

const LoadingSkeleton = () => (
    <div className="p-4 md:p-6">
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <Skeleton className="h-8 w-1/2 mb-2" />
                <Skeleton className="h-4 w-3/4" />
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center space-x-4 p-2">
                            <Skeleton className="h-6 w-24" />
                            <Skeleton className="h-6 flex-1" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </div>
);

export default function CanalesPage() {
    const { t, language } = useTranslation();
    const [vhfChannels, setVhfChannels] = useState<VhfChannel[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChannels = async () => {
            setLoading(true);
            try {
                const response = await fetch('/data/vhfchannels.json');
                const data = await response.json();
                setVhfChannels(data[language] || data['en']);
            } catch (error) {
                console.error("Failed to load VHF channels:", error);
            }
            setLoading(false);
        };
        fetchChannels();
    }, [language]);

    if (loading) {
        return <LoadingSkeleton />;
    }

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
