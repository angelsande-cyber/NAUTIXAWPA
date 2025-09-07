
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTranslation } from "@/context/LanguageContext";
import { letterFlags } from "@/components/LetterFlags";
import { numberFlags } from "@/components/SignalFlags";
import { ALPHABET_DATA } from "@/lib/data/alphabet";

export default function AlfabetoPage() {
    const { t, language } = useTranslation();
    
    const { letters, numbers } = ALPHABET_DATA[language];

    const combinedLetters = letters.map((item) => ({
        ...item,
        flag: letterFlags[item.letter],
    }));

    const combinedNumbers = numbers.map((item) => ({
        ...item,
        flag: numberFlags[item.digit],
    }));

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
                                {combinedLetters.map((item) => (
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
                                {combinedNumbers.map((item) => (
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
