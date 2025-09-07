
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTranslation } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

interface QCode {
    code: string;
    question: string;
    answer: string;
}

const LoadingSkeleton = () => (
    <div className="p-4 md:p-6">
        <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
                <Skeleton className="h-8 w-1/2 mb-2" />
                <Skeleton className="h-4 w-3/4" />
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center space-x-4 p-2">
                            <Skeleton className="h-6 w-20" />
                            <Skeleton className="h-6 flex-1" />
                            <Skeleton className="h-6 flex-1" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </div>
);

export default function CodigosQPage() {
    const { t, language } = useTranslation();
    const [qCodes, setQCodes] = useState<QCode[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQCodes = async () => {
            setLoading(true);
            try {
                const response = await fetch('/data/qcodes.json');
                const data = await response.json();
                setQCodes(data[language] || data['en']);
            } catch (error) {
                console.error("Failed to load Q-codes:", error);
            }
            setLoading(false);
        };
        fetchQCodes();
    }, [language]);

    if (loading) {
        return <LoadingSkeleton />;
    }

    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle>{t('qcodes.title')}</CardTitle>
                    <CardDescription>{t('qcodes.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{t('qcodes.columns.code')}</TableHead>
                                <TableHead>{t('qcodes.columns.question')}</TableHead>
                                <TableHead>{t('qcodes.columns.answer')}</TableHead>
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
