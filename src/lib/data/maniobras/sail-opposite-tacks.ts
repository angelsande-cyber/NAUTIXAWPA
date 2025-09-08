
import type { ManeuverScenario } from './types';

export const sailOppositeTacksScenario: ManeuverScenario = {
    id: 'sail-opposite-tacks',
    title: "Veleros (Amuras contrarias)",
    description: "Dos veleros que reciben el viento por bandas contrarias.",
    rule: "Regla 12",
    vesselA: {
        label: "Velero 'Cede paso' (Amurado a babor)",
        path: "M -40 25 L -30 15 L 50 0",
    },
    vesselB: {
        label: "Velero 'Sigue a rumbo' (Amurado a estribor)",
        path: "M 40 25 L -40 -25",
    },
    explanation: "El velero amurado a babor (Rojo), que recibe el viento por babor, debe ceder el paso. En esta simulación, comienza en un rumbo de colisión y luego realiza una maniobra de evasión temprana y clara para cruzar por la proa del velero que sigue a rumbo (Verde) con un amplio margen de seguridad.",
    windDirection: 'S'
};
