
"use client";
import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { computeAlmanac, fmtGHA, fmtDec, fmtSidTime } from '@/lib/almanac';
import type { AlmanacInput } from '@/lib/almanac';


export default function AlmanaquePage() {
    const now = new Date();
    const [form, setForm] = useState<AlmanacInput>({
        year: now.getUTCFullYear(),
        month: now.getUTCMonth() + 1,
        day: now.getUTCDate(),
        hour: now.getUTCHours(),
        minute: now.getUTCMinutes(),
        second: now.getUTCSeconds(),
        deltaT: 69, // valor típico ~ 69 s en 2025; ajustable por el usuario
    });

    const out = useMemo(() => computeAlmanac(form), [form]);

    const onNum = (k: keyof AlmanacInput) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        setForm((f) => ({ ...f, [k]: v === '' ? 0 : Number(v) }));
    };

    const ResultBox = ({ title, value }: { title: string, value: React.ReactNode }) => (
        <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="font-mono text-base">{value}</p>
        </div>
    );

    return (
        <div className="p-4 md:p-6 space-y-6">
            <Card className="w-full max-w-5xl mx-auto">
                <CardHeader>
                    <CardTitle>Almanaque Náutico Perpetuo</CardTitle>
                    <CardDescription>
                        Calculadora astronómica para obtener la posición del Sol y el tiempo sideral para una fecha y hora UTC.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">

                        {/* Entradas */}
                        <Card className="md:col-span-1">
                            <CardHeader>
                                <CardTitle className="text-lg">Entrada (UTC)</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <div className="space-y-1">
                                    <Label htmlFor="year">Año</Label>
                                    <Input id="year" type="number" value={form.year} onChange={onNum('year')} />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="month">Mes</Label>
                                    <Input id="month" type="number" value={form.month} onChange={onNum('month')} />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="day">Día</Label>
                                    <Input id="day" type="number" value={form.day} onChange={onNum('day')} />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="hour">Hora</Label>
                                    <Input id="hour" type="number" value={form.hour} onChange={onNum('hour')} />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="minute">Min</Label>
                                    <Input id="minute" type="number" value={form.minute} onChange={onNum('minute')} />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="second">Seg</Label>
                                    <Input id="second" type="number" value={form.second} onChange={onNum('second')} />
                                </div>
                                <div className="col-span-full space-y-1">
                                    <Label htmlFor="deltaT">ΔT (s)</Label>
                                    <Input id="deltaT" type="number" value={form.deltaT} onChange={onNum('deltaT')} />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Salidas */}
                        <div className="md:col-span-2 space-y-6">
                             <Card>
                                <CardHeader><CardTitle className="text-lg">Tiempo</CardTitle></CardHeader>
                                <CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    <ResultBox title="JD" value={out.JD.toFixed(5)} />
                                    <ResultBox title="JDE" value={out.JDE.toFixed(5)} />
                                    <ResultBox title="GMST" value={fmtSidTime(out.GMST)} />
                                    <ResultBox title="GAST" value={fmtSidTime(out.GAST)} />
                                </CardContent>
                            </Card>
                            <div className="grid md:grid-cols-2 gap-6">
                                <Card>
                                     <CardHeader><CardTitle className="text-lg">Sol</CardTitle></CardHeader>
                                     <CardContent className="grid grid-cols-2 gap-4">
                                        <ResultBox title="RA" value={`${(out.Sun.RA / 15).toFixed(3)} h`} />
                                        <ResultBox title="Dec" value={fmtDec(out.Sun.Dec)} />
                                        <ResultBox title="GHA" value={fmtGHA(out.Sun.GHA)} />
                                        <ResultBox title="EOT" value={`${out.EOT.toFixed(2)} min`} />
                                        <ResultBox title="PMG (Sol)" value={`${out.PMG_sun.h}h ${String(out.PMG_sun.m).padStart(2, '0')}m ${String(out.PMG_sun.s).padStart(2, '0')}s`} />
                                        <ResultBox title="SD / HP" value={`${(out.Sun.SD / 60).toFixed(1)}' / ${(out.Sun.HP / 60).toFixed(1)}'`} />
                                     </CardContent>
                                </Card>
                                <Card>
                                     <CardHeader><CardTitle className="text-lg">Aries</CardTitle></CardHeader>
                                     <CardContent className="grid grid-cols-1 gap-4">
                                        <ResultBox title="GHA Aries" value={fmtGHA(out.Aries.GHA)} />
                                        <p className="text-xs text-muted-foreground pt-2 border-t mt-2">
                                            * Aries ≈ GAST (en grados). El GHA de un astro = GAST − RA.
                                        </p>
                                     </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
