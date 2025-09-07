"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Radio, Siren, HelpCircle, PhoneOutgoing, Satellite } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useTranslation, LanguageToggle } from "@/context/LanguageContext";


const MaydayProcedure = () => {
    const { t } = useTranslation();
    return (
        <div className="sos-message p-4 rounded-lg bg-muted font-mono text-sm leading-relaxed space-y-1">
            <p className="font-bold text-destructive">MAYDAY, MAYDAY, MAYDAY</p>
            <p>{t('sos.thisIs')} <span className="placeholder">{t('sos.placeholders.shipName')} (x3)</span></p>
            <p>{t('sos.callSign')} <span className="placeholder">{t('sos.placeholders.callSign')}</span> MMSI <span className="placeholder">MMSI</span></p>
            <p className="font-bold text-destructive pt-2">MAYDAY</p>
            <p>{t('sos.myPosition')} <span className="placeholder">{t('sos.placeholders.position')}</span></p>
            <p>{t('sos.iam')} <span className="placeholder">{t('sos.placeholders.natureOfDistress')}</span></p>
            <p>{t('sos.iRequire')}</p>
            <p>{t('sos.iHave')} <span className="placeholder">{t('sos.placeholders.pob')}</span> {t('sos.personsOnBoard')}</p>
            <p><span className="placeholder">{t('sos.placeholders.otherInfo')}</span></p>
            <p>{t('sos.over')}</p>
        </div>
    );
};

export default function SosgenPage() {
    const { t } = useTranslation();
    
    const distressSystems = [
        {
            icon: <Radio className="h-6 w-6 text-primary" />,
            title: t('sos.systems.vhf.title'),
            description: t('sos.systems.vhf.description'),
            channel: t('sos.systems.vhf.channel')
        },
        {
            icon: <Satellite className="h-6 w-6 text-primary" />,
            title: t('sos.systems.epirb.title'),
            description: t('sos.systems.epirb.description'),
            channel: t('sos.systems.epirb.channel')
        },
        {
            icon: <Siren className="h-6 w-6 text-primary" />,
            title: t('sos.systems.visual.title'),
            description: t('sos.systems.visual.description'),
            channel: t('sos.systems.visual.channel')
        },
        {
            icon: <PhoneOutgoing className="h-6 w-6 text-primary" />,
            title: t('sos.systems.mobile.title'),
            description: t('sos.systems.mobile.description'),
            channel: t('sos.systems.mobile.channel')
        },
    ];

    return (
        <div className="p-4 md:p-6 space-y-6">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>{t('sos.title')}</CardTitle>
                    <CardDescription>{t('sos.description')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">{t('sos.procedure.title')}</h3>
                        <Alert>
                            <Siren className="h-4 w-4" />
                            <AlertTitle>{t('sos.procedure.alert.title')}</AlertTitle>
                            <AlertDescription>{t('sos.procedure.alert.description')}</AlertDescription>
                        </Alert>

                        <div className="mt-4">
                             <div className="flex items-center justify-center space-x-3 mb-4 p-2 bg-background rounded-lg border">
                                <LanguageToggle isPageSwitch={true} />
                            </div>
                           <MaydayProcedure />
                        </div>
                        
                        <Accordion type="single" collapsible className="w-full mt-4">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>{t('sos.procedure.explanation.title')}</AccordionTrigger>
                                <AccordionContent className="space-y-2 text-muted-foreground">
                                   <p><strong>1. {t('sos.procedure.explanation.step1.title')}</strong> {t('sos.procedure.explanation.step1.description')}</p>
                                   <p><strong>2. {t('sos.procedure.explanation.step2.title')}</strong> {t('sos.procedure.explanation.step2.description')}</p>
                                   <p><strong>3. {t('sos.procedure.explanation.step3.title')}</strong> {t('sos.procedure.explanation.step3.description')}</p>
                                   <p><strong>4. {t('sos.procedure.explanation.step4.title')}</strong> {t('sos.procedure.explanation.step4.description')}</p>
                                   <p><strong>5. {t('sos.procedure.explanation.step5.title')}</strong> {t('sos.procedure.explanation.step5.description')}</p>
                                   <p><strong>6. {t('sos.procedure.explanation.step6.title')}</strong> {t('sos.procedure.explanation.step6.description')}</p>
                                   <p><strong>7. {t('sos.procedure.explanation.step7.title')}</strong> {t('sos.procedure.explanation.step7.description')}</p>
                                   <p><strong>8. {t('sos.procedure.explanation.step8.title')}</strong> {t('sos.procedure.explanation.step8.description')}</p>
                                   <p><strong>9. {t('sos.procedure.explanation.step9.title')}</strong> {t('sos.procedure.explanation.step9.description')}</p>
                                   <p><strong>10. {t('sos.procedure.explanation.step10.title')}</strong> {t('sos.procedure.explanation.step10.description')}</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                     <div className="pt-6 border-t">
                        <h3 className="text-xl font-semibold mb-4">{t('sos.systems.title')}</h3>
                        <div className="space-y-4">
                            {distressSystems.map((system) => (
                                <Card key={system.title} className="flex flex-col sm:flex-row items-start gap-4 p-4">
                                     <div className="bg-primary/10 text-primary p-3 rounded-md mt-1">
                                        {system.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold">{system.title}</h4>
                                        <p className="text-sm text-muted-foreground">{system.description}</p>
                                        <p className="text-xs font-mono mt-2 bg-muted px-2 py-1 rounded-md inline-block">{system.channel}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
