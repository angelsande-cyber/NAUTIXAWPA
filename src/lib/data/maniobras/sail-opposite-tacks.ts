
import type { ManeuverScenario } from './types';

export const sailOppositeTacksScenario: ManeuverScenario = {
    id: 'sail-opposite-tacks',
    title: "Veleros (Amuras contrarias)",
    description: "Dos veleros que reciben el viento por bandas contrarias.",
    rule: "Regla 12",
    vesselA: {
        label: "Velero 'Cede paso' (Amurado a babor)",
        path: "M -40 25 L -35 20 L 50 0",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Velero 'Sigue a rumbo' (Amurado a estribor)",
        path: "M 40 25 L -40 -25",
        colorClass: "stroke-green-500",
    },
    explanation: "El velero amurado a babor (Rojo) ve que está en rumbo de colisión con el velero amurado a estribor (Verde). El rojo debe ceder el paso, y en este caso lo hace virando a estribor con antelación para cruzar por la proa del verde con distancia de seguridad.",
    windDirection: 'S'
};
