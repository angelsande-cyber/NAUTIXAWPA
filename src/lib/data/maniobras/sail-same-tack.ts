
import type { ManeuverScenario } from './types';

export const sailSameTackScenario: ManeuverScenario = {
    id: 'sail-same-tack',
    title: "Veleros (Misma amura)",
    description: "Dos veleros que reciben el viento por la misma banda.",
    rule: "Regla 12",
    vesselA: {
        label: "Buque 'Sigue a rumbo' (Sotavento)",
        path: "M -25 20 L 25 -30",
        colorClass: "stroke-green-500",
    },
    vesselB: {
        label: "Buque 'Cede paso' (Barlovento)",
        path: "M -20 40 L 0 5 C 10 0, 30 -20, 50 0",
        colorClass: "stroke-red-500",
    },
    explanation: "De acuerdo con la Regla 12 (a) (ii), cuando ambos veleros reciben el viento por la misma banda, el que está a barlovento (rojo) debe ceder el paso al que está a sotavento (verde).",
    windDirection: 'S'
};
