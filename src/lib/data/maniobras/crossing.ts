import type { ManeuverScenario } from './types';

export const crossingScenario: ManeuverScenario = {
    id: 'crossing',
    title: "Cruce",
    description: "Dos buques de propulsión mecánica que se cruzan con riesgo de abordaje.",
    rule: "Regla 15",
    vesselA: {
        label: "Buque 'Cede paso' (A)",
        path: "M 0 45 L 0 10 C 0 -10, 20 -20, 45 -20",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Buque 'Sigue a rumbo' (B)",
        path: "M -45 0 L 45 0",
        colorClass: "stroke-green-500",
    },
    explanation: "El buque A, que ve al buque B por su estribor, es el que 'cede paso'. Debe maniobrar con antelación cayendo a estribor para pasar por la popa de B, que 'sigue a rumbo'."
};
