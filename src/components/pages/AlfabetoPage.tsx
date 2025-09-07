
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTranslation } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { letterFlags } from "@/components/LetterFlags";
import { numberFlags } from "@/components/SignalFlags";

interface LetterData {
    letter: string;
    word: string;
    meaning: string;
}

interface NumberData {
    digit: string;
    pronunciation: string;
}

interface CombinedLetterData extends LetterData {
    flag: JSX.Element;
}

interface CombinedNumberData extends NumberData {
    flag: JSX.Element;
}

const LoadingSkeleton = () => (
    <div className="p-4 md:p-6 space-y-6">
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <Skeleton className="h-8 w-1/2 mb-2" />
                <Skeleton className="h-4 w-3/4" />
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center space-x-4 p-2">
                            <Skeleton className="h-12 w-20" />
                            <Skeleton className="h-6 w-16" />
                            <Skeleton className="h-6 w-24" />
                            <Skeleton className="h-6 flex-1" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <Skeleton className="h-8 w-1/2 mb-2" />
                <Skeleton className="h-4 w-3/4" />
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center space-x-4 p-2">
                            <Skeleton className="h-12 w-20" />
                            <Skeleton className="h-6 w-16" />
                            <Skeleton className="h-6 flex-1" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </div>
);

export default function AlfabetoPage() {
    const { t, language } = useTranslation();
    const [letters, setLetters] = useState<CombinedLetterData[]>([]);
    const [numbers, setNumbers] = useState<CombinedNumberData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('/data/alphabet.json');
                const data = await response.json();
                const langData = data[language] || data['en'];

                const combinedLetters = langData.letters.map((item: LetterData) => ({
                    ...item,
                    flag: letterFlags[item.letter],
                }));

                const combinedNumbers = langData.numbers.map((item: NumberData) => ({
                    ...item,
                    flag: numberFlags[item.digit],
                }));

                setLetters(combinedLetters);
                setNumbers(combinedNumbers);
            } catch (error) {
                console.error("Failed to load alphabet data:", error);
            }
            setLoading(false);
        };
        fetchData();
    }, [language]);

    if (loading) {
        return <LoadingSkeleton />;
    }

    return (
        <div className="p-4 md:p-6 space-y-6">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>{t('alphabet.letters.title')}</CardTitle>
                    <CardDescription>{t('alphabet.letters.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-24">{t('alphabet.columns.flag')}</TableHead>
                                    <TableHead>{t('alphabet.columns.letter')}</TableHead>
                                    <TableHead>{t('alphabet.columns.keyword')}</TableHead>
                                    <TableHead>{t('alphabet.columns.meaning')}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {letters.map((item) => (
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
                    <CardTitle>{t('alphabet.numbers.title')}</CardTitle>
                    <CardDescription>{t('alphabet.numbers.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-24">{t('alphabet.columns.pennant')}</TableHead>
                                    <TableHead>{t('alphabet.columns.number')}</TableHead>
                                    <TableHead>{t('alphabet.columns.pronunciation')}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {numbers.map((item) => (
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
