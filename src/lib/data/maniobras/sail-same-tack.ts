
import type { ManeuverScenario } from './types';

export const sailSameTackScenario: ManeuverScenario = {
    id: 'sail-same-tack',
    title: "Veleros (Misma amura)",
    description: "Dos veleros que reciben el viento por la misma banda.",
    rule: "Regla 12",
    vesselA: {
        label: "Velero 'Cede paso' (Barlovento)",
        path: "M -35 40 L -5 10 C 5 0, 20 -10, 40 -25",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Velero 'Sigue a rumbo' (Sotavento)",
        path: "M -15 40 L 35 -10",
        colorClass: "stroke-green-500",
    },
    explanation: "El velero a barlovento (A, Rojo), que está más cerca del viento (izquierda), debe maniobrar con antelación para pasar por la popa del velero a sotavento (B, Verde), que tiene derecho de paso y mantiene su rumbo.",
    windDirection: 'W'
};
