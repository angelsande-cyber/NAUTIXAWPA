import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useTranslation } from "@/context/LanguageContext";
import { COLREG_DATA } from "@/lib/data/colreg";


const ColregContent = () => {
    const { t } = useTranslation();

    return (
        <div className="space-y-4 text-left">
            <Accordion type="multiple" defaultValue={["part-A"]} className="w-full">
                {COLREG_DATA.map((part) => (
                    <AccordionItem key={part.id} value={part.id}>
                        <AccordionTrigger className="text-xl font-bold">{t(part.title)}</AccordionTrigger>
                        <AccordionContent className="space-y-4 pl-2">
                            {part.sections.map((section, sectionIndex) => (
                                <div key={sectionIndex} className={sectionIndex > 0 ? 'pt-4 border-t' : ''}>
                                    {section.title && <h5 className="font-bold text-lg mb-2">{t(section.title)}</h5>}
                                    <div className="space-y-3">
                                        {section.rules.map((rule) => (
                                            <div key={rule.id}>
                                                <h4 className="font-semibold">{t(rule.title)}</h4>
                                                <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                                                    {rule.points.map((point, pointIndex) => (
                                                        <li key={pointIndex}>
                                                            {t(point.text)}
                                                            {point.subpoints && (
                                                                <ul className="list-[circle] pl-6 text-sm space-y-1 mt-1">
                                                                    {point.subpoints.map((subpoint, subpointIndex) => (
                                                                        <li key={subpointIndex}>{t(subpoint)}</li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}


export default function ColregPage() {
    const { t } = useTranslation();
    return (
        <div className="p-4 md:p-6 h-full">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>{t('colreg.page.title')}</CardTitle>
                    <CardDescription>{t('colreg.page.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="max-h-[calc(100vh-20rem)] overflow-y-auto pr-3">
                         <ColregContent />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
