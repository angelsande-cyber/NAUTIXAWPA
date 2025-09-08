import type { ManeuverScenario } from './types';

export const headOnScenario: ManeuverScenario = {
    id: 'head-on',
    title: "Vuelta Encontrada",
    description: "Dos buques de propulsión mecánica que se encuentran a rumbos opuestos.",
    rule: "Regla 14",
    vesselA: {
        label: "Buque A",
        path: "M -5 50 L -5 10 C -5 -10, 10 -10, 10 -10 L 10 -50",
        colorClass: "stroke-orange-500",
    },
    vesselB: {
        label: "Buque B",
        path: "M 5 -50 L 5 -10 C 5 10, -10 10, -10 10 L -10 50",
        colorClass: "stroke-blue-500",
    },
    explanation: "Cuando dos buques de propulsión mecánica se encuentran a rumbos opuestos o casi opuestos, con riesgo de abordaje, ambos deben maniobrar cayendo a estribor para pasar babor con babor."
};
