
import type { ManeuverScenario } from './types';

export const sailOppositeTacksScenario: ManeuverScenario = {
    id: 'sail-opposite-tacks',
    title: "Veleros (Amuras contrarias)",
    description: "Dos veleros que reciben el viento por bandas contrarias.",
    rule: "Regla 12",
    vesselA: {
        label: "Velero 'Cede paso' (Amurado a babor)",
        path: "M -40 25 L -20 15 C 0 -5, -5 -25, 20 -40",
        colorClass: "stroke-red-500",
    },
    vesselB: {
        label: "Velero 'Sigue a rumbo' (Amurado a estribor)",
        path: "M 40 25 L -40 -25",
        colorClass: "stroke-green-500",
    },
    explanation: "Ambos veleros navegan a un rumbo de colisión. El que recibe el viento por babor (Rojo) debe ceder el paso. Al apreciar el riesgo, maniobra a estribor para pasar claramente por la popa del velero amurado a estribor (Verde), que mantiene su rumbo.",
    windDirection: 'S'
};
