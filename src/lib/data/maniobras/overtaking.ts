
import type { ManeuverScenario } from './types';

export const overtakingScenario: ManeuverScenario = {
    id: 'overtaking',
    title: "Alcance",
    description: "Un buque que alcanza a otro por su popa.",
    rule: "Regla 13",
    vesselA: {
        label: "Buque 'Cede paso' (Alcanzador)",
        path: "M -5 50 C -5 25, 5 25, 5 0 L 5 -50",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Buque 'Sigue a rumbo' (Alcanzado)",
        path: "M -5 50 L -5 -50",
        colorClass: "stroke-green-500",
    },
    explanation: "El buque que alcanza (Rojo) se aproxima por la popa del buque alcanzado (Verde). Debe maniobrar con antelación, apartándose a una de las bandas y manteniendo un rumbo paralelo para adelantar a una distancia segura."
};
