// This file contains all the static data for the signals simulator.
// It uses hardcoded Spanish text.

export const LIGHT_TERMS: { [key: string]: string } = {
    "F": "Fija",
    "FL": "Destellos",
    "LFL": "Destellos Largos",
    "OC": "Ocultaciones",
    "ISO": "Isofase",
    "Q": "Destellos Rápidos",
    "VQ": "Destellos muy Rápidos",
    "IQ": "Destellos Rápidos Interrumpidos",
    "MO": "Código Morse",
    "AL": "Alternativa",
    "W": "Blanca",
    "R": "Roja",
    "G": "Verde",
    "Y": "Amarilla",
    "BU": "Azul",
    "VI": "Violeta"
};

export interface BuoyData {
    category: string;
    type: string;
    region?: string;
    shape: string;
    colors: string[];
    topmark: {
        shape: string;
        color: string;
    } | null;
    characteristic: string;
    purpose: string;
    mnemonic: string;
}

export const IALA_BUOY_DATA: BuoyData[] = [
    {
        "category": "Marcas Laterales",
        "type": "Babor",
        "region": "A",
        "shape": "can",
        "colors": ["red"],
        "topmark": { "shape": "can", "color": "red" },
        "characteristic": "Fl R 4s",
        "purpose": "Indica el lado de babor de un canal al venir de la mar.",
        "mnemonic": "Al entrar, verde a estribor (verde con verde), rojo a babor (rojo con rojo)."
    },
    {
        "category": "Marcas Laterales",
        "type": "Estribor",
        "region": "A",
        "shape": "conical",
        "colors": ["green"],
        "topmark": { "shape": "cone-up", "color": "green" },
        "characteristic": "Fl G 4s",
        "purpose": "Indica el lado de estribor de un canal al venir de la mar.",
        "mnemonic": "Al entrar, verde a estribor (verde con verde), rojo a babor (rojo con rojo)."
    },
    {
        "category": "Marcas Laterales",
        "type": "Babor",
        "region": "B",
        "shape": "can",
        "colors": ["green"],
        "topmark": { "shape": "can", "color": "green" },
        "characteristic": "Fl G 2.5s",
        "purpose": "Indica el lado de babor de un canal al venir de la mar.",
        "mnemonic": "Red Right Returning (Rojo a Estribor Regresando)."
    },
    {
        "category": "Marcas Laterales",
        "type": "Estribor",
        "region": "B",
        "shape": "conical",
        "colors": ["red"],
        "topmark": { "shape": "cone-up", "color": "red" },
        "characteristic": "Fl R 2.5s",
        "purpose": "Indica el lado de estribor de un canal al venir de la mar.",
        "mnemonic": "Red Right Returning (Rojo a Estribor Regresando)."
    },
    {
        "category": "Marcas Cardinales",
        "type": "Norte",
        "shape": "pillar",
        "colors": ["black", "yellow"],
        "topmark": { "shape": "cones-up", "color": "black" },
        "characteristic": "VQ W or Q W",
        "purpose": "Indica que las aguas seguras se encuentran al Norte.",
        "mnemonic": "Dos conos hacia arriba (Norte). Luz blanca de destellos continuos."
    },
    {
        "category": "Marcas Cardinales",
        "type": "Sur",
        "shape": "pillar",
        "colors": ["yellow", "black"],
        "topmark": { "shape": "cones-down", "color": "black" },
        "characteristic": "VQ(6)+LFl W 15s",
        "purpose": "Indica que las aguas seguras se encuentran al Sur.",
        "mnemonic": "Dos conos hacia abajo (Sur). 6 destellos + 1 largo."
    },
    {
        "category": "Marcas Cardinales",
        "type": "Este",
        "shape": "pillar",
        "colors": ["black", "yellow", "black"],
        "topmark": { "shape": "cones-base-base", "color": "black" },
        "characteristic": "VQ(3) W 5s",
        "purpose": "Indica que las aguas seguras se encuentran al Este.",
        "mnemonic": "Conos opuestos por la base (huevo de pascua). 3 destellos cada 5s."
    },
    {
        "category": "Marcas Cardinales",
        "type": "Oeste",
        "shape": "pillar",
        "colors": ["yellow", "black", "yellow"],
        "topmark": { "shape": "cones-vertex-together", "color": "black" },
        "characteristic": "VQ(9) W 10s",
        "purpose": "Indica que las aguas seguras se encuentran al Oeste.",
        "mnemonic": "Conos unidos por el vértice (copa de vino). 9 destellos cada 10s."
    },
    {
        "category": "Marcas Especiales",
        "type": "Peligro Aislado",
        "shape": "pillar",
        "colors": ["black", "red", "black"],
        "topmark": { "shape": "spheres-2", "color": "black" },
        "characteristic": "Fl(2) W 5s",
        "purpose": "Se fondea sobre un peligro de extensión reducida.",
        "mnemonic": "Dos esferas negras, dos destellos blancos."
    },
    {
        "category": "Marcas Especiales",
        "type": "Aguas Seguras",
        "shape": "spherical",
        "colors": ["red", "white"],
        "topmark": { "shape": "sphere", "color": "red" },
        "characteristic": "LFl W 10s or Mo(A) W",
        "purpose": "Indica aguas navegables alrededor de la marca, como la entrada a un canal.",
        "mnemonic": "Marca esférica con franjas verticales. Luz blanca isofase, de ocultaciones o destello largo."
    },
    {
        "category": "Marcas Especiales",
        "type": "Marca Especial",
        "shape": "any",
        "colors": ["yellow"],
        "topmark": { "shape": "cross", "color": "yellow" },
        "characteristic": "Fl Y 5s",
        "purpose": "Indica una zona o característica especial (zona militar, cable, tubería, ODAS).",
        "mnemonic": "Completamente amarilla, con una 'X' como marca de tope. Luz amarilla."
    }
];

