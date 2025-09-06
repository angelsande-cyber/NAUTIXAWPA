// COLREG rules for vessel lights and shapes simulator.
// Note: Positions are simplified for a 2D representation.

const commonSVG = {
    power_gt50: { 
        side: <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 5 50 L 5 40 C 5 35, 10 35, 15 35 L 155 35 L 195 35 L 195 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 20 35 L 20 25 L 50 25 L 50 35 M 160 35 L 160 20 L 185 20 L 185 35 M 60 32 L 150 32 L 150 28 L 60 28 Z" fill="hsl(var(--card))" strokeWidth="1" /><path d="M 5 50 L 195 50" strokeWidth="2" /></svg>,
        front: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 10 30, 90 30, 90 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 30 20 L 70 20 L 70 50 L 30 50 Z" fill="hsl(var(--card))" strokeWidth="1" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
        back: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 10 30, 90 30, 90 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 30 20 L 70 20 L 70 50 L 30 50 Z" fill="hsl(var(--card))" strokeWidth="1" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
    },
    power_lt50: {
        side: <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 L 10 45 C 20 35, 150 35, 190 48 L 190 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 50 42 C 60 30, 100 30, 120 42 L 110 48 L 60 48 Z" fill="hsl(var(--card))" strokeWidth="1.5"/><path d="M 10 50 L 190 50" strokeWidth="2" /></svg>,
        front: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 20 30, 80 30, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 40 48 L 60 48 C 70 35, 30 35, 40 48 Z" fill="hsl(var(--card))" strokeWidth="1.5"/><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
        back: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 20 30, 80 30, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 30 48 L 70 48 L 70 40 C 60 35, 40 35, 30 40 Z" fill="hsl(var(--card))" strokeWidth="1.5"/><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
    },
    sailing: {
        side: <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 20 40, 180 40, 190 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 90 10 L 90 48 M 50 48 L 130 48" strokeWidth="1.5"/><path d="M 92 12 C 140 25, 130 45, 92 46" fill="hsl(var(--muted-foreground)/.2)" strokeWidth="1"/><path d="M 10 50 L 190 50" strokeWidth="2" /></svg>,
        front: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 40 40, 60 40, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 50 10 L 50 48" strokeWidth="1.5"/><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
        back: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 40 40, 60 40, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 50 10 L 50 48" strokeWidth="1.5"/><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>
    },
    fishing: {
        side: <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 L 10 40 C 10 30, 20 30, 30 30 L 190 30 L 190 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 30 30 L 30 15 L 70 15 L 70 30" fill="hsl(var(--card))" strokeWidth="1"/><path d="M 150 15 L 150 48 M 140 15 L 160 15" strokeWidth="1.5"/><path d="M 10 50 L 190 50" strokeWidth="2" /></svg>,
        front: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 10 35, 90 35, 90 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 35 20 L 65 20 L 65 50 L 35 50 Z" fill="hsl(var(--card))" strokeWidth="1.5" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
        back: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 10 35, 90 35, 90 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 35 20 L 65 20 L 65 50 L 35 50 Z" fill="hsl(var(--card))" strokeWidth="1.5" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
    },
     tug: {
        side: <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 45 C 5 30, 150 30, 150 40 L 170 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 50 30 L 50 15 L 80 15 L 80 30 Z" fill="hsl(var(--card))" strokeWidth="1.5"/><path d="M 10 50 L 170 50" strokeWidth="2" /></svg>,
        front: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 10 35, 90 35, 90 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 40 30 L 40 15 L 60 15 L 60 30 Z" fill="hsl(var(--card))" strokeWidth="1.5" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
        back: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 L 90 50 L 90 40 C 80 35, 20 35, 10 40 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 30 30 L 30 15 L 70 15 L 70 30 Z" fill="hsl(var(--card))" strokeWidth="1.5" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
    }
}

