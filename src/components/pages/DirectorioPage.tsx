"use client";
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AtSign, Phone, Search } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { useDirectoryData } from '@/hooks/useDirectoryData';
import { Skeleton } from '../ui/skeleton';

const LoadingSkeleton = () => (
     <div className="p-4 md:p-6">
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <Skeleton className="h-8 w-1/2" />
                <Skeleton className="h-4 w-3/4" />
            </CardHeader>
            <CardContent>
                 <Skeleton className="h-10 w-full mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-28 w-full" />)}
                </div>
            </CardContent>
        </Card>
     </div>
)


export default function DirectorioPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const { t } = useTranslation();
    const { data: phoneEntries, isLoading } = useDirectoryData();
    
    if (isLoading) {
        return <LoadingSkeleton />;
    }

    const filteredData = phoneEntries.filter(entry =>
        entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.phones.some(p => p.includes(searchTerm)) ||
        (entry.email && entry.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        entry.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>{t('directory.title')}</CardTitle>
                    <CardDescription>{t('directory.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative mb-6">
                         <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder={t('directory.searchPlaceholder')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredData.length > 0 ? (
                            filteredData.map(entry => (
                                <Card key={entry.name}>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg">{entry.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {entry.phones.map(phone => (
                                            <div key={phone} className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                                                <Phone className="h-4 w-4" />
                                                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:underline">{phone}</a>
                                            </div>
                                        ))}
                                        {entry.email && (
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <AtSign className="h-4 w-4" />
                                                 <a href={`mailto:${entry.email}`} className="hover:underline">{entry.email}</a>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <p className="text-muted-foreground col-span-full text-center py-8">{t('directory.noResults', { searchTerm })}</p>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
