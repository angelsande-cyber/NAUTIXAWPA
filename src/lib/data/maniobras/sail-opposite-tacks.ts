
import type { ManeuverScenario } from './types';

export const sailOppositeTacksScenario: ManeuverScenario = {
    id: 'sail-opposite-tacks',
    title: "Veleros (Amuras contrarias)",
    description: "Dos veleros que reciben el viento por bandas contrarias.",
    rule: "Regla 12",
    vesselA: {
        label: "Velero 'Cede paso' (Amurado a babor)",
        path: "M -50 25 L -30 15 L 50 0",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Velero 'Sigue a rumbo' (Amurado a estribor)",
        path: "M 40 25 L -40 -25",
        colorClass: "stroke-green-500",
    },
    explanation: "El buque que cede el paso (Rojo), amurado a babor, maniobra a estribor para pasar por la proa del otro con suficiente antelación.",
    windDirection: 'S'
};
