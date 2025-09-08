import { headOnScenario } from './head-on';
import { crossingScenario } from './crossing';
import { overtakingScenario } from './overtaking';
import { sailOppositeTacksScenario } from './sail-opposite-tacks';
import { sailSameTackScenario } from './sail-same-tack';
import type { ManeuverScenario } from './types';

export const MANEUVER_DATA: ManeuverScenario[] = [
    headOnScenario,
    crossingScenario,
    overtakingScenario,
    sailOppositeTacksScenario,
    sailSameTackScenario,
];
