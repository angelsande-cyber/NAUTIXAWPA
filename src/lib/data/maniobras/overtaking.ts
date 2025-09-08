
import type { ManeuverScenario } from './types';

export const overtakingScenario: ManeuverScenario = {
    id: 'overtaking',
    title: "Alcance",
    description: "Un buque que alcanza a otro por su popa.",
    rule: "Regla 13",
    vesselA: {
        label: "Buque 'Cede paso' (Alcanzador)",
        path: "M 5 50 L 5 -50",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Buque 'Sigue a rumbo' (Alcanzado)",
        path: "M -5 50 L -5 -50",
        colorClass: "stroke-green-500",
    },
    explanation: "El buque que alcanza (Rojo) debe mantenerse apartado de la derrota del buque alcanzado (Verde), pasando por cualquiera de sus bandas de forma segura. El buque alcanzado debe mantener su rumbo y velocidad. Aquí se ilustra un adelantamiento por la banda de babor del buque alcanzado."
};
