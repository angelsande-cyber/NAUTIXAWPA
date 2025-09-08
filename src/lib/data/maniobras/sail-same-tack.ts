
import type { ManeuverScenario } from './types';

export const sailSameTackScenario: ManeuverScenario = {
    id: 'sail-same-tack',
    title: "Veleros (Misma amura)",
    description: "Dos veleros que reciben el viento por la misma banda.",
    rule: "Regla 12",
    vesselA: {
        label: "Velero 'Sigue a rumbo' (Sotavento)",
        path: "M -15 40 L 35 -10",
        colorClass: "stroke-green-500",
    },
    vesselB: {
        label: "Velero 'Cede paso' (Barlovento)",
        path: "M -35 40 L -5 10 C 5 0, 20 -10, 40 -25",
        colorClass: "stroke-red-500",
    },
    explanation: "De acuerdo con la Regla 12 (a) (ii), cuando dos veleros reciben el viento por la misma banda, el buque que esté a barlovento (B, Rojo) se mantendrá apartado de la derrota del que esté a sotavento (A, Verde). El rojo maniobra para pasar por la popa del verde.",
    windDirection: 'W'
};
