
import type { ManeuverScenario } from './types';

export const sailSameTackScenario: ManeuverScenario = {
    id: 'sail-same-tack',
    title: "Veleros (Misma amura)",
    description: "Dos veleros que reciben el viento por la misma banda.",
    rule: "Regla 12",
    vesselA: {
        label: "Velero 'Sigue a rumbo' (Sotavento)",
        path: "M -40 -15 L 10 35",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Velero 'Cede paso' (Barlovento)",
        path: "M -40 -35 L -10 -5 C 0 5, -10 20, -25 40",
        colorClass: "stroke-green-500",
    },
    explanation: "Con viento del Sur, el velero verde, al estar a barlovento (más cerca del viento), debe ceder el paso maniobrando por la popa del velero rojo, que está a sotavento y mantiene su rumbo.",
    windDirection: 'S'
};
