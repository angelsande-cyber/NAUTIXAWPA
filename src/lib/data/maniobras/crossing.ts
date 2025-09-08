import type { ManeuverScenario } from './types';

export const crossingScenario: ManeuverScenario = {
    id: 'crossing',
    title: "Cruce",
    description: "Dos buques de propulsión mecánica que se cruzan con riesgo de abordaje.",
    rule: "Regla 15",
    vesselA: {
        label: "Buque 'Sigue a rumbo' (B)",
        path: "M -45 10 L 45 10",
        colorClass: "stroke-green-500",
    },
    vesselB: {
        label: "Buque 'Cede paso' (A)",
        path: "M 25 -40 L -5 0 C -25 20, -35 45, -15 45",
        colorClass: "stroke-red-500",
    },
    explanation: "El buque A, que ve al buque B por su estribor, es el que 'cede paso'. Debe maniobrar con antelación, preferiblemente cayendo a estribor para pasar por la popa de B. El buque B 'sigue a rumbo', manteniendo su rumbo y velocidad."
};
