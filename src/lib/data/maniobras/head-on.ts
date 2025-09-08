import type { ManeuverScenario } from './types';

export const headOnScenario: ManeuverScenario = {
    id: 'head-on',
    title: "Vuelta Encontrada",
    description: "Dos buques de propulsión mecánica que se encuentran a rumbos opuestos.",
    rule: "Regla 14",
    vesselA: {
        label: "Buque A",
        // Starts at bottom, moves straight up, turns right (starboard), then continues straight
        path: "M 0 50 L 0 25 C 0 5, 20 5, 20 5 L 20 -50",
        colorClass: "stroke-orange-500",
    },
    vesselB: {
        label: "Buque B",
        // Starts at top, moves straight down, turns to its right (left on screen), then continues straight
        path: "M 0 -50 L 0 -25 C 0 -5, -20 -5, -20 -5 L -20 50",
        colorClass: "stroke-blue-500",
    },
    explanation: "Cuando dos buques de propulsión mecánica se encuentran a rumbos opuestos, con riesgo de abordaje, ambos deben maniobrar cayendo a estribor para pasar babor con babor."
};
