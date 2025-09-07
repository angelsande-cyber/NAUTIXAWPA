"use client";

import React, { createContext, useState, useContext, useEffect, useCallback, ReactNode } from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, options?: any) => string;
  isLoaded: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

let translations: any = {};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const esRes = await fetch('/locales/es.json');
        const enRes = await fetch('/locales/en.json');
        const esJson = await esRes.json();
        const enJson = await enRes.json();
        translations = { es: esJson, en: enJson };
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to load translations:", error);
      }
    };
    fetchTranslations();
  }, []);
  
  const t = useCallback((key: string, options: any = {}): string => {
      if (!isLoaded || typeof key !== 'string') return key || '';
      
      const keys = key.split('.');
      let result = translations[language];
      for (const k of keys) {
          result = result?.[k];
          if (result === undefined) return key; 
      }
      
      if (typeof result === 'string') {
        return Object.entries(options).reduce((acc, [optKey, optValue]) => {
            return acc.replace(`{${optKey}}`, String(optValue));
        }, result);
      }

      return result || key;
  }, [language, isLoaded]);


  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageToggle = ({isPageSwitch}: {isPageSwitch?: boolean}) => {
    const { language, setLanguage } = useTranslation();

    const handleLanguageChange = (checked: boolean) => {
        setLanguage(checked ? 'en' : 'es');
    };

    if (isPageSwitch) {
        return (
            <>
              <Label htmlFor="lang-switch" className={cn(language === 'es' ? 'text-primary font-bold' : 'text-muted-foreground')}>Español</Label>
              <Switch
                  id="lang-switch"
                  checked={language === 'en'}
                  onCheckedChange={handleLanguageChange}
              />
              <Label htmlFor="lang-switch" className={cn(language === 'en' ? 'text-primary font-bold' : 'text-muted-foreground')}>English</Label>
            </>
        )
    }

    return (
         <div className="flex items-center space-x-2">
            <span className={cn("font-bold text-sm", language === 'es' ? 'text-primary' : 'text-muted-foreground')}>ES</span>
             <Switch
                id="language-toggle"
                checked={language === 'en'}
                onCheckedChange={handleLanguageChange}
                aria-label="Toggle language"
            />
            <span className={cn("font-bold text-sm", language === 'en' ? 'text-primary' : 'text-muted-foreground')}>EN</span>
        </div>
    )
}
