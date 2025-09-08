import type { ManeuverScenario } from './types';

export const sailOppositeTacksScenario: ManeuverScenario = {
    id: 'sail-opposite-tacks',
    title: "Veleros (Amuras contrarias)",
    description: "Dos veleros que reciben el viento por bandas contrarias.",
    rule: "Regla 12",
    vesselA: {
        label: "Velero 'Cede paso' (Amurado a babor)",
        path: "M -40 30 L -5 5 C 5 -5, 20 -15, 40 -30",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Velero 'Sigue a rumbo' (Amurado a estribor)",
        path: "M 40 40 L -40 -40",
        colorClass: "stroke-green-500",
    },
    explanation: "El velero que recibe el viento por babor (A) debe ceder el paso al que lo recibe por estribor (B).",
    windDirection: 'W'
};
