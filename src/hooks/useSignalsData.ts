
import { useMemo } from 'react';
import { useTranslation } from '@/context/LanguageContext';
import {
    LIGHT_TERMS_DATA,
    IALA_BUOY_DATA,
    COLREG_RULES_DATA,
    VESSEL_SVGS,
    SOUND_SIGNALS_DATA,
} from '@/lib/data/signals';

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

    const data = useMemo(() => {
        if (!isLoaded) return null;

        const translatedLightTerms = Object.fromEntries(
            Object.entries(LIGHT_TERMS_DATA).map(([key, valueKey]) => [key, t(valueKey)])
        ) as LightCharacteristicTerm;

        return {
            lightTerms: translatedLightTerms,
            ialaBuoyData: IALA_BUOY_DATA,
            colregRules: COLREG_RULES_DATA,
            vesselSvgs: VESSEL_SVGS,
            sonidosData: SOUND_SIGNALS_DATA,
        };

    }, [t, isLoaded]);

    return { data, isLoading: !isLoaded || !data };
};
