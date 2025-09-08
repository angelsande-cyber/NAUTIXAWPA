
import type { ManeuverScenario } from './types';

export const sailOppositeTacksScenario: ManeuverScenario = {
    id: 'sail-opposite-tacks',
    title: "Veleros (Amuras contrarias)",
    description: "Dos veleros que reciben el viento por bandas contrarias.",
    rule: "Regla 12",
    vesselA: {
        label: "Velero 'Cede paso' (Amurado a babor)",
        path: "M -40 20 L -10 -10 C 0 -20, 20 -25, 40 -30",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Velero 'Sigue a rumbo' (Amurado a estribor)",
        path: "M 40 20 L -40 -30",
        colorClass: "stroke-green-500",
    },
    explanation: "El velero que recibe el viento por babor (Verde) tiene preferencia. El velero que lo recibe por estribor (Rojo) debe ceder el paso.",
    windDirection: 'S'
};
