
import { useTranslation } from '@/context/LanguageContext';

interface BeaufortData {
    force: number;
    denomination: string;
    speedKnots: string;
    waveHeight: string;
    seaState: string;
}

interface DouglasData {
    degree: number;
    denomination: string;
    waveHeight: string;
}

interface CloudData {
    type: string;
    altitude: string;
    description: string;
    imageUrl: string;
    hint: string;
}

export interface MeteoData {
    beaufortScale: BeaufortData[];
    douglasSeaScale: DouglasData[];
    douglasSwellScale: DouglasData[];
    cloudTypes: CloudData[];
}

export const useMeteoData = (): MeteoData => {
    const { t } = useTranslation();

    const getMeteoData = (): MeteoData => ({
        beaufortScale: Array.from({ length: 13 }, (_, i) => ({
            force: i,
            denomination: t(`meteo.beaufort.denominations.${i}`),
            speedKnots: t(`meteo.beaufort.speedKnots.${i}`),
            waveHeight: t(`meteo.beaufort.waveHeight.${i}`),
            seaState: t(`meteo.beaufort.seaState.${i}`),
        })),
        douglasSeaScale: Array.from({ length: 10 }, (_, i) => ({
            degree: i,
            denomination: t(`meteo.douglas.sea.d${i}`),
            waveHeight: t(`meteo.douglas.sea.waveHeight.${i}`),
        })),
        douglasSwellScale: Array.from({ length: 4 }, (_, i) => ({
            degree: i,
            denomination: t(`meteo.douglas.swell.d${i}`),
            waveHeight: t(`meteo.douglas.swell.waveHeight.${i}`),
        })),
        cloudTypes: [
            'cirrus', 'cirrocumulus', 'cirrostratus', 'altocumulus', 'altostratus',
            'nimbostratus', 'stratus', 'stratocumulus', 'cumulus', 'cumulonimbus'
        ].map(type => ({
            type: t(`meteo.clouds.types.${type}.name`),
            altitude: t(`meteo.clouds.types.${type}.altitude`),
            description: t(`meteo.clouds.types.${type}.description`),
            imageUrl: `/images/clouds/${type.toLowerCase()}.jpg`,
            hint: t(`meteo.clouds.types.${type}.hint`),
        }))
    });

    // We call getMeteoData inside the hook to ensure it's re-evaluated when language changes.
    return getMeteoData();
};
