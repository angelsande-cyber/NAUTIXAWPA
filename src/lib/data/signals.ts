
// This file contains all the static data for the signals simulator.
// It uses translation keys that will be resolved by the useSignalsData hook.

export const LIGHT_TERMS_DATA = {
    "F": "signals.terms.F",
    "FL": "signals.terms.FL",
    "LFL": "signals.terms.LFL",
    "OC": "signals.terms.OC",
    "ISO": "signals.terms.ISO",
    "Q": "signals.terms.Q",
    "VQ": "signals.terms.VQ",
    "IQ": "signals.terms.IQ",
    "MO": "signals.terms.MO",
    "AL": "signals.terms.AL",
    "W": "signals.terms.W",
    "R": "signals.terms.R",
    "G": "signals.terms.G",
    "Y": "signals.terms.Y",
    "BU": "signals.terms.BU",
    "VI": "signals.terms.VI"
};

export const IALA_BUOY_DATA = [
    {
        "category": "signals.buoyage.categories.lateral",
        "type": "signals.buoyage.types.port",
        "region": "A",
        "shape": "can",
        "colors": ["red"],
        "topmark": { "shape": "can", "color": "red" },
        "characteristic": "Fl R 4s",
        "purpose": "signals.buoyage.purposes.port_a",
        "mnemonic": "signals.buoyage.mnemonics.port_a"
    },
    {
        "category": "signals.buoyage.categories.lateral",
        "type": "signals.buoyage.types.starboard",
        "region": "A",
        "shape": "conical",
        "colors": ["green"],
        "topmark": { "shape": "cone-up", "color": "green" },
        "characteristic": "Fl G 4s",
        "purpose": "signals.buoyage.purposes.starboard_a",
        "mnemonic": "signals.buoyage.mnemonics.starboard_a"
    },
    {
        "category": "signals.buoyage.categories.lateral",
        "type": "signals.buoyage.types.port",
        "region": "B",
        "shape": "can",
        "colors": ["green"],
        "topmark": { "shape": "can", "color": "green" },
        "characteristic": "Fl G 2.5s",
        "purpose": "signals.buoyage.purposes.port_b",
        "mnemonic": "signals.buoyage.mnemonics.port_b"
    },
    {
        "category": "signals.buoyage.categories.lateral",
        "type": "signals.buoyage.types.starboard",
        "region": "B",
        "shape": "conical",
        "colors": ["red"],
        "topmark": { "shape": "cone-up", "color": "red" },
        "characteristic": "Fl R 2.5s",
        "purpose": "signals.buoyage.purposes.starboard_b",
        "mnemonic": "signals.buoyage.mnemonics.starboard_b"
    },
    {
        "category": "signals.buoyage.categories.cardinal",
        "type": "signals.buoyage.types.north",
        "shape": "pillar",
        "colors": ["black", "yellow"],
        "topmark": { "shape": "cones-up", "color": "black" },
        "characteristic": "VQ or Q",
        "purpose": "signals.buoyage.purposes.north",
        "mnemonic": "signals.buoyage.mnemonics.north"
    },
    {
        "category": "signals.buoyage.categories.cardinal",
        "type": "signals.buoyage.types.south",
        "shape": "pillar",
        "colors": ["yellow", "black"],
        "topmark": { "shape": "cones-down", "color": "black" },
        "characteristic": "VQ(6)+LFl 15s",
        "purpose": "signals.buoyage.purposes.south",
        "mnemonic": "signals.buoyage.mnemonics.south"
    },
    {
        "category": "signals.buoyage.categories.cardinal",
        "type": "signals.buoyage.types.east",
        "shape": "pillar",
        "colors": ["black", "yellow", "black"],
        "topmark": { "shape": "cones-base-base", "color": "black" },
        "characteristic": "VQ(3) 5s",
        "purpose": "signals.buoyage.purposes.east",
        "mnemonic": "signals.buoyage.mnemonics.east"
    },
    {
        "category": "signals.buoyage.categories.cardinal",
        "type": "signals.buoyage.types.west",
        "shape": "pillar",
        "colors": ["yellow", "black", "yellow"],
        "topmark": { "shape": "cones-vertex-together", "color": "black" },
        "characteristic": "VQ(9) 10s",
        "purpose": "signals.buoyage.purposes.west",
        "mnemonic": "signals.buoyage.mnemonics.west"
    },
    {
        "category": "signals.buoyage.categories.special",
        "type": "signals.buoyage.types.isolated_danger",
        "shape": "pillar",
        "colors": ["black", "red", "black"],
        "topmark": { "shape": "spheres-2", "color": "black" },
        "characteristic": "Fl(2) W 5s",
        "purpose": "signals.buoyage.purposes.isolated_danger",
        "mnemonic": "signals.buoyage.mnemonics.isolated_danger"
    },
    {
        "category": "signals.buoyage.categories.special",
        "type": "signals.buoyage.types.safe_water",
        "shape": "spherical",
        "colors": ["red", "white"],
        "topmark": { "shape": "sphere", "color": "red" },
        "characteristic": "LFl W 10s or Mo(A) W",
        "purpose": "signals.buoyage.purposes.safe_water",
        "mnemonic": "signals.buoyage.mnemonics.safe_water"
    },
    {
        "category": "signals.buoyage.categories.special",
        "type": "signals.buoyage.types.special_mark",
        "shape": "any",
        "colors": ["yellow"],
        "topmark": { "shape": "cross", "color": "yellow" },
        "characteristic": "Fl Y 5s",
        "purpose": "signals.buoyage.purposes.special_mark",
        "mnemonic": "signals.buoyage.mnemonics.special_mark"
    }
];

