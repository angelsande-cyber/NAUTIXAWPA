import { useMemo } from 'react';
import { useTranslation } from '@/context/LanguageContext';
import { DIRECTORY_DATA } from '@/lib/data/directorio';

export const useDirectoryData = () => {
    const { t, isLoaded } = useTranslation();

    const data = useMemo(() => {
        if (!isLoaded) {
            return [];
        }
        
        return DIRECTORY_DATA.map(entry => ({
            ...entry,
            name: t(entry.name),
            keywords: entry.keywords.map(k => t(k))
        }));

    }, [t, isLoaded]);

    return { data, isLoading: !isLoaded };
};
