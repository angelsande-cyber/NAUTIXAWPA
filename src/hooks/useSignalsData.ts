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

        const lightTerms = Object.fromEntries(
            Object.entries(LIGHT_TERMS_DATA).map(([key, valueKey]) => [key, t(valueKey as string)])
        ) as LightCharacteristicTerm;
        
        const colregRules = COLREG_RULES_DATA.map((rule: any) => ({
            ...rule,
            // title: t(rule.title),
            // description: t(rule.description),
            // explanation: rule.explanation ? t(rule.explanation) : '',
            // lights: rule.lights ? rule.lights.map((light: any) => ({...light, desc: light.desc ? t(light.desc) : ''})) : [],
            // marks: rule.marks ? rule.marks.map((mark: any) => ({...mark, desc: mark.desc ? t(mark.desc) : ''})) : [],
            // states: rule.states?.map((state: any) => ({
            //     ...state,
            //     title: t(state.title),
            //     description: t(state.description),
            //     explanation: state.explanation ? t(state.explanation) : '',
            //     lights: state.lights ? state.lights.map((light: any) => ({...light, desc: light.desc ? t(light.desc) : ''})) : [],
            //     marks: state.marks ? state.marks.map((mark: any) => ({...mark, desc: mark.desc ? t(mark.desc) : ''})) : [],
            // }))
        }));

        const sonidosDataTranslated = SOUND_SIGNALS_DATA.map((sound: any) => ({
            ...sound,
            title: t(sound.title),
            description: t(sound.description),
            signal: t(sound.signal)
        }));

        const ialaBuoyDataTranslated = IALA_BUOY_DATA.map(b => ({
            ...b,
            // category: t(b.category),
            // type: t(b.type),
            // purpose: t(b.purpose),
            // mnemonic: t(b.mnemonic),
        }));

        return {
            lightTerms,
            ialaBuoyData: IALA_BUOY_DATA,
            colregRules: COLREG_RULES_DATA,
            vesselSvgs: VESSEL_SVGS,
            sonidosData: SOUND_SIGNALS_DATA,
        };

    }, [t, isLoaded]);

    return { data, isLoading: !isLoaded || !data };
};
