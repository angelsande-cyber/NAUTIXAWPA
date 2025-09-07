import { useMemo } from 'react';
import { useTranslation } from '@/context/LanguageContext';
import { LIGHT_TERMS_DATA, IALA_BUOY_DATA, COLREG_RULES_DATA, VESSEL_SVGS, SOUND_SIGNALS_DATA } from '@/lib/data/signals';

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

        const lightTerms = Object.fromEntries(
            Object.entries(LIGHT_TERMS_DATA).map(([key, valueKey]) => [key, t(valueKey)])
        ) as LightCharacteristicTerm;
        
        const ialaBuoyData = IALA_BUOY_DATA.map(buoy => ({
            ...buoy,
            // category is a key, so we don't translate it here
            type: t(buoy.type),
            purpose: t(buoy.purpose),
            mnemonic: t(buoy.mnemonic),
        }));

        const colregRules = COLREG_RULES_DATA.map(rule => ({
            ...rule,
            title: t(rule.title),
            description: t(rule.description),
            explanation: rule.explanation ? t(rule.explanation) : '',
            lights: rule.lights.map(light => ({...light, desc: light.desc ? t(light.desc) : ''})),
            marks: rule.marks.map(mark => ({...mark, desc: mark.desc ? t(mark.desc) : ''})),
            states: rule.states?.map(state => ({
                ...state,
                title: t(state.title),
                description: t(state.description),
                explanation: state.explanation ? t(state.explanation) : '',
                lights: state.lights.map(light => ({...light, desc: light.desc ? t(light.desc) : ''})),
                marks: state.marks.map(mark => ({...mark, desc: mark.desc ? t(mark.desc) : ''})),
            }))
        }));

        const sonidosData = SOUND_SIGNALS_DATA.map(sound => ({
            ...sound,
            title: t(sound.title),
            description: t(sound.description),
            signal: t(sound.signal)
        }));

        return {
            lightTerms,
            ialaBuoyData,
            colregRules,
            vesselSvgs: VESSEL_SVGS,
            sonidosData,
        };

    }, [t, isLoaded]);

    return { data, isLoading: !isLoaded };
};
