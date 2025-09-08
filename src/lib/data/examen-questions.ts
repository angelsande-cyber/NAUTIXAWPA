
import type { QuizOutput } from "@/types/examen-types";

export const EXAMEN_QUESTIONS_BANK: QuizOutput = {
    questions: [
        {
            question: "¿Qué significa una marca cardinal con dos conos apuntando hacia arriba?",
            options: [
                "Pasar por el Norte de la marca",
                "Pasar por el Sur de la marca",
                "Pasar por el Este de la marca",
                "Peligro aislado"
            ],
            correctAnswerIndex: 0,
            explanation: "Dos conos hacia arriba indican una marca de peligro cardinal Norte. Las aguas seguras están al Norte de la marca."
        },
        {
            question: "En una situación de 'vuelta encontrada' entre dos buques de propulsión mecánica, ¿qué maniobra deben realizar?",
            options: [
                "Ambos caen a babor",
                "Ambos caen a estribor",
                "El de menor eslora maniobra",
                "El que ve al otro por babor maniobra"
            ],
            correctAnswerIndex: 1,
            explanation: "Según la Regla 14 del COLREG, cuando dos buques de propulsión mecánica se encuentran de vuelta encontrada, ambos deben caer a estribor para pasar babor con babor."
        },
        {
            question: "¿Qué luz exhibirá de noche un buque de vela en navegación, de eslora inferior a 20 metros?",
            options: [
                "Una luz blanca en el tope del mástil",
                "Solo luces de costado",
                "Luces de costado y una luz de alcance",
                "Una luz roja sobre una verde en el tope del mástil"
            ],
            correctAnswerIndex: 2,
            explanation: "Un buque de vela en navegación debe mostrar como mínimo las luces de costado (roja y verde) y una luz de alcance (blanca)."
        },
        {
            question: "El canal 16 de VHF se utiliza para:",
            options: [
                "Comunicaciones de rutina entre barcos",
                "Solo para llamadas de socorro (MAYDAY)",
                "Llamada, socorro, urgencia y seguridad",
                "Información meteorológica"
            ],
            correctAnswerIndex: 2,
            explanation: "El canal 16 es el canal internacional de llamada, socorro (MAYDAY), urgencia (PAN PAN) y seguridad (SECURITE)."
        },
        {
            question: "¿Qué marca diurna debe mostrar un buque fondeado?",
            options: [
                "Un cilindro negro",
                "Dos conos negros unidos por el vértice",
                "Una esfera negra",
                "Un cono con el vértice hacia abajo"
            ],
            correctAnswerIndex: 2,
            explanation: "Un buque fondeado durante el día debe exhibir en la proa una esfera de color negro."
        },
        {
            question: "Si observa una boya cilíndrica de color rojo en la Región de Balizamiento A, ¿por dónde debe dejarla al entrar a puerto?",
            options: [
                "Por estribor",
                "Por babor",
                "Es indiferente",
                "Debe detenerse"
            ],
            correctAnswerIndex: 1,
            explanation: "En la región A, las marcas de babor son rojas y cilíndricas. Al entrar a puerto desde la mar, se deben dejar por babor."
        },
        {
            question: "Una señal acústica de una pitada larga seguida de dos cortas en visibilidad reducida indica:",
            options: [
                "Buque de propulsión mecánica parado",
                "Buque de vela",
                "Buque remolcando",
                "Buque fondeado"
            ],
            correctAnswerIndex: 1,
            explanation: "En visibilidad reducida, un buque de vela, un pesquero, un buque con maniobra restringida o un buque sin gobierno emiten una pitada larga y dos cortas."
        },
        {
            question: "Según la escala de Beaufort, un viento de fuerza 7 se denomina:",
            options: [
                "Brisa fresca",
                "Viento fuerte",
                "Temporal",
                "Brisa fuerte"
            ],
            correctAnswerIndex: 1,
            explanation: "La fuerza 7 en la escala de Beaufort corresponde a un 'Viento fuerte' (Frescachón) con velocidades de 28 a 33 nudos."
        },
        {
            question: "Un buque con capacidad de maniobra restringida muestra de día la marca:",
            options: [
                "Dos esferas negras",
                "Bola - Bicono - Bola",
                "Un cilindro",
                "Dos conos con los vértices juntos"
            ],
            correctAnswerIndex: 1,
            explanation: "La marca diurna para un buque con capacidad de maniobra restringida es una configuración vertical de Bola, Bicono (dos conos unidos por la base) y Bola."
        },
        {
            question: "¿Qué es el 'abatimiento'?",
            options: [
                "El ángulo entre el rumbo verdadero y el rumbo de superficie",
                "La deriva causada por el viento",
                "La deriva causada por la corriente",
                "La corrección total"
            ],
            correctAnswerIndex: 1,
            explanation: "El abatimiento es el desvío que sufre una embarcación de su rumbo a causa del efecto del viento sobre su obra muerta."
        },
        {
            question: "Si ves un buque por tu amura de estribor que te va a cortar la proa, ¿quién tiene preferencia?",
            options: [
                "Mi buque, porque lo veo por estribor",
                "El otro buque, porque está a mi estribor",
                "El buque más rápido",
                "El buque de mayor eslora"
            ],
            correctAnswerIndex: 1,
            explanation: "En una situación de cruce entre buques de propulsión mecánica, el buque que ve al otro por su estribor debe maniobrar para ceder el paso (Regla 15 del COLREG)."
        },
        {
            question: "Una luz amarilla de destellos sobre la luz de alcance de un remolcador indica:",
            options: [
                "Que el remolcador tiene problemas",
                "Una luz de remolque",
                "Que el remolque mide más de 200 metros",
                "Que está remolcando a un buque sin gobierno"
            ],
            correctAnswerIndex: 1,
            explanation: "Se trata de la luz de remolque, de color amarillo y con el mismo arco que la luz de alcance, situada por encima de esta."
        },
        {
            question: "¿Qué indica la bandera 'A' (Alfa) del Código Internacional de Señales?",
            options: [
                "Necesito auxilio",
                "¡Hombre al agua!",
                "Tengo un buzo sumergido",
                "Sí (Afirmativo)"
            ],
            correctAnswerIndex: 2,
            explanation: "La bandera Alfa significa: 'Tengo un buzo sumergido; manténgase bien alejado de mí y a poca velocidad'."
        },
        {
            question: "La presión atmosférica normal a nivel del mar es de aproximadamente:",
            options: [
                "1013 milibares",
                "980 milibares",
                "1050 milibares",
                "1000 milibares"
            ],
            correctAnswerIndex: 0,
            explanation: "La presión atmosférica estándar al nivel del mar se define como 1013.25 hectopascales o milibares."
        },
        {
            question: "¿Para qué sirve el Dispositivo de Separación de Tráfico (DST)?",
            options: [
                "Para la pesca deportiva",
                "Para organizar el tráfico en zonas de alta densidad",
                "Para marcar zonas de fondeo",
                "Para indicar la velocidad máxima"
            ],
            correctAnswerIndex: 1,
            explanation: "Los DST se establecen para canalizar el tráfico marítimo en áreas congestionadas o peligrosas, reduciendo el riesgo de abordajes."
        },
        {
            question: "¿Cuál es la señal acústica para indicar 'intención de adelantar por babor'?",
            options: [
                "Dos pitadas cortas",
                "Dos pitadas largas seguidas de una corta",
                "Dos pitadas largas seguidas de dos cortas",
                "Cinco o más pitadas cortas"
            ],
            correctAnswerIndex: 2,
            explanation: "Según la Regla 34(c) del COLREG, la señal de intención de adelantar por babor es dos pitadas largas y dos cortas."
        },
        {
            question: "¿Qué es la 'obra viva' de un buque?",
            options: [
                "La parte del casco que está por encima de la línea de flotación",
                "La superestructura del buque",
                "Toda la eslora del buque",
                "La parte del casco que está por debajo de la línea de flotación"
            ],
            correctAnswerIndex: 3,
            explanation: "La obra viva es la superficie sumergida del casco de un buque, mientras que la obra muerta es la que está por encima de la flotación."
        },
        {
            question: "En la Región de Balizamiento A, una marca de peligro aislado tiene como marca de tope:",
            options: [
                "Dos conos negros con el vértice hacia arriba",
                "Dos esferas negras",
                "Un cono rojo",
                "Una cruz amarilla"
            ],
            correctAnswerIndex: 1,
            explanation: "Una marca de peligro aislado se distingue por su color negro y rojo a franjas horizontales y, sobre todo, por su marca de tope de dos esferas negras."
        },
        {
            question: "¿Qué documento náutico proporciona información detallada sobre corrientes y mareas?",
            options: [
                "El Derrotero",
                "El Anuario de Mareas",
                "La Carta Náutica",
                "El Libro de Faros"
            ],
            correctAnswerIndex: 1,
            explanation: "El Anuario de Mareas es la publicación específica que contiene las predicciones de las horas y alturas de las pleamares y bajamares."
        },
        {
            question: "Un buque varado de noche, además de las luces de fondeo, debe mostrar:",
            options: [
                "Dos luces rojas todo horizonte en vertical",
                "Una luz roja todo horizonte",
                "Una luz blanca de destellos",
                "Tres luces rojas todo horizonte en vertical"
            ],
            correctAnswerIndex: 0,
            explanation: "Un buque varado (Regla 30) exhibirá las luces de fondeo y, además, en el lugar más visible, dos luces rojas todo horizonte en línea vertical."
        }
    ]
}
