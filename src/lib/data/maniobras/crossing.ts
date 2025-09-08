
import type { ManeuverScenario } from './types';

export const crossingScenario: ManeuverScenario = {
    id: 'crossing',
    title: "Cruce",
    description: "Dos buques de propulsión mecánica que se cruzan con riesgo de abordaje.",
    rule: "Regla 15",
    vesselA: {
        label: "Buque 'Sigue a rumbo' (A - Rojo)",
        path: "M -40 0 L 40 0",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Buque 'Cede paso' (B - Verde)",
        path: "M 0 -40 L 0 -20 C 0 15, -30 25, -40 25",
        colorClass: "stroke-green-500",
    },
    explanation: "El buque B (verde), que ve al buque A (rojo) por su estribor, es el que 'cede paso'. Debe maniobrar con antelación, cayendo a estribor para evitar cortarle la proa al buque A y pasar a una distancia segura por su popa."
};
