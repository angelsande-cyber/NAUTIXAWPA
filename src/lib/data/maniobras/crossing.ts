import type { ManeuverScenario } from './types';

export const crossingScenario: ManeuverScenario = {
    id: 'crossing',
    title: "Cruce",
    description: "Dos buques de propulsión mecánica que se cruzan con riesgo de abordaje.",
    rule: "Regla 15",
    vesselA: {
        label: "Buque 'Sigue a rumbo' (A)",
        path: "M -45 0 L 45 0",
        colorClass: "stroke-green-500",
    },
    vesselB: {
        label: "Buque 'Cede paso' (B)",
        path: "M 10 -45 L 10 -15 C 10 5, 40 5, 40 15 L 40 45",
        colorClass: "stroke-red-500",
    },
    explanation: "El buque B, que ve al buque A por su estribor, es el que 'cede paso'. Debe maniobrar con antelación y de forma decidida, cayendo a estribor para evitar cruzar por la proa de A y pasar a una distancia segura."
};
