
import { useTranslation } from '@/context/LanguageContext';
import { METEO_DATA } from '@/lib/data/meteorologia';
import { useMemo } from 'react';


export interface BeaufortData {
    force: number;
    denomination: string;
    speedKnots: string;
    waveHeight: string;
    seaState: string;
}

export interface DouglasData {
    degree: number;
    denomination: string;
    waveHeight: string;
}

export interface CloudData {
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

export const useMeteoData = () => {
    const { t, isLoaded } = useTranslation();

    const data = useMemo(() => {
        if (!isLoaded) return null;
        
        return {
            beaufortScale: METEO_DATA.beaufortScaleKeys.map(key => ({
                force: key.force,
                denomination: t(key.denomination),
                speedKnots: t(key.speedKnots),
                waveHeight: t(key.waveHeight),
                seaState: t(key.seaState),
            })),
            douglasSeaScale: METEO_DATA.douglasSeaScaleKeys.map(key => ({
                degree: key.degree,
                denomination: t(key.denomination),
                waveHeight: t(key.waveHeight),
            })),
            douglasSwellScale: METEO_DATA.douglasSwellScaleKeys.map(key => ({
                degree: key.degree,
                denomination: t(key.denomination),
                waveHeight: t(key.waveHeight),
            })),
            cloudTypes: METEO_DATA.cloudTypeKeys.map(key => ({
                type: t(key.type),
                altitude: t(key.altitude),
                description: t(key.description),
                imageUrl: key.imageUrl,
                hint: key.hint,
            }))
        };
    }, [t, isLoaded]);

    return { data, isLoading: !isLoaded };
};
