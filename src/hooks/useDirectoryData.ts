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
            name: t(entry.name), // Assumes names are translation keys
            keywords: entry.keywords.map(k => t(k)) // Assumes keywords are translation keys
        }));

    }, [t, isLoaded]);

    return { data, isLoading: !isLoaded };
};
