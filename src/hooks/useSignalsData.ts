
import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from '@/context/LanguageContext';

export interface LightCharacteristicTerm {
    [key: string]: string;
}

export interface BuoyData {
    category: string;
    type: string;
    region?: string;
    shape: string;
    colors: string[];
    topmark: {
        shape: string;
        color: string;
    } | null;
    characteristic: string;
    purpose: string;
    mnemonic: string;
}

export interface ColregRule {
    id: string;
    title: string;
    description: string;
    svg: string;
    lights: any[];
    marks: any[];
    explanation?: string;
    states?: any[];
}

export interface SoundSignal {
    id: string;
    title: string;
    description: string;
    signal: string;
    sequence: string[];
    rule: string;
}

export const useSignalsData = () => {
    const { t, isLoaded } = useTranslation();
    const [signalsData, setSignalsData] = useState<any>(null);
    const [soundsData, setSoundsData] = useState<any>(null);

    useEffect(() => {
        const fetchSignals = async () => {
            try {
                const response = await fetch('/data/senales.json');
                const data = await response.json();
                setSignalsData(data);
            } catch (error) {
                console.error("Failed to fetch signals data:", error);
            }
        };

        const fetchSounds = async () => {
            try {
                const response = await fetch('/data/sonidos.json');
                const data = await response.json();
                setSoundsData(data);
            } catch (error) {
                console.error("Failed to fetch sounds data:", error);
            }
        };

        fetchSignals();
        fetchSounds();
    }, []);

    const data = useMemo(() => {
        if (!isLoaded || !signalsData || !soundsData) return null;

        const lightTerms = Object.fromEntries(
            Object.entries(signalsData.lightTerms).map(([key, valueKey]) => [key, t(valueKey as string)])
        ) as LightCharacteristicTerm;
        
        const ialaBuoyData = signalsData.ialaBuoyData.map((buoy: any) => ({
            ...buoy,
            type: t(buoy.type),
            purpose: t(buoy.purpose),
            mnemonic: t(buoy.mnemonic),
            category: t(buoy.category)
        }));

        const colregRules = signalsData.colregRules.map((rule: any) => ({
            ...rule,
            title: t(rule.title),
            description: t(rule.description),
            explanation: rule.explanation ? t(rule.explanation) : '',
            lights: rule.lights ? rule.lights.map((light: any) => ({...light, desc: light.desc ? t(light.desc) : ''})) : [],
            marks: rule.marks ? rule.marks.map((mark: any) => ({...mark, desc: mark.desc ? t(mark.desc) : ''})) : [],
            states: rule.states?.map((state: any) => ({
                ...state,
                title: t(state.title),
                description: t(state.description),
                explanation: state.explanation ? t(state.explanation) : '',
                lights: state.lights ? state.lights.map((light: any) => ({...light, desc: light.desc ? t(light.desc) : ''})) : [],
                marks: state.marks ? state.marks.map((mark: any) => ({...mark, desc: mark.desc ? t(mark.desc) : ''})) : [],
            }))
        }));

        const sonidosDataTranslated = soundsData.map((sound: any) => ({
            ...sound,
            title: t(sound.title),
            description: t(sound.description),
            signal: t(sound.signal)
        }));

        return {
            lightTerms,
            ialaBuoyData,
            colregRules,
            vesselSvgs: signalsData.vesselSvgs,
            sonidosData: sonidosDataTranslated,
        };

    }, [t, isLoaded, signalsData, soundsData]);

    return { data, isLoading: !isLoaded || !data };
};

    