const PDV_LIGHTS = [
    { id: 'masthead-fwd', color: 'white', desc: 'Luz de tope de proa (225°)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 25 }, starboard: { x: 30, y: 25 }, stern: { x: 0, y: 0 } } },
    { id: 'masthead-aft', color: 'white', desc: 'Luz de tope de popa (225°)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 20 }, starboard: { x: 70, y: 20 }, stern: { x: 0, y: 0 } } },
    { id: 'sidelight-stbd', color: 'green', desc: 'Luz de costado de estribor (112.5°)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 80, y: 50 }, starboard: { x: 50, y: 50 }, stern: { x: 0, y: 0 } } },
    { id: 'sidelight-port', color: 'red', desc: 'Luz de costado de babor (112.5°)', arc: { bow: true, starboard: false, stern: false }, position: { bow: { x: 20, y: 50 }, starboard: { x: 0, y: 0 }, stern: { x: 0, y: 0 } } },
    { id: 'sternlight', color: 'white', desc: 'Luz de alcance (135°)', arc: { bow: false, starboard: false, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 95, y: 45 }, stern: { x: 50, y: 45 } } },
];

export const COLREG_RULES_DATA = [
    {
        id: 'R23',
        title: 'Buque de Propulsión Mecánica',
        description: 'Buque de P.M. en navegación.',
        svg: commonSVG.power_gt50,
        lights: PDV_LIGHTS,
        marks: [],
        explanation: "Un buque de propulsión mecánica (P.M.) en navegación exhibirá una luz de tope en proa (dos si >50m, la de popa más alta), luces de costado y una luz de alcance.\n\nExcepciones:\n- <50m: La segunda luz de tope es opcional.\n- <12m: Puede exhibir una luz blanca todo horizonte y luces de costado.\n- <7m y vel. max <7kn: Puede exhibir una luz blanca todo horizonte.\n- Aerodeslizadores añaden una luz amarilla centelleante todo horizonte."
    },
    {
        id: 'R24',
        title: 'Remolque y Empuje',
        description: 'Remolcando por la popa.',
        svg: commonSVG.tug,
        lights: [
            { ...PDV_LIGHTS[0], desc: 'Luz de tope #1 (vertical)', position: { bow: { x: 50, y: 25 }, starboard: { x: 30, y: 25 }, stern: { x: 0, y: 0 } } },
            { id: 'masthead-2', color: 'white', desc: 'Luz de tope #2 (vertical)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 32 }, starboard: { x: 30, y: 32 }, stern: { x: 0, y: 0 } } },
            PDV_LIGHTS[2], PDV_LIGHTS[3],
            { id: 'towing-light', color: 'yellow', desc: 'Luz de remolque (135°)', arc: { bow: false, starboard: false, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 95, y: 45 }, stern: { x: 50, y: 45 } } },
        ],
        marks: [
             { id: 'diamond-tow', shape: 'diamond', desc: 'Una marca bicónica si el remolque supera los 200m.', position: { bow: { x: 50, y: 25 }, starboard: { x: 50, y: 25 }, stern: { x: 50, y: 25 } } },
        ],
        explanation: "Un buque remolcando exhibe dos luces de tope en línea vertical (tres si el remolque >200m), luces de costado y una luz de remolque (amarilla) por encima de la luz de alcance. El buque remolcado exhibe luces de costado y de alcance.\n\nSi empuja o remolca abarloado, exhibe dos luces de tope, luces de costado y de alcance (no la de remolque). Si forman una unidad compacta, se consideran un solo buque de P.M.\n\nDe día, si el remolque >200m, tanto el remolcador como el remolcado exhibirán una marca bicónica."
    },
    {
        id: 'R25',
        title: 'Buque de Vela',
        description: 'Un buque de vela navegando.',
        svg: commonSVG.sailing,
        lights: [
            PDV_LIGHTS[2], PDV_LIGHTS[3], PDV_LIGHTS[4]
        ],
        marks: [
            { id: 'cone-sailing-motor', shape: 'cone-down', desc: 'Marca cónica (si navega a motor).', position: { bow: { x: 50, y: 25 }, starboard: { x: 50, y: 25 }, stern: { x: 50, y: 25 } } },
        ],
        explanation: "Debe exhibir luces de costado y luz de alcance. \n\nOpcionalmente puede llevar dos luces todo horizonte en el tope del palo (roja sobre verde).\n\nSi navega a motor, se considera buque de P.M. y debe exhibir de día una marca cónica con el vértice hacia abajo."
    },
    {
        id: 'R26',
        title: 'Buque de Pesca',
        description: 'Dedicado a la pesca de arrastre.',
        svg: commonSVG.fishing,
        lights: [
            { id: 'trawl-g', color: 'green', desc: 'Luz verde todo horizonte (Arrastre)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'trawl-w', color: 'white', desc: 'Luz blanca todo horizonte (debajo)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
            { ...PDV_LIGHTS[2], desc: 'Luces de costado (con arrancada)' },
            { ...PDV_LIGHTS[3], desc: 'Luces de costado (con arrancada)' },
            { ...PDV_LIGHTS[4], desc: 'Luz de alcance (con arrancada)' },
        ],
        marks: [
            { id: 'trawl-mark', shape: 'bicone-point-together', desc: 'Dos conos unidos por sus vértices.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
        ],
        explanation: "Pesca de Arrastre: Dos luces todo horizonte en vertical (verde sobre blanca). De día, dos conos unidos por el vértice.\n\nOtro tipo de Pesca: Dos luces todo horizonte en vertical (roja sobre blanca).\n\nAmbos tipos, si tienen arrancada, añaden luces de costado y de alcance. Si el aparejo se extiende >150m, se añade una luz blanca o un cono en la dirección del mismo."
    },
    {
        id: 'R27',
        title: 'Sin Gobierno / Maniobra Restringida',
        description: 'Buque con capacidad de maniobra restringida.',
        svg: commonSVG.power_gt50,
        lights: [
            { id: 'ram-r1', color: 'red', desc: 'Roja-Blanca-Roja todo horizonte en vertical.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 50, y: 20 } } },
            { id: 'ram-w', color: 'white', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
            { id: 'ram-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 50, y: 36 } } },
            {...PDV_LIGHTS[0], desc: "Luces de P.M. (solo si tiene arrancada)"},
            {...PDV_LIGHTS[1], desc: "Luces de P.M. (solo si tiene arrancada)"},
            {...PDV_LIGHTS[2], desc: "Luces de P.M. (solo si tiene arrancada)"},
            {...PDV_LIGHTS[3], desc: "Luces de P.M. (solo si tiene arrancada)"},
            {...PDV_LIGHTS[4], desc: "Luces de P.M. (solo si tiene arrancada)"},
        ],
        marks: [
            { id: 'ram-b1', shape: 'ball', desc: 'Bola-Bicónica-Bola en vertical.', position: { bow: { x: 50, y: 15 }, starboard: { x: 40, y: 15 }, stern: { x: 50, y: 15 } } },
            { id: 'ram-d', shape: 'diamond', desc: '', position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
            { id: 'ram-b2', shape: 'ball', desc: '', position: { bow: { x: 50, y: 41 }, starboard: { x: 40, y: 41 }, stern: { x: 50, y: 41 } } },
        ],
        explanation: "Maniobra Restringida (dragado, buceo, etc.): Exhibe las señales mostradas (roja-blanca-roja). Si tiene arrancada, añade luces de P.M. (tope, costado, alcance).\n\nSin Gobierno: Exhibe dos luces rojas todo horizonte en vertical y, de día, dos bolas. Si tiene arrancada, añade luces de costado y de alcance (pero no de tope)."
    },
    {
        id: 'R28',
        title: 'Restringido por Calado',
        description: 'Buque con navegación restringida por su calado.',
        svg: commonSVG.power_gt50,
        lights: [
            ...PDV_LIGHTS,
            { id: 'cbd-r1', color: 'red', desc: 'Tres luces rojas todo horizonte en vertical.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 55, y: 20 } } },
            { id: 'cbd-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 55, y: 28 } } },
            { id: 'cbd-r3', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 55, y: 36 } } },
        ],
        marks: [
            { id: 'cylinder', shape: 'cylinder', desc: 'Un cilindro.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
        ],
        explanation: "Un buque restringido por su calado (CBD), además de las luces de un buque de P.M., puede exhibir tres luces rojas todo horizonte en línea vertical o, de día, un cilindro."
    },
    {
        id: 'R30',
        title: 'Fondeado / Varado',
        description: 'Buque fondeado.',
        svg: commonSVG.power_gt50,
        lights: [
            { id: 'anchor-fwd', color: 'white', desc: 'Luz de fondeo todo horizonte en proa.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 20, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'anchor-aft', color: 'white', desc: 'Luz de fondeo todo horizonte en popa (más baja, si >50m).', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 40 }, starboard: { x: 85, y: 40 }, stern: { x: 50, y: 40 } } },
        ],
        marks: [
            { id: 'ball', shape: 'ball', desc: 'Una bola en la proa.', position: { bow: { x: 50, y: 25 }, starboard: { x: 20, y: 25 }, stern: { x: 50, y: 25 } } },
        ],
        explanation: "Fondeado: Exhibe una luz blanca todo horizonte (dos si >= 50m). De día, una bola en proa.\n\nVarado: Exhibe las luces de fondeo y, además, dos luces rojas todo horizonte en vertical. De día, tres bolas en línea vertical."
    },
    {
        id: 'R29',
        title: 'Buque de Práctico',
        description: 'Buque en servicio de practicaje.',
        svg: commonSVG.power_lt50,
        lights: [
            { id: 'pilot-w', color: 'white', desc: 'Luz blanca todo horizonte.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'pilot-r', color: 'red', desc: 'Luz roja todo horizonte (debajo).', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
            { ...PDV_LIGHTS[2], desc: 'Luces de costado (si navega).' },
            { ...PDV_LIGHTS[3], desc: 'Luces de costado (si navega).' },
            { ...PDV_LIGHTS[4], desc: 'Luz de alcance (si navega).' },
        ],
        marks: [],
        explanation: "Exhibe dos luces todo horizonte en vertical: blanca sobre roja. Si está en navegación, muestra además las luces de costado y de alcance. Si está fondeado, muestra las luces de fondeo además de las de práctico."
    },
];
