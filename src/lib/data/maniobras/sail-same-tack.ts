
import type { ManeuverScenario } from './types';

export const sailSameTackScenario: ManeuverScenario = {
    id: 'sail-same-tack',
    title: "Veleros (Misma amura)",
    description: "Dos veleros que reciben el viento por la misma banda.",
    rule: "Regla 12",
    vesselA: {
        label: "Velero 'Cede paso' (Barlovento)",
        path: "M -35 40 L -5 10 C 5 0, 20 -10, 40 -25",
        colorClass: "stroke-green-500",
    },
    vesselB: {
        label: "Velero 'Sigue a rumbo' (Sotavento)",
        path: "M -15 40 L 35 -10",
        colorClass: "stroke-red-500",
    },
    explanation: "Según la Regla 12, el buque que está a barlovento (A, Verde) debe mantenerse apartado de la derrota del que está a sotavento (B, Rojo). Por ello, el verde maniobra para pasar por la popa del rojo.",
    windDirection: 'W'
};
