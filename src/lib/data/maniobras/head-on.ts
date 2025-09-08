import type { ManeuverScenario } from './types';

export const headOnScenario: ManeuverScenario = {
    id: 'head-on',
    title: "Vuelta Encontrada",
    description: "Dos buques de propulsión mecánica que se encuentran a rumbos opuestos.",
    rule: "Regla 14",
    vesselA: {
        label: "Buque A",
        path: "M 0 50 L 0 20 C 0 0, 20 -15, 20 -20 L 20 -50",
        colorClass: "stroke-orange-500",
    },
    vesselB: {
        label: "Buque B",
        path: "M 0 -50 L 0 -20 C 0 0, -20 15, -20 20 L -20 50",
        colorClass: "stroke-blue-500",
    },
    explanation: "Cuando dos buques de propulsión mecánica se encuentran a rumbos opuestos con riesgo de colisión, ambos deben maniobrar cayendo a estribor para pasar babor con babor."
};
