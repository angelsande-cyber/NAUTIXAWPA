import type { ManeuverScenario } from './types';

export const crossingScenario: ManeuverScenario = {
    id: 'crossing',
    title: "Cruce",
    description: "Dos buques de propulsión mecánica que se cruzan con riesgo de abordaje.",
    rule: "Regla 15",
    vesselA: {
        label: "Buque 'Sigue a rumbo' (A)",
        path: "M -45 0 L 45 0",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Buque 'Cede paso' (B)",
        path: "M 0 45 L 0 10 C 0 -10, 20 -20, 45 -20",
        colorClass: "stroke-green-500",
    },
    explanation: "El buque B, que ve al buque A por su estribor, es el que 'cede paso'. Debe maniobrar con antelación cayendo a estribor para pasar por la popa de A, que 'sigue a rumbo'."
};
