
export interface ManeuverScenario {
    id: string;
    title: string;
    description: string;
    rule: string;
    vesselA: {
        label: string;
        path: string;
        colorClass: string;
    };
    vesselB: {
        label: string;
        path: string;
        colorClass: string;
    };
    explanation: string;
    windDirection?: 'N' | 'E' | 'S' | 'W';
}

export const MANEUVER_DATA: ManeuverScenario[] = [
    {
        id: 'head-on',
        title: "Vuelta Encontrada",
        description: "Dos buques de propulsión mecánica que se encuentran a rumbos opuestos.",
        rule: "Regla 14",
        vesselA: {
            label: "Buque A",
            path: "M -15 50 L -15 10 C -15 -10, 5 -10, 5 -20 L 5 -50",
            colorClass: "stroke-orange-500",
        },
        vesselB: {
            label: "Buque B",
            path: "M 15 -50 L 15 -10 C 15 10, -5 10, -5 20 L -5 50",
            colorClass: "stroke-blue-500",
        },
        explanation: "Ambos buques deben maniobrar cayendo a estribor para pasar babor con babor. En esta situación, ambos están obligados a actuar."
    },
    {
        id: 'crossing',
        title: "Cruce",
        description: "Dos buques de propulsión mecánica que se cruzan con riesgo de abordaje.",
        rule: "Regla 15",
        vesselA: {
            label: "Buque 'Cede paso'",
            path: "M -40 0 L 10 0 C 40 0, 40 40, 20 40 L 20 50",
            colorClass: "stroke-red-500",
        },
        vesselB: {
            label: "Buque 'Sigue a rumbo'",
            path: "M 0 -40 L 0 50",
            colorClass: "stroke-green-500",
        },
        explanation: "El buque A, que ve al buque B por su estribor, debe ceder el paso. Maniobrará con antelación suficiente cayendo a estribor para pasar por la popa de B."
    },
    {
        id: 'overtaking',
        title: "Alcance",
        description: "Un buque que alcanza a otro por su popa.",
        rule: "Regla 13",
        vesselA: {
            label: "Buque 'Cede paso' (Alcanzador)",
            path: "M 0 40 L 0 10 C 0 -10, 20 -10, 20 -20 L 20 -50",
            colorClass: "stroke-red-500",
        },
        vesselB: {
            label: "Buque 'Sigue a rumbo' (Alcanzado)",
            path: "M 0 20 L 0 -50",
            colorClass: "stroke-green-500",
        },
        explanation: "El buque que alcanza (A) debe mantenerse apartado de la derrota del buque alcanzado (B), pasando por cualquiera de sus bandas de forma segura."
    },
    {
        id: 'sail-opposite-tacks',
        title: "Veleros (Amuras contrarias)",
        description: "Dos veleros que reciben el viento por bandas contrarias.",
        rule: "Regla 12",
        vesselA: {
            label: "Velero 'Cede paso' (Amurado a babor)",
            path: "M -35 40 L 0 5 C 10 -5, 20 -5, 30 0 L 40 10",
            colorClass: "stroke-red-500",
        },
        vesselB: {
            label: "Velero 'Sigue a rumbo' (Amurado a estribor)",
            path: "M 40 40 L -40 -40",
            colorClass: "stroke-green-500",
        },
        explanation: "El velero que recibe el viento por babor (A) debe ceder el paso al que lo recibe por estribor (B).",
        windDirection: 'W'
    },
    {
        id: 'sail-same-tack',
        title: "Veleros (Misma amura)",
        description: "Dos veleros que reciben el viento por la misma banda.",
        rule: "Regla 12",
        vesselA: {
            label: "Velero 'Cede paso' (Barlovento)",
            path: "M -30 40 L 5 5 C 15 -5, 25 -5, 35 0 L 45 10",
            colorClass: "stroke-red-500",
        },
        vesselB: {
            label: "Velero 'Sigue a rumbo' (Sotavento)",
            path: "M -10 40 L 40 -10",
            colorClass: "stroke-green-500",
        },
        explanation: "El velero que está a barlovento (A), más cerca del viento, debe ceder el paso al que está a sotavento (B).",
        windDirection: 'W'
    },
];
