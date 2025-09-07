"use client";
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AtSign, Phone, Search, LifeBuoy, Sailboat } from 'lucide-react';
import { DIRECTORY_DATA } from '@/lib/data/directorio';
import { Separator } from '../ui/separator';

const EmergencyContactCard = ({ entry }: { entry: { name: string, phones: string[], email: string | null }}) => (
    <Card className="bg-destructive/10 border-destructive/20">
        <CardHeader className="pb-2">
            <CardTitle className="text-lg text-destructive flex items-center gap-2">
                <LifeBuoy className="h-5 w-5"/>
                {entry.name}
            </CardTitle>
        </CardHeader>
        <CardContent>
            {entry.phones.map(phone => (
                <div key={phone} className="flex items-center gap-2 text-sm text-destructive/90 mb-1">
                    <Phone className="h-4 w-4" />
                    <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:underline font-semibold text-base">{phone}</a>
                </div>
            ))}
            {entry.email && (
                <div className="flex items-center gap-2 text-sm text-destructive/90">
                    <AtSign className="h-4 w-4" />
                     <a href={`mailto:${entry.email}`} className="hover:underline">{entry.email}</a>
                </div>
            )}
        </CardContent>
    </Card>
);

const OtherContactCard = ({ entry }: { entry: { name: string, phones: string[], email: string | null }}) => (
     <Card>
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
)

export default function DirectorioPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filteredEmergencyData = DIRECTORY_DATA.emergency.filter(entry =>
        entry.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        entry.phones.some(p => p.includes(searchTerm)) ||
        (entry.email && entry.email.toLowerCase().includes(lowerCaseSearchTerm)) ||
        entry.keywords.some(k => k.toLowerCase().includes(lowerCaseSearchTerm))
    );
    
    const filteredOtherData = DIRECTORY_DATA.other
        .map(category => ({
            ...category,
            items: category.items.filter(item => 
                item.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                item.phones.some(p => p.includes(searchTerm)) ||
                (item.email && item.email.toLowerCase().includes(lowerCaseSearchTerm)) ||
                item.keywords.some(k => k.toLowerCase().includes(lowerCaseSearchTerm))
            )
        }))
        .filter(category => category.items.length > 0);
        
    const noResults = filteredEmergencyData.length === 0 && filteredOtherData.length === 0;

    return (
        <div className="p-4 md:p-6 space-y-6">
             <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm -mx-6 -mt-6 px-6 pt-6 pb-4">
                 <Card className="w-full max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle>Directorio Marítimo</CardTitle>
                        <CardDescription>Contactos de emergencia y servicios importantes en España.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative">
                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Buscar por nombre, teléfono o palabra clave..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </CardContent>
                </Card>
             </div>
            
             <div className="w-full max-w-4xl mx-auto space-y-6">
                {filteredEmergencyData.length > 0 && (
                    <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-destructive"><LifeBuoy />Emergencias</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredEmergencyData.map(entry => <EmergencyContactCard key={entry.name} entry={entry} />)}
                        </div>
                    </div>
                )}
                
                 {(filteredEmergencyData.length > 0 && filteredOtherData.length > 0) && <Separator />}

                {filteredOtherData.length > 0 && (
                     <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-primary"><Sailboat />Otros Contactos</h3>
                        <div className="space-y-6">
                        {filteredOtherData.map(category => (
                            <div key={category.category}>
                                <h4 className="font-semibold text-muted-foreground mb-3">{category.category}</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {category.items.map(item => <OtherContactCard key={item.name} entry={item} />)}
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                )}
                
                {noResults && (
                    <p className="text-muted-foreground col-span-full text-center py-8">{`No se encontraron resultados para "${searchTerm}"`}</p>
                )}
             </div>
        </div>
    );
}
