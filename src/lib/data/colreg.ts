// Data structure for the COLREG study guide.
// Uses translation keys to be resolved by the component.

export const COLREG_DATA_ES = [
    {
        id: "part-A",
        title: "Parte A - Generalidades",
        sections: [
            {
                rules: [
                    {
                        id: "rule-1",
                        title: "Regla 1 - Ámbito de Aplicación",
                        points: [
                            { text: "El Reglamento se aplicará a todos los buques en alta mar y en todas las aguas que tengan comunicación con ella y sean navegables por buques de navegación marítima." },
                            { text: "Ninguna disposición del presente Reglamento impedirá la aplicación de reglas especiales, establecidas por la autoridad competente para rías, puertos, ríos, lagos o aguas interiores que tengan comunicación con alta mar y sean navegables por buques de navegación marítima." },
                            { text: "Ninguna disposición del presente Reglamento impedirá la aplicación de reglas especiales establecidas por el Gobierno de cualquier Estado en cuanto a utilizar luces de situación y señales luminosas, marcas o señales de pito adicionales para buques de guerra y buques navegando en convoy." },
                            { text: "La Organización podrá adoptar dispositivos de separación de tráfico a los fines de este Reglamento." },
                            { text: "Cuando un Gobierno considere que un buque de construcción o finalidad especiales no pueda cumplir plenamente con las disposiciones de alguna de las presentes reglas sobre número, situación, distancias o arcos de visibilidad de las luces o marcas, tal buque cumplirá con otras disposiciones sobre número, situación, distancias o arcos de visibilidad de dichas luces o marcas que, a juicio de su Gobierno, representen el cumplimiento más aproximado posible de este Reglamento para dicho buque." },
                        ]
                    },
                    {
                        id: "rule-2",
                        title: "Regla 2 - Responsabilidad",
                        points: [
                            { text: "Ninguna disposición de este Reglamento eximirá a un buque, o a su propietario, al Capitán o a la dotación del mismo, de las consecuencias de cualquier negligencia en el cumplimiento de este Reglamento." },
                            { text: "En su interpretación y cumplimiento se tendrán en cuenta todos los peligros de navegación y riesgo de abordaje y toda circunstancia especial, incluidas las limitaciones de los buques interesados, que pudieran hacer necesario apartarse de este Reglamento para evitar un peligro inmediato." },
                            { text: "Se prestará la debida atención a todas las circunstancias, incluido el estado del viento, el mar y la corriente, y la proximidad de peligros para la navegación, que puedan exigir la adopción de precauciones especiales." },
                        ]
                    },
                    {
                        id: "rule-3",
                        title: "Regla 3 - Definiciones Generales",
                        points: [
                            {
                                text: "A los efectos de este Reglamento, excepto cuando se prescriba otra cosa:",
                                subpoints: [
                                    "La palabra 'buque' designa a toda clase de embarcaciones, incluidas las embarcaciones sin desplazamiento y las naves de vuelo rasante, utilizadas o que puedan ser utilizadas como medio de transporte sobre el agua.",
                                    "La expresión 'buque de propulsión mecánica' significa todo buque movido por una máquina.",
                                    "La expresión 'buque de vela' designa a todo buque navegando a vela siempre que su maquinaria propulsora, caso de llevarla, no se esté utilizando.",
                                    "La expresión 'buque dedicado a la pesca' significa todo buque que esté pescando con redes, líneas, aparejos de arrastre u otros artes de pesca que restrinjan su maniobrabilidad.",
                                    "La expresión 'buque sin gobierno' significa todo buque que por cualquier circunstancia excepcional es incapaz de maniobrar en la forma exigida por este Reglamento y, por consiguiente, no puede apartarse de la derrota de otro buque.",
                                    "La expresión 'buque con capacidad de maniobra restringida' significa todo buque que, debido a la naturaleza de su trabajo, tiene reducida su capacidad para maniobrar en la forma exigida por este Reglamento y, por consiguiente, no puede apartarse de la derrota de otro buque.",
                                    "La expresión 'buque restringido por su calado' significa un buque de propulsión mecánica que, por razón de su calado en relación con la profundidad y anchura disponible del agua navegable, tiene una capacidad muy restringida de apartarse de la derrota que está siguiendo.",
                                    "La expresión 'buque en navegación' se aplica a un buque que no esté ni fondeado, ni amarrado a tierra, ni varado.",
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "part-B",
        title: "Parte B - Reglas de Rumbo y Gobierno",
        sections: [
            {
                title: "Sección I - Conducta de los buques en cualquier condición de visibilidad",
                rules: [
                    { id: "rule-5", title: "Regla 5 - Vigilancia", points: [{ text: "Todos los buques mantendrán en todo momento una eficaz vigilancia visual y auditiva, utilizando asimismo todos los medios disponibles que sean apropiados a las circunstancias y condiciones del momento, para evaluar plenamente la situación y el riesgo de abordaje." }, { text: "Se deberá prestar especial atención a la posibilidad de que se produzcan pequeños buques y embarcaciones de recreo." }, { text: "Se deberá prestar especial atención a la posibilidad de que se produzcan buques que no estén utilizando sus luces, o que las estén utilizando incorrectamente." }] },
                    { id: "rule-6", title: "Regla 6 - Velocidad de seguridad", points: [{ text: "Todo buque navegará en todo momento a una velocidad de seguridad tal que le permita ejecutar la maniobra adecuada y eficaz para evitar el abordaje y pararse a la distancia que sea apropiada a las circunstancias y condiciones del momento." }, { text: "Para determinar la velocidad de seguridad se tendrán en cuenta, entre otros, los siguientes factores: estado de visibilidad, densidad de tráfico, maniobrabilidad del buque, de noche, la existencia de resplandor, estado del viento, del mar y de la corriente, y el calado en relación con la profundidad." }] },
                    { id: "rule-7", title: "Regla 7 - Riesgo de abordaje", points: [{ text: "Cada buque hará uso de todos los medios de que disponga a bordo apropiados a las circunstancias y condiciones del momento, para determinar si existe riesgo de abordaje. En caso de abrigarse alguna duda, se considerará que el riesgo existe." }, { text: "Se considerará que existe el riesgo si la demora de un buque que se aproxima no varía en forma apreciable." }, { text: "Incluso, tal riesgo puede existir algunas veces aun cuando sea evidente una variación apreciable de la demora, en particular al aproximarse a un buque de gran tamaño, a un remolque o a cualquier buque a muy corta distancia." }] },
                    { id: "rule-8", title: "Regla 8 - Maniobras para evitar el abordaje", points: [{ text: "Toda maniobra que se efectúe para evitar un abordaje será llevada a cabo en forma clara, con la debida antelación y respetando las buenas prácticas marineras." }, { text: "Todo cambio de rumbo o de velocidad que se efectúe para evitar un abordaje será lo suficientemente amplio para ser percibido con facilidad por otro buque que lo observe visualmente o por medio del radar." }, { text: "Si hay espacio suficiente, el cambio de rumbo por sí solo puede ser la maniobra más eficaz para evitar una situación de aproximación excesiva, a condición de que se haga con bastante antelación, sea considerable y no produzca una nueva situación de aproximación excesiva." }, { text: "La maniobra que se efectúe para evitar un abordaje será tal que el buque pase a una distancia segura del otro. La eficacia de la maniobra se deberá ir comprobando hasta el momento en que el otro buque esté pasado y franco." }] },
                    { id: "rule-9", title: "Regla 9 - Canales angostos", points: [{ text: "Los buques que naveguen a lo largo de un paso o canal angosto se mantendrán lo más cerca posible del límite exterior del paso o canal que quede por su costado de estribor, siempre que puedan hacerlo sin que ello entrañe peligro." }, { text: "Los buques de eslora inferior a 20 metros o los buques de vela no estorbarán el tránsito de un buque que sólo pueda navegar con seguridad dentro de un paso o canal angosto." }, { text: "Un buque que esté pescando no estorbará el tránsito de ningún otro buque que navegue dentro de un paso o canal angosto." }, { text: "Normalmente, un buque no deberá cruzar un paso o canal angosto si al hacerlo estorba el tránsito de otro buque que sólo pueda navegar con seguridad dentro de dicho paso o canal." }] },
                    { id: "rule-10", title: "Regla 10 - Dispositivos de separación de tráfico", points: [{ text: "Esta Regla es de aplicación a los dispositivos de separación de tráfico adoptados por la Organización." }, { text: "Los buques que utilicen un dispositivo de separación de tráfico deberán: navegar en la vía de circulación apropiada, en la dirección general de la corriente del tráfico indicada para dicha vía; en lo posible, mantener su rumbo fuera de la línea de separación o de la zona de separación de tráfico; normalmente, al entrar o salir de una vía de circulación, hacerlo por sus extremos." }, { text: "En lo posible, los buques evitarán cruzar las vías de circulación, pero cuando se vean obligados a ello lo harán siguiendo un rumbo que en la medida de lo posible forme una perpendicular con la dirección general de la corriente del tráfico." }, { text: "Un buque que navegue por una zona de tráfico costero no utilizará normalmente el dispositivo de separación de tráfico adyacente." }] },
                ]
            },
            {
                title: "Sección II - Conducta de los buques que se encuentren a la vista uno de otro",
                rules: [
                    { id: "rule-12", title: "Regla 12 - Buques de vela", points: [{ text: "Cuando dos buques de vela se aproximen uno al otro, con riesgo de abordaje, uno de ellos se mantendrá apartado de la derrota del otro en la forma siguiente: cuando cada uno de ellos reciba el viento por bandas contrarias, el que lo reciba por babor se mantendrá apartado de la derrota del otro." }, { text: "Cuando ambos reciban el viento por la misma banda, el buque que esté a barlovento se mantendrá apartado de la derrota del que esté a sotavento." }, { text: "Si un buque que recibe el viento por babor avista a otro buque por barlovento y no puede determinar con certeza si el otro buque recibe el viento por babor o estribor, se mantendrá apartado de la derrota del otro." }] },
                    { id: "rule-13", title: "Regla 13 - Buque que alcanza", points: [{ text: "Todo buque que alcance a otro se mantendrá apartado de la derrota del buque alcanzado." }, { text: "Se considerará como buque que alcanza a todo buque que se aproxime a otro viniendo desde una marcación de más de 22,5 grados a popa del través de este último." }] },
                    { id: "rule-14", title: "Regla 14 - Situación 'de vuelta encontrada'", points: [{ text: "Cuando dos buques de propulsión mecánica naveguen de vuelta encontrada a rumbos opuestos o casi opuestos, con riesgo de abordaje, cada uno de ellos caerá a estribor de forma que pase por la banda de babor del otro." }] },
                    { id: "rule-15", title: "Regla 15 - Situación 'de cruce'", points: [{ text: "Cuando dos buques de propulsión mecánica se crucen con riesgo de abordaje, el buque que tenga al otro por su costado de estribor se mantendrá apartado de la derrota de este otro y, si las circunstancias lo permiten, evitará cortarle la proa." }] },
                    { id: "rule-16", title: "Regla 16 - Maniobra del buque que 'cede el paso'", points: [{ text: "Todo buque que esté obligado a mantenerse apartado de la derrota de otro buque maniobrará, en la medida de lo posible, con anticipación suficiente y de forma decidida para quedar bien franco del otro buque." }] },
                    { id: "rule-17", title: "Regla 17 - Maniobra del buque que 'sigue a rumbo'", points: [{ text: "Cuando uno de dos buques deba mantenerse apartado de la derrota del otro, este último mantendrá su rumbo y velocidad." }] },
                    { id: "rule-18", title: "Regla 18 - Obligaciones entre categorías de buques", points: [{ text: "Excepto donde las Reglas 9, 10 y 13 prescriban otra cosa, un buque de propulsión mecánica en navegación se mantendrá apartado de la derrota de: un buque sin gobierno; un buque con capacidad de maniobra restringida; un buque dedicado a la pesca; un buque de vela." }] },
                ]
            },
            {
                title: "Sección III - Conducta de los buques en condiciones de visibilidad reducida",
                rules: [
                    { id: "rule-19", title: "Regla 19 - Conducta de los buques en condiciones de visibilidad reducida", points: [{ text: "Esta Regla es de aplicación a los buques que no estén a la vista uno de otro cuando naveguen cerca o dentro de una zona de visibilidad reducida." }, { text: "Todos los buques navegarán a una velocidad de seguridad adaptada a las circunstancias y condiciones de visibilidad reducida del momento. Los buques de propulsión mecánica tendrán sus máquinas listas para maniobrar inmediatamente." }] },
                ]
            }
        ]
    },
    {
        id: "part-C",
        title: "Parte C - Luces y Marcas",
        sections: [
            {
                rules: [
                    { id: "rule-20", title: "Regla 20 - Ámbito de Aplicación", points: [{ text: "Las Reglas de esta Parte deberán cumplirse en todas las condiciones meteorológicas." }] },
                    { id: "rule-21-31", title: "Reglas 21 a 31", points: [{ text: "Estas reglas especifican los requisitos detallados para las luces (colores, arcos de visibilidad, situación) y marcas (formas, colores, situación) que deben exhibir las diferentes categorías de buques en diversas situaciones (en navegación, fondeado, varado, etc.). Se recomienda consultar el simulador visual para su estudio." }] },
                ]
            }
        ]
    },
    {
        id: "part-D",
        title: "Parte D - Señales Acústicas y Luminosas",
        sections: [
            {
                rules: [
                    { id: "rule-32-37", title: "Reglas 32 a 37", points: [{ text: "Estas reglas definen las señales acústicas de maniobra y advertencia (pitos), las señales acústicas en visibilidad reducida (pito, campana, gong) y las señales para llamar la atención. Se recomienda consultar el simulador de sonidos para su estudio." }] },
                ]
            }
        ]
    },
    {
        id: "part-EF",
        title: "Partes E y F - Exenciones y Verificación",
        sections: [
            {
                rules: [
                    { id: "rule-38", title: "Regla 38 - Exenciones", points: [{ text: "Los buques que cumplan con el Reglamento de 1960 y cuya quilla haya sido puesta antes de la entrada en vigor del presente Reglamento estarán exentos de su cumplimiento bajo ciertas condiciones." }] },
                    { id: "rule-39-41", title: "Reglas 39 a 41 - Verificación", points: [{ text: "Estas reglas (no en el convenio original) se refieren a la verificación del cumplimiento del Reglamento por parte de los Estados miembros de la OMI." }] },
                ]
            }
        ]
    }
];
