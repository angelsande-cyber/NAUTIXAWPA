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
