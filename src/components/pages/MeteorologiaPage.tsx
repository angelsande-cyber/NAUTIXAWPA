"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";

interface BeaufortScaleData {
    force: number;
    denomination: string;
    speedKnots: string;
    waveHeight: string;
    seaState: string;
}

interface DouglasScaleData {
    degree: number;
    denomination: string;
    waveHeight: string;
}

interface CloudTypeData {
    type: string;
    altitude: string;
    description: string;
    imageUrl: string;
    hint: string;
}

interface MeteorologiaData {
    beaufortScale: BeaufortScaleData[];
    douglasSeaScale: DouglasScaleData[];
    douglasSwellScale: DouglasScaleData[];
    cloudTypes: CloudTypeData[];
}


export default function MeteorologiaPage() {
    const [data, setData] = useState<MeteorologiaData | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        fetch('/data/meteorologia.json')
            .then(res => res.json())
            .then(setData);
    }, []);

    if (!data) {
        return (
            <div className="p-4 md:p-6 space-y-6">
                <Card className="w-full max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle>{t('loading')}</CardTitle>
                    </CardHeader>
                </Card>
            </div>
        )
    }

    const getLocalized = (obj: any, key: string) => {
        const value = obj[key];
        if (typeof value === 'string') {
            return t(value);
        }
        return value;
    }

    return (
        <div className="p-4 md:p-6 space-y-6">
            {/* Beaufort Scale Card */}
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>{t('meteo.beaufort.title')}</CardTitle>
                    <CardDescription>{t('meteo.beaufort.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>{t('meteo.beaufort.headers.force')}</TableHead>
                                    <TableHead>{t('meteo.beaufort.headers.denomination')}</TableHead>
                                    <TableHead>{t('meteo.beaufort.headers.speed')}</TableHead>
                                    <TableHead>{t('meteo.beaufort.headers.waves')}</TableHead>
                                    <TableHead>{t('meteo.beaufort.headers.sea')}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.beaufortScale.map((item) => (
                                    <TableRow key={item.force}>
                                        <TableCell className="font-bold text-center">{item.force}</TableCell>
                                        <TableCell>{getLocalized(item, 'denomination')}</TableCell>
                                        <TableCell>{item.speedKnots}</TableCell>
                                        <TableCell>{item.waveHeight}</TableCell>
                                        <TableCell>{getLocalized(item, 'seaState')}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            {/* Douglas Scale Card */}
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>{t('meteo.douglas.title')}</CardTitle>
                    <CardDescription>{t('meteo.douglas.description')}</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold mb-2">{t('meteo.douglas.sea.title')}</h4>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>{t('meteo.douglas.headers.degree')}</TableHead>
                                    <TableHead>{t('meteo.douglas.headers.denomination')}</TableHead>
                                    <TableHead>{t('meteo.douglas.headers.height')}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.douglasSeaScale.map((item) => (
                                    <TableRow key={item.degree}>
                                        <TableCell className="font-bold text-center">{item.degree}</TableCell>
                                        <TableCell>{getLocalized(item, 'denomination')}</TableCell>
                                        <TableCell>{item.waveHeight}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">{t('meteo.douglas.swell.title')}</h4>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>{t('meteo.douglas.headers.degree')}</TableHead>
                                    <TableHead>{t('meteo.douglas.headers.denomination')}</TableHead>
                                    <TableHead>{t('meteo.douglas.headers.height')}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.douglasSwellScale.map((item) => (
                                    <TableRow key={item.degree}>
                                        <TableCell className="font-bold text-center">{item.degree}</TableCell>
                                         <TableCell>{getLocalized(item, 'denomination')}</TableCell>
                                        <TableCell>{item.waveHeight}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            {/* Cloud Identification Card */}
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>{t('meteo.clouds.title')}</CardTitle>
                    <CardDescription>{t('meteo.clouds.description')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {data.cloudTypes.map((cloud) => (
                        <Card key={cloud.type} className="overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                <div className="md:col-span-1">
                                    <Image
                                        unoptimized={true}
                                        src={cloud.imageUrl}
                                        alt={`${t('meteo.clouds.alt')} ${cloud.type}`}
                                        width={400}
                                        height={200}
                                        className="w-full h-full object-cover"
                                        data-ai-hint={cloud.hint}
                                    />
                                </div>
                                <div className="md:col-span-2 p-4">
                                    <h3 className="font-bold text-lg">{cloud.type}</h3>
                                    <p className="text-sm font-semibold text-primary">{getLocalized(cloud, 'altitude')}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{getLocalized(cloud, 'description')}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