const glowFilter = `<defs><filter id="ship-glow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="rgba(150, 180, 255, 0.3)" /></filter></defs>`;

export const VESSEL_SVGS: { [key: string]: { [key: string]: string } } = {
    power_gt50: { // Inspired by Container Ship
      side: `<svg viewBox="0 0 200 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 10)"><path d="M 5 60 L 195 60 L 195 55 C 190 55, 185 40, 175 40 L 165 40 L 165 30 L 155 30 L 155 40 L 45 40 L 45 35 L 25 35 L 25 40 L 15 40 C 5 40, 5 55, 5 55 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 5 60 L 195 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      front: `<svg viewBox="0 0 100 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 10)"><path d="M 10 60 L 90 60 L 90 55 C 85 40, 75 30, 65 30 L 35 30 C 25 30, 15 40, 10 55 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 10 60 L 90 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      back: `<svg viewBox="0 0 100 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 10)"><path d="M 10 60 L 90 60 L 90 30 L 10 30 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 10 60 L 90 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
    },
    power_lt50: { // Inspired by Big Yacht
      side: `<svg viewBox="0 0 200 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 5)"><path d="M 10 65 C 20 50, 190 55, 195 60 L 190 65 L 15 65 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 50 60 L 50 45 L 150 45 C 160 45, 160 55, 150 55 L 60 55 L 60 60 Z" fill="hsl(var(--muted-foreground))" stroke="currentColor" stroke-width="0.5" /><path d="M 65 40 L 130 40 L 125 45 L 70 45 Z" fill="hsl(var(--muted-foreground))" stroke="currentColor" stroke-width="0.5" /><path d="M 10 65 L 195 65" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      front: `<svg viewBox="0 0 100 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 5)"><path d="M 10 65 C 20 50, 80 50, 90 65 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 50 35 L 65 50 L 35 50 Z" fill="hsl(var(--muted-foreground))" stroke="currentColor" stroke-width="0.5"/><path d="M 30 50 H 70 V 65 H 30 Z" fill="hsl(var(--muted-foreground))" stroke-width="0.5"/><path d="M 10 65 L 90 65" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      back: `<svg viewBox="0 0 100 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 5)"><path d="M 10 65 C 20 50, 80 50, 90 65 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 20 45 H 80 V 65 H 20 Z" fill="hsl(var(--muted-foreground))" stroke="currentColor" stroke-width="0.5"/><path d="M 10 65 L 90 65" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
    },
    sailing: { // Inspired by Sailboat
      side: `<svg viewBox="0 0 200 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 5)"><path d="M 20 65 C 40 50, 160 50, 180 65 L 175 65 L 25 65 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 90 10 L 95 65 M 50 65 H 150" stroke="currentColor" stroke-width="1" /><path d="M 97 15 C 110 30, 110 50, 97 63" fill="#444" stroke="currentColor" stroke-width="0.5" /><path d="M 93 15 C 60 30, 70 63, 93 63" fill="hsl(var(--muted-foreground))" stroke="currentColor" stroke-width="0.5" /><path d="M 20 65 L 180 65" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      front: `<svg viewBox="0 0 100 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 5)"><path d="M 15 65 C 25 55, 75 55, 85 65 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 50 10 L 50 65" stroke="currentColor" stroke-width="1" /><path d="M 52 15 C 70 30, 65 63, 52 63" fill="#444" stroke="currentColor" /><path d="M 15 65 L 85 65" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      back: `<svg viewBox="0 0 100 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 5)"><path d="M 15 65 C 25 55, 75 55, 85 65 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 50 10 L 50 65" stroke="currentColor" stroke-width="1" /><path d="M 48 15 C 30 30, 35 63, 48 63" fill="#444" stroke="currentColor" /><path d="M 15 65 L 85 65" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
    },
    fishing: { // Inspired by Trawler
      side: `<svg viewBox="0 0 200 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 10)"><path d="M 10 60 L 190 60 L 190 55 C 180 55, 170 45, 150 45 L 110 45 L 110 30 L 60 30 L 60 45 L 30 45 C 20 45, 15 50, 10 55 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 140 45 L 120 20 M 115 20 H 145" stroke="currentColor" stroke-width="1" /><path d="M 10 60 L 190 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      front: `<svg viewBox="0 0 100 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 10)"><path d="M 10 60 C 10 45, 90 45, 90 60 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><rect x="30" y="30" width="40" height="30" fill="hsl(var(--muted-foreground))" stroke="currentColor" stroke-width="0.5" /><path d="M 10 60 L 90 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      back: `<svg viewBox="0 0 100 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 10)"><path d="M 10 60 C 10 45, 90 45, 90 60 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><rect x="30" y="30" width="40" height="30" fill="hsl(var(--muted-foreground))" stroke="currentColor" stroke-width="0.5" /><path d="M 10 60 L 90 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
    },
     tug: { // Inspired by Small Ferry/Tug
      side: `<svg viewBox="0 0 200 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 15)"><path d="M 20 55 L 180 55 L 180 45 L 140 45 L 140 30 L 60 30 L 60 45 L 20 45 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 20 55 L 180 55" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      front: `<svg viewBox="0 0 100 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 15)"><path d="M 20 55 L 80 55 L 80 30 L 20 30 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 20 55 L 80 55" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      back: `<svg viewBox="0 0 100 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 15)"><path d="M 20 55 L 80 55 L 80 30 L 20 30 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 20 55 L 80 55" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
    },
    power_lt12: { // Inspired by Speedboat
      side: `<svg viewBox="0 0 200 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 10)"><path d="M 30 60 C 40 50, 170 50, 180 60 L 170 60 L 40 60 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 70 50 L 140 50 L 130 60 L 80 60 Z" fill="hsl(var(--muted-foreground))" stroke="currentColor" stroke-width="0.5" /><path d="M 30 60 L 180 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      front: `<svg viewBox="0 0 100 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 10)"><path d="M 20 60 C 30 50, 70 50, 80 60 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 20 60 L 80 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
      back: `<svg viewBox="0 0 100 80" class="w-full h-full">${glowFilter}<g transform="translate(0, 10)"><path d="M 20 60 L 80 60 L 80 55 L 20 55 Z" stroke="currentColor" stroke-width="1" fill="currentColor" /><path d="M 20 60 L 80 60" stroke="currentColor" stroke-width="1.5" /></g></svg>`,
    },
}

