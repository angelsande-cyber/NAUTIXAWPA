
import type { ManeuverScenario } from './types';

export const sailOppositeTacksScenario: ManeuverScenario = {
    id: 'sail-opposite-tacks',
    title: "Veleros (Amuras contrarias)",
    description: "Dos veleros que reciben el viento por bandas contrarias.",
    rule: "Regla 12",
    vesselA: {
        label: "Velero 'Cede paso' (Amurado a babor)",
        path: "M -40 25 L -30 15 L 50 0",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Velero 'Sigue a rumbo' (Amurado a estribor)",
        path: "M 40 25 L -40 -25",
        colorClass: "stroke-green-500",
    },
    explanation: "Al navegar a rumbos de colisión, el velero rojo (cede paso) maniobra bruscamente a estribor para cruzar por la proa del velero verde (sigue a rumbo) con un margen de seguridad.",
    windDirection: 'S'
};
