import type { ManeuverScenario } from './types';

export const overtakingScenario: ManeuverScenario = {
    id: 'overtaking',
    title: "Alcance",
    description: "Un buque que alcanza a otro por su popa.",
    rule: "Regla 13",
    vesselA: {
        label: "Buque 'Cede paso' (Alcanzador)",
        path: "M 10 50 L 10 10 C 10 -15, -20 -15, -20 -50",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Buque 'Sigue a rumbo' (Alcanzado)",
        path: "M -10 50 L -10 -50",
        colorClass: "stroke-green-500",
    },
    explanation: "El buque que alcanza (A) debe mantenerse apartado de la derrota del buque alcanzado (B), pasando por cualquiera de sus bandas de forma segura. Aquí se ilustra un adelantamiento por babor del buque alcanzado."
};
