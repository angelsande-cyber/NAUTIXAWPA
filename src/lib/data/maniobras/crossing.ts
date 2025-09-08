import type { ManeuverScenario } from './types';

export const crossingScenario: ManeuverScenario = {
    id: 'crossing',
    title: "Cruce",
    description: "Dos buques de propulsión mecánica que se cruzan con riesgo de abordaje.",
    rule: "Regla 15",
    vesselA: {
        label: "Buque 'Cede paso' (A)",
        path: "M -45 0 L 0 0 C 20 0, 25 20, 25 45",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Buque 'Sigue a rumbo' (B)",
        path: "M 0 -45 L 0 45",
        colorClass: "stroke-green-500",
    },
    explanation: "El buque A, que ve al buque B por su estribor, debe ceder el paso. Maniobrará con antelación suficiente cayendo a estribor para pasar por la popa de B."
};
