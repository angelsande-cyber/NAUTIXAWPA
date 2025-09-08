import type { ManeuverScenario } from './types';

export const headOnScenario: ManeuverScenario = {
    id: 'head-on',
    title: "Vuelta Encontrada",
    description: "Dos buques de propulsión mecánica que se encuentran a rumbos opuestos.",
    rule: "Regla 14",
    vesselA: {
        label: "Buque A",
        path: "M -10 50 L -10 10 C -10 -10, 10 -10, 10 -10 L 10 -50",
        colorClass: "stroke-orange-500",
    },
    vesselB: {
        label: "Buque B",
        path: "M 10 -50 L 10 -10 C 10 10, -10 10, -10 10 L -10 50",
        colorClass: "stroke-blue-500",
    },
    explanation: "Ambos buques deben maniobrar cayendo a estribor para pasar babor con babor. En esta situación, ambos están obligados a actuar."
};
