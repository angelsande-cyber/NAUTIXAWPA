
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
            path: "M 50 90 L 50 55 C 50 50, 40 50, 35 45 L 20 10",
            colorClass: "stroke-blue-500",
        },
        vesselB: {
            label: "Buque B",
            path: "M 50 10 L 50 45 C 50 50, 60 50, 65 55 L 80 90",
            colorClass: "stroke-green-500",
        },
        explanation: "Ambos buques deben caer a estribor para pasar babor con babor."
    },
    {
        id: 'crossing',
        title: "Cruce",
        description: "Dos buques de propulsión mecánica que se cruzan con riesgo de abordaje.",
        rule: "Regla 15",
        vesselA: {
            label: "Buque A (Cede paso)",
            path: "M 10 50 L 45 50 C 50 50, 50 60, 45 65 L 10 80",
            colorClass: "stroke-red-500",
        },
        vesselB: {
            label: "Buque B (Sigue a rumbo)",
            path: "M 50 10 L 50 90",
            colorClass: "stroke-green-500",
        },
        explanation: "El buque A, que ve al buque B por su estribor, debe maniobrar para ceder el paso, preferiblemente pasando por su popa."
    },
    {
        id: 'overtaking',
        title: "Alcance",
        description: "Un buque que alcanza a otro por su popa.",
        rule: "Regla 13",
        vesselA: {
            label: "Buque A (Alcanzador)",
            path: "M 50 90 L 50 70 C 50 60, 60 60, 65 55 L 80 20",
            colorClass: "stroke-red-500",
        },
        vesselB: {
            label: "Buque B (Alcanzado)",
            path: "M 50 70 L 50 10",
            colorClass: "stroke-green-500",
        },
        explanation: "El buque que alcanza (A) debe mantenerse apartado de la derrota del buque alcanzado (B), pasando por cualquiera de sus bandas."
    },
    {
        id: 'sail-opposite-tacks',
        title: "Veleros (Amuras contrarias)",
        description: "Dos veleros que reciben el viento por bandas contrarias.",
        rule: "Regla 12",
        vesselA: {
            label: "Buque A (Amurado a babor - Cede paso)",
            path: "M 20 80 L 45 55 C 50 50, 50 45, 55 40 L 80 15",
            colorClass: "stroke-red-500",
        },
        vesselB: {
            label: "Buque B (Amurado a estribor - Sigue a rumbo)",
            path: "M 80 80 L 20 20",
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
            label: "Buque A (Barlovento - Cede paso)",
            path: "M 10 80 L 35 55 C 40 50, 40 45, 45 40 L 70 15",
            colorClass: "stroke-red-500",
        },
        vesselB: {
            label: "Buque B (Sotavento - Sigue a rumbo)",
            path: "M 40 80 L 90 30",
            colorClass: "stroke-green-500",
        },
        explanation: "El velero que está a barlovento (A), más cerca del viento, debe ceder el paso al que está a sotavento (B).",
        windDirection: 'W'
    },
];
