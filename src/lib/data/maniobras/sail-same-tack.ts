import type { ManeuverScenario } from './types';

export const sailSameTackScenario: ManeuverScenario = {
    id: 'sail-same-tack',
    title: "Veleros (Misma amura)",
    description: "Dos veleros que reciben el viento por la misma banda.",
    rule: "Regla 12",
    vesselA: {
        label: "Velero 'Cede paso' (Barlovento)",
        path: "M -30 40 L 5 5 C 15 -5, 25 -5, 35 0 L 45 10",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Velero 'Sigue a rumbo' (Sotavento)",
        path: "M -10 40 L 40 -10",
        colorClass: "stroke-green-500",
    },
    explanation: "El velero que está a barlovento (A), más cerca del viento, debe ceder el paso al que está a sotavento (B).",
    windDirection: 'W'
};
