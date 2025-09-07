
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
            Object.entries(LIGHT_TERMS_DATA).map(([key]) => [key, t(`signals.terms.${key}`)])
        ) as LightCharacteristicTerm;

        const translatedSoundSignals = SOUND_SIGNALS_DATA.map(signal => ({
            ...signal,
            title: t(signal.title),
            description: t(signal.description),
            signal: t(signal.signal),
        }));
        
        const translatedColregRules = COLREG_RULES_DATA.map(rule => ({
            ...rule,
            title: t(rule.title),
            description: t(rule.description),
            explanation: rule.explanation ? t(rule.explanation) : undefined,
            states: rule.states?.map(state => ({
                ...state,
                title: t(state.title),
                description: t(state.description),
                explanation: state.explanation ? t(state.explanation) : undefined,
                lights: state.lights?.map((light: any) => ({...light, desc: light.desc ? t(light.desc) : ''})),
                marks: state.marks?.map((mark: any) => ({...mark, desc: mark.desc ? t(mark.desc) : ''})),
            })),
            lights: rule.lights?.map((light: any) => ({...light, desc: light.desc ? t(light.desc) : ''})),
            marks: rule.marks?.map((mark: any) => ({...mark, desc: mark.desc ? t(mark.desc) : ''})),
        }));

        const translatedIalaBuoyData = IALA_BUOY_DATA.map(buoy => ({
            ...buoy,
            category: t(buoy.category),
            type: t(buoy.type),
            purpose: t(buoy.purpose),
            mnemonic: t(buoy.mnemonic),
        }));

        return {
            lightTerms: translatedLightTerms,
            ialaBuoyData: translatedIalaBuoyData,
            colregRules: translatedColregRules,
            vesselSvgs: VESSEL_SVGS,
            sonidosData: translatedSoundSignals,
        };

    }, [t, isLoaded]);

    return { data, isLoading: !isLoaded || !data };
};