const PDV_LIGHTS = [
    { id: 'masthead-fwd', color: 'white', desc: 'Luz de tope de proa', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 30 }, starboard: { x: 30, y: 30 }, stern: { x: 0, y: 0 } } },
    { id: 'masthead-aft', color: 'white', desc: 'Luz de tope de popa (si >50m)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 25 }, starboard: { x: 70, y: 25 }, stern: { x: 0, y: 0 } } },
    { id: 'sidelight-stbd', color: 'green', desc: 'Luz de costado de estribor', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 70, y: 58 }, starboard: { x: 50, y: 58 }, stern: { x: 0, y: 0 } } },
    { id: 'sidelight-port', color: 'red', desc: 'Luz de costado de babor', arc: { bow: true, starboard: false, stern: false }, position: { bow: { x: 30, y: 58 }, starboard: { x: 0, y: 0 }, stern: { x: 0, y: 0 } } },
    { id: 'sternlight', color: 'white', desc: 'Luz de alcance', arc: { bow: false, starboard: false, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 0, y: 0 }, stern: { x: 50, y: 55 } } },
];

export interface ColregRule {
  id: string;
  title: string;
  description: string;
  svg: string;
  lights: any[];
  marks: any[];
  explanation?: string;
  states?: any[];
}


export const COLREG_RULES_DATA: ColregRule[] = [
    {
        id: 'R23',
        title: 'Buque de propulsión mecánica en navegación',
        description: 'Regla 23: Buques de propulsión mecánica en navegación.',
        svg: "power_gt50",
        lights: [
            {...PDV_LIGHTS[0]},
            {...PDV_LIGHTS[1]},
            {...PDV_LIGHTS[2]},
            {...PDV_LIGHTS[3]},
            {...PDV_LIGHTS[4]},
        ],
        marks: [],
        explanation: "Un buque de propulsión mecánica de eslora > 50m debe mostrar: una luz de tope a proa, una segunda luz de tope a popa y más alta, luces de costado y una luz de alcance. Si es < 50m, no está obligado a exhibir la segunda luz de tope."
    },
    {
        id: 'R25',
        title: 'Buque de vela o a remo en navegación',
        description: 'Regla 25: Buques de vela en navegación y embarcaciones de remo.',
        svg: "sailing",
        lights: [
            PDV_LIGHTS[2], PDV_LIGHTS[3], PDV_LIGHTS[4]
        ],
        marks: [
            { id: 'cone-sailing-motor', shape: 'cone-down', desc: 'Si es un velero propulsado a motor, un cono con el vértice hacia abajo.', position: { bow: { x: 50, y: 25 }, starboard: { x: 50, y: 25 }, stern: { x: 50, y: 25 } } },
        ],
        explanation: "Un buque de vela en navegación exhibirá luces de costado y una luz de alcance. Opcionalmente, puede exhibir en el tope del mástil dos luces todo horizonte (roja sobre verde). Si navega a motor, se considera buque de propulsión mecánica y debe mostrar las luces correspondientes, además de la marca diurna (cono)."
    },
    {
        id: 'R24',
        title: 'Buque remolcando y empujando',
        description: 'Regla 24: Buques remolcando y empujando.',
        states: [
            {
                title: 'Remolque > 200m',
                description: 'Buque remolcador con longitud de remolque > 200m.',
                svg: "tug",
                lights: [
                    { ...PDV_LIGHTS[0], desc: 'Primera luz de tope', position: { bow: { x: 50, y: 30 }, starboard: { x: 30, y: 30 } } },
                    { id: 'masthead-2', color: 'white', desc: 'Segunda luz de tope', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 37 }, starboard: { x: 30, y: 37 } } },
                    { id: 'masthead-3', color: 'white', desc: 'Tercera luz de tope', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 44 }, starboard: { x: 30, y: 44 } } },
                    PDV_LIGHTS[2], PDV_LIGHTS[3],
                    { ...PDV_LIGHTS[4], position: { stern: {x:50, y: 40} } }, // Sternlight
                    { id: 'towing-light', color: 'yellow', desc: 'Luz de remolque', arc: { bow: false, starboard: false, stern: true }, position: { stern: { x: 50, y: 35 } } },
                ],
                marks: [ { id: 'diamond-tow', shape: 'diamond', desc: 'Marca bicónica en el remolcador y el remolcado', position: { bow: { x: 50, y: 25 }, starboard: { x: 50, y: 25 }, stern: { x: 50, y: 25 } } } ],
                explanation: "Tres luces de tope en línea vertical. Si la longitud del remolque (desde la popa del remolcador hasta el final del remolcado) es superior a 200m, se exhibe esta configuración. También debe mostrar luces de costado, luz de alcance y una luz de remolque (amarilla) por encima de la de alcance."
            },
            {
                title: 'Remolque < 200m',
                description: 'Buque remolcador con longitud de remolque < 200m.',
                svg: "tug",
                lights: [
                    { ...PDV_LIGHTS[0], desc: 'Primera luz de tope', position: { bow: { x: 50, y: 30 }, starboard: { x: 30, y: 30 } } },
                    { id: 'masthead-2', color: 'white', desc: 'Segunda luz de tope', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 37 }, starboard: { x: 30, y: 37 } } },
                    PDV_LIGHTS[2], PDV_LIGHTS[3],
                    { ...PDV_LIGHTS[4], position: { stern: {x:50, y: 40} } },
                    { id: 'towing-light', color: 'yellow', desc: 'Luz de remolque', arc: { bow: false, starboard: false, stern: true }, position: { stern: { x: 50, y: 35 } } },
                ],
                marks: [ ],
                explanation: "Dos luces de tope en línea vertical. Si la longitud del remolque es inferior a 200m, no lleva la tercera luz de tope ni la marca bicónica."
            },
            {
                title: 'Empujando o remolcando abarloado',
                description: 'Buque que empuja o remolca abarloado.',
                svg: "tug",
                lights: [
                    { ...PDV_LIGHTS[0], desc: 'Primera luz de tope' },
                    { ...PDV_LIGHTS[1], desc: 'Segunda luz de tope' },
                    PDV_LIGHTS[2], PDV_LIGHTS[3], PDV_LIGHTS[4]
                ],
                marks: [ ],
                explanation: "Cuando un buque empuja hacia proa o remolca abarloado a otro, se considera como un solo buque de propulsión mecánica y exhibe dos luces de tope."
            }
        ]
    },
    {
        id: 'R26',
        title: 'Buques de pesca',
        description: 'Regla 26: Buques de Pesca.',
        states: [
            {
                title: 'Pesca de arrastre',
                description: 'Buque dedicado a la pesca de arrastre.',
                svg: "fishing",
                lights: [
                    { id: 'trawl-g', color: 'green', desc: 'Luz verde todo horizonte', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                    { id: 'trawl-w', color: 'white', desc: 'Luz blanca todo horizonte (debajo)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
                    { ...PDV_LIGHTS[2], desc: 'Luces de costado y alcance si lleva arrancada' },
                    { ...PDV_LIGHTS[3], desc: '' },
                    { ...PDV_LIGHTS[4], desc: '' },
                ],
                marks: [
                    { id: 'trawl-mark', shape: 'cones-vertex-together', desc: 'Dos conos unidos por el vértice', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                ],
                explanation: "Muestra una luz verde todo horizonte sobre una luz blanca todo horizonte. Si tiene arrancada, también luces de costado y de alcance. La marca diurna son dos conos unidos por el vértice."
            },
            {
                title: 'Pesca (excepto arrastre)',
                description: 'Buque dedicado a la pesca, excepto arrastre.',
                svg: "fishing",
                lights: [
                    { id: 'fish-r', color: 'red', desc: 'Luz roja todo horizonte', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                    { id: 'fish-w', color: 'white', desc: 'Luz blanca todo horizonte (debajo)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
                     { ...PDV_LIGHTS[2], desc: 'Luces de costado y alcance si lleva arrancada' },
                    { ...PDV_LIGHTS[3], desc: '' },
                    { ...PDV_LIGHTS[4], desc: '' },
                ],
                marks: [
                    { id: 'trawl-mark', shape: 'cones-vertex-together', desc: 'Dos conos unidos por el vértice', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                ],
                explanation: "Muestra una luz roja todo horizonte sobre una luz blanca todo horizonte. Si el aparejo se extiende más de 150m horizontalmente, una luz blanca en la dirección del aparejo. Con arrancada, luces de costado y alcance."
            }
        ]
    },
     {
        id: 'R27',
        title: 'Buques sin gobierno o con maniobra restringida',
        description: 'Regla 27: Buques sin gobierno o con capacidad de maniobra restringida.',
        states: [
            {
                title: 'Sin gobierno',
                description: 'Buque sin gobierno (NUC).',
                svg: "power_gt50",
                lights: [
                    { id: 'nuc-r1', color: 'red', desc: 'Dos luces rojas todo horizonte en línea vertical.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
                    { id: 'nuc-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 50, y: 36 } } },
                    {...PDV_LIGHTS[2], desc: "Con arrancada, muestra luces de costado y alcance."},
                    {...PDV_LIGHTS[3], desc: ""},
                    {...PDV_LIGHTS[4], desc: ""},
                ],
                marks: [
                    { id: 'nuc-b1', shape: 'ball', desc: 'Dos bolas negras en línea vertical.', position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
                    { id: 'nuc-b2', shape: 'ball', desc: '', position: { bow: { x: 50, y: 41 }, starboard: { x: 40, y: 41 }, stern: { x: 50, y: 41 } } },
                ],
                explanation: "Un buque sin gobierno no puede maniobrar. Muestra dos luces rojas todo horizonte en vertical por la noche, y dos bolas negras en vertical de día."
            },
            {
                title: 'Maniobra restringida',
                description: 'Buque con capacidad de maniobra restringida (RAM).',
                svg: "power_gt50",
                lights: [
                    { id: 'ram-r1', color: 'red', desc: 'Roja-Blanca-Roja todo horizonte en línea vertical.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 50, y: 20 } } },
                    { id: 'ram-w', color: 'white', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
                    { id: 'ram-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 50, y: 36 } } },
                    {...PDV_LIGHTS[0], desc: "Con arrancada, muestra luces de tope, de costado y de alcance."},
                    {...PDV_LIGHTS[1], desc: ""},
                    {...PDV_LIGHTS[2], desc: ""},
                    {...PDV_LIGHTS[3], desc: ""},
                    {...PDV_LIGHTS[4], desc: ""},
                ],
                marks: [
                    { id: 'ram-b1', shape: 'ball', desc: 'Bola-Bicono-Bola en línea vertical.', position: { bow: { x: 50, y: 15 }, starboard: { x: 40, y: 15 }, stern: { x: 50, y: 15 } } },
                    { id: 'ram-d', shape: 'diamond', desc: '', position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
                    { id: 'ram-b2', shape: 'ball', desc: '', position: { bow: { x: 50, y: 41 }, starboard: { x: 40, y: 41 }, stern: { x: 50, y: 41 } } },
                ],
                explanation: "Debido a su trabajo (dragado, buceo, etc.) no puede maniobrar. Muestra las luces/marcas Roja-Blanca-Roja / Bola-Bicono-Bola. Si hay obstrucción, muestra dos luces/bolas rojas en el lado obstruido."
            }
        ]
    },
    {
        id: 'R28',
        title: 'Buque restringido por su calado',
        description: 'Regla 28: Buques de propulsión mecánica restringidos por su calado.',
        svg: "power_gt50",
        lights: [
            ...PDV_LIGHTS,
            { id: 'cbd-r1', color: 'red', desc: 'Tres luces rojas todo horizonte en línea vertical.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 55, y: 20 } } },
            { id: 'cbd-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 55, y: 28 } } },
            { id: 'cbd-r3', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 55, y: 36 } } },
        ],
        marks: [
            { id: 'cylinder', shape: 'cylinder', desc: 'Un cilindro negro.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
        ],
        explanation: "Además de las luces normales de un buque de propulsión mecánica, mostrará tres luces rojas todo horizonte en línea vertical, o un cilindro como marca diurna."
    },
    {
        id: 'R30',
        title: 'Buque fondeado y varado',
        description: 'Regla 30: Buques fondeados y buques varados.',
        states: [
            {
                title: 'Fondeado',
                description: 'Buque fondeado.',
                svg: "power_gt50",
                lights: [
                    { id: 'anchor-fwd', color: 'white', desc: 'Luz blanca todo horizonte a proa.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 30 }, starboard: { x: 20, y: 30 }, stern: { x: 50, y: 30 } } },
                    { id: 'anchor-aft', color: 'white', desc: 'Luz blanca todo horizonte a popa (si >50m).', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 40 }, starboard: { x: 85, y: 55 }, stern: { x: 50, y: 40 } } },
                ],
                marks: [
                    { id: 'ball', shape: 'ball', desc: 'Una bola negra a proa.', position: { bow: { x: 50, y: 25 }, starboard: { x: 20, y: 25 }, stern: { x: 50, y: 25 } } },
                ],
                explanation: "Un buque fondeado muestra una luz blanca todo horizonte a proa y, si su eslora es >= 50m, otra a popa y más baja. La marca diurna es una bola negra a proa."
            },
            {
                title: 'Varado',
                description: 'Buque varado.',
                svg: "power_gt50",
                lights: [
                    { id: 'anchor-fwd', color: 'white', desc: 'Las dos luces de fondeo.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 30 }, starboard: { x: 20, y: 30 }, stern: { x: 50, y: 30 } } },
                    { id: 'anchor-aft', color: 'white', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 40 }, starboard: { x: 85, y: 55 }, stern: { x: 50, y: 40 } } },
                    { id: 'aground-r1', color: 'red', desc: 'Dos luces rojas todo horizonte en vertical.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 50, y: 20 } } },
                    { id: 'aground-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
                ],
                marks: [
                    { id: 'aground-b1', shape: 'ball', desc: 'Tres bolas negras en línea vertical.', position: { bow: { x: 50, y: 15 }, starboard: { x: 40, y: 15 }, stern: { x: 50, y: 15 } } },
                    { id: 'aground-b2', shape: 'ball', desc: '', position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
                    { id: 'aground-b3', shape: 'ball', desc: '', position: { bow: { x: 50, y: 41 }, starboard: { x: 40, y: 41 }, stern: { x: 50, y: 41 } } },
                ],
                explanation: "Un buque varado muestra las luces de fondeo y, además, dos luces rojas todo horizonte en vertical. De día, tres bolas negras en vertical."
            },
        ]
    },
    {
        id: 'R29',
        title: 'Buque de practicaje',
        description: 'Regla 29: Buques de Practicaje.',
        svg: "power_lt50",
        lights: [
            { id: 'pilot-w', color: 'white', desc: 'Luz blanca todo horizonte', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'pilot-r', color: 'red', desc: 'Luz roja todo horizonte (debajo)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
            { ...PDV_LIGHTS[2], desc: 'Si está en navegación, luces de costado y alcance.' },
            { ...PDV_LIGHTS[3], desc: '' },
            { ...PDV_LIGHTS[4], desc: '' },
        ],
        marks: [],
        explanation: "Los buques en servicio de practicaje exhibirán en el tope del mástil una luz blanca todo horizonte sobre una luz roja todo horizonte. Cuando están en navegación, exhibirán además las luces de costado y de alcance."
    },
];

export interface SoundSignal {
  id: string;
  title: string;
  description: string;
  signal: string;
  sequence: string[];
  rule: string;
}

export const SOUND_SIGNALS_DATA: SoundSignal[] = [
    {
        "id": "maneuver_stbd",
        "title": "Maniobra a Estribor",
        "description": "Un buque de propulsión mecánica en navegación, cuando maniobra estando a la vista de otro.",
        "signal": "● (Una pitada corta)",
        "sequence": ["short"],
        "rule": "Regla 34(a)"
    },
    {
        "id": "maneuver_port",
        "title": "Maniobra a Babor",
        "description": "Un buque de propulsión mecánica en navegación, cuando maniobra estando a la vista de otro.",
        "signal": "● ● (Dos pitadas cortas)",
        "sequence": ["short", "short"],
        "rule": "Regla 34(a)"
    },
    {
        "id": "maneuver_astern",
        "title": "Dando Atrás",
        "description": "Un buque de propulsión mecánica en navegación, cuando sus máquinas dan atrás.",
        "signal": "● ● ● (Tres pitadas cortas)",
        "sequence": ["short", "short", "short"],
        "rule": "Regla 34(a)"
    },
    {
        "id": "overtake_stbd",
        "title": "Adelanto por Estribor",
        "description": "Intención de adelantar a otro buque por su banda de estribor.",
        "signal": "▬ ▬ ● (Dos largas y una corta)",
        "sequence": ["long", "long", "short"],
        "rule": "Regla 34(c)"
    },
    {
        "id": "overtake_port",
        "title": "Adelanto por Babor",
        "description": "Intención de adelantar a otro buque por su banda de babor.",
        "signal": "▬ ▬ ● ● (Dos largas y dos cortas)",
        "sequence": ["long", "long", "short", "short"],
        "rule": "Regla 34(c)"
    },
    {
        "id": "overtake_agree",
        "title": "Conformidad al Adelantamiento",
        "description": "Respuesta del buque que va a ser adelantado, si está de acuerdo.",
        "signal": "▬ ● ▬ ● (Larga, corta, larga, corta)",
        "sequence": ["long", "short", "long", "short"],
        "rule": "Regla 34(c)"
    },
    {
        "id": "warning_doubt",
        "title": "Señal de Duda / Advertencia",
        "description": "Cuando un buque no comprende las intenciones del otro, o duda de si el otro está tomando la acción debida.",
        "signal": "● ● ● ● ● (Cinco o más pitadas cortas)",
        "sequence": ["short", "short", "short", "short", "short"],
        "rule": "Regla 34(d)"
    },
    {
        "id": "warning_bend",
        "title": "Advertencia en Recodo",
        "description": "Buque acercándose a un recodo o zona de un canal donde otros buques pueden quedar ocultos.",
        "signal": "▬ (Una pitada larga)",
        "sequence": ["long"],
        "rule": "Regla 34(e)"
    },
    {
        "id": "restricted_vis_power_making_way",
        "title": "Buque de P.M. con arrancada",
        "description": "Visibilidad reducida. Buque de propulsión mecánica con arrancada.",
        "signal": "▬ (Una pitada larga a intervalos <= 2 min)",
        "sequence": ["long"],
        "rule": "Regla 35(a)"
    },
    {
        "id": "restricted_vis_power_stopped",
        "title": "Buque de P.M. parado",
        "description": "Visibilidad reducida. Buque de propulsión mecánica parado y sin arrancada.",
        "signal": "▬ ▬ (Dos pitadas largas a intervalos <= 2 min)",
        "sequence": ["long", "long"],
        "rule": "Regla 35(b)"
    },
    {
        "id": "restricted_vis_special",
        "title": "Buque especial (Vela, Pesca, NUC, RAM...)",
        "description": "Visibilidad reducida. Buques sin gobierno, con maniobra restringida, restringido por su calado, de vela, de pesca o remolcador.",
        "signal": "▬ ● ● (Una larga y dos cortas a intervalos <= 2 min)",
        "sequence": ["long", "short", "short"],
        "rule": "Regla 35(c)"
    },
    {
        "id": "restricted_vis_towed",
        "title": "Buque remolcado (si hay tripulación)",
        "description": "Visibilidad reducida. Último buque de un remolque, si va tripulado.",
        "signal": "▬ ● ● ● (Una larga y tres cortas a intervalos <= 2 min)",
        "sequence": ["long", "short", "short", "short"],
        "rule": "Regla 35(e)"
    },
    {
        "id": "restricted_vis_anchored_lt100",
        "title": "Fondeado (< 100m)",
        "description": "Visibilidad reducida. Buque fondeado, eslora inferior a 100m.",
        "signal": "🔔 (Campanadas rápidas por 5s a intervalos <= 1 min)",
        "sequence": ["bell"],
        "rule": "Regla 35(g)"
    },
    {
        "id": "restricted_vis_anchored_gt100",
        "title": "Fondeado (> 100m)",
        "description": "Visibilidad reducida. Buque fondeado, eslora igual o superior a 100m.",
        "signal": "🔔 (Proa) + 🔔🔔🔔 (Popa) (Campanadas + Gong a intervalos <= 1 min)",
        "sequence": ["bell", "gong"],
        "rule": "Regla 35(g)"
    },
    {
        "id": "restricted_vis_aground",
        "title": "Varado",
        "description": "Visibilidad reducida. Buque varado.",
        "signal": "●● 🔔 ●● (Dos golpes de campana, campanada, dos golpes)",
        "sequence": ["bell-stroke", "bell-stroke", "bell", "bell-stroke", "bell-stroke"],
        "rule": "Regla 35(h)"
    },
    {
        "id": "pilot",
        "title": "Buque de Práctico",
        "description": "Buque en servicio de practicaje.",
        "signal": "● ● ● ● (Cuatro pitadas cortas)",
        "sequence": ["short", "short", "short", "short"],
        "rule": "Regla 35(k)"
    }
];
