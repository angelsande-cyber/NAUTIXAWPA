
import type { ManeuverScenario } from './types';

export const crossingScenario: ManeuverScenario = {
    id: 'crossing',
    title: "Cruce",
    description: "Dos buques de propulsión mecánica que se cruzan.",
    rule: "Regla 15",
    vesselA: {
        label: "Buque 'Sigue a rumbo' (Rojo)",
        path: "M -40 0 L 40 0",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Buque 'Cede paso' (Verde)",
        path: "M 0 -40 L 0 -35 C 0 5, -50 10, -50 25",
        colorClass: "stroke-green-500",
    },
    explanation: "El buque B (Verde), que ve al buque A (Rojo) por su estribor, es el que 'cede paso'. Debe maniobrar con suficiente antelación, cayendo a estribor para evitar cruzar por la proa de A y pasar a una distancia segura por su popa."
};
