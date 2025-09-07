"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import { BEAUFORT_SCALE_DATA, DOUGLAS_SEA_SCALE, DOUGLAS_SWELL_SCALE, CLOUD_TYPES_DATA } from "@/lib/data/meteorologia";

export default function MeteorologiaPage() {
    const { t } = useTranslation();

    return (
        <div className="p-4 md:p-6 space-y-6">
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
                                {BEAUFORT_SCALE_DATA.map((item) => (
                                    <TableRow key={item.force}>
                                        <TableCell className="font-bold text-center">{item.force}</TableCell>
                                        <TableCell>{t(item.denomination)}</TableCell>
                                        <TableCell>{item.speedKnots}</TableCell>
                                        <TableCell>{item.waveHeight}</TableCell>
                                        <TableCell>{t(item.seaState)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

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
                                {DOUGLAS_SEA_SCALE.map((item) => (
                                    <TableRow key={item.degree}>
                                        <TableCell className="font-bold text-center">{item.degree}</TableCell>
                                        <TableCell>{t(item.denomination)}</TableCell>
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
                                {DOUGLAS_SWELL_SCALE.map((item) => (
                                    <TableRow key={item.degree}>
                                        <TableCell className="font-bold text-center">{item.degree}</TableCell>
                                        <TableCell>{t(item.denomination)}</TableCell>
                                        <TableCell>{item.waveHeight}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>{t('meteo.clouds.title')}</CardTitle>
                    <CardDescription>{t('meteo.clouds.description')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {CLOUD_TYPES_DATA.map((cloud) => (
                        <Card key={cloud.type} className="overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                <div className="md:col-span-1 relative h-48">
                                    <Image
                                        src={cloud.imageUrl}
                                        alt={`${t('meteo.clouds.alt')} ${cloud.type}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                        data-ai-hint={cloud.hint}
                                        unoptimized
                                    />
                                </div>
                                <div className="md:col-span-2 p-4">
                                    <h3 className="font-bold text-lg">{cloud.type}</h3>
                                    <p className="text-sm font-semibold text-primary">{t(cloud.altitude)}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{t(cloud.description)}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}