export const VESSEL_SVGS = {
    power_gt50: { // Inspired by Container Ship
      side: `<svg viewBox="0 0 200 80" class="w-full h-full"><g transform="translate(0, 10)"><path d="M 5 60 L 195 60 L 195 55 C 190 55, 185 40, 175 40 L 165 40 L 165 30 L 155 30 L 155 40 L 45 40 L 45 35 L 25 35 L 25 40 L 15 40 C 5 40, 5 55, 5 55 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 5 60 L 195 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      front: `<svg viewBox="0 0 100 80" class="w-full h-full"><g transform="translate(0, 10)"><path d="M 10 60 L 90 60 L 90 55 C 85 40, 75 30, 65 30 L 35 30 C 25 30, 15 40, 10 55 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 10 60 L 90 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      back: `<svg viewBox="0 0 100 80" class="w-full h-full"><g transform="translate(0, 10)"><path d="M 10 60 L 90 60 L 90 30 L 10 30 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 10 60 L 90 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
    },
    power_lt50: { // Inspired by Big Yacht
      side: `<svg viewBox="0 0 200 80" class="w-full h-full"><g transform="translate(0, 5)"><path d="M 10 65 C 20 50, 190 55, 195 60 L 190 65 L 15 65 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 50 60 L 50 45 L 150 45 C 160 45, 160 55, 150 55 L 60 55 L 60 60 Z" fill="hsl(var(--muted-foreground))" stroke="currentColor" stroke-width="0.5" /><path d="M 65 40 L 130 40 L 125 45 L 70 45 Z" fill="hsl(var(--muted-foreground))" stroke="currentColor" stroke-width="0.5" /><path d="M 10 65 L 195 65" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      front: `<svg viewBox="0 0 100 80" class="w-full h-full"><g transform="translate(0, 5)"><path d="M 10 65 C 20 50, 80 50, 90 65 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 50 35 L 65 50 L 35 50 Z" fill="hsl(var(--muted-foreground))" stroke="currentColor" stroke-width="0.5"/><path d="M 30 50 H 70 V 65 H 30 Z" fill="hsl(var(--muted-foreground))" stroke-width="0.5"/><path d="M 10 65 L 90 65" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      back: `<svg viewBox="0 0 100 80" class="w-full h-full"><g transform="translate(0, 5)"><path d="M 10 65 C 20 50, 80 50, 90 65 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 20 45 H 80 V 65 H 20 Z" fill="hsl(var(--muted-foreground))" stroke="currentColor" stroke-width="0.5"/><path d="M 10 65 L 90 65" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
    },
    sailing: { // Inspired by Sailboat
      side: `<svg viewBox="0 0 200 80" class="w-full h-full"><g transform="translate(0, 5)"><path d="M 20 65 C 40 50, 160 50, 180 65 L 175 65 L 25 65 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 90 10 L 95 65 M 50 65 H 150" stroke="currentColor" stroke-width="1" /><path d="M 97 15 C 110 30, 110 50, 97 63" fill="#444" stroke="currentColor" stroke-width="0.5" /><path d="M 93 15 C 60 30, 70 63, 93 63" fill="hsl(var(--muted-foreground))" stroke="currentColor" stroke-width="0.5" /><path d="M 20 65 L 180 65" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      front: `<svg viewBox="0 0 100 80" class="w-full h-full"><g transform="translate(0, 5)"><path d="M 15 65 C 25 55, 75 55, 85 65 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 50 10 L 50 65" stroke="currentColor" stroke-width="1" /><path d="M 52 15 C 70 30, 65 63, 52 63" fill="#444" stroke="currentColor" /><path d="M 15 65 L 85 65" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      back: `<svg viewBox="0 0 100 80" class="w-full h-full"><g transform="translate(0, 5)"><path d="M 15 65 C 25 55, 75 55, 85 65 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 50 10 L 50 65" stroke="currentColor" stroke-width="1" /><path d="M 48 15 C 30 30, 35 63, 48 63" fill="#444" stroke="currentColor" /><path d="M 15 65 L 85 65" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
    },
    fishing: { // Inspired by Trawler
      side: `<svg viewBox="0 0 200 80" class="w-full h-full"><g transform="translate(0, 10)"><path d="M 10 60 L 190 60 L 190 55 C 180 55, 170 45, 150 45 L 110 45 L 110 30 L 60 30 L 60 45 L 30 45 C 20 45, 15 50, 10 55 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 140 45 L 120 20 M 115 20 H 145" stroke="currentColor" stroke-width="1" /><path d="M 10 60 L 190 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      front: `<svg viewBox="0 0 100 80" class="w-full h-full"><g transform="translate(0, 10)"><path d="M 10 60 C 10 45, 90 45, 90 60 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><rect x="30" y="30" width="40" height="30" fill="hsl(var(--muted-foreground))" stroke="currentColor" stroke-width="0.5" /><path d="M 10 60 L 90 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      back: `<svg viewBox="0 0 100 80" class="w-full h-full"><g transform="translate(0, 10)"><path d="M 10 60 C 10 45, 90 45, 90 60 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><rect x="30" y="30" width="40" height="30" fill="hsl(var(--muted-foreground))" stroke="currentColor" stroke-width="0.5" /><path d="M 10 60 L 90 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
    },
     tug: { // Inspired by Small Ferry/Tug
      side: `<svg viewBox="0 0 200 80" class="w-full h-full"><g transform="translate(0, 15)"><path d="M 20 55 L 180 55 L 180 45 L 140 45 L 140 30 L 60 30 L 60 45 L 20 45 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 20 55 L 180 55" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      front: `<svg viewBox="0 0 100 80" class="w-full h-full"><g transform="translate(0, 15)"><path d="M 20 55 L 80 55 L 80 30 L 20 30 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 20 55 L 80 55" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      back: `<svg viewBox="0 0 100 80" class="w-full h-full"><g transform="translate(0, 15)"><path d="M 20 55 L 80 55 L 80 30 L 20 30 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 20 55 L 80 55" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
    },
    power_lt12: { // Inspired by Speedboat
      side: `<svg viewBox="0 0 200 80" class="w-full h-full"><g transform="translate(0, 10)"><path d="M 30 60 C 40 50, 170 50, 180 60 L 170 60 L 40 60 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 70 50 L 140 50 L 130 60 L 80 60 Z" fill="hsl(var(--muted-foreground))" stroke="currentColor" stroke-width="0.5" /><path d="M 30 60 L 180 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      front: `<svg viewBox="0 0 100 80" class="w-full h-full"><g transform="translate(0, 10)"><path d="M 20 60 C 30 50, 70 50, 80 60 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 20 60 L 80 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      back: `<svg viewBox="0 0 100 80" class="w-full h-full"><g transform="translate(0, 10)"><path d="M 20 60 L 80 60 L 80 55 L 20 55 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 20 60 L 80 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
    },
}

