import type { ManeuverScenario } from './types';

export const overtakingScenario: ManeuverScenario = {
    id: 'overtaking',
    title: "Alcance",
    description: "Un buque que alcanza a otro por su popa.",
    rule: "Regla 13",
    vesselA: {
        label: "Buque 'Cede paso' (Alcanzador)",
        path: "M 0 40 L 0 10 C 0 -10, 20 -10, 20 -20 L 20 -50",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Buque 'Sigue a rumbo' (Alcanzado)",
        path: "M 0 20 L 0 -50",
        colorClass: "stroke-green-500",
    },
    explanation: "El buque que alcanza (A) debe mantenerse apartado de la derrota del buque alcanzado (B), pasando por cualquiera de sus bandas de forma segura."
};
