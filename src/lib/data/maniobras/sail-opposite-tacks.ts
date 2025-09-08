
import type { ManeuverScenario } from './types';

export const sailOppositeTacksScenario: ManeuverScenario = {
    id: 'sail-opposite-tacks',
    title: "Veleros (Amuras contrarias)",
    description: "Dos veleros que reciben el viento por bandas contrarias.",
    rule: "Regla 12",
    vesselA: {
        label: "Velero 'Cede paso' (Amurado a babor)",
        path: "M -40 20 L -30 15 C -20 0, -5 -25, 20 -35",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Velero 'Sigue a rumbo' (Amurado a estribor)",
        path: "M 40 20 L -40 -30",
        colorClass: "stroke-green-500",
    },
    explanation: "El velero que recibe el viento por babor (Rojo) debe ceder el paso al velero que lo recibe por estribor (Verde). El velero rojo maniobra para pasar por la popa del verde.",
    windDirection: 'S'
};