const PDV_LIGHTS = [
    { id: 'masthead-fwd', color: 'white', desc: 'signals.vessels.lights.masthead_fwd', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 30 }, starboard: { x: 30, y: 30 }, stern: { x: 0, y: 0 } } },
    { id: 'masthead-aft', color: 'white', desc: 'signals.vessels.lights.masthead_aft', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 25 }, starboard: { x: 70, y: 25 }, stern: { x: 0, y: 0 } } },
    { id: 'sidelight-stbd', color: 'green', desc: 'signals.vessels.lights.sidelight_stbd', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 70, y: 58 }, starboard: { x: 50, y: 58 }, stern: { x: 0, y: 0 } } },
    { id: 'sidelight-port', color: 'red', desc: 'signals.vessels.lights.sidelight_port', arc: { bow: true, starboard: false, stern: false }, position: { bow: { x: 30, y: 58 }, starboard: { x: 0, y: 0 }, stern: { x: 0, y: 0 } } },
    { id: 'sternlight', color: 'white', desc: 'signals.vessels.lights.sternlight', arc: { bow: false, starboard: false, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 0, y: 0 }, stern: { x: 50, y: 55 } } },
];

export const COLREG_RULES_DATA = [
    {
        id: 'R23',
        title: 'signals.vessels.rules.R23.title',
        description: 'signals.vessels.rules.R23.description',
        svg: "power_gt50",
        lights: [
            {...PDV_LIGHTS[0]},
            {...PDV_LIGHTS[1]},
            {...PDV_LIGHTS[2]},
            {...PDV_LIGHTS[3]},
            {...PDV_LIGHTS[4]},
        ],
        marks: [],
        explanation: "signals.vessels.rules.R23.explanation"
    },
    {
        id: 'R25',
        title: 'signals.vessels.rules.R25.title',
        description: 'signals.vessels.rules.R25.description',
        svg: "sailing",
        lights: [
            PDV_LIGHTS[2], PDV_LIGHTS[3], PDV_LIGHTS[4]
        ],
        marks: [
            { id: 'cone-sailing-motor', shape: 'cone-down', desc: 'signals.vessels.marks.cone_sailing_motor', position: { bow: { x: 50, y: 25 }, starboard: { x: 50, y: 25 }, stern: { x: 50, y: 25 } } },
        ],
        explanation: "signals.vessels.rules.R25.explanation"
    },
    {
        id: 'R24',
        title: 'signals.vessels.rules.R24.title',
        description: 'signals.vessels.rules.R24.description',
        states: [
            {
                title: 'signals.vessels.rules.R24.states.towing_gt200.title',
                description: 'signals.vessels.rules.R24.states.towing_gt200.description',
                svg: "tug",
                lights: [
                    { ...PDV_LIGHTS[0], desc: 'signals.vessels.lights.masthead_1', position: { bow: { x: 50, y: 30 }, starboard: { x: 30, y: 30 } } },
                    { id: 'masthead-2', color: 'white', desc: 'signals.vessels.lights.masthead_2', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 37 }, starboard: { x: 30, y: 37 } } },
                    { id: 'masthead-3', color: 'white', desc: 'signals.vessels.lights.masthead_3', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 44 }, starboard: { x: 30, y: 44 } } },
                    PDV_LIGHTS[2], PDV_LIGHTS[3],
                    { ...PDV_LIGHTS[4], position: { stern: {x:50, y: 40} } }, // Sternlight
                    { id: 'towing-light', color: 'yellow', desc: 'signals.vessels.lights.towing_light', arc: { bow: false, starboard: false, stern: true }, position: { stern: { x: 50, y: 35 } } },
                ],
                marks: [ { id: 'diamond-tow', shape: 'diamond', desc: 'signals.vessels.marks.diamond_tow', position: { bow: { x: 50, y: 25 }, starboard: { x: 50, y: 25 }, stern: { x: 50, y: 25 } } } ],
                explanation: "signals.vessels.rules.R24.states.towing_gt200.explanation"
            },
            {
                title: 'signals.vessels.rules.R24.states.towing_lt200.title',
                description: 'signals.vessels.rules.R24.states.towing_lt200.description',
                svg: "tug",
                lights: [
                    { ...PDV_LIGHTS[0], desc: 'signals.vessels.lights.masthead_1', position: { bow: { x: 50, y: 30 }, starboard: { x: 30, y: 30 } } },
                    { id: 'masthead-2', color: 'white', desc: 'signals.vessels.lights.masthead_2', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 37 }, starboard: { x: 30, y: 37 } } },
                    PDV_LIGHTS[2], PDV_LIGHTS[3],
                    { ...PDV_LIGHTS[4], position: { stern: {x:50, y: 40} } },
                    { id: 'towing-light', color: 'yellow', desc: 'signals.vessels.lights.towing_light', arc: { bow: false, starboard: false, stern: true }, position: { stern: { x: 50, y: 35 } } },
                ],
                marks: [ ],
                explanation: "signals.vessels.rules.R24.states.towing_lt200.explanation"
            },
            {
                title: 'signals.vessels.rules.R24.states.pushing.title',
                description: 'signals.vessels.rules.R24.states.pushing.description',
                svg: "tug",
                lights: [
                    { ...PDV_LIGHTS[0], desc: 'signals.vessels.lights.masthead_1' },
                    { ...PDV_LIGHTS[1], desc: 'signals.vessels.lights.masthead_2' },
                    PDV_LIGHTS[2], PDV_LIGHTS[3], PDV_LIGHTS[4]
                ],
                marks: [ ],
                explanation: "signals.vessels.rules.R24.states.pushing.explanation"
            }
        ]
    },
    {
        id: 'R26',
        title: 'signals.vessels.rules.R26.title',
        description: 'signals.vessels.rules.R26.description',
        states: [
            {
                title: 'signals.vessels.rules.R26.states.trawling.title',
                description: 'signals.vessels.rules.R26.states.trawling.description',
                svg: "fishing",
                lights: [
                    { id: 'trawl-g', color: 'green', desc: 'signals.vessels.lights.trawl_g', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                    { id: 'trawl-w', color: 'white', desc: 'signals.vessels.lights.trawl_w', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
                    { ...PDV_LIGHTS[2], desc: 'signals.vessels.lights.sidelights_making_way' },
                    { ...PDV_LIGHTS[3], desc: 'signals.vessels.lights.sidelights_making_way' },
                    { ...PDV_LIGHTS[4], desc: 'signals.vessels.lights.sternlight_making_way' },
                ],
                marks: [
                    { id: 'trawl-mark', shape: 'cones-vertex-together', desc: 'signals.vessels.marks.trawl_mark', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                ],
                explanation: "signals.vessels.rules.R26.states.trawling.explanation"
            },
            {
                title: 'signals.vessels.rules.R26.states.fishing_not_trawling.title',
                description: 'signals.vessels.rules.R26.states.fishing_not_trawling.description',
                svg: "fishing",
                lights: [
                    { id: 'fish-r', color: 'red', desc: 'signals.vessels.lights.fish_r', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                    { id: 'fish-w', color: 'white', desc: 'signals.vessels.lights.fish_w', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
                     { ...PDV_LIGHTS[2], desc: 'signals.vessels.lights.sidelights_making_way' },
                    { ...PDV_LIGHTS[3], desc: 'signals.vessels.lights.sidelights_making_way' },
                    { ...PDV_LIGHTS[4], desc: 'signals.vessels.lights.sternlight_making_way' },
                ],
                marks: [
                    { id: 'trawl-mark', shape: 'cones-vertex-together', desc: 'signals.vessels.marks.trawl_mark', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                ],
                explanation: "signals.vessels.rules.R26.states.fishing_not_trawling.explanation"
            }
        ]
    },
     {
        id: 'R27',
        title: 'signals.vessels.rules.R27.title',
        description: 'signals.vessels.rules.R27.description',
        states: [
            {
                title: 'signals.vessels.rules.R27.states.nuc.title',
                description: 'signals.vessels.rules.R27.states.nuc.description',
                svg: "power_gt50",
                lights: [
                    { id: 'nuc-r1', color: 'red', desc: 'signals.vessels.lights.nuc_lights', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
                    { id: 'nuc-r2', color: 'red', desc: 'signals.vessels.lights.nuc_lights', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 50, y: 36 } } },
                    {...PDV_LIGHTS[2], desc: "signals.vessels.lights.sidelights_stern_making_way"},
                    {...PDV_LIGHTS[3], desc: ""},
                    {...PDV_LIGHTS[4], desc: ""},
                ],
                marks: [
                    { id: 'nuc-b1', shape: 'ball', desc: 'signals.vessels.marks.nuc_marks', position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
                    { id: 'nuc-b2', shape: 'ball', desc: 'signals.vessels.marks.nuc_marks', position: { bow: { x: 50, y: 41 }, starboard: { x: 40, y: 41 }, stern: { x: 50, y: 41 } } },
                ],
                explanation: "signals.vessels.rules.R27.states.nuc.explanation"
            },
            {
                title: 'signals.vessels.rules.R27.states.ram.title',
                description: 'signals.vessels.rules.R27.states.ram.description',
                svg: "power_gt50",
                lights: [
                    { id: 'ram-r1', color: 'red', desc: 'signals.vessels.lights.ram_lights', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 50, y: 20 } } },
                    { id: 'ram-w', color: 'white', desc: 'signals.vessels.lights.ram_lights', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
                    { id: 'ram-r2', color: 'red', desc: 'signals.vessels.lights.ram_lights', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 50, y: 36 } } },
                    {...PDV_LIGHTS[0], desc: "signals.vessels.lights.pdv_lights_making_way"},
                    {...PDV_LIGHTS[1], desc: ""},
                    {...PDV_LIGHTS[2], desc: ""},
                    {...PDV_LIGHTS[3], desc: ""},
                    {...PDV_LIGHTS[4], desc: ""},
                ],
                marks: [
                    { id: 'ram-b1', shape: 'ball', desc: 'signals.vessels.marks.ram_marks', position: { bow: { x: 50, y: 15 }, starboard: { x: 40, y: 15 }, stern: { x: 50, y: 15 } } },
                    { id: 'ram-d', shape: 'diamond', desc: 'signals.vessels.marks.ram_marks', position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
                    { id: 'ram-b2', shape: 'ball', desc: 'signals.vessels.marks.ram_marks', position: { bow: { x: 50, y: 41 }, starboard: { x: 40, y: 41 }, stern: { x: 50, y: 41 } } },
                ],
                explanation: "signals.vessels.rules.R27.states.ram.explanation"
            }
        ]
    },
    {
        id: 'R28',
        title: 'signals.vessels.rules.R28.title',
        description: 'signals.vessels.rules.R28.description',
        svg: "power_gt50",
        lights: [
            ...PDV_LIGHTS,
            { id: 'cbd-r1', color: 'red', desc: 'signals.vessels.lights.cbd_lights', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 55, y: 20 } } },
            { id: 'cbd-r2', color: 'red', desc: 'signals.vessels.lights.cbd_lights', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 55, y: 28 } } },
            { id: 'cbd-r3', color: 'red', desc: 'signals.vessels.lights.cbd_lights', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 55, y: 36 } } },
        ],
        marks: [
            { id: 'cylinder', shape: 'cylinder', desc: 'signals.vessels.marks.cylinder', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
        ],
        explanation: "signals.vessels.rules.R28.explanation"
    },
    {
        id: 'R30',
        title: 'signals.vessels.rules.R30.title',
        description: 'signals.vessels.rules.R30.description',
        states: [
            {
                title: 'signals.vessels.rules.R30.states.anchored.title',
                description: 'signals.vessels.rules.R30.states.anchored.description',
                svg: "power_gt50",
                lights: [
                    { id: 'anchor-fwd', color: 'white', desc: 'signals.vessels.lights.anchor_fwd', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 30 }, starboard: { x: 20, y: 30 }, stern: { x: 50, y: 30 } } },
                    { id: 'anchor-aft', color: 'white', desc: 'signals.vessels.lights.anchor_aft', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 40 }, starboard: { x: 85, y: 55 }, stern: { x: 50, y: 40 } } },
                ],
                marks: [
                    { id: 'ball', shape: 'ball', desc: 'signals.vessels.marks.ball', position: { bow: { x: 50, y: 25 }, starboard: { x: 20, y: 25 }, stern: { x: 50, y: 25 } } },
                ],
                explanation: "signals.vessels.rules.R30.states.anchored.explanation"
            },
            {
                title: 'signals.vessels.rules.R30.states.aground.title',
                description: 'signals.vessels.rules.R30.states.aground.description',
                svg: "power_gt50",
                lights: [
                    { id: 'anchor-fwd', color: 'white', desc: 'signals.vessels.lights.anchor_lights', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 30 }, starboard: { x: 20, y: 30 }, stern: { x: 50, y: 30 } } },
                    { id: 'anchor-aft', color: 'white', desc: 'signals.vessels.lights.anchor_lights', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 40 }, starboard: { x: 85, y: 55 }, stern: { x: 50, y: 40 } } },
                    { id: 'aground-r1', color: 'red', desc: 'signals.vessels.lights.aground_lights', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 50, y: 20 } } },
                    { id: 'aground-r2', color: 'red', desc: 'signals.vessels.lights.aground_lights', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
                ],
                marks: [
                    { id: 'aground-b1', shape: 'ball', desc: 'signals.vessels.marks.aground_marks', position: { bow: { x: 50, y: 15 }, starboard: { x: 40, y: 15 }, stern: { x: 50, y: 15 } } },
                    { id: 'aground-b2', shape: 'ball', desc: 'signals.vessels.marks.aground_marks', position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
                    { id: 'aground-b3', shape: 'ball', desc: 'signals.vessels.marks.aground_marks', position: { bow: { x: 50, y: 41 }, starboard: { x: 40, y: 41 }, stern: { x: 50, y: 41 } } },
                ],
                explanation: "signals.vessels.rules.R30.states.aground.explanation"
            },
        ]
    },
    {
        id: 'R29',
        title: 'signals.vessels.rules.R29.title',
        description: 'signals.vessels.rules.R29.description',
        svg: "power_lt50",
        lights: [
            { id: 'pilot-w', color: 'white', desc: 'signals.vessels.lights.pilot_w', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'pilot-r', color: 'red', desc: 'signals.vessels.lights.pilot_r', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
            { ...PDV_LIGHTS[2], desc: 'signals.vessels.lights.sidelights_navigating' },
            { ...PDV_LIGHTS[3], desc: 'signals.vessels.lights.sidelights_navigating' },
            { ...PDV_LIGHTS[4], desc: 'signals.vessels.lights.sternlight_navigating' },
        ],
        marks: [],
        explanation: "signals.vessels.rules.R29.explanation"
    },
];

