
import type { ManeuverScenario } from './types';

export const sailSameTackScenario: ManeuverScenario = {
    id: 'sail-same-tack',
    title: "Veleros (Misma amura)",
    description: "Dos veleros que reciben el viento por la misma banda.",
    rule: "Regla 12",
    vesselA: {
        label: "Buque 'Sigue a rumbo' (Sotavento)",
        path: "M -40 -15 L 10 35",
        colorClass: "stroke-green-500",
    },
    vesselB: {
        label: "Buque 'Cede paso' (Barlovento)",
        path: "M -40 -35 L -10 -5 C 0 5, -10 20, -25 40",
        colorClass: "stroke-red-500",
    },
    explanation: "Con viento del Sur, el buque de barlovento (rojo), que está más cerca del viento, debe maniobrar con antelación para pasar por la popa del buque de sotavento (verde), que mantiene su rumbo.",
    windDirection: 'S'
};
