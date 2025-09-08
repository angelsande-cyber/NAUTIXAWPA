
import type { ManeuverScenario } from './types';

export const crossingScenario: ManeuverScenario = {
    id: 'crossing',
    title: "Cruce",
    description: "Dos buques de propulsión mecánica que se cruzan.",
    rule: "Regla 15",
    vesselA: {
        label: "Buque 'Sigue a rumbo' (A - Rojo)",
        path: "M -40 0 L 40 0",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Buque 'Cede paso' (B - Verde)",
        path: "M 0 -40 L 0 -10 C 0 20, -30 20, -40 20",
        colorClass: "stroke-green-500",
    },
    explanation: "El buque B (verde), que ve al buque A (rojo) por su estribor, es el que 'cede paso'. Debe maniobrar con antelación, cayendo a estribor para evitar cruzar por la proa de A y pasar a una distancia segura por su popa."
};
