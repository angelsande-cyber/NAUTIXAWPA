import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const ColregContent = () => (
    <div className="space-y-4 text-left">
        <Accordion type="multiple" defaultValue={["item-1"]} className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-bold">📜 Parte A – Generalidades</AccordionTrigger>
                <AccordionContent className="space-y-3 pl-2">
                    <div>
                        <h4 className="font-semibold">Regla 1 – Ámbito de aplicación</h4>
                        <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                            <li>Se aplica a todos los buques en alta mar y en aguas conectadas navegables por buques marítimos.</li>
                            <li>Permite que autoridades nacionales establezcan reglas especiales para puertos, radas, ríos o lagos conectados al mar, siempre que no contradigan el espíritu del COLREG.</li>
                            <li>Gobiernos pueden fijar luces y señales adicionales para buques de guerra, convoyes o pesca en flotilla, procurando que no se confundan con las reglamentarias.</li>
                            <li>La OMI puede adoptar oficialmente dispositivos de separación de tráfico.</li>
                            <li>Buques de construcción o misión especial que no puedan cumplir plenamente con las disposiciones (por ejemplo, por su diseño) deben ajustarse lo más posible a ellas sin comprometer su función.</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold">Regla 2 – Responsabilidad</h4>
                        <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                            <li>El cumplimiento literal no exime de la obligación de actuar con prudencia y buen juicio.</li>
                            <li>Si una situación excepcional requiere apartarse de las reglas para evitar un abordaje, se debe hacer.</li>
                            <li>La responsabilidad recae siempre en el capitán, armador y tripulación, incluso si el abordaje se produce por fallo de otro buque.</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold">Regla 3 – Definiciones</h4>
                        <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                            <li>Define conceptos clave:</li>
                             <ul className="list-disc pl-6 text-sm space-y-1 mt-1">
                                <li><i>Buque:</i> toda embarcación, incluidas las sin desplazamiento, hidroaviones y plataformas flotantes.</li>
                                <li><i>Buque de propulsión mecánica:</i> movido por maquinaria.</li>
                                <li><i>Buque de vela:</i> propulsado únicamente por velas.</li>
                                <li><i>Buque sin gobierno:</i> incapaz de maniobrar según lo requerido.</li>
                                <li><i>Buque con maniobra restringida:</i> limitado por la naturaleza de su trabajo (dragado, tendido de cables, etc.).</li>
                                <li><i>Buque restringido por su calado:</i> limitado por la profundidad disponible.</li>
                                <li><i>En navegación:</i> no fondeado, varado ni amarrado a tierra.</li>
                                <li><i>Visibilidad reducida:</i> niebla, lluvia intensa, nieve, humo, etc.</li>
                            </ul>
                        </ul>
                    </div>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-bold">🧭 Parte B – Reglas de rumbo y gobierno</AccordionTrigger>
                <AccordionContent className="space-y-4 pl-2">
                    <h5 className="font-bold text-lg">Sección I – Conducta en cualquier condición de visibilidad</h5>
                    <div className="space-y-3">
                        <h4 className="font-semibold">Regla 5 – Vigilancia</h4>
                        <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                            <li>Observación visual y auditiva eficaz en todo momento.</li>
                            <li>Uso de todos los medios disponibles: radar, AIS, prismáticos, escucha de señales acústicas.</li>
                            <li>La vigilancia debe ser constante y suficiente para evaluar la situación y el riesgo.</li>
                        </ul>
                        <h4 className="font-semibold">Regla 6 – Velocidad de seguridad</h4>
                        <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                            <li>Ajustar velocidad según: visibilidad, densidad de tráfico, maniobrabilidad, viento, mar, corrientes, calado y proximidad a peligros.</li>
                            <li>En radar: considerar limitaciones del equipo y condiciones de mar.</li>
                        </ul>
                        <h4 className="font-semibold">Regla 7 – Riesgo de abordaje</h4>
                        <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                            <li>Usar todos los medios disponibles para determinar si existe riesgo.</li>
                            <li>Si la marcación de otro buque no varía de forma apreciable, hay riesgo.</li>
                            <li>En radar: evitar suposiciones basadas en datos incompletos.</li>
                        </ul>
                        <h4 className="font-semibold">Regla 8 – Maniobras para evitar abordajes</h4>
                        <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                            <li>Claras, a tiempo y suficientemente amplias para ser evidentes.</li>
                            <li>Evitar cambios pequeños y repetidos.</li>
                            <li>Reducir velocidad o parar si es necesario.</li>
                            <li>No crear nuevas situaciones de riesgo.</li>
                        </ul>
                        <h4 className="font-semibold">Regla 9 – Canales angostos</h4>
                        <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                            <li>Navegar lo más cerca posible del límite de estribor.</li>
                            <li>Buques pequeños, de vela o pesca no deben estorbar a los grandes.</li>
                            <li>Evitar fondear en el canal.</li>
                            <li>Avisar con señales acústicas al adelantar.</li>
                        </ul>
                        <h4 className="font-semibold">Regla 10 – Dispositivos de separación de tráfico</h4>
                        <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                             <li>Seguir la vía asignada en la dirección general del tráfico.</li>
                            <li>Entrar/salir por los extremos, cruzar en ángulo recto.</li>
                            <li>Evitar navegar en la zona de separación salvo necesidad.</li>
                            <li>Buques de menos de 20 m, de vela o pesca no deben estorbar al tráfico principal.</li>
                        </ul>
                    </div>

                    <h5 className="font-bold text-lg pt-4 border-t">Sección II – Buques a la vista uno del otro</h5>
                     <div className="space-y-3">
                        <h4 className="font-semibold">Regla 12 – Buques de vela</h4>
                         <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                            <li>Viento por bandas opuestas: el que lo recibe por babor cede.</li>
                            <li>Viento por la misma banda: el de barlovento cede al de sotavento.</li>
                            <li>Si no se sabe de qué banda recibe el viento el otro, asumir que es por estribor y ceder.</li>
                        </ul>
                        <h4 className="font-semibold">Regla 13 – Buque que alcanza</h4>
                        <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                            <li>El que se aproxima por más de 22,5° a popa debe mantenerse apartado.</li>
                            <li>Se mantiene la obligación hasta quedar libre y claramente por delante.</li>
                        </ul>
                        <h4 className="font-semibold">Regla 14 – Situación de vuelta encontrada</h4>
                         <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                           <li>Dos buques a motor frente a frente: ambos caen a estribor para pasar por babor.</li>
                        </ul>
                        <h4 className="font-semibold">Regla 15 – Situación de cruce</h4>
                        <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                            <li>El que ve al otro por su costado de estribor cede el paso.</li>
                        </ul>
                         <h4 className="font-semibold">Regla 16 – Maniobra del que cede</h4>
                         <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                           <li>Actuar con antelación y decisión, evitando maniobras mínimas.</li>
                        </ul>
                        <h4 className="font-semibold">Regla 17 – Maniobra del que sigue a rumbo</h4>
                        <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                           <li>Mantener rumbo y velocidad, pero actuar si el otro no maniobra o si es necesario para evitar abordaje.</li>
                        </ul>
                        <h4 className="font-semibold">Regla 18 – Obligaciones entre categorías</h4>
                        <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                             <li>Prioridad: Sin gobierno &gt; Maniobra restringida &gt; Restringido por calado &gt; Pesca &gt; Vela &gt; Motor.</li>
                        </ul>
                     </div>
                    
                    <h5 className="font-bold text-lg pt-4 border-t">Sección III – Visibilidad reducida</h5>
                     <div className="space-y-3">
                        <h4 className="font-semibold">Regla 19</h4>
                        <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1 mt-1">
                             <li>Velocidad reducida, motores listos, señales acústicas reglamentarias.</li>
                             <li>Evitar cambios bruscos de rumbo hacia un buque detectado por radar a corta distancia.</li>
                        </ul>
                     </div>
                </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-bold">💡 Parte C – Luces y marcas</AccordionTrigger>
                <AccordionContent className="space-y-3 pl-2">
                    <div>
                        <h4 className="font-semibold">Regla 20</h4>
                        <p className="text-muted-foreground text-sm mt-1">Uso obligatorio desde la puesta hasta la salida del sol y en visibilidad reducida.</p>
                        <h4 className="font-semibold mt-2">Reglas 21 a 31</h4>
                        <p className="text-muted-foreground text-sm mt-1">Definen los tipos de luces, sus alcances y las configuraciones específicas para cada tipo de buque (motor, remolque, vela, pesca, sin gobierno, etc.).</p>
                    </div>
                </AccordionContent>
            </AccordionItem>

             <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl font-bold">📢 Parte D – Señales acústicas y luminosas</AccordionTrigger>
                 <AccordionContent className="space-y-3 pl-2">
                    <div>
                        <h4 className="font-semibold">Reglas 32 a 37</h4>
                        <p className="text-muted-foreground text-sm mt-1">Definen pitada corta/larga, equipo obligatorio, y señales de maniobra, advertencia, visibilidad reducida, atención y socorro.</p>
                    </div>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl font-bold">⚓ Parte E y F – Exenciones y Verificación</AccordionTrigger>
                 <AccordionContent className="space-y-3 pl-2">
                    <div>
                        <h4 className="font-semibold">Regla 38 (Exenciones)</h4>
                         <p className="text-muted-foreground text-sm mt-1">Permite exenciones a buques en construcción o especiales, sin comprometer seguridad.</p>
                        <h4 className="font-semibold mt-2">Reglas 39 a 41 (Verificación)</h4>
                         <p className="text-muted-foreground text-sm mt-1">Tratan sobre inspecciones, certificaciones y control de cumplimiento por parte de las autoridades.</p>
                    </div>
                </AccordionContent>
            </AccordionItem>

        </Accordion>
    </div>
);


export default function ColregPage() {
    return (
        <div className="p-4 md:p-6 h-full">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Guía de Estudio del COLREG</CardTitle>
                    <CardDescription>
                       Un resumen explicativo del Reglamento Internacional para Prevenir los Abordajes en la Mar.
                    </CardDescription>
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
