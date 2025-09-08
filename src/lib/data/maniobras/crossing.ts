import type { ManeuverScenario } from './types';

export const crossingScenario: ManeuverScenario = {
    id: 'crossing',
    title: "Cruce",
    description: "Dos buques de propulsión mecánica que se cruzan con riesgo de abordaje.",
    rule: "Regla 15",
    vesselA: {
        label: "Buque 'Cede paso' (B)", // Verde
        path: "M 40 40 L -10 -10 C -25 -25, -45 -10, -45 20",
        colorClass: "stroke-green-500",
    },
    vesselB: {
        label: "Buque 'Sigue a rumbo' (A)", // Rojo
        path: "M -40 40 L 40 -40",
        colorClass: "stroke-red-500",
    },
    explanation: "El buque B (verde), que ve al buque A (rojo) por su estribor, es el que 'cede paso'. Debe maniobrar con antelación y de forma decidida, cayendo a estribor para evitar cruzar por la proa de A y pasar a una distancia segura por su popa."
};
