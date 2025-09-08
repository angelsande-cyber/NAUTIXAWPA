
import type { ManeuverScenario } from './types';

export const sailOppositeTacksScenario: ManeuverScenario = {
    id: 'sail-opposite-tacks',
    title: "Veleros (Amuras contrarias)",
    description: "Dos veleros que reciben el viento por bandas contrarias.",
    rule: "Regla 12",
    vesselA: {
        label: "Velero 'Cede paso' (Amurado a babor)",
        path: "M -40 25 L -35 20 C -25 5, -10 -5, -5 -20 L 5 -40",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Velero 'Sigue a rumbo' (Amurado a estribor)",
        path: "M 40 25 L -40 -25",
        colorClass: "stroke-green-500",
    },
    explanation: "Ambos veleros navegan a un rumbo de colisión. El que recibe el viento por babor (Rojo) debe ceder el paso. Al apreciar el riesgo, maniobra a estribor con antelación para cruzar la proa del velero amurado a estribor (Verde) a una distancia segura.",
    windDirection: 'S'
};
