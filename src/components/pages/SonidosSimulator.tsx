"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, Pause } from "lucide-react";
import { useTranslation } from '@/context/LanguageContext';

interface SoundSignal {
    id: string;
    title: string;
    description: string;
    signal: string;
    sequence: string[];
    rule: string;
}

export default function SonidosSimulator({ sonidosData }: { sonidosData: SoundSignal[] }) {
    const { t } = useTranslation();
    const [selectedSignalId, setSelectedSignalId] = useState<string>(sonidosData[0]?.id || '');
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Preload audio files
    useEffect(() => {
        const soundFiles: { [key: string]: string } = {
            short: '/sounds/short-blast.mp3',
            long: '/sounds/long-blast.mp3',
            bell: '/sounds/bell.mp3',
            gong: '/sounds/gong.mp3',
            'bell-stroke': '/sounds/bell.mp3', // Use bell for single stroke
        };

        Object.keys(soundFiles).forEach(key => {
            if (!audioRefs.current[key]) {
                const audio = new Audio(soundFiles[key]);
                audio.preload = 'auto';
                audioRefs.current[key] = audio;
            }
        });

         // Cleanup audio resources on component unmount
        return () => {
            Object.values(audioRefs.current).forEach(audio => {
                audio.pause();
                audio.src = '';
            });
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const stopAllSounds = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        Object.values(audioRefs.current).forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
        setIsPlaying(false);
    }, []);

    const playSequence = useCallback((sequence: string[]) => {
        let cumulativeDelay = 0;
        const playNext = (index: number) => {
            if (index >= sequence.length) {
                setIsPlaying(false); // Sequence finished
                return;
            }
            const sound = sequence[index];
            const audio = audioRefs.current[sound];
            if (audio) {
                audio.currentTime = 0;
                audio.play().catch(e => console.error("Error playing sound:", e));
                
                let delay = 1000; // Default delay for short blast
                if (sound === 'long') delay = 2500;
                if (sound === 'bell' || sound === 'gong') delay = 5500;
                
                timeoutRef.current = setTimeout(() => playNext(index + 1), delay);
            }
        };
        playNext(0);
    }, []);


    const handlePlayPause = () => {
        if (isPlaying) {
            stopAllSounds();
        } else {
            const signal = sonidosData.find(s => s.id === selectedSignalId);
            if (signal) {
                setIsPlaying(true);
                playSequence(signal.sequence);
            }
        }
    };
    
    // Cleanup on component unmount or signal change
    useEffect(() => {
        stopAllSounds();
    }, [selectedSignalId, stopAllSounds]);

    const selectedSignal = sonidosData.find(s => s.id === selectedSignalId);

    return (
        <div>
            <div className="space-y-4 mb-6">
                <Select value={selectedSignalId} onValueChange={setSelectedSignalId}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={t('signals.sounds.selectSituation')} />
                    </SelectTrigger>
                    <SelectContent>
                        {sonidosData.map(signal => (
                            <SelectItem key={signal.id} value={signal.id}>
                                {t(signal.title)}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {selectedSignal && (
                <Card>
                    <CardHeader>
                        <CardTitle>{t(selectedSignal.title)}</CardTitle>
                        <CardDescription>{t(selectedSignal.description)}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="text-center p-4 bg-muted rounded-lg">
                            <p className="font-semibold text-lg">{t('signals.sounds.acousticSignal')}:</p>
                            <p className="text-muted-foreground">{t(selectedSignal.signal)}</p>
                            <p className="text-xs font-mono mt-2">{selectedSignal.rule}</p>
                        </div>
                        
                        <div className="text-center">
                            <Button onClick={handlePlayPause} size="lg">
                                {isPlaying ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
                                {isPlaying ? t('signals.sounds.stop') : t('signals.sounds.play')}
                            </Button>
                        </div>

                    </CardContent>
                </Card>
            )}
        </div>
    );
}