export const SOUND_SIGNALS_DATA = [
    {
        "id": "maneuver_stbd",
        "title": "signals.sounds.maneuver_stbd.title",
        "description": "signals.sounds.maneuver_stbd.description",
        "signal": "signals.sounds.maneuver_stbd.signal",
        "sequence": ["short"],
        "rule": "Regla 34(a)"
    },
    {
        "id": "maneuver_port",
        "title": "signals.sounds.maneuver_port.title",
        "description": "signals.sounds.maneuver_port.description",
        "signal": "signals.sounds.maneuver_port.signal",
        "sequence": ["short", "short"],
        "rule": "Regla 34(a)"
    },
    {
        "id": "maneuver_astern",
        "title": "signals.sounds.maneuver_astern.title",
        "description": "signals.sounds.maneuver_astern.description",
        "signal": "signals.sounds.maneuver_astern.signal",
        "sequence": ["short", "short", "short"],
        "rule": "Regla 34(a)"
    },
    {
        "id": "overtake_stbd",
        "title": "signals.sounds.overtake_stbd.title",
        "description": "signals.sounds.overtake_stbd.description",
        "signal": "signals.sounds.overtake_stbd.signal",
        "sequence": ["long", "long", "short"],
        "rule": "Regla 34(c)"
    },
    {
        "id": "overtake_port",
        "title": "signals.sounds.overtake_port.title",
        "description": "signals.sounds.overtake_port.description",
        "signal": "signals.sounds.overtake_port.signal",
        "sequence": ["long", "long", "short", "short"],
        "rule": "Regla 34(c)"
    },
    {
        "id": "overtake_agree",
        "title": "signals.sounds.overtake_agree.title",
        "description": "signals.sounds.overtake_agree.description",
        "signal": "signals.sounds.overtake_agree.signal",
        "sequence": ["long", "short", "long", "short"],
        "rule": "Regla 34(c)"
    },
    {
        "id": "warning_doubt",
        "title": "signals.sounds.warning_doubt.title",
        "description": "signals.sounds.warning_doubt.description",
        "signal": "signals.sounds.warning_doubt.signal",
        "sequence": ["short", "short", "short", "short", "short"],
        "rule": "Regla 34(d)"
    },
    {
        "id": "warning_bend",
        "title": "signals.sounds.warning_bend.title",
        "description": "signals.sounds.warning_bend.description",
        "signal": "signals.sounds.warning_bend.signal",
        "sequence": ["long"],
        "rule": "Regla 34(e)"
    },
    {
        "id": "restricted_vis_power_making_way",
        "title": "signals.sounds.restricted_vis_power_making_way.title",
        "description": "signals.sounds.restricted_vis_power_making_way.description",
        "signal": "signals.sounds.restricted_vis_power_making_way.signal",
        "sequence": ["long"],
        "rule": "Regla 35(a)"
    },
    {
        "id": "restricted_vis_power_stopped",
        "title": "signals.sounds.restricted_vis_power_stopped.title",
        "description": "signals.sounds.restricted_vis_power_stopped.description",
        "signal": "signals.sounds.restricted_vis_power_stopped.signal",
        "sequence": ["long", "long"],
        "rule": "Regla 35(b)"
    },
    {
        "id": "restricted_vis_special",
        "title": "signals.sounds.restricted_vis_special.title",
        "description": "signals.sounds.restricted_vis_special.description",
        "signal": "signals.sounds.restricted_vis_special.signal",
        "sequence": ["long", "short", "short"],
        "rule": "Regla 35(c)"
    },
    {
        "id": "restricted_vis_towed",
        "title": "signals.sounds.restricted_vis_towed.title",
        "description": "signals.sounds.restricted_vis_towed.description",
        "signal": "signals.sounds.restricted_vis_towed.signal",
        "sequence": ["long", "short", "short", "short"],
        "rule": "Regla 35(e)"
    },
    {
        "id": "restricted_vis_anchored_lt100",
        "title": "signals.sounds.restricted_vis_anchored_lt100.title",
        "description": "signals.sounds.restricted_vis_anchored_lt100.description",
        "signal": "signals.sounds.restricted_vis_anchored_lt100.signal",
        "sequence": ["bell"],
        "rule": "Regla 35(g)"
    },
    {
        "id": "restricted_vis_anchored_gt100",
        "title": "signals.sounds.restricted_vis_anchored_gt100.title",
        "description": "signals.sounds.restricted_vis_anchored_gt100.description",
        "signal": "signals.sounds.restricted_vis_anchored_gt100.signal",
        "sequence": ["bell", "gong"],
        "rule": "Regla 35(g)"
    },
    {
        "id": "restricted_vis_aground",
        "title": "signals.sounds.restricted_vis_aground.title",
        "description": "signals.sounds.restricted_vis_aground.description",
        "signal": "signals.sounds.restricted_vis_aground.signal",
        "sequence": ["bell-stroke", "bell-stroke", "bell", "bell-stroke", "bell-stroke"],
        "rule": "Regla 35(h)"
    },
    {
        "id": "pilot",
        "title": "signals.sounds.pilot.title",
        "description": "signals.sounds.pilot.description",
        "signal": "signals.sounds.pilot.signal",
        "sequence": ["short", "short", "short", "short"],
        "rule": "Regla 35(k)"
    }
];
